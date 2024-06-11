// TESTO TRUNCATO
let options = {
    strings: ["LA MIA STORIA"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: false
  };

 let typed = new Typed("#typed", options);

// SWIPER
const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});