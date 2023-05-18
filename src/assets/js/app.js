//masked inputs
$(() => {
  Inputmask({"mask": "+7 (999) 999 - 99 - 99"}).mask('.phone-mask');
});

// tabs
document.addEventListener('DOMContentLoaded', function () {
  const tabsBtn = document.querySelectorAll('.tabs__btn');
  tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {
      tabsBtn.forEach(tabsBtn => {
        tabsBtn.classList.remove('is-active');
      });
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('is-active');
      el.classList.add('is-active');
    });
  });
});

//enabled submit

$(document).ready(function () {

  $('.form__submit').prop('disabled', true);

  $('.js-enabled-submit').change(function () {

    $('.form__submit').prop('disabled', function (i, val) {
      return !val;
    })
  });
})

// mobile menu
$(() => {
  const btnMenu = document.querySelectorAll('.js-open-mobile-menu');
  const menu = document.querySelector('.js-mobile-menu');
  const body = document.querySelector('body');
  btnMenu.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.add('is-open');
      body.classList.add('opened-menu')
    });
  })
  const closeBtn = document.querySelector('.js-close-mobile-menu');
  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.remove('is-open');
    body.classList.remove('opened-menu')
  });
});



// fixed header
$(document).ready(function () {
  $(function () {
    var timer = null;
    window.addEventListener('scroll', function () {
      if (timer !== null) {
        var stickySidebar = function stickySidebar() {
          var scrollDistance = $(document).scrollTop(),
            headerHeight = $('.header').outerHeight(true),
            // sidebarHeight = $('aside').outerHeight(true),
            footerOffsetTop = $('.js-stop-header').offset().top,
            $header = $('header');
          if (scrollDistance >= headerHeight) {
            $header.addClass('header_fixed');
          } else {
            $header.removeClass('header_fixed');
          }
          if (scrollDistance + headerHeight >= footerOffsetTop) {
            $header.removeClass('header_fixed');
            $header.addClass('out');
          }
        };
        clearTimeout(timer);
        //document.querySelector('header').classList.add('out', 'header_fixed');
        stickySidebar();
        $(document).scroll(function () {
          stickySidebar();
        });
      }
      timer = setTimeout(function () {
        // document.querySelector('header').classList.remove('out');
      }, 800);
    }, false);
  });
});

//hero slider
var swiperHero = new Swiper(".js-hero-slider", {
  loop: true,
  speed: 900,
  autoplay: {
    delay: 5000,
  },
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});


// honor slider
var swiperhonors = new Swiper(".honors-slider", {
  slidesPerView: 2.8,
  spaceBetween: 50,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".honors__nav-next",
    prevEl: ".honors__nav-prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    769: {
      slidesPerView: 1.8,
      spaceBetween: 100
    },
    1025: {
      slidesPerView: 2.4,
      spaceBetween: 100
    }
  }
});

// service slider

var swiperService = new Swiper(".js-service-slider", {

  slidesPerView: 3,
  speed: 900,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
});


// up button
$(document).ready(function() {
  var buttonUp = $('.js-up-button');
  $(window).scroll (function () {
    if ($(this).scrollTop () > 300) {
      buttonUp.addClass('is-show');
    } else {
      buttonUp.removeClass('is-show');
    }
  });
  buttonUp.on('click', function(){
    $('body, html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});

// mobile modules
$('.js-open-modules-mobile').on('click', function (e) {
  e.preventDefault();
  $(this).parent().toggleClass('is-open');

});
