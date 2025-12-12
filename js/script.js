const nav = document.getElementById("top-nav");
const navLinks = document.getElementById("navLinks");
const navToggle = document.getElementById("navToggle");

const toggleNavStyle = () => {
  const isScrolled = window.scrollY > 60;
  nav.classList.toggle("scrolled", isScrolled);
};

const closeNav = () => navLinks.classList.remove("open");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", (event) => {
  if (event.target.classList.contains("nav__link")) {
    closeNav();
  }
});

window.addEventListener("scroll", toggleNavStyle);
window.addEventListener("load", toggleNavStyle);
window.addEventListener("resize", () => {
  if (window.innerWidth > 800) closeNav();
});

// Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    const section = document.querySelector(targetId);
    if (!section) return;
    e.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  });
});

