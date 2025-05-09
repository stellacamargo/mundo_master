const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navLinks= document.querySelectorAll(".nav a");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  })
})