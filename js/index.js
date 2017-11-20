$(document).ready(function () {

    $('.big-slider').slick({
        dots: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });

    $('.little-slider').slick({
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.prev-little'),
        nextArrow: $('.next-little'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });

    // $("#menu").on("click", "a", function (event) {
    //     event.preventDefault();
    //     let id = $(this).attr('href'),
    //         top = $(id).offset().top;
    //     $('body,html').animate({scrollTop: top}, 1500);
    // });

    $('button#go').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('#modal_form')
                    .css('display', 'flex')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#modal_close, #overlay, #close').click(function () {
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });

    $('#mobile_menu_close').click(function () {
        $('header')
            .animate({opacity: 0, top: '45%'}, 200,
                function () {
                    $(this).css('display', 'none');
                }
            );
    });
});