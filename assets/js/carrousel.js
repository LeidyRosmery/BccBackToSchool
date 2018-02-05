$('.slider-img-actual').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  cssEase: 'linear',
  swipe: true,
  asNavFor: '.slider-opciones',
  // autoplay: true
});
$('.slider-title').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  cssEase: 'linear',
  swipe: true,
  asNavFor: '.slider-tips',
  // autoplay: true
});

$('.slider-opciones').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-img-actual',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  responsive: [{
    breakpoint: 992,
    settings: "unslick"
  }]
});

$('.slider-banner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  fade: true,
  cssEase: 'linear',
  arrows: true,
  autoplaySpeed: 4000,
  autoplay: true,
  vertical: false,
  infinite: true,
  responsive: [{
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        swipe: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        swipe: false,
      }
    }
  ]
});

$('.slider-tips').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  asNavFor: '.slider-title',
  arrows: true,
  adaptiveHeight: true,
  swipe: true,
  autoplaySpeed: 4000,
  autoplay: false,

  autoplaySpeed: 500,
  responsive: [{
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        swipe: false,
          autoplaySpeed: 6000,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        arrows: false,
        autoplay: true,
        dots: true,
        autoplaySpeed: 6000,
        swipe: false,
      }
    }
  ]
});
