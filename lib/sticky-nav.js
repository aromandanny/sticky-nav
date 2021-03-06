// Sticky nav

(function($) {

    // Strict mode
    "use strict";

    // Begin jQuery plugin
    $.fn.stickyNav = function () {

        $(window).scroll(function(){

            var nav = $('[data-role="sticky-nav"]');
            
            // Find height of the hero div
            var heroHeight = $('[data-role="hero"]').innerHeight();

            // If the vertical position of the navigation is greater than or equal 
            // to the height of the hero div add a class of sticky-nav
            if($(this).scrollTop()>=heroHeight) {
                nav.addClass('sticky-nav');
            } else {
                nav.removeClass('sticky-nav');
            }
        });

    };

})(jQuery);