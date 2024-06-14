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


let direction = 'right';
const carouselTrack = document.querySelector('.rotazione');

function switchDirection() {
  if (direction === 'right') {
    carouselTrack.style.animation = 'scroll-left 20s linear infinite';
    direction = 'left';
  } else {
    carouselTrack.style.animation = 'scroll-right 20s linear infinite';
    direction = 'right';
  }
}

setInterval(switchDirection, 20000);