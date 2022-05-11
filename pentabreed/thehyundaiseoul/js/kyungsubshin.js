"use strict";

/* JS */
var windowPos;
window.addEventListener('load', function () {
  windowPos = $(window).scrollTop();
  setTimeout(function () {
    windowPos = $(window).scrollTop();

    if (windowPos < 10) {
      $('html, body').css({
        height: '100%',
        overflow: 'hidden'
      });
    }

    keyvisualAnimate();
  }, 100);
});
$(window).scroll(function () {
  windowPos = $(window).scrollTop();
  imgInteraction();
  txtInteraction();
}); //img 공통 인터렉션 적용

function imgInteraction() {
  var $helloImg = $('.kyungsubshin').find('.img-box');
  $helloImg.each(function () {
    var $this = $(this),
      thisH = $this.find('img').outerHeight(),
      thisT = $this.offset().top;

    if (windowPos >= thisT - $(window).height() + thisH / 3 && !$this.hasClass('img-hello')) {
      $this.addClass('img-hello');
    }
  });
} //text 공통 인터렉션 적용

function txtInteraction() {
  var $helloTxt = $('.kyungsubshin').find('.motion-txt');
  $helloTxt.each(function () {
    var $this = $(this),
      thisH = $this.outerHeight(),
      thisT = $this.offset().top;

    if (!$this.hasClass('visual__desc')) {
      if (windowPos >= thisT - $(window).height() + thisH && !$this.hasClass('txt-hello')) {
        $this.addClass('txt-hello');
      }
    }
  });
} //kv animation

function keyvisualAnimate() {
  var kvHeading = document.querySelector('.visual__heading');
  var kvImage = document.querySelector('.visual__image .img-box');
  var kvTitle = document.querySelector('.visual__cross-title');
  var kvText = document.querySelector('.visual__txt');
  var myduration = 0.4;

  if (windowPos <= 10) {
    var timeline = gsap.timeline();
    timeline.delay(1);
    timeline.to(kvHeading, {
      opacity: 0,
      duration: myduration
    });
    if (App.sizeMode !== 0) {
      timeline.to(kvImage, {
        onStart: function onStart() {
          return kvImage.classList.add('img-hello');
        }
      });
    }
    timeline.to(kvTitle, {
      onStart: function onStart() {
        return kvTitle.classList.add('txt-hello');
      }
    });
    timeline.to(kvText, {
      onStart: function onStart() {
        return kvText.classList.add('txt-hello');
      }
    });
    if (App.sizeMode === 0) {
      timeline.to(kvImage, {
        onStart: function onStart() {
          return kvImage.classList.add('img-hello');
        }
      });
    }
    timeline.eventCallback('onComplete', function () {
      document.querySelector('.p-tech').classList.remove('loading');
    });
    timeline.eventCallback("onComplete", function () {
      $('html, body').attr('style', '');
    });
  } else {
    $('.visual__heading').css({'opacity': 0});
    $('.visual__image .img-box').css({'opacity': 1});
    $('.visual__cross-title .txt-target, .visual__txt .txt-target').css({
      opacity: '1',
      visibility: 'visible'
    });
  }
}

ScrollTrigger.matchMedia({
  '(min-width: 769px)': function minWidth769px() {
    ScrollTrigger.config({
      autoRefreshEvents: "resize,visibilitychange,DOMContentLoaded,load"
    });
    window.addEventListener('load', function () {
      gsap.timeline({
        scrollTrigger: {
          trigger: $('.kyungsubshin__sec-1'),
          start: 'bottom bottom',
          endTrigger: $('.kyungsubshin__sec-2'),
          end: 'top top',
          scrub: 0,
          pin: true,
          pinSpacing: false,
        }
      });
      gsap.timeline({
        scrollTrigger: {
          trigger: $('.kyungsubshin__sec-2'),
          start: 'top top',
          scrub: 0,
        }
      });
    });
  },
  '(max-width: 768px)': function maxWidth768px() {
    var vw = window.innerWidth;
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth !== vw) {
        vw = window.innerWidth;
        ScrollTrigger.refresh();
      }
    });
    window.addEventListener('load', function () {
      gsap.timeline({
        scrollTrigger: {
          trigger: $('.kyungsubshin__sec-1'),
          start: 'bottom bottom',
          endTrigger: $('.kyungsubshin__sec-2'),
          end: 'top top',
          scrub: 0,
          pin: true,
          pinSpacing: false,
        }
      });
      gsap.timeline({
        scrollTrigger: {
          trigger: $('.kyungsubshin__sec-2'),
          start: 'top top',
          scrub: 0,
        }
      });
    });
  }
});

/**
 * downloadImage
 */
var btnDownload = document.querySelectorAll('[data-download]'); // Must use FileSaver.js 2.0.2 because 2.0.3 has issues.

btnDownload.forEach(function (items) {
  items.addEventListener('click', function (e) {     
    e.preventDefault();
    var imagePath = this.getAttribute('data-download');
    var fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
  });
});

function getFileName(str) {
  return str.substring(str.lastIndexOf('/') + 1);
}

$(function() {
  var swiper = new Swiper(".story__slide", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        764: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
      
  });
});