"use strict";
/*-------------------------------------------------------------
 Add Event On Element
---------------------------------------------------------------*/

const addEventOnElement = function (element, type, callback) {
  if (element.length > 1) {
    for (let item = 0; item < element.length; item++) {
      element[item].addEventListener(type, callback);
    }
  } else {
    element.addEventListener(type, callback);
  }
};

/*-------------------------------------------------------------
 Navbar Toggle
---------------------------------------------------------------*/
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElement(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};
addEventOnElement(navbarLinks, "click", closeNavbar);

/*-------------------------------------------------------------
 Sticky Header and Back to top Button active
---------------------------------------------------------------*/
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 150) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};
addEventOnElement(window, "scroll", headerActive);

let lastScrolledPosition = 0;
const headerSticky = function () {
  if (lastScrolledPosition >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }
  lastScrolledPosition = window.scrollY;
};
addEventOnElement(window, "scroll", headerSticky);

/*-------------------------------------------------------------
 Scroll reveal effect
---------------------------------------------------------------*/
const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let item = 0; item < sections.length; item++) {
    if (sections[item].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[item].classList.add("active");
    }
  }
};
scrollReveal();
addEventOnElement(window, "scroll", scrollReveal);
