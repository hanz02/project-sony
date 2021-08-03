const nav_menu = document.querySelector(".nav-menu");
const hamburger = document.querySelector("#mobile-menu");
const logo = document.querySelector(".logo");

/* Show Nav Bar Mobile*/
const showNavMenu = () => {
  nav_menu.classList.toggle("show");
  hamburger.classList.toggle("show");
  logo.classList.toggle("active");
};

/* Show Drop Down Nav Bar Mobile*/
const overview_btn = document.querySelector(".contain-overview");
const dropdown_menu = document.querySelector(".dropdown");

const showDropDownMobile = () => {
  if (window.innerWidth < 1080) {
    dropdown_menu.classList.toggle("show");
    overview_btn.classList.toggle("active");
  }
};

hamburger.addEventListener("click", showNavMenu);

overview_btn.addEventListener("click", showDropDownMobile);

/* Show Drop Down Nav Bar Mobile*/
const showDropDownDesktop = () => {
  if (window.innerWidth > 1080) {
    overview_btn.classList.toggle("active");
  }
};

overview_btn.addEventListener("click", showDropDownDesktop);
