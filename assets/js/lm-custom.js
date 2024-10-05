(function ($) {
  "use strict";

  /*****************************
   * Banner Swiper
   *****************************/
  var mySwiper = new Swiper(".lm-sec-five-container", {
    spaceBetween: 1,
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loop: true,

    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },

    // Listen to the slide transition end event
    on: {
      init: function () {
        updateSlideContent(); // Initial content update
      },
      slideChangeTransitionEnd: function () {
        updateSlideContent(); // Update content when the slide transition is complete
      },
    },
  });

  // Function to update content based on the active slide
  function updateSlideContent() {
    // Find the active slide based on the '.swiper-slide-active' class
    const activeSlide = document.querySelector(".swiper-slide-active");

    // Ensure activeSlide exists before proceeding
    if (activeSlide) {
      const contentId = Number(activeSlide.getAttribute("data-content-id")) + 1;

      console.log("Active Slide Content ID:", contentId);

      // Hide all content divs
      document.querySelectorAll(".slide-content").forEach(function (contentDiv) {
        contentDiv.classList.remove("active");
      });

      // Show the corresponding content div for the active slide
      const activeContent = document.getElementById("content-" + contentId);
      if (activeContent) {
        activeContent.classList.add("active");
      }
    } else {
      console.error("Active slide not found!");
    }
  }

  /*****************************
   * Scroll Bottom to Top
   *****************************/
  $(".scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
})(jQuery);
