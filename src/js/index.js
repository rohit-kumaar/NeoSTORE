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
