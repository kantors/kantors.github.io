$(document).ready(function() {

    /********HEADER ANIMATION********/
    //only if not on a mobile device

    setTimeout(function() {
        $(".header .color-block").css("width", "0%");

    }, 150);

    setTimeout(function() {
        $(".header .text-wrapper .text").css("width", "100%");

    }, 400);
    setTimeout(function() {
        $(".header .sub-text-wrapper .text").css("width", "100%");
    }, 1400);
    setTimeout(function() {

        $(".navigation").addClass("navigation-visible");
        $(".header .arrow-wrapper ").addClass("visible-arrow");

    }, 800);
    setTimeout(function() {
        // $(".header .arrow-wrapper .about-me ").addClass("bounce");

    }, 2400);

    $("#work-link").click(function() {
        var offset = 20; //Offset of 20px

        $('html, body').animate({
            scrollTop: $("#work-section").offset().top + offset
        }, 700);
    });

    $('.hideme').each(function(i) {
        var top_of_object = $(this).offset().top + 10;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > top_of_object) {
            $(this).delay(200).animate({
                opacity: 1,
                top: '0'
            }, 500);

        }

    });
    /********NAVIGATION ANIMATION********/
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var st = $(this).scrollTop();

        if (st > 200) {
            $(".navigation").addClass("hoverable");
        } else {
            $(".navigation").removeClass("hoverable");
        }

        if (st > lastScrollTop + 15) {
            // downscroll code
            $(".navigation .link").css("opacity", "0");

            setTimeout(function() {
                $(".navigation ul").css("width", "50px");
            }, 260);

        }

        if (st < lastScrollTop - 15) {
            // upscroll code
            $(".navigation ul").css("width", "185px");
            setTimeout(function() {
                $(".navigation .link").css("opacity", "1");
            }, 260);

        }

        /********PORTFOLIO PAGE ANIMATION********/
        $('.hideme').each(function(i) {
            var top_of_object = $(this).offset().top + 10;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > top_of_object) {
                $(this).delay(200).animate({
                    opacity: 1,
                    top: '0'
                }, 500);

            }

        });

        lastScrollTop = st;
    });

});
