$(document).ready(function(){
    $('.big-slider').slick({
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });


    $('.little-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});

