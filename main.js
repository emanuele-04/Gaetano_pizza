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


const button = document.querySelector("#tornaSU")

 button.addEventListener('click', function tornasu(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight
    const scrollThreshold = 1

    if(scrollPosition > windowHeight * scrollThreshold){
      button.classList.remove("d-none")
    }else{
      button.classList.add("d-none")

    }
  })

console.log(button);

// let direction = 'right';
// const carouselTrack = document.querySelectorAll('.rotazione', '.rotazione2');

// function switchDirection() {
//   if (direction === 'right') {
//     carouselTrack.style.animation = 'scroll-left 20s linear infinite';
//     direction = 'left';
//   } else {
//     carouselTrack.style.animation = 'scroll-right 20s linear infinite';
//     direction = 'right';
//   }
// }

// setInterval(switchDirection, 20000);