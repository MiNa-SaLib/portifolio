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
//--------------visible---------shuffel
let all = document.querySelector(".allul");
let cssul = document.querySelector(".cssul");
let animationul = document.querySelector(".animationul");
let javaul = document.querySelector(".javaul");
let allthing = document.querySelector(".allthing");
let css3 = document.querySelector(".css3");
let cssanimation = document.querySelector(".cssanimation");
let javaScript = document.querySelector(".javaScript");

all.addEventListener("click", function () {
  // add class active to target element
  all.classList.add("active");
  cssul.classList.remove("active");
  animationul.classList.remove("active");
  javaul.classList.remove("active");
  // make target element visible
  allthing.classList.remove("shuffelhiden");
  css3.classList.add("shuffelhiden");
  cssanimation.classList.add("shuffelhiden");
  javaScript.classList.add("shuffelhiden");
});

cssul.addEventListener("click", function () {
  // add class active to target element
  all.classList.remove("active");
  cssul.classList.add("active");
  animationul.classList.remove("active");
  javaul.classList.remove("active");
  // make target element visible
  css3.classList.remove("shuffelhiden");
  allthing.classList.add("shuffelhiden");
  cssanimation.classList.add("shuffelhiden");
  javaScript.classList.add("shuffelhiden");
});

animationul.addEventListener("click", function () {
  // add class active to target element
  all.classList.remove("active");
  cssul.classList.remove("active");
  animationul.classList.add("active");
  javaul.classList.remove("active");
  // make target element visible
  css3.classList.add("shuffelhiden");
  allthing.classList.add("shuffelhiden");
  cssanimation.classList.remove("shuffelhiden");
  javaScript.classList.add("shuffelhiden");
});
javaul.addEventListener("click", function () {
  // add class active to target element
  all.classList.remove("active");
  cssul.classList.remove("active");
  animationul.classList.remove("active");
  javaul.classList.add("active");
  // make target element visible
  css3.classList.add("shuffelhiden");
  allthing.classList.add("shuffelhiden");
  cssanimation.classList.add("shuffelhiden");
  javaScript.classList.remove("shuffelhiden");
});
 
