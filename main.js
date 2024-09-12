//change navbar style on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY >100);
});



const menu = document.querySelector(".nav-menu");
const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

openMenuBtn.addEventListener("click", () => {
  menu.classList.add("active");
  closeMenuBtn.style.display = "inline-block";
  openMenuBtn.style.display = "none";
});

closeMenuBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  closeMenuBtn.style.display = "none";
  openMenuBtn.style.display = "inline-block";
});

//hide nav menu when you click on link in it
const menuLinks = document.querySelectorAll(".nav-menu a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    openMenuBtn.style.display = "inline-block";
    closeMenuBtn.style.display = "none";
  });
});




