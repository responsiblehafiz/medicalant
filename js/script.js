(function ($) {
  "use strict";

  // project area
  $(".service-active").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    animation: true,
    speed: 500,
    fade: false,
    arrows: false,
    nave: false,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // blog area
  $(".blog-active").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    animation: true,
    speed: 500,
    fade: false,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // testimonial area
  $(".testimonial-active").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    animation: true,
    speed: 500,
    fade: false,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // counterUp
  $(".counter").counterUp({
    delay: 5,
    time: 1500,
  });

    // sticky
    var wind = $(window);
    var sticky = $("#sticky-header");
    wind.on("scroll", function () {
      var scroll = wind.scrollTop();
      if (scroll < 100) {
        sticky.removeClass("sticky");
      } else {
        sticky.addClass("sticky");
      }
    });

  // brand area
  $(".brand-carousel").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    animation: true,
    speed: 500,
    fade: false,
    arrows: false,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });


  // testi area
  $(".testi-carousel").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    animation: true,
    speed: 500,
    padding: 50,
    fade: false,
    arrows: false,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });




  // team area
  // brand area
  $(".team-carousel").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    animation: true,
    speed: 500,
    fade: false,
    arrows: false,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

   // service tab option ===============


    // Array of button IDs and corresponding tab IDs
    const buttonTabPairs = [
      { button: "#ajax-tab-btn-1", tab: "#ajax-tab-1" },
      { button: "#ajax-tab-btn-2", tab: "#ajax-tab-2" },
      { button: "#ajax-tab-btn-3", tab: "#ajax-tab-3" },
      { button: "#ajax-tab-btn-4", tab: "#ajax-tab-4" },
      { button: "#ajax-tab-btn-5", tab: "#ajax-tab-5" }
  ];

  buttonTabPairs.forEach(pair => {
      $(pair.button).click(function () {
          // Add 'active' class to the clicked button and corresponding tab
          $(pair.button).addClass("active");
          $(pair.tab).addClass("active");

          // Remove 'active' class from all other buttons
          buttonTabPairs.forEach(otherPair => {
              if (otherPair.button !== pair.button) {
                  $(otherPair.button).removeClass("active");
              }
          });

          // Remove 'active' class from all other tabs
          buttonTabPairs.forEach(otherPair => {
              if (otherPair.tab !== pair.tab) {
                  $(otherPair.tab).removeClass("active");
              }
          });
      });
  });


  // Author code here
})(jQuery);
