document.addEventListener('DOMContentLoaded', function() {
    const showSlider = new Swiper('.showcase-carousel', {
        loop: true,
        slidesPerView: 3,
        speed: 1500,
        centeredSlides: true,
        freeMode: true,
        navigation: {
            nextEl: '.showcase-navigation__next',
            prevEl: '.showcase-navigation__prev',
        },
    })
})
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top}
    , 500, 'linear');
});

