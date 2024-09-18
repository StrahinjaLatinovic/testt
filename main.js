import './style.css'
import { gsap } from "gsap";
    
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from './public/1.jpg'
import img1 from './public/Group 4.png'
import img2 from './public/2.jpg'
import img3 from './public/3.jpg'
import img4 from './public/4.jpg'
import img5 from './public/5.jpg'


gsap.registerPlugin(Flip,ScrollTrigger);


document.getElementById('logo').src = img1
document.getElementById('a').src = img
document.getElementById('bb').src = img2
document.getElementById('cc').src = img3
document.getElementById('zz').src = img4




function loadingText() {
var tl = gsap.timeline({});
tl.to(".logo", {opacity: 1 , duration:1})
tl.to(".Chin", { y: 0, duration:0.5, stagger:0.2})
tl.to(".Chin", { opacity:0, duration:0.5, stagger:0.2})
tl.to(".J", { y: 0, duration:0.5, stagger:0.2})
tl.to(".J", { opacity:0, duration:0.5, stagger:0.2})
tl.to(".E", { y: 0, duration:0.5, stagger:0.2})
tl.to(".E", { opacity:0,duration:0.5, stagger:0.2})
tl.to(".A", { y: 0, duration:0.5, stagger:0.2})
tl.to(".A", { opacity:0,duration:0.5, stagger:0.2})
}
var masterTimeline = gsap.timeline();

function loadingHome() {
      var tl = gsap.timeline({});
      tl.to('.out', {opacity:0, duration:1})
      tl.to('.out', {scale:1, duration:1})
      tl.to('.out', {y:0, duration:1, stagger:0.3})

}
masterTimeline  
  //.add(loadingText())
  //.add(loadingHome())
  //.add(logoAnimateIn(), "+=2")
  //.add(logoAnimateOut(), "+=2")
  //.add(quote2(), "+=2")
  //.add(logoAnimateIn(), "+=2")
  //.add(finale(), "+=2")

 
  

  

  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  
// Funkcija za pomeranje sledećeg slajda
function moveNextSlide() {
  if (currentSlide === totalSlides - 1) {
      return; // Ne radi ništa
  }

  const nextSlide = (currentSlide + 1) % totalSlides;

  // Postavi z-index
  slides.forEach(slide => {
      slide.style.zIndex = 1; // Resetuj z-index
  });
  slides[currentSlide].style.zIndex = 2; // Trenutni slajd
  slides[nextSlide].style.zIndex = 3; // Sledeći slajd

  // Kreiraj timeline za animaciju
  const tl = gsap.timeline();

  // Animiraj trenutni slajd
  tl.to(slides[currentSlide].querySelector('img'), {
      duration: 2,
      scale: 1, // Smanji trenutnu sliku
      ease: "power4.out"
  })
  .to(slides[currentSlide], {
      duration: 2,
      x: '0%', // Pomeri trenutni slajd
      ease: "power4.out",
  }, "<")
  .to(slides[nextSlide].querySelector('img'), {
      duration: 2,
      scale: 1.3, // Povećaj sledeću sliku
      ease: "power4.out"
  }, "<")
  .from(slides[nextSlide], {
    duration: 2,
    x: '80%', // Pomeranje sledećeg slajda sa desne strane
    ease: "power4.out"
}, "<");

  // Ažuriraj trenutni slajd
  currentSlide = nextSlide;
}

// Funkcija za pomeranje prethodnog slajda
function movePrevSlide() {
  if (currentSlide === 0) {
      return; // Ne radi ništa
  }

  const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;

  // Postavi z-index
  slides.forEach(slide => {
      slide.style.zIndex = 1; // Resetuj z-index
  });
  slides[currentSlide].style.zIndex = 2; // Trenutni slajd
  slides[prevSlide].style.zIndex = 3; // Prethodni slajd

  // Kreiraj timeline za animaciju
  const tl = gsap.timeline();

  // Animiraj trenutni slajd
  tl.to(slides[currentSlide].querySelector('img'), {
      duration: 2,
      scale: 1, // Smanji trenutnu sliku
      ease: "power4.out"
  })
  .to(slides[currentSlide], {
      duration: 2,
      x: '0%', // Pomeri trenutni slajd udesno
      ease: "power4.out",
  }, "<")
  .to(slides[prevSlide].querySelector('img'), {
      duration: 2,
      scale: 1.3, // Povećaj prethodnu sliku
      ease: "power4.out"
  }, "<")
  .from(slides[prevSlide], {
    duration: 2,
    x: '-80%', // Pomeranje sledećeg slajda sa desne strane
    ease: "power4.out"
}, "<");

  // Ažuriraj trenutni slajd
  currentSlide = prevSlide;
}
  
  document.querySelector('.next').addEventListener('click', moveNextSlide);
  document.querySelector('.prev').addEventListener('click', movePrevSlide);