$(document).ready(function () {
  $('.food-slider').slick({
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
            slidesToShow: 1.5,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,

        }
      }
    ]
  });
});
