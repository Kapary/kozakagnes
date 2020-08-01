window.onload = function () {
  const offerLinks = document.querySelectorAll(".stories-list-item-link");
  offerLinks.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      offerLinks.forEach(function (item) {
        item.classList.add("faded");
      });

      this.classList.remove("faded");
    });

    item.addEventListener("mouseout", function () {
      offerLinks.forEach(function (item) {
        item.classList.remove("faded");
      });
    });
  });

  document
    .getElementById("mobile-menu-trigger")
    .addEventListener("click", function () {
      this.classList.toggle("active");
      document
        .getElementById("mobile-menu-wrapper")
        .classList.toggle("visible");
    });

  document
    .getElementById("mobile-menu-wrapper")
    .addEventListener("click", function () {
      document
        .getElementById("mobile-menu-wrapper")
        .classList.remove("visible");
      document.getElementById("mobile-menu-trigger").classList.remove("active");
    });

  // smooth scrolling for main menu
  var mainMenus = document.querySelectorAll(".main-menu");

  mainMenus.forEach(function (mainMenu) {
    mainMenu.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(e.target.hash).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
};
