'use strict';
$(window).load(function() {
    $('.preloader img').fadeOut();
    $('.preloader').fadeOut(1000);
});
$(document).ready(function() {
    new WOW().init();



    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $(".bottom").addClass("animated-scroll-bottom");
            $(".inner").addClass("animated-scroll-inner");
            $(".top").addClass("animated-scroll-top");


            $(".navbar-nav > li > .dropdown-menu").addClass("margin-of-mega-menu-scroll");


        } else {
            $(".bottom").removeClass("animated-scroll-bottom");
            $(".inner").removeClass("animated-scroll-inner");
            $(".top").removeClass("animated-scroll-top");

            $(".navbar-nav > li > .dropdown-menu").removeClass("margin-of-mega-menu-scroll");

        }
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 40) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});

/*wow initialization*/
if (typeof WOW === "function") {
    new WOW().init();
}
$('.dropdown-submenu a.sub1').on("click", function(e) {
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
});

$('#contact_form').bootstrapValidator({
    fields: {
        name: {
            validators: {
                notEmpty: {
                    message: 'The name is required'
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: 'The email is required'
                },
                emailAddress: {
                    message: 'The input is not a valid email address'
                }
            }
        },
        message: {
            validators: {
                notEmpty: {
                    message: 'The message is required'
                }
            }
        }

    }
});

