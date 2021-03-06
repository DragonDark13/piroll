global.jQuery = require('jquery');
var viewportChecker = require('jquery-viewport-checker');
var animateNumber= require('jquery.animate-number');
var lightSlider= require('lightslider');

jQuery(document).ready(function($) {

  	// var myWidth = 0;
   //      myWidth = window.innerWidth;
   //      jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:9999;color:#fff;">Width = '+myWidth+'</div>');
   //      jQuery(window).resize(function(){
   //          var myWidth = 0;
   //          myWidth = window.innerWidth;
   //          jQuery('#size').remove();
   //          jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:9999;color:#fff;">Width = '+myWidth+'</div>');
   //      });

            /* Responsive meni */

  jQuery(".navbar-toggle").click(function(event) {
      /* Act on the event */
      
          if (jQuery(".navbar-default").hasClass('js_response_meni')) {
           jQuery(".navbar-default").removeClass('js_response_meni');
           jQuery(".navbar-collapse").removeClass('in');
          } 

          else {
            jQuery(".navbar-default").addClass('js_response_meni');
            jQuery(".navbar-collapse").addClass('in');
          }

    });

  /* animated blocks */
  

    jQuery('.work_container:not(.more_work_container), .icon_container, .service_container, .client').viewportChecker({
        classToAdd: 'animated zoomIn',
        repeat: false,
    });

    jQuery('.left_part').viewportChecker({
        classToAdd: 'animated fadeInLeft',
        repeat: false,
    });

    jQuery('.right_part, .banner .banner_text').viewportChecker({
        classToAdd: 'animated fadeInRight',
        repeat: false,
    });

    jQuery('.need_project .button').viewportChecker({
        classToAdd: 'animated fadeInUp',
        repeat: false,
    });

    /* Smothy scrol */
    

    jQuery('.main_menu  a').click(function(){
         var target = jQuery(this).attr('href');
      jQuery('html, body').animate({scrollTop: jQuery(target).offset().top}, 1000);
      return false;
    });


    /* animateNumber */
    

  jQuery('.number_container h5, .percent>span').viewportChecker({
      callbackFunction: function(elem, action){
          var number =  elem.text();
          elem.animateNumber(
              { number: number },
              2000
          );
      }
  });

  /* Load More */

  jQuery('.load_more').click(function(event) {
    /* Act on the event */
    jQuery('.more_work_container').slideToggle().toggleClass('animated zoomIn');
    jQuery(this).html(jQuery(this).text() == 'hide more work' ? 'load more work' : 'hide more work');
  });

  /* Slider */
  

  jQuery('.slider_container').lightSlider({
      item: 1,
      auto:true,
      loop:true,
      pauseOnHover: false,
      adaptiveHeight:true,
      controls: false,
      pager: true,
      speed: 300,
  }); 

      //youtube script
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;

    onYouTubeIframeAPIReady = function () {
        player = new YT.Player('player', {
            height: '244',
            width: '434',
            videoId: 'Q8TXgCzxEnw',  // youtube video id
            playerVars: {
                'autoplay': 0,
                'rel': 0,
                'showinfo': 0
            },
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    }

    var p = document.getElementById ("player");
    $(p).hide();

    onPlayerStateChange = function (event) {
        if (event.data == YT.PlayerState.ENDED) {
            $('.start-video').fadeIn('normal');
        }
    }

    jQuery(document).on('click', '.start-video', function () {
        jQuery(this).hide();
        jQuery("#player").show();
        jQuery("#thumbnail_container").hide();
        player.playVideo();
    });

    /* progress bar */


    jQuery('.progress-bar').viewportChecker({
        callbackFunction: function(elem, action){
           var percent = elem.attr('data-progress');

            elem.animate({
            width: percent +'%'
            }, 1300, function() {
            // Animation complete.
            });
        }
    });
    

  });


