"use strict";

/*=============== SHOW MENU ===============*/
var nav = document.getElementById("nav-menu"),
  icon = document.getElementById("nav-icon"),
  closeMenu = document.getElementById("nav-close"),
  header = document.getElementById("header");
if (nav) {
  icon.addEventListener("click", function () {
    nav.classList.add("show-menu");
    header.classList.add("scroll-header");
    icon.style.display = "none";
    closeMenu.style.display = "block";
    closeMenu.addEventListener("click", function () {
      nav.classList.remove("show-menu");
      closeMenu.style.display = "none";
      icon.style.display = "block";
      scrollHeader();
    });
  });
}

/*=============== REMOVE MENU WITH LINKS ===============*/
var navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  var navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
  closeMenu.style.display = "none";
  icon.style.display = "block";
}
navLink.forEach(function (n) {
  return n.addEventListener("click", linkAction);
});

/*=============== CHANGE HEADER BACKGROUND ===============*/
function scrollHeader() {
  if (this.scrollY >= 80 || nav.classList.contains("show-menu")) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
var sections = document.querySelectorAll("article[id]");
function scrollActive() {
  var scrollY = window.pageYOffset;
  sections.forEach(function (current) {
    var sectionHeight = current.offsetHeight;
    var sectionTop = current.offsetTop - 50;
    var sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== EXPECTATIONS ACCORDION ===============*/
var list = document.querySelector(".about__list");
var arrow = document.querySelector(".about__list-arrow");
var content = document.querySelector(".about__list-content");
arrow.addEventListener("click", function () {
  if (list.classList.contains("accordion-open")) {
    content.removeAttribute("style");
    list.classList.remove("accordion-open");
  } else {
    content.style.height = content.scrollHeight + 16 + "px";
    list.classList.add("accordion-open");
  }
});

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  var scrollUp = document.getElementById("scrollup");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
var themeButton = document.getElementById("theme-button");
var darkTheme = "dark-theme";
var iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
var selectedTheme = localStorage.getItem("selected-theme");
var selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
var getCurrentTheme = function getCurrentTheme() {
  return document.body.classList.contains(darkTheme) ? "dark" : "light";
};
var getCurrentIcon = function getCurrentIcon() {
  return themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";
};

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", function () {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});