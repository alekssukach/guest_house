$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    items: 2,
    responsive: {
      0: {
        center: true,
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });
});

const owl = $(".owl-carousel");

$(".round-btn-left").click(function () {
  owl.trigger("next.owl.carousel");
});

$(".round-btn-right").click(function () {
  owl.trigger("prev.owl.carousel");
});

/*Modal-window*/
const btnBookNow = document.querySelector(".book-now-btn");
const modalWindow = document.querySelector(".book-modal");

btnBookNow.addEventListener("click", function () {
  modalWindow.classList.toggle("none");
});

/*Menu Icon*/
const navBtn = document.querySelector(".nav__toggle");
const nav = document.querySelector(".header-nav");
const menuIcon = document.querySelector(".menu-icon");

navBtn.onclick = function () {
  nav.classList.toggle("nav--mobile");
  menuIcon.classList.toggle("menu-icon-active");
  document.body.classList.toggle("no-scroll");
};
