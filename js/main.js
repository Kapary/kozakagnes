window.onload = function () {
  const offerLinks = document.querySelectorAll(".stories-list-item-link");
  offerLinks.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      offerLinks.forEach(function (item) {
        item.classList.add("faded");
        item.classList.remove("active");
      });

      this.classList.remove("faded");
      this.classList.add("active");
    });

    item.addEventListener("mouseout", function () {
      offerLinks.forEach(function (item) {
        item.classList.remove("faded");
        item.classList.remove("active");
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
      if (document.querySelector(".is-homepage")) {
        e.preventDefault();
        document.querySelector(e.target.hash).scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  var totalNumberWrapper = document.getElementById("slider-total-number");
  var currentIndexWrapper = document.getElementById("slider-current-index");

  totalNumberWrapper.innerHTML = document.querySelectorAll(
    ".slide-container"
  ).length;

  // Slider with references
  var glide = new Glide(".glide", {
    animationDuration: 1000
  }).mount();

  glide.on("run.after", function () {
    currentIndexWrapper.innerHTML = glide.index + 1;
  });
};
