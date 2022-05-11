"use strict";

/* JS */
var windowPos;
var mobileBarH = 0;
window.addEventListener('load', function () {
  windowPos = $(window).scrollTop();
  resizeUrl();
  $('.visual__tit').addClass('txt-hello');
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

  if (App.sizeMode == 0) {
    mobileBarH = $('.height-default').height() - window.innerHeight; // var renderLoopID = undefined;
    // (function renderLoop(){
    //   renderLoopID = window.requestAnimationFrame(renderLoop);
    // }());

  }
});

$(window).scroll(function () {
  windowPos = $(window).scrollTop();
  imgInteraction();
  txtInteraction();
  videoInteraction();
}); //img 공통 인터렉션 적용

function imgInteraction() {
  var $helloImg = $('.wrap').find('.img-box');
  $helloImg.each(function () {
    var $this = $(this),
        thisH = $this.find('img').outerHeight(),
        thisT = $this.offset().top;

    if (windowPos >= thisT - $(window).height() + thisH / 3 && !$this.hasClass('img-hello')) {
      $this.addClass('img-hello');
    }
  });
}
 //text 공통 인터렉션 적용


function txtInteraction() {
  var $helloTxt = $('.wrap').find('.motion-txt');
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

function videoInteraction() {
    var $helloImg = $('.wrap').find('.youtube-area');
    $helloImg.each(function () {
      var $this = $(this),
          thisH = $this.find('iframe').outerHeight(),
          thisT = $this.offset().top;
  
      if (windowPos >= thisT - $(window).height() + thisH / 3 && !$this.hasClass('opacity1')) {
        $this.addClass('opacity1');
      }
    });
  }


function keyvisualAnimate() {
  if (windowPos <= 10) {
    var myduration = 0.2;
    var kvTl = gsap.timeline({
      trigger: '.visual',
      start: function start() {
        return "top top";
      },
      ease: 'none'
    });
    kvTl.to('.visual__img-01', {
      visibility: 'visible',
      duration: myduration
    }).to('.visual__img-02', {
      visibility: 'visible',
      duration: myduration
    }).to('.visual__img-03', {
      visibility: 'visible',
      duration: myduration
    }).to('.visual__img-04', {
      visibility: 'visible',
      duration: myduration
    }).addLabel('a').to('.visual__img-04', {
      duration: 1,
      width: 100 + '%',
      height: 100 + '%'
    }, 'a').fromTo('.visual__img-04 img', {
      xPercent: -50,
      yPercent: 0,
      scale: 1.5
    }, {
      duration: 1,
      xPercent: -50,
      yPercent: 0,
      scale: 1
    }, 'a').to('.c-dimmed', {
      duration: 1,
      opacity: 0.58
    }, 'a').fromTo('.visual__tit', {
      yPercent: -30,
      bottom: 0 + "%"
    }, {
      duration: 1,
      ease: 'Power2.easeOut',
      color: '#ffffff',
      yPercent: 50,
      bottom: 50 + "%"
    }, 'a');
    kvTl.eventCallback("onComplete", function () {
      $('.visual__desc').addClass('txt-hello');
      $('html, body').attr('style', '');
    });
  } else {
    $('.visual__img').css({
      visibility: 'visible'
    });
    $('.visual__img-04').css({
      visibility: 'visible',
      width: '100%',
      height: '100vh'
    });
    $('.visual__img-04 img').css({
      transform: 'translate(-50%, 0%) scale(1)'
    });
    $('.c-dimmed').css({
      opacity: '0.58'
    });
    $('.visual__tit').css({
      visibility: 'visible',
      bottom: '50%',
      transform: 'translateY(50%)',
      color: '#fff'
    });
    $('.visual__desc').css({
      visibility: 'visible'
    });
    $('.visual__desc .txt-target').css({
      opacity: '1',
      visibility: 'visible'
    });
    $('.visual__desc').addClass('txt-hello');
  }
} //웹 모바일 url 링크 교체

function resizeUrl() {
  $('.c-url-anchor').each(function () {
    var $this = $(this);
    var thisUrl = App.sizeMode == 0 ? $this.attr('data-url-mo') : $this.attr('data-url-pc');
    $this.attr('href', thisUrl);
  });
}

ScrollTrigger.matchMedia({
  '(min-width: 769px)': function minWidth769px() {
    ScrollTrigger.config({
      autoRefreshEvents: "resize,visibilitychange,DOMContentLoaded,load"
    });
    window.addEventListener('load', function () {
      gsap.timeline({
        scrollTrigger: {
          trigger: $('.section01'),
          start: 'bottom bottom',
          scrub: 0,
          pin: true,
          pinSpacing: false
        }
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: $('.section05'),
          start: 'bottom bottom',
          scrub: 0,
          pin: true,
          pinSpacing: false
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
          trigger: $('.section01'),
          start: 'bottom bottom',
          end: 'bottom bottom',
          endTrigger: $('.section05'),
          scrub: 0,
          pin: true,
          pinSpacing: false
        }
      });

    });
  }
});