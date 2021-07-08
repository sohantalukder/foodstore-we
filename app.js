$(document).ready(function () {
    $('.food-slider').slick({
        autoplay: true,
        loop: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn",
    });
});