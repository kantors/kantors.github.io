$(document).ready(function() {

    /********HEADER ANIMATION********/
    setTimeout(function() {
        $(".header .text-wrapper .text").css("width", "100%");

    }, 300);
    setTimeout(function() {
        $(".header .sub-text-wrapper .text").css("width", "100%");
    }, 500);

    setTimeout(function() {
        $(".header .color-block").css("width", "100%");
        $(".featured-wrapper").css("top", "62vh");

    }, 1200);
    setTimeout(function() {

        // $(".about-section").css("margin-left", "-300px");
    }, 1200);

    /********NAVIGATION ANIMATION********/
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var st = $(this).scrollTop();

        if (st > 300) {
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
        lastScrollTop = st;
    });

    // $(".navigation").hover(function() {
    //     $(".navigation ul").css("width", "185px");
    //     setTimeout(function() {
    //         $(".navigation .link").css("opacity", "1");
    //
    //     }, 260);
    // }, function() {
    //     $(".navigation .link").css("opacity", "0");
    //     setTimeout(function() {
    //         $(".navigation ul").css("width", "50px");
    //     }, 260);
    // });

});
