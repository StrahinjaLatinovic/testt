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


let sections = document.querySelectorAll("section"),
    images = document.querySelectorAll(".bg"),
    headings = gsap.utils.toArray(".section-heading"),
    outerWrappers = gsap.utils.toArray(".outer"),
    innerWrappers = gsap.utils.toArray(".inner"),
    pgnNumbers = document.querySelector(".pgn-numbers"),  // Selektujemo brojeve
    currentIndex = 0,  // Početni indeks je 0 (prva sekcija)
    animating;

// Pomoćna funkcija za deljenje teksta na slova
function splitTextIntoSpans(heading) {
  const text = heading.textContent.trim();
  heading.innerHTML = ''; // Isprazni sadržaj elementa

  // Delimo tekst na slova
  text.split('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    heading.appendChild(span);
  });
}

// Podeli tekst za svaki heading na slova
headings.forEach(heading => splitTextIntoSpans(heading));

gsap.set(outerWrappers, { xPercent: 100 });
gsap.set(innerWrappers, { xPercent: -100 });

// Funkcija za prikazivanje inicijalnog slajda
function showInitialSection() {
  gsap.set(sections[0], { autoAlpha: 1, zIndex: 1 });
  gsap.set(images[0], { xPercent: 0 });
  gsap.set([outerWrappers[0], innerWrappers[0]], { xPercent: 0 });
  gsap.fromTo(headings[0].querySelectorAll('span'), {
    autoAlpha: 0,
    xPercent: 150
  }, {
    autoAlpha: 1,
    xPercent: 0,
    duration: 1,
    ease: "power2",
    stagger: {
      each: 0.02,
      from: "random"
    }
  });

  // Postavi brojeve na početni broj
  gsap.set(pgnNumbers, { y: 0 });
}

function animatePagination(index, direction) {
  const offset = -index * 20;  // Pomera se po 20px za svaki broj, možeš prilagoditi ako je potrebno
  gsap.to(pgnNumbers, {
    y: offset,
    duration: 1,
    ease: "power1.inOut"
  });
}

function gotoSection(index, direction) {
  // Provera da li je indeks unutar granica
  if (index < 0 || index >= sections.length) {
    animating = false;
    return;
  }

  animating = true;
  let fromLeft = direction === -1,
      dFactor = fromLeft ? -1 : 1,
      tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => animating = false
      });

  if (currentIndex >= 0) {
    gsap.set(sections[currentIndex], { zIndex: 0 });
    tl.to(images[currentIndex], { xPercent: -15 * dFactor })
      .set(sections[currentIndex], { autoAlpha: 0 });
  }

  gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });

  tl.fromTo([outerWrappers[index], innerWrappers[index]], {
      xPercent: i => i ? -100 * dFactor : 100 * dFactor
    }, {
      xPercent: 0
    }, 0)
    .fromTo(images[index], { xPercent: 15 * dFactor }, { xPercent: 0 }, 0)
    .fromTo(headings[index].querySelectorAll('span'), { // Animiramo slova
        autoAlpha: 0,
        xPercent: 150 * dFactor
    }, {
        autoAlpha: 1,
        xPercent: 0,
        duration: 1,
        ease: "power2",
        stagger: {
          each: 0.02,
          from: "random"
        }
      }, 0.2);

  // Animiraj brojeve u paginaciji
  animatePagination(index, direction);

  currentIndex = index;
}

// Event listener za dugme "Levo"
document.getElementById('prev').addEventListener('click', () => {
  if (!animating && currentIndex > 0) {
    gotoSection(currentIndex - 1, -1);
  }
});

// Event listener za dugme "Desno"
document.getElementById('next').addEventListener('click', () => {
  if (!animating && currentIndex < sections.length - 1) {
    gotoSection(currentIndex + 1, 1);
  }
});

// Prikaz prve sekcije bez animacije na početku
showInitialSection();


 ß
  

  

  
