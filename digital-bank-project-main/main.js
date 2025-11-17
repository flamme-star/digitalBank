let burger = document.querySelector(".burger");
let ul = document.querySelector("ul");
let img = document.querySelector(".burger img");

let isCliked = true;
burger.addEventListener("click", () => {
  if (isCliked) {
    ul.classList.toggle("active");
    img.src = "./images/icon-close.svg";
    isCliked = false;
  } else {
    ul.classList.remove("active");
    isCliked = true;
    img.src = "./images/icon-hamburger.svg";
  }
});
