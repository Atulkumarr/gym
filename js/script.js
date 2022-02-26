$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  dots: false,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
// $(".hamburger").click(function () {
//   $("ul").toggleClass("active");
// });
let ul = document.querySelector("ul");
let hamburger = document.querySelector("#check");

hamburger.addEventListener("click", () => {
  ul.classList.toggle("active");
});
