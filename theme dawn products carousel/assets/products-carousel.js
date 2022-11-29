function initSwiper() {
  var swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 12,
    // using "ratio" endpoints
    breakpoints: {
      '768': {
        spaceBetween: 24,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

initSwiper();

if (Shopify.designMode) {
  document.addEventListener('shopify:section:load', function(event) {
    initSwiper();
  });
}