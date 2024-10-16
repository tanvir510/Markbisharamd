(function ($) {
  "use strict";

  /*****************************
   * Banner Swiper
   *****************************/
  document.addEventListener("DOMContentLoaded", function () {
    // Select all accordion buttons
    const accordionButtons = document.querySelectorAll(".accordion-button");
    const images = document.querySelectorAll(".accordion-image");

    // Function to show image corresponding to accordion item
    const showImage = (index) => {
      images.forEach((image, i) => {
        if (i === index) {
          image.classList.add("show");
          image.classList.remove("hide");
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    };

    // Add event listener to each accordion button
    accordionButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
        showImage(index);
      });
    });

    // Show first image initially
    showImage(0);
  });

  /*****************************
   * Scroll Bottom to Top
   *****************************/
  $(".scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
})(jQuery);
