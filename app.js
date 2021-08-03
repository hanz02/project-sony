const nav = document.querySelector(".navbar");
const nav_menu = document.querySelector(".nav-menu");
const hamburger = document.querySelector("#mobile-menu");
const logo = document.querySelector(".logo");

const nav_item = document.querySelectorAll(".nav-item");

//* Show Nav Bar Mobile*/
const showNavMenu = () => {
  nav_menu.classList.toggle("show");
  hamburger.classList.toggle("show");
  logo.classList.toggle("active");
};

//* Show Drop Down Nav Bar Mobile
const overview_btn = document.querySelector(".contain-overview");
const dropdown_menu = document.querySelector(".dropdown");

const showDropDownMobile = () => {
  event.stopPropagation();

  if (window.innerWidth < 1080) {
    dropdown_menu.classList.toggle("show");
    overview_btn.classList.toggle("active");
  }
};

hamburger.addEventListener("click", showNavMenu);

overview_btn.addEventListener("click", showDropDownMobile);

//* Close Drop Menu when nav item clicked */
nav.addEventListener("click", (e) => {
  console.log(e.target.className);
  if (e.target.classList.contains("nav-item")) {
    nav_menu.classList.remove("show");
    hamburger.classList.remove("show");
    logo.classList.remove("active");
  }
});

//* Show Drop Down Nav Bar Mobile*/
const showDropDownDesktop = () => {
  event.stopPropagation();

  if (window.innerWidth > 1080) {
    overview_btn.classList.toggle("active");
  }
};

document.querySelector("body").addEventListener("click", function(event){

  if(overview_btn.classList.contains("active")) {
    overview_btn.classList.remove("active");
  }
});
overview_btn.addEventListener("click", showDropDownDesktop);
