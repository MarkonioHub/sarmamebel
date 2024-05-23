"use strict";

var servicesSlider = document.querySelector('.services__slider');
if (servicesSlider) servicesSliderInit();

function servicesSliderInit() {
  var swiper;
  window.addEventListener('resize', checkSlider);
  checkSlider();

  function initSlider() {
    swiper = new Swiper(".services__slider", {
      slidesPerView: 'auto',
      scrollbar: {
        el: ".swiper-scrollbar"
      }
    });
  }

  function checkSlider() {
    if (document.body.clientWidth < 1260) {
      initSlider();
    } else {
      if (swiper) swiper.destroy(true, true);
    }
  }
}
//# sourceMappingURL=services.js.map
