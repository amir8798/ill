var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3, // ডেস্কটপ
    speed: 600,
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
breakpoints: {
    0: {
        slidesPerView: 1,
        coverflowEffect: { modifier: 1.2, depth: 80 }
    },
    768: {
        slidesPerView: 2,
        coverflowEffect: { modifier: 2, depth: 100 }
    }
}

    
});
