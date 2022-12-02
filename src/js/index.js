timer();
sidebarMenu();
owlCarousel();

function owlCarousel() {
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
}

function sidebarMenu() {
  const sideMenu = document.querySelector("#sideMenu"),
    sidebar = document.querySelector("#sidebar"),
    closeMenu = document.querySelector("#closeMenu");

  sideMenu.addEventListener("click", () => {
    sidebar.style.display = "block";
  });

  closeMenu.addEventListener("click", () => {
    sidebar.style.display = "none";
    // location.reload();
  });
}

function timer() {
  const countDownDate = new Date("Dec 5, 2022 15:37:25").getTime();
  const x = setInterval(function () {
    const now = new Date().getTime(),
      distance = countDownDate - now,
      days = Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(
      "timer"
    ).innerHTML = `end in ${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "EXPIRED";
    }
  }, 1000);
}
