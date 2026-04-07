// Nav hamburger toggle
const burger = document.querySelector("#burger-menu");
const navMenu = document.querySelector("#nav-menu");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Close mobile nav on link click
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

// Scroll-to-top button
const scrollUp = document.querySelector("#scroll-up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollUp.classList.add("visible");
  } else {
    scrollUp.classList.remove("visible");
  }
});

scrollUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
