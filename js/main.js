let list = document.querySelector("ul");
let bar = document.querySelector(".bars");

bar.addEventListener("click", function () {
  if (list.classList.contains("right")) {
    list.classList.remove("right");
  } else {
    list.classList.add("right");
  }
});

//carousel
$(".carousel").carousel({
  interval: 2500,
  keyboard: true,
  pause: false,
});

// loaders
$(document).ready(function () {
  $(window).on("load", function () {
    $(".lds-hourglass").fadeOut(700, function () {
      $(".lds-hourglass").parent().fadeOut(700);
    });
  });
});

// scrollreveal
ScrollReveal().reveal("#scrollreveal", {
  delay: 700,
  distance: "150px",
  scale: 0.85
});
ScrollReveal().reveal(".lessons", {
  distance: "150px",
  delay: 600,
  scale: 0.85
});

ScrollReveal().reveal(".bottom-footer", {
  delay: 500,
  scale: 0.5
});
