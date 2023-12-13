import gulp from 'gulp';
import path from 'path';
import browserSync from 'browser-sync';
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import uglify from 'gulp-uglifyjs';
import cssnano from 'gulp-cssnano';
import rename from 'gulp-rename';
import del from 'del';
import pngquant from 'imagemin-pngquant';
import cache from 'gulp-cache';
import autoprefixer from 'gulp-autoprefixer';
import browserifyCss from 'browserify-css';
import deploy from 'gulp-gh-pages';
import ghPages from 'gh-pages';
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
import notify from 'gulp-notify';
import imagemin from 'gulp-imagemin';

const sourceFile = 'app/js/main.js';
const destFolder = 'app/js/';
const destFile = 'bundle_script.js';

const sass = gulpSass(dartSass)


gulp.task('browserify', function () {
    return browserify(sourceFile)
        .bundle()
        .pipe(source(destFile))
        .pipe(gulp.dest(destFolder));
});

gulp.task('browserifyCss', function () {
    return browserify('app/js/node_mod_css.js')
        .transform(browserifyCss)
        .bundle()
        .pipe(source('bundle_node_mod_css.js'))
        .pipe(gulp.dest(destFolder));
});


gulp.task('watch', function () {
    const bundler = watchify(sourceFile);
    bundler.on('update', rebundle);

    function rebundle() {
        return bundler.bundle()
            .pipe(source(destFile))
            .pipe(gulp.dest(destFolder));
    }

    return rebundle();
});


// gulp.task('less', function () { // Создаем таск less
//     return gulp.src('app/less/style.less') // Берем источник
//         .pipe(less().on('error', notify.onError(
//             {
//                 message: "<%= error.message %>",
//                 title: "LESS Error!"
//             }))
//         ) // Преобразуем less в CSS посредством gulp-less
//         .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true})) // С
//         .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
//         .pipe(notify('LESS - good work!'))
//         .pipe(browserSync.reload({stream: true})); // Обновляем CSS на странице при изменении
// });

gulp.task('sass', function () {
    return gulp.src(['app/scss/*', 'app/scss/*/*'])
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(gulp.dest('app/css'))
        .pipe(notify('scss - good work!'))
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('css-libs', gulp.series('sass', function () {
    return gulp.src('app/css/style.css') // Выбираем файл для минификации
        .pipe(cssnano()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
}));

gulp.task('script', gulp.series('browserify', function () {
    return gulp.src('app/js/bundle_script.js') // Выбираем файл для минификации
        .pipe(uglify()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/js')); // Выгружаем в папку app/css
}));


gulp.task('browser-sync', function () { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});


gulp.task('watch', gulp.series('browser-sync', 'css-libs', 'script', function () {


    gulp.watch('app/scss/**/*.scss', function (event) {
        const fileManagers = sass.environment && sass.environment.fileManagers || [];
        fileManagers.forEach(function (fileManager) {
            if (fileManager.contents && fileManager.contents[event.path]) {
                // clear the changed file cache;
                fileManager.contents[event.path] = null;
            }
        });

        gulp.start('css-libs');
    });


    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/node_mod_css.js', ['browserifyCss']);
    gulp.watch(sourceFile, ['script']);
    gulp.watch('app/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
    gulp.watch('app/images/**', browserSync.reload);
    gulp.watch('app/fonts/**', browserSync.reload);

}));

gulp.task('clean', function () {
    return del(['dist']); // Assuming 'dist' is your build directory
});


gulp.task('img', function () {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('build', gulp.series('clean', 'img', 'sass', 'script', 'browserifyCss', function (done) {

    const buildCss = gulp.src([
        'app/css/*.css',
        '!app/css/bundle_node_mod.css'
    ])
        .pipe(gulp.dest('dist/css'));

    const buildFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));

    const buildJs = gulp.src([
        'app/js/bundle_script.js',
        'app/js/bundle_script.min.js',
        'app/js/bundle_node_mod_css.js',
        'app/js/map_init.js'
    ])
        .pipe(gulp.dest('dist/js'));

    const buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));

    const BuildBootstrap = gulp.src('app/bootstrap/**/*')
        .pipe(gulp.dest('dist/bootstrap'));

    // Ensure tasks are completed before signaling done
    return Promise.all([buildCss, buildFonts, buildJs, buildHtml, BuildBootstrap]).then(() => {
        done();
    });

}));

/**
 * Push build to gh-pages
 */
// gulp.task('deploy', function () {
//     const currentModuleUrl = new URL(import.meta.url);
//     const currentModuleDirname = path.dirname(currentModuleUrl.pathname);
//
//     ghPages.publish(currentModuleDirname + '/dist/**/*', {
//         branch: 'gh-pages',
//         repo: 'https://github.com/username/repo.git', // Replace with your repository URL
//     }, done);
// });

// gulp.task('deploy', function() {
//   return gulp.src('dist/**/*')
//     .pipe(deploy());
// });

gulp.task('default', gulp.series('watch'));

gulp.task('clear', function () {
    return cache.clearAll();
})





