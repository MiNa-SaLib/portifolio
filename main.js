let arrhello = "Front-end developer";
let edit = document.querySelector(".edit");
let i = 0;

setInterval(function () {
  if (i >= 0 && i <= arrhello.length) {
    edit.textContent += arrhello[i];
    i++;
  }
  if (i > arrhello.length) {
    i = 0;
    edit.textContent = ``;
  }
}, 200);
//---------------------------------------Menue
let menue = document.querySelector("#menue");
let navul = document.querySelector(".navul");
menue.addEventListener("click", function () {
  navul.classList.toggle("display");
});
//hide menue
let hid = document.querySelector("nav i");
document.addEventListener("click", function (e) {
  if (e.target != hid) {
    if (navul.className == "navul display") {
      navul.classList.toggle("display");
    }
  }
});
//-----------------------------------Scroll button
let btn = document.querySelector(".top");
let resum = document.querySelector(".resum");

btn.addEventListener("click", function () {
  window.scrollTo(0, 0, "smoth");
});
window.onscroll = function () {
  if (window.scrollY >= resum.offsetTop) {
    btn.classList.add("scroll");
  }
  if (window.scrollY < resum.offsetTop) {
    btn.classList.remove("scroll");
  }
};
