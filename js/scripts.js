const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-list a"); 
hamburguer.addEventListener("click", () => {
    nav.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active"); 
    });
});

const menuLinks = document.querySelectorAll('.nav a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function nativeScroll(getDistanceFromTheTop) {
  window.scroll({
    top: getDistanceFromTheTop,
    behavior: "smooth",
  });
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 60;
  nativeScroll(distanceFromTheTop);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

const header = document.querySelector(".header");
const homeSection = document.getElementById("home");

function toggleHeaderBackground() {
    const scrollPosition = window.scrollY;
    if (scrollPosition < homeSection.offsetHeight) {
        header.classList.remove("header-colored"); 
    } else {
        header.classList.add("header-colored"); 
    }
}
window.addEventListener("scroll", toggleHeaderBackground);

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});




