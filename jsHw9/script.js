let firstSwiper = new Swiper('.firstSwiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // centeredSlides: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: false,
    },

});


let guitarSwiper = new Swiper('.guitarsSwiper', {
    // Optional parameters
    slidesPerView: 5,
    spaceBetween: 20,
    direction: 'horizontal',
    loop: true,
    autoplay: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },



});

let partnersSwiper = new Swiper('.partnersSwiper', {
    // Optional parameters
    slidesPerView: 9,
    spaceBetween: 34,
    direction: 'horizontal',
    loop: true,
    loopedSlides: 1,
    autoplay: false,
    navigation: {
        nextEl: '.partners-button-next',
        prevEl: '.partners-button-prev',
    },



});