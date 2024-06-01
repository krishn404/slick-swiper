$(document).ready(function() {
    $('.testimonial-slider').slick({
        infinite: true,
        slidesToShow: 6, 
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 50000000,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

const responsiveSwiper = new Swiper('.swiper-container', {
  breakpoints: {
      0: {
          slidesPerView: 1,
          spaceBetween: 20
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 30
      },
      1024: {
          slidesPerView: 4,
          spaceBetween: 40
      }
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var descriptions = document.querySelectorAll('.description');
  descriptions.forEach(function(description) {
      var lastWord = description.textContent.trim().split(/\s+/).pop();
      var lastWordPosition = lastWord.length;
      var closingQuote = description.parentElement.querySelector('.description::after');
      closingQuote.style.left = 'calc(' + lastWordPosition + 'ch + 20px)';
  });
});