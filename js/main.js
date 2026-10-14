
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Update the copyright year automatically.
  const yearElement = document.getElementById("current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Close the mobile navigation after a navigation link is selected.
  const navigation = document.getElementById("mainNavigation");

  if (navigation && typeof bootstrap !== "undefined") {
    const navigationLinks = navigation.querySelectorAll(".nav-link, .nav-cta");

    navigationLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (
          window.innerWidth < 992 &&
          navigation.classList.contains("show")
        ) {
          bootstrap.Collapse.getOrCreateInstance(navigation).hide();
        }
      });
    });
  }
});
