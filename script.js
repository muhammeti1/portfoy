// name
var typed = new Typed(".auto-text", {

    strings:["Coding.", "Developer.", "Designer."],
    typeSpeed:150,
    backSpeed:150,
    loop:true
})
// testimontal
const swiper = new Swiper('.js-testimonials-slider', {

  grabCursor : true,
  spaceBetween:30,
  pagination:{
    el:".js-testimonials-pagination",
    clickable:true
  },
  breakpoints:{
    767:{
      slidesPerView:3,
    },
  },
  autoplay: {
    delay: 3000,
  },
  effect: 'show', 
  fadeEffect: {
    crossFade: true, 
  },
  speed: 1000,
});
// animation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({
          behavior: 'smooth'
      });
  });
});