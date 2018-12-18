/* =========================================
                  SERVICES
===========================================*/

$(function () {
    new WOW().init();
});

/* =========================================
                  EVENTS
===========================================*/

$(function () {
    $('#events').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/* =========================================
            TECHNICAL EVENTS
===========================================*/

$(function () {

				[].slice.call(document.querySelectorAll('.tabs')).forEach(function (el) {
        new CBPFWTabs(el);
    });

});


/* =========================================
                  TEAM
===========================================*/
$(function () {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            640: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
});


/*====================================================
                        NAVIGATION
====================================================*/
// Show/Hide transparent black navigation
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            // hide nav
            $("header nav").removeClass("techaura-top-nav");
            $("#back-to-top").fadeOut();

        } else {
            // show nav
            $("header nav").addClass("techaura-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});
// Smooth scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

// Close mobile menu on click
$(function () {

    $(".navbar-collapse ul li a").on("click touch", function () {

        $(".navbar-toggle").click();
    });
});