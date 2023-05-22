"use strict";

//masked inputs
$(function () {
  Inputmask({
    "mask": "+7 (999) 999 - 99 - 99"
  }).mask('.phone-mask');
});

// tabs
document.addEventListener('DOMContentLoaded', function () {
  var tabsBtn = document.querySelectorAll('.tabs__btn');
  tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {
      tabsBtn.forEach(function (tabsBtn) {
        tabsBtn.classList.remove('is-active');
      });
      var path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
      document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add('is-active');
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
    });
  });
});

// mobile menu
$(function () {
  var btnMenu = document.querySelectorAll('.js-open-mobile-menu');
  var menu = document.querySelector('.js-mobile-menu');
  var body = document.querySelector('body');
  btnMenu.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.add('is-open');
      body.classList.add('opened-menu');
    });
  });
  var closeBtn = document.querySelector('.js-close-mobile-menu');
  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.remove('is-open');
    body.classList.remove('opened-menu');
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
    delay: 5000
  },
  parallax: true,
  pagination: {
    el: ".hero-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".hero-button-next",
    prevEl: ".hero-button-prev"
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
    nextEl: ".service-button-next",
    prevEl: ".service-button-prev"
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
    }
  }
});

// projects slider
var swiperProjects = new Swiper(".js-projects-slider", {
  grid: {
    rows: 2,
    fill: "row"
  },
  navigation: {
    nextEl: ".projects-button-next",
    prevEl: ".projects-button-prev"
  },
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
      grid: false
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: false
    },
    576: {
      grid: {
        rows: 2,
        fill: "row"
      },
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

// reviews slider
var swiperReviews = new Swiper(".js-reviews-slider", {
  slidesPerView: 3,
  speed: 900,
  loop: true,
  navigation: {
    nextEl: ".reviews-button-next",
    prevEl: ".reviews-button-prev"
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
    }
  }
});

// materials slider
var swiperReviews = new Swiper(".js-materials-slider", {
  slidesPerView: 5,
  speed: 900,
  loop: true,
  navigation: {
    nextEl: ".materials-button-next",
    prevEl: ".materials-button-prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50
    }
  }
});

// up button
$(document).ready(function () {
  var buttonUp = $('.js-up-button');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      buttonUp.addClass('is-show');
    } else {
      buttonUp.removeClass('is-show');
    }
  });
  buttonUp.on('click', function () {
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

//custom scroll
Array.prototype.forEach.call(document.querySelectorAll('.js-custom-scroll'), function (el) {
  return new SimpleBar(el);
});

// Yandex карта
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.805007, 37.589931],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 17
    }),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div class="map-logo">$[properties.iconContent]</div>'),
    myPlacemarkWithContent = new ymaps.Placemark([55.805007, 37.589931], {
      hintContent: 'г. Москва, ул. Новодмитровская д2, корп. 1, эт 14 пом. XCII',
      balloonContent: 'г. Москва, ул. Новодмитровская д2, корп. 1, эт 14 пом. XCII',
      iconContent: '<img  src="assets/img/sprite.svg#logo">'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'assets/img/map-ball.png',
      // Размеры метки.
      iconImageSize: [14, 14],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [0, -60],
      // Смещение слоя с содержимым относительно слоя с картинкой.
      iconContentOffset: [5, -75],
      // Макет содержимого.
      iconContentLayout: MyIconContentLayout
    });
  myMap.geoObjects.add(myPlacemarkWithContent);
}