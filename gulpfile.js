  var gulp = require('gulp'), // Подключаем Gulp
  lessc = require('gulp-less'),
  path = require('path'),
  less = require('less'),
  browserSync = require('browser-sync'); // Подключаем Browser Sync
  browserify = require('browserify'),
  watchify = require('watchify'),
  gulp = require('gulp'),
  source = require('vinyl-source-stream'),
  sourceFile = 'app/js/main.js',
  destFolder = 'app/js/',
  destFile = 'findem.js',
  uglify      = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS),
  cssnano     = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
  rename      = require('gulp-rename'), // Подключаем библиотеку для переименования файлов,
  del         = require('del'), // Подключаем библиотеку для удаления файлов и папок;
  pngquant    = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
  cache       = require('gulp-cache'),
  autoprefixer = require('gulp-autoprefixer'),
  uncss = require('gulp-uncss');

  

    gulp.task('browserify', function() {
  return browserify(sourceFile)
  .bundle()
  .pipe(source(destFile))
  .pipe(gulp.dest(destFolder));
});

    gulp.task('watch', function() {
  var bundler = watchify(sourceFile);
  bundler.on('update', rebundle);
 
  function rebundle() {
    return bundler.bundle()
      .pipe(source(destFile))
      .pipe(gulp.dest(destFolder));
  }
 
  return rebundle();
});


   gulp.task('less', function(){ // Создаем таск less
    return gulp.src('app/less/style.less') // Берем источник
        .pipe(lessc()) // Преобразуем less в CSS посредством gulp-less
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // С
        // .pipe(uncss({
        //     html: ['app/*.html']
        // }))
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});



   gulp.task('css-libs', ['less'], function() {
    return gulp.src('app/css/style.css') // Выбираем файл для минификации
        .pipe(cssnano()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
});

    gulp.task('script',['browserify'], function() {
    return gulp.src('app/js/findem.js') // Выбираем файл для минификации
        .pipe(uglify()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/js')); // Выгружаем в папку app/css
});

 

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});



gulp.task('watch', ['browser-sync', 'css-libs', 'script'], function() {

    // gulp.watch('app/less/**/*.less', ['less']); 
  // другие ресурсы

   gulp.watch('app/less/**/*.less', function (event) {
        const fileManagers = less.environment && less.environment.fileManagers || [];
        fileManagers.forEach(function (fileManager) {
            if (fileManager.contents && fileManager.contents[event.path]) {
                // clear the changed file cache;
                fileManager.contents[event.path] = null;
            }
        });
        
        gulp.start('less');
    });
     // gulp.watch('app/less/**/*.less', browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch(sourceFile,['script']); 
    gulp.watch('app/js/**/*.js',browserSync.reload); // Наблюдение за JS файлами в папке js
    gulp.watch('app/images/**',browserSync.reload);
    gulp.watch('app/fonts/**',browserSync.reload);

});

gulp.task('clean', function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*') // Берем все изображения из app
        .pipe(cache(pngquant({  // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

gulp.task('build', ['clean','img','less', 'script'], function() {

    var buildCss = gulp.src([ // Переносим CSS стили в продакшен
        'app/css/style.css',
        'app/css/style.min.css',
        'app/css/bootstrap.min.css'
        ])
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src([
      'app/js/findem.js',
      'app/js/findem.min.js'
    ]) // Переносим скрипты в продакшен
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
    .pipe(gulp.dest('dist'));

    var BuildBootstrap = gulp.src('app/bootstrap/**/*')
      .pipe(gulp.dest('dist/bootstrap'));

});


gulp.task('default', ['watch']);

gulp.task('clear', function () {
    return cache.clearAll();
})





