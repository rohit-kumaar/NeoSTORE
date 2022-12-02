/* This is a function that is listening for the DOM to be ready. */
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

const initApp = () => {};

// querySelectorAll function
function qsAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

// querySelector function
function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

$(".banner-owl-carousel").owlCarousel({
  loop: true,
  items: 1,
  dots: false,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
});

$(".neostorefurniture-owl-carousel").owlCarousel({
  loop: true,
  items: 1,
  dots: false,
  margin: 10,
  nav: false,

  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
});

const sideMenu = document.querySelector("#sideMenu");
const sidebar = document.querySelector("#sidebar");
const closeMenu = document.querySelector("#closeMenu");

sideMenu.addEventListener("click", () => {
  sidebar.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  sidebar.style.display = "none";
  // location.reload();
});
