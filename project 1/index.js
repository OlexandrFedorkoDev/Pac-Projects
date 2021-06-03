$(function () {


    $('.slider__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',

    });



    $('.news__slider').slick({


        nextArrow: '<button type="button" class="slick__slider-blog-btn slick__slider-blog-next"></button>',
        prevArrow: '<button type="button" class="slick__slider-blog-btn slick__slider-blog-prev"></button>',

        responsive: [
            {
                breakpoint: 575,
                settings: {
                    arrows: false,
                }
            },]


    });



    $('.menu__btn').on('click', function () {
        $('.menu').toggleClass('menu__list--active')
    })

});


