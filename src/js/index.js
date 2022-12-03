import { bestSellersDetails } from "./data/bestSellersDetails.js";
import { shopByDepartmentDetails } from "./data/shopByDepartmentDetails.js";
import { specialOfferProductDetails } from "./data/specialOfferProductDetails.js";

sidebarMenu();
shopByDepartment(shopByDepartmentDetails);
timer();
owlCarousel();
bestSellersProductList(bestSellersDetails);
specialOffer(specialOfferProductDetails);
likeHeartButton();

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
  let date = 5;
  const countDownDate = new Date(`Dec ${date} , 2022 15:37:25`).getTime();

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

function likeHeartButton() {
  const hearts = document.querySelectorAll(".heart");

  hearts.forEach((heart) => {
    heart.addEventListener("click", function (e) {
      heart.classList.toggle("toggleRedColor");
    });
  });
}

function bestSellersProductList(bestSellersDetail) {
  const bestSellersProduct = document.getElementById("bestSellersProduct");

  bestSellersDetail.forEach((product) => {
    let html = `<div class="col-12 col-sm-6 col-lg-4 my-2">
    <div class="card border-0">
      <div class="d-lg-flex align-items-center justify-content-center">
        <img src=${product.productImage} class="card-img-top rounded-0" alt="White Wooden Chair"
          title=" White Wooden Chair" />

        <div
          class="card-body w-100 h-auto d-flex flex-column align-items-start justify-content-between pb-4 gap-2">
          <div class="d-flex align-items-center justify-content-start gap-1">
            <span class="icon-full-start"></span>
            <span class="icon-full-start"></span>
            <span class="icon-full-start"></span>
            <span class="icon-full-start"></span>
            <span class="icon-full-start"></span>
          </div>

          <div>
            <h5 class="card-title mb-1 text-black-800 fw-500 fs-14">
              ${product.title}
            </h5>
            <div class="card-text fw-500 fs-14">
              <del class="text-black-400">${product.price}</del>
              <span class="text-black-800">${product.discount}</span>
            </div>
          </div>

          <div>
            <button class="heart bg-transparent">
              <span class="icon-Shape-1"></span>
            </button>

            <button class="vector-2 bg-transparent">
              <span class="icon-Vector-2"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`;

    bestSellersProduct.innerHTML += html;
  });
}

function shopByDepartment(shopByDepartmentDetail) {
  const shopByDepartmentProduct = document.getElementById(
    "shopByDepartmentProduct"
  );

  shopByDepartmentDetail.forEach((product) => {
    let html = ` <div class="col-12 col-sm-6 col-md-4 col-xl-2 mb-md-4 mb-xl-0">
                    <a
                      href=${product.href}
                      class="d-flex flex-column align-items-center justify-content-center gap-3 w-100 h-100 text-decoration-none"
                    >
                      <span class="icon-${product.icon}"></span>
                      <h3 class="fw-500 fs-5">${product.product}</h3>
                    </a>
                  </div>`;

    shopByDepartmentProduct.innerHTML += html;
  });
}

function specialOffer(specialOfferProductDetail) {
  const specialOfferProduct = document.getElementById("specialOfferProduct");

  specialOfferProductDetail.forEach((product) => {
    let html = `  <div class="col-12 col-md-6 col-xl-4">
                    <div class="card border-0">
                      <div class="card-header bg-transparent border-0">
                        <a
                          href=${product.link}
                          class="text-black-600 fw-500 fs-5 text-decoration-none"
                          >${product.name}</a
                        >
                        <div class="text-primary fw-500 fs-5">₹1200.00</div>
                      </div>

                      <div class="card-body">
                        <a href=${product.image.link} title=${product.name}>
                          <img
                            loading="lazy"
                            src=${product.image.source}
                            alt=${product.name}
                            class="w-100"
                          />
                        </a>
                      </div>

                      <div class="card-footer bg-transparent border-0 pt-3 pb-4">
                        <div class="progress">
                          <div
                            class="progress-bar ${product.image.progress} bg-lightGreen"
                            role="progressbar"
                            aria-label="Basic example"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>

                        <div
                          class="d-flex align-items-center justify-content-between mt-2"
                        >
                          <span class="fw-500 fs-14 text-black-600"
                            >Available: ${product.image.available}</span
                          >
                          <div>
                            <span class="icon-full-start"></span>
                            <span class="icon-full-start"></span>
                            <span class="icon-full-start"></span>
                            <span class="icon-full-start"></span>
                            <span class="icon-half-start"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`;

    specialOfferProduct.innerHTML += html;
  });
}
