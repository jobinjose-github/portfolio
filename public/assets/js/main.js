const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");
const main = document.getElementById("main");
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  if(navbar.classList.contains("active")){
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
  }else if(!navbar.classList.contains("active")){
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
  }
});

navlinks.addEventListener("click", () => {
  navbar.classList.remove("active");
  document.getElementById("open").style.display = "block";
  document.getElementById("close").style.display = "none";
});

main.addEventListener("click", () => {
  if(navbar.classList.contains("active")){
    navbar.classList.remove("active");
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
  }
});

window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  let currentSection = '';
  sections.forEach(function(section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(function(link) {
    link.classList.remove('active-link');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active-link');
    }
  });
});

function softLanding(id, delay, duration, origin, distance) {
  return ScrollReveal().reveal(id, {
      duration: duration,
      origin: origin,
      distance: distance,
      delay: delay,
  });
}
ScrollReveal({ reset: false });

if(screen.width >= 980){
  softLanding("#home-logo", 1000, 2500, "right", "100px")
  softLanding("#logo", 1400, 2500, "left", "50px")
  softLanding("#nav-about", 1600, 2500, "right", "100px")
  softLanding("#nav-service", 1900, 2500, "right", "100px")
  softLanding("#nav-experience", 2200, 2500, "right", "100px")
  softLanding("#nav-contact", 2500, 2500, "right", "100px")
}

softLanding(".dt-200", 200, 1500, "top", "20px")
softLanding(".dt-100", 100, 1500, "top", "20px")
softLanding(".dt-300", 300, 1500, "top", "20px")
softLanding(".dt-400", 400, 1500, "top", "20px")
softLanding(".dt-500", 500, 1500, "top", "20px")
softLanding(".dt-600", 600, 1500, "top", "20px")
softLanding(".dt-700", 700, 1500, "top", "20px")
softLanding(".dt-800", 800, 1500, "top", "20px")
softLanding(".dt-900", 900, 1500, "top", "20px")
softLanding(".dt-1000", 1000, 1500, "top", "20px")
softLanding(".dt-1100", 1100, 1500, "top", "20px")
softLanding(".dt-1200", 1200, 1500, "top", "20px")

softLanding(".dl-100", 100, 1500, "left", "20px")
softLanding(".dl-200", 200, 1500, "left", "20px")
softLanding(".dl-300", 300, 1500, "left", "20px")
softLanding(".dl-400", 400, 1500, "left", "20px")
softLanding(".dl-500", 500, 1500, "left", "20px")
softLanding(".dl-600", 600, 1500, "left", "20px")
softLanding(".dl-700", 700, 1500, "left", "20px")
softLanding(".dl-800", 800, 1500, "left", "20px")
softLanding(".dl-900", 900, 1500, "left", "20px")
softLanding(".dl-1000", 1000, 1500, "left", "20px")
softLanding(".dl-1100", 1100, 1500, "left", "20px")
softLanding(".dl-1200", 1200, 1500, "left", "20px")

softLanding(".dr-600", 600, 1000, "right", "20px")