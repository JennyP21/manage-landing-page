let navClose = document.getElementsByClassName("nav__close")[0];
let navMenu = document.getElementsByClassName("nav__menu")[0];
let navList = document.getElementsByClassName("nav__list")[0];

function toggle() {
  navClose.classList.toggle("visible");
  navMenu.classList.toggle("visible");
  navList.classList.toggle("nav__expanded");
}

navClose.addEventListener("click", () => {
  toggle();
});

navMenu.addEventListener("click", () => {
  toggle();
});
