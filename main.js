// Responsive nav toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const navItems = document.querySelectorAll("#nav-links a");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

// ScrollReveal animations
const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

if (typeof ScrollReveal !== "undefined") {
  ScrollReveal().reveal(".header__image img", { ...scrollRevealOption, origin: "right" });
  ScrollReveal().reveal(".header__content p", { ...scrollRevealOption, delay: 500 });
  ScrollReveal().reveal(".header__content h1", { ...scrollRevealOption, delay: 1000 });
  ScrollReveal().reveal(".header__btns", { ...scrollRevealOption, delay: 1500 });
  ScrollReveal().reveal(".destination__card", { ...scrollRevealOption, interval: 500 });
  ScrollReveal().reveal(".showcase__image img", { ...scrollRevealOption, origin: "left" });
  ScrollReveal().reveal(".showcase__content h4", { ...scrollRevealOption, delay: 500 });
  ScrollReveal().reveal(".showcase__content p", { ...scrollRevealOption, delay: 1000 });
  ScrollReveal().reveal(".showcase__btn", { ...scrollRevealOption, delay: 1500 });
  ScrollReveal().reveal(".banner__card", { ...scrollRevealOption, interval: 500 });
  ScrollReveal().reveal(".discover__card", { ...scrollRevealOption, interval: 500 });
}

// Initialize Swiper
if (typeof Swiper !== "undefined") {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      320: { slidesPerView: 1 },
      640: { slidesPerView: 1.2 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}
