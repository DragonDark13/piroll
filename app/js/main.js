var jQuery = require('jquery');

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

  });


