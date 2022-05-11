"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* JS */
// ;(function ($) {
//   $('html, body').css({
//     overflow: 'hidden'
//   })
// })(window.jQuery)
gsap.registerPlugin(ScrollTrigger); // 새로고침 시 상단이동 처리

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

gsap.defaults({
  ease: "none",
  duration: 2
});
var secStyleTl;
var lastDevice = null;
ScrollTrigger.matchMedia({
  '(min-width: 769px)': function minWidth769px() {
    if (lastDevice !== 'PC' && lastDevice) {
      location.reload();
    }

    lastDevice = 'PC';
  },
  '(max-width: 768px)': function maxWidth768px() {
    if (lastDevice !== 'Mobile' && lastDevice) {
      location.reload();
    }

    lastDevice = 'Mobile';
  }
});
ScrollTrigger.matchMedia({
  '(min-width: 769px)': function minWidth769px() {
    App.bindCallback(['load'], function () {
      var kvMovieTl = gsap.timeline();
      kvMovieTl.to('html', {
        onStart: function onStart() {
          $('html, body').css({
            overflow: 'hidden'
          });
        }
      }).to('html', {
        delay: 3,
        onStart: function onStart() {
          $('html, body').attr('style', "");
          $('html, body').addClass('auto');
        }
      }); // $('html, body').animate({scrollTop: 0},0);

      var wScrollTop = $(window).scrollTop(); // if(wScrollTop < 10 && introAni01.progress() === 0){ // 첫 진입시에만 hidden 처리
      //   $('html, body').css({
      //     overflow: 'hidden'
      //   })
      //   introAni01.play();
      // }
      // introAni01.eventCallback("onComplete", function(){
      //   $('html, body').css({
      //     overflow: 'auto'
      //   })
      //   // setTimeout(() => {
      //   //   moveSecFunc(secStyleTl.scrollTrigger.start + 1, 0.6)
      //   // }, 1500);
      // })
      // if (introAni01.progress() === 1) {
      //   ScrollTrigger.refresh(true) // 화면 리사이즈시 컨텐츠 위치 못잡는 현상 대응
      //   ScrollTrigger.update()
      // }
    }); // var introAni01 = gsap.timeline()
    // .fromTo('.intro__desc',{
    //   top: 0+'%',
    //   // xPercent: 52,
    //   xPercent: 37,
    //   yPercent: -100,
    //   rotation : -35.5,
    //   opacity: 1,
    // },{
    //   duration: 1.3,
    //   top: 50+'%',
    //   // xPercent: 52,
    //   xPercent: 37,
    //   // yPercent: 346,
    //   yPercent: 375,
    //   rotation : -19.5,
    //   opacity: 1,
    //   ease: Expo.easeIn
    // })
    // .to('.intro__desc', {
    //   duration: 0.2,
    //   rotation : -9.5,
    //   ease: "Power1.easeIn"
    // })
    // .addLabel('sb01')
    // .fromTo('.intro__symbol01', {
    //   top: 0+'%',
    //   xPercent: -52,
    //   yPercent: -100,
    //   rotation: 60,
    //   opacity:1
    // },{
    //   duration: 1.2,
    //   top: 50+'%',
    //   xPercent: -52,
    //   yPercent: 28.5,
    //   rotation: 10,
    //   opacity:1,
    //   ease: Expo.easeIn
    // },'-=1','sb01')
    // .to('.intro__symbol01', {
    //   duration: 0.2,
    //   xPercent: -62,
    //   yPercent: 32,
    //   rotation : -0,
    //   ease: "Power1.easeIn"
    // })
    // .fromTo('.intro__tit-life',{
    //   top: 0+'%',
    //   xPercent: -208,
    //   yPercent: -150,
    //   rotation : 70,
    //   opacity: 1,
    // },{
    //   duration: 1.2,
    //   top: 50+'%',
    //   xPercent: -188,
    //   yPercent: 281,
    //   rotation : 30,
    //   opacity: 1,
    //   ease: Expo.easeIn
    // },'-=1')
    // .to('.intro__tit-life', {
    //   duration: 0.2,
    //   xPercent: -194,
    //   yPercent: 293,
    //   rotation : 20,
    //   ease: "Power1.easeIn"
    // })
    // .fromTo('.intro__tit-cu',{
    //   top: 0+'%',
    //   xPercent: 25.5,
    //   yPercent: -100,
    //   rotation : -70,
    //   opacity: 1,
    // },{
    //   duration: 1.2,
    //   top: 50+'%',
    //   xPercent: 25.5,
    //   yPercent: 285,
    //   rotation : -30,
    //   opacity: 1,
    //   ease: Expo.easeIn
    // },'-=1.2')
    // .to('.intro__tit-cu', {
    //   duration: 0.2,
    //   xPercent: 23.5,
    //   // yPercent: 282,
    //   yPercent: 249,
    //   rotation : -22,
    //   ease: "Power1.easeIn"
    // })
    // .fromTo('.intro__symbol03', {
    //   top: 0+'%',
    //   xPercent: -15,
    //   yPercent: -130,
    //   rotation : -40,
    //   opacity: 1,
    // },{
    //   duration: 1,
    //   top: 50+'%',
    //   xPercent: -18,
    //   yPercent: -40,
    //   rotation : -10,
    //   opacity:1,
    //   ease: "Power4.easeIn"
    // },'-=1')
    // .to('.intro__symbol03', {
    //   duration: 0.3,
    //   xPercent: -11,
    //   yPercent : -34,
    //   rotation : 0,
    //   ease: "Power2.easeOut"
    // })
    // .fromTo('.intro__symbol02', {
    //   top: 0+'%',
    //   xPercent: -110,
    //   yPercent: -130,
    //   rotation : 80,
    //   opacity: 1,
    // },{
    //   duration: 1,
    //   top: 50+'%',
    //   xPercent: -110,
    //   yPercent: -52,
    //   rotation : 20,
    //   opacity: 1,
    //   ease: "Power4.easeIn"
    // },'-=1.1')
    // .to('.intro__symbol02', {
    //   duration: 0.3,
    //   xPercent: -122,
    //   yPercent: -41,
    //   rotation : 0,
    //   ease: "Power1.easeIn"
    // },'-=0.1')
    // .fromTo('.intro__symbol04', {
    //   top: 0+'%',
    //   xPercent: -48,
    //   yPercent: -100,
    //   rotation : 15,
    //   opacity: 1,
    // },{
    //   duration: 0.6,
    //   top: 50+'%',
    //   xPercent: -41,
    //   yPercent: -103,
    //   rotation : 10,
    //   opacity: 1,
    //   ease: "Power4.easeIn"
    // },'-=0.7')
    // .to('.intro__symbol04', {
    //   duration: 0.4,
    //   xPercent: -51,
    //   yPercent: -95,
    //   rotation : 0,
    //   ease: Bounce.easeOut
    // },'-=0.1')
  },
  '(max-width: 768px)': function maxWidth768px() {
    var kvMovieTl = gsap.timeline();
    kvMovieTl.to('html', {
      onStart: function onStart() {
        $('html, body').css({
          overflow: 'hidden'
        });
      }
    }).to('html', {
      delay: 3,
      onStart: function onStart() {
        $('html, body').attr('style', "");
        $('html, body').addClass('auto');
      }
    }); // App.bindCallback(['load','resize'], function () {
    //   var wScrollTop = $(window).scrollTop();
    //   if(wScrollTop < 10 && introAni01.progress() === 0){ // 첫 진입시에만 hidden 처리
    //     $('html, body').css({
    //       // overflow: 'hidden'
    //     })
    //     introAni01.play();
    //   }
    //   introAni01.eventCallback("onComplete", function(){
    //     // $('html, body').css({
    //     //   overflow: 'auto'
    //     // })
    //     $('html, body').addClass('auto')
    //     // $('html, body').attr('style', "")
    //     // setTimeout(() => {
    //     //   moveSecFunc(secStyleTl.scrollTrigger.start + 1, 0.6)
    //     // }, 1500);
    //   })
    // })
    // var introAni01 = gsap.timeline()
    // .fromTo('.intro__desc',{
    //   top: 0+'%',
    //   xPercent: -41,
    //   yPercent: -140,
    //   rotation : -55.7,
    //   opacity: 1,
    // },{
    //   duration: 1.3,
    //   top: 50+'%',
    //   xPercent: -41,
    //   yPercent: 323,
    //   rotation : -19.7,
    //   opacity: 1,
    //   ease: Expo.easeIn
    // })
    // .to('.intro__desc', {
    //   duration: 0.2,
    //   rotation : -9.5,
    //   ease: "Power2.easeIn"
    // })
    // .fromTo('.intro__tit-life',{
    //   top: 0+'%',
    //   xPercent: -193,
    //   yPercent: -100,
    //   rotation : 80,
    //   opacity: 1,
    // },{
    //   duration: 1.2,
    //   top: 50+'%',
    //   xPercent: -193,
    //   yPercent: 202,
    //   rotation : 47,
    //   opacity: 1,
    //   ease: Expo.easeIn
    // },'-=1')
    // .to('.intro__tit-life', {
    //   duration: 0.1,
    //   rotation : 34,
    //   ease: "Power2.easeIn"
    // })
    // .fromTo('.intro__tit-cu',{
    //   top: 0+'%',
    //   xPercent: -18.5,
    //   yPercent: -100,
    //   rotation : -70,
    //   opacity: 1,
    // },{
    //   duration: 1.2,
    //   top: 50+'%',
    //   xPercent: -18.5,
    //   yPercent: 322,
    //   rotation : -30,
    //   opacity: 1,
    //   ease: Expo.easeIn
    // },'-=1.2')
    // .to('.intro__tit-cu', {
    //   duration: 0.1,
    //   rotation : -22,
    //   ease: "Power2.easeIn"
    // })
    // .addLabel('sb01')
    // .fromTo('.intro__symbol01', {
    //   top: 0+'%',
    //   xPercent: -49,
    //   yPercent: -120,
    //   rotation: 60,
    //   opacity:1
    // },{
    //   duration: 1.2,
    //   top: 50+'%',
    //   xPercent: -49,
    //   yPercent: -1,
    //   rotation: 10,
    //   opacity:1,
    //   ease: Expo.easeIn
    // },'-=1','sb01')
    // .to('.intro__symbol01', {
    //   duration: 0.3,
    //   xPercent: -60,
    //   yPercent: 3,
    //   rotation : 0,
    //   ease: "Power2.easeIn"
    // })
    // .fromTo('.intro__symbol03', {
    //   top: 0+'%',
    //   xPercent: -19,
    //   yPercent: -130,
    //   rotation : -53,
    //   opacity: 1,
    // },{
    //   duration: 1,
    //   top: 50+'%',
    //   xPercent: -19,
    //   yPercent: -69,
    //   rotation : -13,
    //   opacity:1,
    //   ease: "Power4.easeIn"
    // },'-=1')
    // .to('.intro__symbol03', {
    //   duration: 0.3,
    //   xPercent: -10,
    //   yPercent : -60,
    //   rotation : 0,
    //   ease: "Power2.easeOut"
    // })
    // .fromTo('.intro__symbol02', {
    //   top: 0+'%',
    //   xPercent: -98,
    //   yPercent: -130,
    //   rotation : 80,
    //   opacity: 1,
    // },{
    //   duration: 1,
    //   top: 50+'%',
    //   xPercent: -98,
    //   yPercent: -78,
    //   rotation : 28,
    //   opacity: 1,
    //   ease: "Power4.easeIn"
    // },'-=1.1')
    // .to('.intro__symbol02', {
    //   duration: 0.3,
    //   xPercent: -120,
    //   yPercent: -65,
    //   rotation : 0,
    //   ease: "Power1.easeIn"
    // },'-=0.1')
    // .fromTo('.intro__symbol04', {
    //   top: 0+'%',
    //   xPercent: -49,
    //   yPercent: -100,
    //   rotation : 15,
    //   opacity: 1,
    // },{
    //   duration: 0.6,
    //   top: 50+'%',
    //   xPercent: -46,
    //   yPercent: -126,
    //   rotation : 10,
    //   opacity: 1,
    //   ease: "Power4.easeIn"
    // },'-=0.7')
    // .to('.intro__symbol04', {
    //   duration: 0.4,
    //   xPercent: -49,
    //   yPercent: -123,
    //   rotation : 0,
    //   ease: Bounce.easeOut
    // },'-=0.1')
  }
});
var secStyle = $('.md__sec-style');
var secPicnic = $('.md__sec-picnic');
var secGround = $('.md__sec-ground');
var secBetter = $('.md__sec-better');
var windowReWidth;
var maxFont = '';
var minFont = '';
windowReWidth = $(window).outerWidth();
maxFont = maxFontSize(windowReWidth);
minFont = minFontSize(windowReWidth);

function maxFontSize(windowReWidth) {
  var size = '';

  if (windowReWidth > 1921) {
    size = "180px";
  } else if (windowReWidth <= 1920 && windowReWidth >= 1200) {
    size = "180rem";
  } else if (windowReWidth <= 1199 && windowReWidth > 768) {
    size = "150rem";
  }

  return size;
}

function minFontSize(windowReWidth) {
  var size = '';

  if (windowReWidth > 1921) {
    size = "32px";
  } else if (windowReWidth <= 1920 && windowReWidth >= 1200) {
    size = "32rem";
  } else if (windowReWidth <= 1199 && windowReWidth > 768) {
    size = "25rem";
  }

  return size;
}

var styleFirstLoad = true;
var picnicFirstLoad = true;
var groundFirstLoad = true;
var betterFirstLoad = true;

function test(event) {
  event.preventDefault();
} // 1번섹션 style section 애니메이션 함수


function keyvisualAnimate(parent) {
  var txtDuration = 0.4;
  var photoDuration = 0.2;
  var timeline = gsap.timeline();

  if (!secStyle.hasClass('active')) {
    $('html, body').removeClass('auto');

    if (App.sizeMode == 0) {
      document.addEventListener("touchmove", test, {
        passive: false
      });
    }

    setTimeout(function () {
      secStyle.addClass('active');
    }, 500);
  }

  timeline.play();
  timeline.eventCallback("onStart", function () {
    if (styleFirstLoad && !App.sizeMode == 0) {
      styleFirstLoad = false;
    }
  });
  timeline.to(parent.find('.pic-card__section-tit'), {
    duration: txtDuration,
    onStart: function onStart() {
      return parent.find('.pic-card__section-tit__box').addClass('txt-hello');
    }
  }).to(parent.find('.pic-card__intro-txt'), {
    duration: 5,
    onStart: function onStart() {
      return parent.find('.pic-card__intro-txt').addClass('txt-hello');
    }
  }).to(parent.find('.pic-card__unit--left'), {
    visibility: 'visible',
    duration: photoDuration
  }).to(parent.find('.pic-card__unit--top'), {
    visibility: 'visible',
    duration: photoDuration
  }).to(parent.find('.pic-card__unit--right'), {
    visibility: 'visible',
    duration: photoDuration
  });
  timeline.eventCallback("onComplete", function () {
    styleFirstLoad = false;
    setTimeout(function () {
      // $(window).scrollTop(secHeightArray[0])
      $('html, body').attr('style', "");
      $('html, body').addClass('auto');

      if (App.sizeMode == 0) {
        document.removeEventListener("touchmove", test);
      }
    }, 700);
  });
} //2번3번섹션 애니메이션 함수 


function keyvisualAnimateNormal(parent) {
  var txtDuration = 0.4;
  var photoDuration = 0.2;
  var timeline = gsap.timeline();
  var isPicnic;

  if (parent.hasClass('md__sec-picnic')) {
    isPicnic = true;
  } else {
    isPicnic = false;
  }

  timeline.play();
  timeline.eventCallback("onStart", function () {
    if (isPicnic) {
      if (!secPicnic.hasClass('active')) {
        $('html, body').css({
          overflow: 'hidden'
        });

        if (App.sizeMode == 0) {
          document.addEventListener("touchmove", test, {
            passive: false
          });
        }

        setTimeout(function () {
          secPicnic.addClass('active');
        }, 500);
      }
    } else {
      if (!secGround.hasClass('active')) {
        $('html, body').css({
          overflow: 'hidden'
        });

        if (App.sizeMode == 0) {
          document.addEventListener("touchmove", test, {
            passive: false
          });
        }

        setTimeout(function () {
          secGround.addClass('active');
        }, 500);
      }
    }
  });
  timeline.to(parent.find('.visual .txt-unit'), {
    duration: txtDuration,
    onStart: function onStart() {
      return parent.find('.visual .txt-unit__tit').addClass('txt-hello');
    }
  }).to(parent.find('.visual .visual__key-txt-box'), {
    duration: 3,
    onStart: function onStart() {
      return parent.find('.visual .visual__key-txt-box').addClass('txt-hello');
    }
  }).to(parent.find('.visual .down-unit-1'), {
    visibility: 'visible',
    duration: photoDuration
  }).to(parent.find('.visual .down-unit-2'), {
    visibility: 'visible',
    duration: photoDuration
  }).to(parent.find('.visual .down-unit-3'), {
    visibility: 'visible',
    duration: photoDuration
  });
  timeline.eventCallback("onComplete", function () {
    if (isPicnic) {
      picnicFirstLoad = false;
      setTimeout(function () {
        $('html, body').attr('style', "");
        $('html, body').addClass('auto');

        if (App.sizeMode == 0) {
          document.removeEventListener("touchmove", test);
        }
      }, 700);
    } else {
      groundFirstLoad = false;
      setTimeout(function () {
        $('html, body').attr('style', "");
        $('html, body').addClass('auto');

        if (App.sizeMode == 0) {
          document.removeEventListener("touchmove", test);
        }
      }, 700);
    }
  });
} // 4번섹션 better section 애니메이션 함수


function keyvisualAnimateBetter(parent) {
  var txtDuration = 0.4;
  var photoDuration = 0.2;
  var timeline = gsap.timeline();

  if (!secBetter.hasClass('active')) {
    $('html, body').css({
      overflow: 'hidden'
    });

    if (App.sizeMode == 0) {
      document.addEventListener("touchmove", test, {
        passive: false
      });
    }

    setTimeout(function () {
      secBetter.addClass('active');
    }, 500);
  }

  timeline.play();
  timeline.eventCallback("onStart", function () {
    if (betterFirstLoad && !App.sizeMode == 0) {
      betterFirstLoad = false;
    }
  });
  timeline.to(parent.find('.pic-card__section-tit'), {
    duration: txtDuration,
    onStart: function onStart() {
      return parent.find('.pic-card__section-tit__box').addClass('txt-hello');
    }
  }).to(parent.find('.pic-card__intro-txt'), {
    duration: 4,
    onStart: function onStart() {
      return parent.find('.pic-card__intro-txt').addClass('txt-hello');
    }
  }).to(parent.find('.pic-card__unit--top'), {
    visibility: 'visible',
    duration: photoDuration
  }).to(parent.find('.pic-card__unit--right'), {
    visibility: 'visible',
    duration: photoDuration
  }).to(parent.find('.pic-card__unit--left'), {
    visibility: 'visible',
    duration: photoDuration
  }).to(parent.find('.pic-card__unit--left figure'), {
    visibility: 'visible',
    duration: photoDuration
  });
  timeline.eventCallback("onComplete", function () {
    betterFirstLoad = false;
    setTimeout(function () {
      $('html, body').attr('style', "");
      $('html, body').addClass('auto');

      if (App.sizeMode == 0) {
        document.removeEventListener("touchmove", test);
      }
    }, 700);
  });
} // 이미지 갤러리 영역 scrollTo (lock)


var scrollToFlag = true;
var betterScrollToFlag = true;

function moveSecFunc(pos, dur) {
  if (scrollToFlag) {
    gsap.to(window, {
      duration: dur,
      scrollTo: {
        y: pos,
        autoKill: false
      }
    });
  }

  if (!scrollToFlag && betterScrollToFlag) {
    gsap.to(window, {
      duration: dur,
      scrollTo: {
        y: pos,
        autoKill: false
      }
    });
  }
} // 슬라이드 페이지네이션


$('.md__sec').each(function (index, item) {
  var total = $(item).find('.pic-card__txt').length;
  $(item).find('.pic-card__nav-total').text(total);

  for (var i = 0; i < total; i++) {
    $(item).find('.pic-card__nav-curr .curr-wrap').append("<em>" + (i + 1) + "</em>");
  }
});
App.bindCallback(['resize'], function () {
  windowReWidth = $(window).outerWidth();
  ScrollTrigger.update();
  ScrollTrigger.refresh(true);
  maxFont = maxFontSize(windowReWidth);
  minFont = minFontSize(windowReWidth);
}); //symbolPin  

function symbolSet(vh) {
  var windowH = $(window).innerHeight();
  var symbolCssOffset = vh;
  var symbolPin = windowH - windowH * symbolCssOffset;
  return symbolPin;
} // 섹션 백그라운드 체인지


function backgroundColorChange() {
  var targetEl = document.querySelectorAll('.md__sec-bg');
  var changeEl = document.querySelector('.p-md');

  var _loop = function _loop(i) {
    ScrollTrigger.create({
      trigger: targetEl[i],
      start: function start() {
        return "top 30%";
      },
      end: function end() {
        return 'bottom 30%';
      },
      onEnter: function onEnter() {
        changeEl.classList.add('black');
      },
      onEnterBack: function onEnterBack() {
        changeEl.classList.add('black');
      },
      onLeave: function onLeave() {
        if (targetEl[i] !== document.querySelector('.md__sec-box4')) changeEl.classList.remove('black');
      },
      onLeaveBack: function onLeaveBack() {
        changeEl.classList.remove('black');
      }
    });
  };

  for (var i = 0; i < targetEl.length; i++) {
    _loop(i);
  }
}

var windowPos = 0;
ScrollTrigger.matchMedia({
  //전 구간
  'all': function all() {// imgCover ()
    // textInteraction()
  },
  'min-width: 1920px': function minWidth1920px() {},
  //PC 구간
  '(min-width: 769px)': function minWidth769px() {
    var sectionChangeDelay = 1;
    var sectionChangeFirstDelay = 0.03;
    var sectionChangeDuration = 0.5;
    var sectionLockDuration = 0.2;
    var sectionLockDelay = 0.2;
    var style = 5000; // as-is 8000

    var picnic = 4000; // as-is 4500

    var ground = 2500; // as-is 1800

    var better = 5000; // as-is 6000

    var stackTime = 400; // as-is 200

    var moveSecFuncTime = 0.4;
    var downMoveDuration = 0.3;
    var downOpacityDuration = 0.3; // scrollTrigger Resize
    // App.bindCallback(['resize'], function () {
    //   ScrollTrigger.update()
    //   ScrollTrigger.refresh(true)
    // })

    App.bindCallback(['resize'], function () {
      ScrollTrigger.getAll().forEach(function (ST) {
        ST.refresh();
      });
    });
    ScrollTrigger.addEventListener('refreshInit', function () {
      // curPrg = interviewCoverMotion.scrollTrigger.progress
      windowReWidth = $(window).outerWidth();
      maxFont = maxFontSize(windowReWidth);
      minFont = minFontSize(windowReWidth);
    });
    ScrollTrigger.addEventListener('refresh', function () {// interviewCoverMotion.scrollTrigger.scroll(curPrg * ScrollTrigger.maxScroll(window))
    }); //1번 섹션 - 스타일 섹션 관련 시작 (pc)

    secStyleTl = gsap.timeline({
      scrollTrigger: {
        trigger: secStyle,
        start: function start() {
          return 'top top';
        },
        end: function end() {
          return '+=' + style + 'rem'; //8000
        },
        scrub: true,
        pin: true,
        id: 'test',
        // markers: true,
        onUpdate: function onUpdate(self) {
          if (self.progress < 0.01) {} else {}
        },
        onEnter: function onEnter() {
          $('.quick').css({
            'opacity': '1',
            'visibility': 'visible'
          });
          keyvisualAnimate(secStyle);
          $('.sec-style-symbol').css({// 'position': 'fixed',
            // 'top': '100%'
          });
        },
        onEnterBack: function onEnterBack(self) {
          $('.sec-style-symbol').css({// 'position': 'fixed',
            // 'top': '100%'
          });
        },
        onLeaveBack: function onLeaveBack() {
          $('.quick').css({
            'opacity': '0',
            'visibility': 'hidden'
          });
          $('.sec-style-symbol').css({
            'position': 'absolute',
            'top': '100vh'
          });
        },
        onLeave: function onLeave() {
          $('.sec-style-symbol').css({// 'position': 'fixed',
            // 'top': '0%'
          });
          $('html, body').removeClass('scroll-lock');
          styleFirstLoad = false; // moveSecFunc(interviewCoverMotion.scrollTrigger.start + 10, moveSecFuncTime)

          if (!secPicnic.hasClass('active')) {// $('html, body').css({
            //   overflow: 'hidden'
            // })
          }
        }
      }
    });
    var stylePicDuration = 0.5;
    window.addEventListener('load', function () {
      secStyleTl.to({}, {// delay:sectionLockDelay -1,
        // duration: sectionLockDuration
      }).addLabel('moving').fromTo(secStyle.find('.pic-card__unit--left'), {
        top: 50 + "%",
        left: 50 + "%",
        xPercent: '-50',
        yPercent: '-50'
      }, {
        top: 50 + "%",
        left: 50 + "%",
        xPercent: '-149',
        yPercent: '42',
        // duration: stylePicDuration,
        onComplete: function onComplete() {
          //브랜드 네임 등장 인터렉션
          secStyle.find('.pic-card__unit').find('.pic-card__target.hello').find('.motion-txt').addClass('txt-hello');
        }
      }, 'moving').fromTo(secStyle.find('.pic-card__unit--top'), {
        top: 50 + "%",
        left: 50 + "%",
        xPercent: '-50',
        yPercent: '-50'
      }, {
        top: -50 + "%",
        left: -50 + "%",
        xPercent: '-82',
        yPercent: '31' // duration: stylePicDuration,

      }, 'moving').fromTo(secStyle.find('.pic-card__unit--right'), {
        top: 50 + "%",
        left: 50 + "%",
        xPercent: '-50',
        yPercent: '-50'
      }, {
        top: -50 + "%",
        left: -50 + "%",
        xPercent: '201',
        yPercent: '-14' // duration: stylePicDuration,

      }, 'moving').fromTo(secStyle.find('.pic-card__unit--topright'), {
        top: 50 + "%",
        left: 50 + "%",
        xPercent: '-64',
        yPercent: '-59'
      }, {
        top: -43 + "%",
        left: 66 + "%",
        xPercent: '0',
        yPercent: '0' // duration: stylePicDuration,

      }, 'moving') //글자 사라지기
      .addLabel('secStyle-text').to({}, {
        onStart: function onStart() {
          secStyle.find('.pic-card__section-tit').addClass('hidden');
          secStyle.find('.pic-card__txt-set').find('.pic-card__txt:first-child').addClass('hello hola');
        },
        onReverseComplete: function onReverseComplete() {
          secStyle.find('.pic-card__unit').find('.pic-card__target.hello').find('.motion-txt').removeClass('txt-hello');
          secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(1)').removeClass('hello');
          secStyle.find('.pic-card__section-tit').removeClass('hidden');
        }
      }).to({}, {
        onReverseComplete: function onReverseComplete() {
          secStyle.find('.pic-card__unit').find('.pic-card__target.hello').find('.motion-txt').removeClass('txt-hello');
          secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(1)').removeClass('hello');
        }
      }) // 두번째 섹션
      .addLabel('changeTo2').to(secStyle.find('.pic-card__unit--left'), {
        opacity: 1,
        onStart: function onStart() {
          secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(1)').removeClass('hello');
          secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(1)').removeClass('hello');
          secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').addClass('hello');
          secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(2)').addClass('hello');
          secStyle.find('.curr-wrap').css({
            'transform': 'translateY(-33%)'
          });
        },
        onComplete: function onComplete() {},
        onReverseComplete: function onReverseComplete() {
          secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(2)').removeClass('hello');
          secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').removeClass('hello');
          secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(1)').addClass('hello');
          secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(1)').addClass('hello');
          secStyle.find('.curr-wrap').css({
            'transform': 'translateY(0)'
          });
        }
      }, 'changeTo2').addLabel('changeTo3') // 세번째 섹션
      .to(secStyle.find('.pic-card__unit--left'), {
        duration: 0.1,
        //나갈때 횟수 더많은걸 줄임
        opacity: 1,
        onStart: function onStart() {
          secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(2)').removeClass('hello');
          secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').removeClass('hello');
          secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(3)').addClass('hello hola3');
          secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(3)').addClass('hello');
          secStyle.find('.curr-wrap').css({
            'transform': 'translateY(-66%)'
          });
        },
        onComplete: function onComplete() {},
        onReverseComplete: function onReverseComplete() {
          secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(3)').removeClass('hello');
          secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(3)').removeClass('hello');
          secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(2)').addClass('hello hola2');
          secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').addClass('hello');
          secStyle.find('.curr-wrap').css({
            'transform': 'translateY(-33%)'
          });
        }
      }, 'changeTo3').to(secStyle.find('.pic-card__unit--left'), {});
    }); //1번 섹션 - 스타일 섹션 관련 끝
    //2번 섹션 - 피크닉 관련 시작

    var interviewCoverMotion = gsap.timeline({
      scrollTrigger: {
        trigger: $('.md__sec-picnic .visual-full-inner'),
        start: function start() {
          return 'top top';
        },
        end: function end() {
          return '+=' + 2800 + 'rem';
        },
        scrub: 1,
        pin: true,
        onEnter: function onEnter() {
          keyvisualAnimateNormal(secPicnic);
        }
      }
    });
    window.addEventListener('load', function () {
      interviewCoverMotion.to({}, {
        delay: sectionLockDelay,
        duration: sectionLockDuration
      }).fromTo('.md__sec-picnic .down-unit-3', {
        top: 50 + "%",
        left: 50 + "%",
        xPercent: -50,
        yPercent: -50
      }, {
        top: 100 + "%",
        left: 50 + "%",
        xPercent: -50,
        yPercent: 0,
        duration: downMoveDuration
      }).fromTo('.md__sec-picnic .down-unit-2', {
        top: 50 + "%",
        left: 50 + "%",
        xPercent: -50,
        yPercent: -50
      }, {
        top: 100 + "%",
        left: 50 + "%",
        xPercent: -50,
        yPercent: 0,
        duration: downMoveDuration
      }).fromTo('.md__sec-picnic .down-unit-1', {
        top: 50 + "%",
        left: 50 + "%",
        xPercent: -50,
        yPercent: -50
      }, {
        top: 100 + "%",
        left: 50 + "%",
        xPercent: -50,
        yPercent: 0,
        duration: downMoveDuration
      }).addLabel('txtFade').fromTo('.md__sec-picnic .txt-unit__tit', {
        opacity: 1
      }, {
        duration: downOpacityDuration,
        opacity: 0
      }, 'txtFade').fromTo('.md__sec-picnic .visual__key-txt', {
        opacity: 1
      }, {
        opacity: 0,
        duration: downOpacityDuration
      }, 'txtFade').to('.md__sec-picnic .txt-unit__tit', {
        duration: 0.5
      });
    });
    var interviewArticleMotion = gsap.timeline({
      scrollTrigger: {
        trigger: $('.md__sec-picnic .interview'),
        pin: $('.md__sec-picnic .itv-photo-fix'),
        start: function start() {
          return 'top top';
        },
        end: function end() {
          return 'bottom bottom';
        },
        scrub: 1
      }
    });
    var picnicInterviewSec1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".itv-picnic-marker-1",
        start: "top 30%",
        end: "bottom 30%",
        id: 'maker-1',
        scrub: 1,
        onEnter: function onEnter() {
          secPicnic.find('.itv-people__name.marker-1-target').addClass('txt-hello');
          secPicnic.find('.itv-photo-picnic.marker-1-target > div').addClass('img-hello');
        },
        onEnterBack: function onEnterBack() {
          secPicnic.find('.itv-people__name.marker-1-target').addClass('txt-hello');
          secPicnic.find('.itv-people__name.marker-2-target').removeClass('txt-hello');
          secPicnic.find('.itv-photo-picnic.marker-2-target').removeClass('active');
        }
      }
    });
    var picnicInterviewSec2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".itv-picnic-marker-2",
        start: "top 50%",
        end: "bottom 30%",
        scrub: 1,
        onEnter: function onEnter() {
          secPicnic.find('.itv-people__name.marker-1-target').removeClass('txt-hello');
          secPicnic.find('.itv-photo-picnic.marker-1-target').removeClass('active');
          secPicnic.find('.itv-photo-picnic.marker-1-target > div').removeClass('img-hello');
          secPicnic.find('.itv-people__name.marker-2-target').addClass('txt-hello');
          secPicnic.find('.itv-photo-picnic.marker-2-target').addClass('active');
          secPicnic.find('.itv-photo-picnic.marker-2-target > div').removeClass('img-hello');
        },
        onLeaveBack: function onLeaveBack() {
          secPicnic.find('.itv-people__name.marker-2-target').removeClass('txt-hello');
          secPicnic.find('.itv-photo-picnic.marker-2-target').removeClass('active');
          secPicnic.find('.itv-photo-picnic.marker-1-target').addClass('active leave-back');
        }
      }
    }); //picnic -  이미지갤러리

    var picnicPicCard = gsap.timeline({
      scrollTrigger: {
        trigger: ".md__sec-picnic .pic-card__inner",
        start: "top top",
        end: '+=' + picnic + 'rem',
        // 4500
        scrub: 1,
        pin: true,
        id: 'picCard____under____interview',
        onEnter: function onEnter() {},
        onUpdate: function onUpdate(self) {
          if (self.progress < 0.33) {
            $('.md__sec-picnic .pic-card__change').each(function (idx, item) {
              $(item).find('.pic-card__target').eq(1).removeClass('hello');
              $(item).find('.pic-card__target').eq(0).addClass('hello');
              $(item).find('.pic-card__target').eq(2).removeClass('hello');
            });
            $(secPicnic).find('.curr-wrap').css({
              'transform': 'translateY(0)'
            });
          } else if (self.progress > 0.33 && self.progress < 0.66) {
            $('.md__sec-picnic .pic-card__change').each(function (idx, item) {
              $(item).find('.pic-card__target').eq(2).removeClass('hello');
              $(item).find('.pic-card__target').eq(0).removeClass('hello');
              $(item).find('.pic-card__target').eq(1).addClass('hello');
            });
            $(secPicnic).find('.curr-wrap').css({
              'transform': 'translateY(-33%)'
            });
          } else {
            $('.md__sec-picnic .pic-card__change').each(function (idx, item) {
              $(item).find('.pic-card__target').eq(0).removeClass('hello');
              $(item).find('.pic-card__target').eq(1).removeClass('hello');
              $(item).find('.pic-card__target').eq(2).addClass('hello');
            });
            $(secPicnic).find('.curr-wrap').css({
              'transform': 'translateY(-66%)'
            });
          }
        },
        onLeave: function onLeave() {// moveSecFunc(interviewCoverMotion2.scrollTrigger.start + 10, moveSecFuncTime);
        }
      }
    }); //2번 섹션 - 피크닉 관련 끝
    //3번 섹션 - 그라운드 관련 시작

    var interviewCoverMotion2 = gsap.timeline({
      scrollTrigger: {
        trigger: $('.md__sec-ground .visual-full-inner'),
        // markers:true,
        start: function start() {
          return 'top top';
        },
        end: function end() {
          return '+=' + 2800 + 'rem';
        },
        scrub: 1,
        pin: true,
        onEnter: function onEnter() {
          keyvisualAnimateNormal(secGround);
        }
      }
    });
    window.addEventListener('load', function () {
      interviewCoverMotion2.to({}, {
        delay: sectionLockDelay,
        duration: sectionLockDuration
      }).fromTo('.md__sec-ground .down-unit-3', {
        top: 50 + "%",
        left: 50 + "%",
        xPercent: -50,
        yPercent: -50
      }, {
        top: 100 + "%",
        left: 50 + "%",
        xPercent: -50,
        yPercent: 0,
        duration: downMoveDuration
      }).fromTo('.md__sec-ground .down-unit-2', {
        top: 50 + "%",
        left: 50 + "%",
        xPercent: -50,
        yPercent: -50
      }, {
        top: 100 + "%",
        left: 50 + "%",
        xPercent: -50,
        yPercent: 0,
        duration: downMoveDuration
      }).fromTo('.md__sec-ground .down-unit-1', {
        top: 50 + "%",
        left: 50 + "%",
        xPercent: -50,
        yPercent: -50
      }, {
        top: 100 + "%",
        left: 50 + "%",
        xPercent: -50,
        yPercent: 0,
        duration: downMoveDuration
      }).addLabel('txtFade').fromTo('.md__sec-ground .txt-unit__tit', {
        opacity: 1
      }, {
        duration: downOpacityDuration,
        opacity: 0
      }, 'txtFade').fromTo('.md__sec-ground .visual__key-txt', {
        opacity: 1
      }, {
        duration: downOpacityDuration,
        opacity: 0
      }, 'txtFade').to('.md__sec-ground .txt-unit__tit', {
        duration: 0.5
      });
    });
    var interviewArticleMotion2 = gsap.timeline({
      scrollTrigger: {
        trigger: $('.md__sec-ground .interview'),
        pin: $('.md__sec-ground .itv-photo-fix'),
        start: function start() {
          return 'top top';
        },
        end: function end() {
          return 'bottom bottom';
        },
        scrub: 1,
        onEnter: function onEnter() {
          $('.sec-ground-symbol').css({
            'position': 'fixed'
          });
        },
        onLeave: function onLeave() {
          $('.sec-ground-symbol').css({
            'position': 'absolute',
            'top': $('.md__sec-ground .interview').outerHeight() - symbolSet(0.15) + 'px'
          });
        },
        onEnterBack: function onEnterBack() {
          $('.sec-ground-symbol').css({
            'position': 'fixed',
            'top': '15vh'
          });
        },
        onLeaveBack: function onLeaveBack() {
          $('.sec-ground-symbol').css({
            'position': 'absolute',
            'top': '15vh'
          });
        }
      }
    });
    var groundInterviewSec1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".itv-ground-marker-1",
        start: "top 40%",
        end: "bottom 30%",
        id: 'maker-1',
        scrub: 1,
        onEnter: function onEnter() {
          secGround.find('.itv-people__name.marker-1-target').addClass('txt-hello');
          secGround.find('.itv-photo-ground.marker-1-target > div').addClass('img-hello');
        }
      }
    });
    var groundPicCard = gsap.timeline({
      scrollTrigger: {
        trigger: ".md__sec-ground .pic-card__inner",
        start: "top top",
        end: '+=' + ground + 'rem',
        //1800
        scrub: 1,
        pin: true,
        onUpdate: function onUpdate(self) {
          if (self.progress < 0.5) {
            $('.md__sec-ground .pic-card__change').each(function (idx, item) {
              $(item).find('.pic-card__target').eq(1).removeClass('hello');
              $(item).find('.pic-card__target').eq(0).addClass('hello');
            });
            $(secGround).find('.curr-wrap').css({
              'transform': 'translateY(0)'
            });
          } else {
            $('.md__sec-ground .pic-card__change').each(function (idx, item) {
              $(item).find('.pic-card__target').eq(0).removeClass('hello');
              $(item).find('.pic-card__target').eq(1).addClass('hello');
            });
            $(secGround).find('.curr-wrap').css({
              'transform': 'translateY(-50%)'
            });
          }
        },
        onLeave: function onLeave() {// moveSecFunc(secBetterTl.scrollTrigger.start + 10, moveSecFuncTime)
        }
      }
    }); //3번 섹션 - 그라운드 관련 끝
    //4번 섹션 - 베러 관련 시작

    var secBetterTl = gsap.timeline({
      scrollTrigger: {
        trigger: secBetter,
        start: function start() {
          return 'top top';
        },
        end: function end() {
          return '+=' + better + 'rem'; //6000
        },
        scrub: true,
        pin: true,
        onUpdate: function onUpdate(self) {
          if (self.progress < 0.1) {} else {
            betterFirstLoad = false;
          }
        },
        onEnter: function onEnter() {
          // $('.sec-better-symbol').css({
          //   'position': 'fixed',
          //   'top': '100%'
          // })
          keyvisualAnimateBetter(secBetter);
        },
        onEnterBack: function onEnterBack(self) {// $('.sec-better-symbol').css({
          //   'position': 'fixed',
          //   'top': '100%'
          // })
        },
        onLeaveBack: function onLeaveBack() {// $('.sec-better-symbol').css({
          //   'position': 'absolute',
          //   'top': '100vh'
          // })
        },
        onLeave: function onLeave() {
          betterFirstLoad = false;
          $('html, body').removeClass('scroll-lock'); // $('.sec-better-symbol').css({
          //   'position': 'absolute',
          //   'top': '100%'
          // })
          // secBetterTl.scrollTrigger.refresh()
        }
      }
    });
    var betterPicDuration = 0.5;
    window.addEventListener('load', function () {
      secBetterTl.to({}, {// delay:sectionLockDelay -1,
        // duration: sectionLockDuration
      }).addLabel('moving').fromTo(secBetter.find('.pic-card__unit--left'), {
        top: 50 + "%",
        left: 50 + "%",
        xPercent: '-50',
        yPercent: '-50'
      }, {
        top: 50 + "%",
        left: 50 + "%",
        xPercent: '-249',
        yPercent: '102',
        onComplete: function onComplete() {
          //브랜드 네임 등장 인터렉션
          secBetter.find('.pic-card__unit').find('.pic-card__target.hello').find('.motion-txt').addClass('txt-hello');
        }
      }, 'moving').fromTo(secBetter.find('.pic-card__unit--top'), {
        top: 50 + "%",
        left: 50 + "%",
        xPercent: '-50',
        yPercent: '-50'
      }, {
        top: 50 + "%",
        left: 50 + "%",
        xPercent: '-141',
        yPercent: '-89'
      }, 'moving').fromTo(secBetter.find('.pic-card__unit--right'), {
        top: 50 + "%",
        left: 50 + "%",
        xPercent: '-50',
        yPercent: '-50'
      }, {
        top: 50 + "%",
        left: 50 + "%",
        xPercent: '91',
        yPercent: '-72'
      }, 'moving').addLabel('secBetter-text').to({}, {
        onStart: function onStart() {
          secBetter.find('.pic-card__section-tit').addClass('hidden');
          secBetter.find('.pic-card__txt-set').find('.pic-card__txt:first-child').addClass('hello hola');
        },
        onReverseComplete: function onReverseComplete() {
          secBetter.find('.pic-card__unit').find('.pic-card__target.hello').find('.motion-txt').removeClass('txt-hello');
          secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(1)').removeClass('hello');
          secBetter.find('.pic-card__section-tit').removeClass('hidden');
        }
      }).to({}, {
        onStart: function onStart() {},
        onReverseComplete: function onReverseComplete() {
          secBetter.find('.pic-card__unit').find('.pic-card__target.hello').find('.motion-txt').removeClass('txt-hello');
          secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(1)').removeClass('hello');
        }
      }) //두번째 섹션
      .addLabel('changeTo2').to(secBetter.find('.pic-card__unit--left'), {
        opacity: 1,
        onStart: function onStart() {
          secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(1)').removeClass('hello');
          secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(1)').removeClass('hello');
          secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').addClass('hello');
          secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(2)').addClass('hello');
          secBetter.find('.curr-wrap').css({
            'transform': 'translateY(-33%)'
          });
        },
        onReverseComplete: function onReverseComplete() {
          secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(2)').removeClass('hello');
          secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').removeClass('hello');
          secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(1)').addClass('hello');
          secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(1)').addClass('hello');
          secBetter.find('.curr-wrap').css({
            'transform': 'translateY(0)'
          });
        }
      }, 'changeTo2').addLabel('changeTo3').to(secBetter.find('.pic-card__unit--left'), {
        opacity: 1,
        onStart: function onStart() {
          secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(2)').removeClass('hello');
          secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').removeClass('hello');
          secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(3)').addClass('hello');
          secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(3)').addClass('hello');
          secBetter.find('.pic-card__img-set').find('.pic-card__img.pic-card__target-alone').addClass('hello');
          secBetter.find('.curr-wrap').css({
            'transform': 'translateY(-66%)'
          });
        },
        onComplete: function onComplete() {},
        onReverseComplete: function onReverseComplete() {
          secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(3)').removeClass('hello');
          secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(3)').removeClass('hello');
          secBetter.find('.pic-card__img-set').find('.pic-card__img.pic-card__target-alone').removeClass('hello');
          secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(2)').addClass('hello');
          secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').addClass('hello');
          secBetter.find('.curr-wrap').css({
            'transform': 'translateY(-33%)'
          });
        }
      }, 'changeTo3');
    }); //4번 섹션 - 베러 관련 끝

    backgroundColorChange();
  },
  // tablet 구간
  '(max-width: 768px) and (min-width: 500px)': function maxWidth768pxAndMinWidth500px() {
    var isAndroid = $('html').hasClass('br-win-ch');
    var sectionChangeDelay = 0.8;
    var sectionLastChangeDelay = 1.2;
    var sectionChangeFirstDelay = 0.03;
    var sectionChangeDuration = 0.1;
    var sectLastDuration = 0.85;
    var style = isAndroid ? 3000 : 3000; // as-is 9000

    var picnic = isAndroid ? 1800 : 2100; // as-is 3000

    var ground = 1400; // as-is 1800

    var better = isAndroid ? 3000 : 3000; // as-is 8000

    var stackTime = 400; // as-is 200

    var lastSectionDuration = 0.5; // as-is 1.5

    var sectionLockDuration = isAndroid ? 0.3 : 1; // 애니메이션 스크롤 방지 듀레이션

    var sectionLockDelay = isAndroid ? 0 : 0.8; // 애니메이션 스크롤 방지 딜레이

    var downUnitDelay = isAndroid ? 0.15 : 1.5;
    var movingDuration = isAndroid ? 0.3 : 0.5; // 사진 사방으로 움직이는 속도

    var downUnitDuration = isAndroid ? 0.2 : 0.3; // 2,3 섹션 직선으로 내려가는 속도

    var downTotal = isAndroid ? 2000 : 1800;
    var downDelay = isAndroid ? 0.4 : 0.8;
    var downDelayDuration = 0.1;
    var styleBetterEmpty = isAndroid ? 0.3 : 0.8;
    App.bindCallback(['load'], function () {
      // footer 영역 진입시 better 심볼 모션
      var footerTl = gsap.timeline({
        scrollTrigger: {
          trigger: $('.c-footer'),
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 0 // markers: true,

        }
      }); // footerTl.to('.sec-better-symbol-mo',{
      //   top: -650
      // })
    }); //1번 섹션 - 스타일 섹션 관련 시작(tablet)

    secStyleTl = gsap.timeline({
      scrollTrigger: {
        trigger: secStyle,
        start: function start() {
          return 'top top';
        },
        end: function end() {
          return '+=' + style + 'rem';
        },
        scrub: 1,
        pin: true,
        onEnter: function onEnter() {
          $('.quick').css({
            'opacity': '1',
            'visibility': 'visible'
          });
          keyvisualAnimate(secStyle);
          $('.sec-style-symbol').css({
            'position': 'fixed',
            'top': '100%'
          });
        },
        onEnterBack: function onEnterBack(self) {
          $('.sec-style-symbol').css({
            'position': 'fixed',
            'top': '100%'
          });
        },
        onLeaveBack: function onLeaveBack() {
          $('.quick').css({
            'opacity': '0',
            'visibility': 'hidden'
          });
          $('.sec-style-symbol').css({
            'position': 'absolute',
            'top': '100vh'
          });
        },
        onLeave: function onLeave() {
          $('.sec-style-symbol').css({
            'position': 'absolute',
            'top': '100%'
          }); // moveSecFunc(interviewCoverMotion.scrollTrigger.start + 10, moveSecFuncTime)
          // 모바일 갤러리 영역 스크롤 완료 후 다음 영역으로 빠르게 넘어가는현상(모멘텀 스크롤) 대응
          // gsap.to(window, {
          //   duration: 0,
          //   scrollTo: {
          //     y: $(window).scrollTop(),
          //     autoKill: false
          //   }
          // })
          // if (!secPicnic.hasClass('active')) {
          //   $('html, body').css({
          //     overflow: 'hidden'
          //   })
          // }

          styleFirstLoad = false;
        }
      }
    });
    secStyleTl.to({}, {
      duration: styleBetterEmpty,
      delay: sectionLockDelay,
      onStart: function onStart() {}
    }).addLabel('moving').fromTo(secStyle.find('.pic-card__unit--left'), {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '-36',
      yPercent: '-17'
    }, {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '-88',
      yPercent: '141',
      onComplete: function onComplete() {
        //브랜드 네임 등장 인터렉션
        secStyle.find('.pic-card__unit').find('.pic-card__target.hello').find('.motion-txt').addClass('txt-hello');
      }
    }, 'moving').fromTo(secStyle.find('.pic-card__unit--top'), {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '-116',
      yPercent: '-99'
    }, {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '-167',
      yPercent: '-240'
    }, 'moving').fromTo(secStyle.find('.pic-card__unit--right'), {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '-50',
      yPercent: '-50'
    }, {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '-13',
      yPercent: '-108'
    }, 'moving') //글자 사라지기
    .addLabel('secStyle-text').fromTo(secStyle.find('.pic-card__section-tit__box'), {
      opacity: 1
    }, {
      opacity: 0,
      duration: 0.1,
      onUpdate: function onUpdate() {
        var thisPrg = this.progress();

        if (thisPrg > 0.8 && thisPrg < 0.9) {
          secStyle.find('.pic-card__txt-set').find('.pic-card__txt:first-child').removeClass('hello');
        }
      }
    }, 'moving').fromTo(secStyle.find('.pic-card__intro-txt p'), {
      opacity: 1
    }, {
      opacity: 0,
      duration: 0.1
    }, 'moving').to({}, {
      onStart: function onStart() {
        secStyle.find('.pic-card__txt-set').find('.pic-card__txt:first-child').addClass('hello');
        secStyle.find('.pic-card__nav').addClass('hello');
      },
      onReverseComplete: function onReverseComplete() {
        secStyle.find('.pic-card__unit').find('.pic-card__target.hello').find('.motion-txt').removeClass('txt-hello');
        secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(1)').removeClass('hello');
      }
    }).addLabel('changeTo2') //두번째 섹션
    .to(secStyle.find('.pic-card__unit--left'), {
      opacity: 1,
      onStart: function onStart() {
        secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(1)').removeClass('hello');
        secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(1)').removeClass('hello');
        secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').addClass('hello');
        secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(2)').addClass('hello');
        secStyle.find('.curr-wrap').css({
          'transform': 'translateY(-33%)'
        });
      },
      onComplete: function onComplete() {},
      onReverseComplete: function onReverseComplete() {
        secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(2)').removeClass('hello');
        secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').removeClass('hello');
        secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(1)').addClass('hello');
        secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(1)').addClass('hello');
        secStyle.find('.curr-wrap').css({
          'transform': 'translateY(0)'
        });
      }
    }, 'changeTo2').addLabel('changeTo3') // 세번째 섹션
    .to(secStyle.find('.pic-card__unit--left'), {
      opacity: 1,
      onStart: function onStart() {
        secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(2)').removeClass('hello');
        secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').removeClass('hello');
        secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(3)').addClass('hello');
        secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(3)').addClass('hello');
        secStyle.find('.curr-wrap').css({
          'transform': 'translateY(-66%)'
        });
      },
      onComplete: function onComplete() {},
      onReverseComplete: function onReverseComplete() {
        secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(3)').removeClass('hello');
        secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(3)').removeClass('hello');
        secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(2)').addClass('hello');
        secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').addClass('hello');
        secStyle.find('.curr-wrap').css({
          'transform': 'translateY(-33%)'
        });
      }
    }, 'changeTo3'); //1번 섹션 - 스타일 섹션 관련 끝 (tablet)
    //2번 섹션 - 피크닉 섹션 관련 시작(tablet)

    var interviewCoverMotion = gsap.timeline({
      scrollTrigger: {
        trigger: $('.md__sec-picnic .visual-full-inner'),
        start: function start() {
          return 'top top';
        },
        end: function end() {
          return '+=' + downTotal + 'rem';
        },
        scrub: 0.5,
        pin: true,
        onEnter: function onEnter() {
          keyvisualAnimateNormal(secPicnic);
        },
        onLeave: function onLeave() {}
      }
    });
    interviewCoverMotion.to({}, {
      delay: downDelay,
      duration: downDelayDuration,
      onStart: function onStart() {}
    }).fromTo('.md__sec-picnic .down-unit-3', {
      top: 40 + "%",
      left: 50 + "%",
      xPercent: -50,
      yPercent: -50
    }, {
      top: 100 + "%",
      left: 50 + "%",
      xPercent: -50,
      yPercent: 0,
      duration: downUnitDuration
    }).fromTo('.md__sec-picnic .down-unit-2', {
      top: 40 + "%",
      left: 50 + "%",
      xPercent: -116,
      yPercent: -16
    }, {
      top: 100 + "%",
      left: 50 + "%",
      xPercent: -116,
      yPercent: 0,
      duration: downUnitDuration
    }).fromTo('.md__sec-picnic .down-unit-1', {
      top: 40 + "%",
      left: 50 + "%",
      xPercent: -23,
      yPercent: 8
    }, {
      top: 100 + "%",
      left: 50 + "%",
      xPercent: -23,
      yPercent: 0,
      duration: downUnitDuration
    }).addLabel('txtFade').fromTo('.md__sec-picnic .txt-unit__tit', {
      opacity: 1
    }, {
      duration: 0.5,
      opacity: 0
    }, 'txtFade').fromTo('.md__sec-picnic .visual__key-txt', {
      opacity: 1
    }, {
      duration: 0.5,
      opacity: 0
    }, 'txtFade').to('.md__sec-picnic .txt-unit__tit', {
      duration: 0.2
    });
    var interviewArticleMotion = gsap.timeline({
      scrollTrigger: {
        trigger: $('.md__sec-picnic .interview'),
        pin: $('.md__sec-picnic .itv-photo-fix'),
        start: function start() {
          return 'top top';
        },
        end: function end() {
          return 'bottom bottom';
        },
        scrub: 1,
        onEnter: function onEnter() {
          $('.sec-picnic-symbol').css({
            'position': 'fixed'
          });
        },
        onLeave: function onLeave() {
          $('.sec-picnic-symbol').css({
            'position': 'absolute',
            'top': $('.md__sec-picnic .interview').outerHeight() - symbolSet(0.7) + 'px'
          }); // moveSecFunc(interviewArticleMotion2.scrollTrigger.start +1, 0.6)
        },
        onEnterBack: function onEnterBack() {
          $('.sec-picnic-symbol').css({
            'position': 'fixed',
            'top': '70vh'
          });
        },
        onLeaveBack: function onLeaveBack() {
          // moveSecFunc(picnicPicCard.scrollTrigger.end, 0.6)
          $('.sec-picnic-symbol').css({
            'position': 'absolute',
            'top': '70vh'
          });
        }
      }
    });
    var picnicInterviewSec1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".itv-picnic-marker-1",
        start: "top 40%",
        end: "bottom 30%",
        scrub: 1,
        onEnter: function onEnter() {
          secPicnic.find('.itv-people__name.marker-1-target').addClass('txt-hello');
          secPicnic.find('.itv-photo-picnic.marker-1-target > div').addClass('img-hello');
        },
        onEnterBack: function onEnterBack() {
          secPicnic.find('.itv-people__name.marker-2-target').removeClass('txt-hello');
          secPicnic.find('.itv-photo-picnic.marker-2-target').removeClass('active');
        }
      }
    });
    var picnicInterviewSec2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".itv-picnic-marker-2",
        start: "top 80%",
        end: "bottom 30%",
        scrub: 1,
        onEnter: function onEnter() {
          secPicnic.find('.itv-people__name.marker-1-target').removeClass('txt-hello');
          secPicnic.find('.itv-photo-picnic.marker-1-target').removeClass('active');
          secPicnic.find('.itv-people__name.marker-2-target').addClass('txt-hello');
          secPicnic.find('.itv-photo-picnic.marker-2-target').addClass('active');
        },
        onLeaveBack: function onLeaveBack() {
          secPicnic.find('.itv-people__name.marker-2-target').removeClass('txt-hello');
          secPicnic.find('.itv-photo-picnic.marker-2-target').removeClass('active');
          secPicnic.find('.itv-people__name.marker-1-target').addClass('txt-hello');
          secPicnic.find('.itv-photo-picnic.marker-1-target').addClass('active leave-back');
        }
      }
    }); ///////////////picnic- 슬라이드

    var picnicPicCard = gsap.timeline({
      scrollTrigger: {
        trigger: ".md__sec-picnic .pic-card__inner",
        start: "top top",
        end: '+=' + picnic + 'rem',
        //3000
        scrub: 1,
        pin: true,
        id: '',
        onEnter: function onEnter() {},
        onUpdate: function onUpdate(self) {
          if (self.progress < 0.33) {
            $('.md__sec-picnic .pic-card__change').each(function (idx, item) {
              $(item).find('.pic-card__target').eq(1).removeClass('hello');
              $(item).find('.pic-card__target').eq(0).addClass('hello');
              $(item).find('.pic-card__target').eq(2).removeClass('hello');
            });
            $(secPicnic).find('.curr-wrap').css({
              'transform': 'translateY(0)'
            });
          } else if (self.progress > 0.33 && self.progress < 0.66) {
            $('.md__sec-picnic .pic-card__change').each(function (idx, item) {
              $(item).find('.pic-card__target').eq(2).removeClass('hello');
              $(item).find('.pic-card__target').eq(0).removeClass('hello');
              $(item).find('.pic-card__target').eq(1).addClass('hello');
            });
            $(secPicnic).find('.curr-wrap').css({
              'transform': 'translateY(-33%)'
            });
          } else {
            $('.md__sec-picnic .pic-card__change').each(function (idx, item) {
              $(item).find('.pic-card__target').eq(0).removeClass('hello');
              $(item).find('.pic-card__target').eq(1).removeClass('hello');
              $(item).find('.pic-card__target').eq(2).addClass('hello');
            });
            $(secPicnic).find('.curr-wrap').css({
              'transform': 'translateY(-66%)'
            });
          }
        },
        onLeave: function onLeave() {// if (!secGround.hasClass('active')) {
          //   $('html, body').css({
          //     overflow: 'hidden'
          //   })
          // }
          // 모바일 갤러리 영역 스크롤 완료 후 다음 영역으로 빠르게 넘어가는현상(모멘텀 스크롤) 대응
          // gsap.to(window, {
          //   duration: 0,
          //   scrollTo: {
          //     y: $(window).scrollTop(),
          //     autoKill: false
          //   }
          // })
        }
      }
    }); //2번 섹션 - 피크닉 섹션 관련 끝(tablet)
    //3번 섹션 - 그라운드 섹션 관련 시작(tablet)

    var interviewCoverMotion2 = gsap.timeline({
      scrollTrigger: {
        trigger: $('.md__sec-ground .visual-full-inner'),
        // markers:true,
        start: function start() {
          return 'top top';
        },
        end: function end() {
          return '+=' + downTotal + 'rem';
        },
        scrub: 1,
        pin: true,
        onEnter: function onEnter() {
          keyvisualAnimateNormal(secGround);
        }
      }
    });
    window.addEventListener('load', function () {
      interviewCoverMotion2.to({}, {
        delay: downDelay,
        duration: downDelayDuration,
        onStart: function onStart() {}
      }).fromTo('.md__sec-ground .down-unit-3', {
        top: 50 + "%",
        left: 50 + "%",
        xPercent: -50,
        yPercent: -58
      }, {
        top: 100 + "%",
        left: 50 + "%",
        xPercent: -50,
        yPercent: 0,
        duration: downUnitDuration
      }).fromTo('.md__sec-ground .down-unit-2', {
        top: 50 + "%",
        left: 50 + "%",
        xPercent: 3,
        yPercent: -119
      }, {
        top: 100 + "%",
        left: 50 + "%",
        xPercent: 3,
        yPercent: 0,
        duration: downUnitDuration
      }).fromTo('.md__sec-ground .down-unit-1', {
        top: 50 + "%",
        left: 50 + "%",
        xPercent: -61,
        yPercent: -2
      }, {
        top: 100 + "%",
        left: 50 + "%",
        xPercent: -61,
        yPercent: 0,
        duration: downUnitDuration
      }).addLabel('txtFade').fromTo('.md__sec-ground .txt-unit__tit', {
        opacity: 1
      }, {
        duration: 0.5,
        opacity: 0
      }, 'txtFade').fromTo('.md__sec-ground .visual__key-txt', {
        opacity: 1
      }, {
        duration: 0.5,
        opacity: 0
      }, 'txtFade').to('.md__sec-ground .txt-unit__tit', {
        duration: 0.2
      });
    });
    var interviewArticleMotion2 = gsap.timeline({
      scrollTrigger: {
        trigger: $('.md__sec-ground .interview'),
        pin: $('.md__sec-ground .itv-photo-fix'),
        start: function start() {
          return 'top top';
        },
        end: function end() {
          return 'bottom bottom';
        },
        scrub: 1,
        onEnter: function onEnter() {
          $('.sec-ground-symbol').css({
            'position': 'fixed'
          });
        },
        onLeave: function onLeave() {
          $('.sec-ground-symbol').css({
            'position': 'absolute',
            'top': $('.md__sec-ground .interview').outerHeight() - symbolSet(0.65) + 'px'
          }); // moveSecFunc(interviewArticleMotion2.scrollTrigger.start +1, 0.6)
        },
        onEnterBack: function onEnterBack() {
          $('.sec-ground-symbol').css({
            'position': 'fixed',
            'top': '65vh'
          });
        },
        onLeaveBack: function onLeaveBack() {
          // moveSecFunc(picnicPicCard.scrollTrigger.end, 0.6)
          $('.sec-ground-symbol').css({
            'position': 'absolute',
            'top': '65vh'
          });
        }
      }
    });
    var groundInterviewSec1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".itv-ground-marker-1",
        start: "top 40%",
        end: "bottom 30%",
        // markers:true,
        id: 'maker-1',
        scrub: 1,
        onEnter: function onEnter() {
          secGround.find('.itv-people__name.marker-1-target').addClass('txt-hello');
          secGround.find('.itv-photo-ground.marker-1-target > div').addClass('img-hello');
        },
        onLeaveBack: function onLeaveBack() {// $('.sec-2__txt-1 .motion-txt').addClass('txt-hello');
        }
      }
    });
    var groundPicCard = gsap.timeline({
      scrollTrigger: {
        trigger: ".md__sec-ground .pic-card__inner",
        start: "top top",
        end: '+=' + ground + 'rem',
        //1000
        scrub: 1,
        pin: true,
        id: '',
        onEnter: function onEnter() {// $('.sec-better-symbol-mo').css({
          //   'position': 'fixed',
          //   'top':'100vh'
          // })
        },
        onEnterBack: function onEnterBack() {// $('.sec-better-symbol-mo').css({
          //   'position': 'fixed',
          //   'top':'100vh'
          // })
        },
        onUpdate: function onUpdate(self) {
          if (self.progress < 0.5) {
            $('.md__sec-ground .pic-card__change').each(function (idx, item) {
              $(item).find('.pic-card__target').eq(1).removeClass('hello');
              $(item).find('.pic-card__target').eq(0).addClass('hello');
            });
            $(secGround).find('.curr-wrap').css({
              'transform': 'translateY(0)'
            });
          } else {
            $('.md__sec-ground .pic-card__change').each(function (idx, item) {
              $(item).find('.pic-card__target').eq(0).removeClass('hello');
              $(item).find('.pic-card__target').eq(1).addClass('hello');
            });
            $(secGround).find('.curr-wrap').css({
              'transform': 'translateY(-50%)'
            });
          }
        },
        onLeave: function onLeave() {// $('.sec-better-symbol-mo').css({
          //   'position': 'absolute',
          //   'top': '100%'
          // })
          // if (!secBetter.hasClass('active')) {
          //   $('html, body').css({
          //     overflow: 'hidden'
          //   })
          // }
          // moveSecFunc(secBetterTl.scrollTrigger.start + 1, 0.6)
        },
        onLeaveBack: function onLeaveBack() {// $('.sec-better-symbol-mo').css({
          //   'position': 'absolute',
          //   'top': 'calc(100vh + 90rem)'
          // })
        }
      }
    }); //3번 섹션 - 그라운드 섹션 관련 끝(tablet)
    //4번 섹션 - 베러 섹션 관련 시작(tablet)

    var secBetterTl = gsap.timeline({
      scrollTrigger: {
        trigger: secBetter,
        start: function start() {
          return 'top top';
        },
        end: function end() {
          return '+=' + better + 'rem'; //8000
        },
        scrub: 1,
        pin: true,
        onUpdate: function onUpdate(self) {},
        onEnter: function onEnter() {
          $('.sec-better-symbol-mo').css({
            'position': 'fixed',
            'top': '88%'
          });
          keyvisualAnimateBetter(secBetter);
        },
        onEnterBack: function onEnterBack(self) {},
        onLeave: function onLeave() {
          betterFirstLoad = false;
        },
        onLeaveBack: function onLeaveBack() {// $('.sec-better-symbol-mo').css({
          //   'position': 'absolute',
          //   'top': '100%'
          // })
        }
      }
    });
    var betterPicDuration = 0.5;
    secBetterTl.to({}, {
      duration: styleBetterEmpty,
      delay: sectionLockDelay,
      onStart: function onStart() {}
    }).addLabel('moving').fromTo(secBetter.find('.pic-card__unit--left'), {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '-50',
      yPercent: '-50'
    }, {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '44',
      yPercent: '170',
      onComplete: function onComplete() {
        //브랜드 네임 등장 인터렉션
        secBetter.find('.pic-card__unit').find('.pic-card__target.hello').find('.motion-txt').addClass('txt-hello');
      }
    }, 'moving').fromTo(secBetter.find('.pic-card__unit--top'), {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '-50',
      yPercent: '-50'
    }, {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '-91',
      yPercent: '187',
      // duration:movingDuration,
      // duration: betterPicDuration,
      onComplete: function onComplete() {},
      onReverseComplete: function onReverseComplete() {}
    }, 'moving').fromTo(secBetter.find('.pic-card__unit--right'), {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '-50',
      yPercent: '-50'
    }, {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '0',
      yPercent: '-120',
      // duration:movingDuration,
      // duration: betterPicDuration,
      onComplete: function onComplete() {}
    }, 'moving').addLabel('secBetter-text').fromTo(secBetter.find('.pic-card__section-tit__box'), {
      opacity: 1,
      onStart: function onStart() {},
      onComplete: function onComplete() {},
      onReverseComplete: function onReverseComplete() {}
    }, {
      // duration: sectionChangeDuration,
      // delay: sectionChangeFirstDelay,
      opacity: 0,
      duration: 0.1,
      onStart: function onStart() {},
      onComplete: function onComplete() {},
      onUpdate: function onUpdate() {
        var thisPrg = this.progress();

        if (thisPrg > 0.8 && thisPrg < 0.9) {
          secBetter.find('.pic-card__txt-set').find('.pic-card__txt:first-child').removeClass('hello');
        }
      }
    }, 'moving').fromTo(secBetter.find('.pic-card__intro-txt p'), {
      opacity: 1
    }, {
      // duration:0.25,
      // delay:0.1,
      duration: 0.1,
      opacity: 0
    }, 'moving').to({}, {
      onStart: function onStart() {
        secBetter.find('.pic-card__txt-set').find('.pic-card__txt:first-child').addClass('hello');
        secBetter.find('.pic-card__nav').addClass('hello');
      },
      onReverseComplete: function onReverseComplete() {
        secBetter.find('.pic-card__unit').find('.pic-card__target.hello').find('.motion-txt').removeClass('txt-hello');
        secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(1)').removeClass('hello');
      }
    }).addLabel('changeTo2') // 두번째 섹션
    .to(secBetter.find('.pic-card__unit--left'), {
      opacity: 1,
      onStart: function onStart() {
        secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(1)').removeClass('hello');
        secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(1)').removeClass('hello');
        secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').addClass('hello');
        secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(2)').addClass('hello');
        secBetter.find('.curr-wrap').css({
          'transform': 'translateY(-33%)'
        });
      },
      onComplete: function onComplete() {},
      onReverseComplete: function onReverseComplete() {
        secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(2)').removeClass('hello');
        secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').removeClass('hello');
        secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(1)').addClass('hello');
        secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(1)').addClass('hello');
        secBetter.find('.curr-wrap').css({
          'transform': 'translateY(0)'
        });
      }
    }, 'changeTo2').addLabel('changeTo3') // 세번째 섹션
    .to(secBetter.find('.pic-card__unit--left'), {
      opacity: 1,
      onStart: function onStart() {
        secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(2)').removeClass('hello');
        secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').removeClass('hello');
        secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(3)').addClass('hello');
        secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(3)').addClass('hello');
        secBetter.find('.pic-card__img-set').find('.pic-card__img.pic-card__target-alone').addClass('hello');
        secBetter.find('.curr-wrap').css({
          'transform': 'translateY(-66%)'
        });
      },
      onComplete: function onComplete() {},
      onReverseComplete: function onReverseComplete() {
        secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(3)').removeClass('hello');
        secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(3)').removeClass('hello');
        secBetter.find('.pic-card__img-set').find('.pic-card__img.pic-card__target-alone').removeClass('hello');
        secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(2)').addClass('hello');
        secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').addClass('hello');
        secBetter.find('.curr-wrap').css({
          'transform': 'translateY(-33%)'
        });
      }
    }, 'changeTo3'); //4번 섹션 - 베러 섹션 관련 끝(tablet)

    backgroundColorChange();
  },
  // MO 구간
  '(max-width: 499px)': function maxWidth499px() {
    var isAndroid = $('html').hasClass('br-win-ch');
    var sectionChangeDelay = 0.8;
    var sectionLastChangeDelay = 1.2;
    var sectionChangeFirstDelay = 0.03;
    var sectionChangeDuration = 0.1;
    var sectLastDuration = 0.85;
    var style = isAndroid ? 3000 : 3000; // as-is 9000

    var picnic = isAndroid ? 1800 : 2100; // as-is 3000

    var ground = 1400; // as-is 1800

    var better = isAndroid ? 3000 : 3000; // as-is 8000

    var stackTime = 400; // as-is 200

    var lastSectionDuration = 0.5; // as-is 1.5

    var sectionLockDuration = isAndroid ? 0.3 : 1; // 애니메이션 스크롤 방지 듀레이션

    var sectionLockDelay = isAndroid ? 0 : 0.8; // 애니메이션 스크롤 방지 딜레이

    var downUnitDelay = isAndroid ? 0.15 : 1.5;
    var movingDuration = isAndroid ? 0.3 : 0.5; // 사진 사방으로 움직이는 속도 

    var downUnitDuration = isAndroid ? 0.2 : 0.3; // 2,3 섹션 직선으로 내려가는 속도

    var downTotal = isAndroid ? 2000 : 1800;
    var downDelay = isAndroid ? 0.4 : 0.8;
    var downDelayDuration = 0.1;
    var styleBetterEmpty = isAndroid ? 0.3 : 0.8;
    App.bindCallback(['load'], function () {
      // footer 영역 진입시 better 심볼 모션
      var footerTl = gsap.timeline({
        scrollTrigger: {
          trigger: $('.c-footer'),
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 0
        }
      }); // footerTl.to('.sec-better-symbol-mo',{
      //   top: -533
      // })
    }); //1번 섹션 - 스타일 섹션 관련 시작(mo)

    secStyleTl = gsap.timeline({
      scrollTrigger: {
        trigger: secStyle,
        start: function start() {
          return 'top top';
        },
        end: function end() {
          return '+=' + style + 'rem'; //9000
        },
        scrub: 1,
        pin: true,
        onUpdate: function onUpdate(self) {},
        onEnter: function onEnter() {
          var styleTotal = secStyleTl.totalDuration();
          $('.quick').css({
            'opacity': '1',
            'visibility': 'visible'
          });
          keyvisualAnimate(secStyle);
          $('.sec-style-symbol').css({
            'position': 'fixed',
            'top': '100%'
          });
        },
        onEnterBack: function onEnterBack() {
          $('.sec-style-symbol').css({
            'position': 'fixed',
            'top': '100%'
          });
        },
        onLeaveBack: function onLeaveBack() {
          $('.quick').css({
            'opacity': '0',
            'visibility': 'hidden'
          });
          $('.sec-style-symbol').css({
            'position': 'absolute',
            'top': '100vh'
          });
        },
        onLeave: function onLeave() {
          styleFirstLoad = false;
          $('.sec-style-symbol').css({
            'position': 'absolute',
            'top': '100%'
          }); // moveSecFunc(interviewCoverMotion.scrollTrigger.start + 1, 0.6)
        }
      }
    }); // var stylePicDuration= 0.2;

    var stylePicDuration = 0.5;
    secStyleTl.to({}, {
      duration: styleBetterEmpty,
      delay: sectionLockDelay,
      onStart: function onStart() {}
    }).addLabel('moving').fromTo(secStyle.find('.pic-card__unit--left'), {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '-35',
      yPercent: '-11'
    }, {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '-88',
      yPercent: '150',
      duration: movingDuration,
      onComplete: function onComplete() {
        //브랜드 네임 등장 인터렉션
        secStyle.find('.pic-card__unit').find('.pic-card__target.hello').find('.motion-txt').addClass('txt-hello');
      }
    }, 'moving').fromTo(secStyle.find('.pic-card__unit--top'), {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '-134',
      yPercent: '-87'
    }, {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '-166',
      yPercent: '-211',
      duration: movingDuration
    }, 'moving').fromTo(secStyle.find('.pic-card__unit--right'), {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '-50',
      yPercent: '-50'
    }, {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '0',
      yPercent: '-120',
      duration: movingDuration
    }, 'moving').addLabel('secStyle-text').fromTo(secStyle.find('.pic-card__section-tit__box'), {
      opacity: 1
    }, {
      opacity: 0,
      duration: 0.1,
      onUpdate: function onUpdate() {
        var thisPrg = this.progress();

        if (thisPrg > 0.8 && thisPrg < 0.9) {
          secStyle.find('.pic-card__txt-set').find('.pic-card__txt:first-child').removeClass('hello');
        }
      }
    }, 'moving').fromTo(secStyle.find('.pic-card__intro-txt p'), {
      opacity: 1
    }, {
      opacity: 0,
      duration: 0.1
    }, 'moving').to({}, {
      onStart: function onStart() {
        secStyle.find('.pic-card__txt-set').find('.pic-card__txt:first-child').addClass('hello');
        secStyle.find('.pic-card__nav').addClass('hello');
      },
      onReverseComplete: function onReverseComplete() {
        secStyle.find('.pic-card__unit').find('.pic-card__target.hello').find('.motion-txt').removeClass('txt-hello');
        secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(1)').removeClass('hello');
      }
    }) // 첫번째 섹션
    .addLabel('changeTo2') // 두번째 섹션
    .to(secStyle.find('.pic-card__unit--left'), {
      opacity: 1,
      onStart: function onStart() {
        secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(1)').removeClass('hello');
        secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(1)').removeClass('hello');
        secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').addClass('hello');
        secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(2)').addClass('hello');
        secStyle.find('.curr-wrap').css({
          'transform': 'translateY(-33%)'
        });
      },
      onComplete: function onComplete() {},
      onReverseComplete: function onReverseComplete() {
        secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(2)').removeClass('hello');
        secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').removeClass('hello');
        secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(1)').addClass('hello');
        secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(1)').addClass('hello');
        secStyle.find('.curr-wrap').css({
          'transform': 'translateY(0)'
        });
      }
    }, 'changeTo2').addLabel('changeTo3') // 세번째 섹션
    .to(secStyle.find('.pic-card__unit--left'), {
      opacity: 1,
      onStart: function onStart() {
        secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(2)').removeClass('hello');
        secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').removeClass('hello');
        secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(3)').addClass('hello');
        secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(3)').addClass('hello');
        secStyle.find('.curr-wrap').css({
          'transform': 'translateY(-66%)'
        });
      },
      onComplete: function onComplete() {},
      onReverseComplete: function onReverseComplete() {
        secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(3)').removeClass('hello');
        secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(3)').removeClass('hello');
        secStyle.find('.pic-card__img-set').find('.pic-card__img:nth-child(2)').addClass('hello');
        secStyle.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').addClass('hello');
        secStyle.find('.curr-wrap').css({
          'transform': 'translateY(-33%)'
        });
      }
    }, 'changeTo3'); //1번 섹션 - 스타일 섹션 관련 끝 (mo)
    //2번 섹션 - 피크닉 섹션 관련 시작(mo)

    var interviewCoverMotion = gsap.timeline({
      scrollTrigger: {
        trigger: $('.md__sec-picnic .visual-full-inner'),
        // markers: true,
        start: function start() {
          return 'top top';
        },
        end: function end() {
          return '+=' + downTotal + 'rem';
        },
        scrub: 1,
        pin: true,
        onEnter: function onEnter() {
          keyvisualAnimateNormal(secPicnic);
        },
        onLeaveBack: function onLeaveBack() {// moveSecFunc(secStyleTl.scrollTrigger.end, 0.6)
        },
        onLeave: function onLeave() {// moveSecFunc(interviewArticleMotion.scrollTrigger.start +1, 0.6)
        }
      }
    });
    interviewCoverMotion.to({}, {
      delay: downDelay,
      duration: downDelayDuration,
      onStart: function onStart() {}
    }).fromTo('.md__sec-picnic .down-unit-3', {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: -50,
      yPercent: -50
    }, {
      top: 100 + "%",
      left: 50 + "%",
      xPercent: -50,
      yPercent: 0,
      duration: downUnitDuration
    }).fromTo('.md__sec-picnic .down-unit-2', {
      top: 40 + "%",
      left: 50 + "%",
      xPercent: -116,
      yPercent: -16
    }, {
      top: 100 + "%",
      left: 50 + "%",
      xPercent: -116,
      yPercent: 0,
      duration: downUnitDuration
    }).fromTo('.md__sec-picnic .down-unit-1', {
      top: 40 + "%",
      left: 50 + "%",
      xPercent: -23,
      yPercent: 8
    }, {
      top: 100 + "%",
      left: 50 + "%",
      xPercent: -23,
      yPercent: 0,
      duration: downUnitDuration
    }).addLabel('txtFade').fromTo('.md__sec-picnic .txt-unit__tit', {
      opacity: 1
    }, {
      duration: 0.5,
      opacity: 0
    }, 'txtFade').fromTo('.md__sec-picnic .visual__key-txt', {
      opacity: 1
    }, {
      duration: 0.5,
      opacity: 0
    }, 'txtFade').to('.md__sec-picnic .txt-unit__tit', {
      duration: 0.2
    });
    var interviewArticleMotion = gsap.timeline({
      scrollTrigger: {
        trigger: $('.md__sec-picnic .interview'),
        pin: $('.md__sec-picnic .itv-photo-fix'),
        start: function start() {
          return 'top top';
        },
        end: function end() {
          return 'bottom bottom';
        },
        scrub: 1,
        onEnter: function onEnter() {
          $('.sec-picnic-symbol').css({
            'position': 'fixed'
          });
        },
        onLeave: function onLeave() {
          $('.sec-picnic-symbol').css({
            'position': 'absolute',
            'top': $('.md__sec-picnic .interview').outerHeight() - symbolSet(0.7) + 'px'
          }); // moveSecFunc(interviewArticleMotion2.scrollTrigger.start +1, 0.6)
        },
        onEnterBack: function onEnterBack() {
          $('.sec-picnic-symbol').css({
            'position': 'fixed',
            'top': '70vh'
          });
        },
        onLeaveBack: function onLeaveBack() {
          // moveSecFunc(picnicPicCard.scrollTrigger.end, 0.6)
          $('.sec-picnic-symbol').css({
            'position': 'absolute',
            'top': '70vh'
          });
        }
      }
    });
    var picnicInterviewSec1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".itv-picnic-marker-1",
        start: "top 40%",
        end: "bottom 30%",
        scrub: 1,
        onEnter: function onEnter() {
          secPicnic.find('.itv-people__name.marker-1-target').addClass('txt-hello');
          secPicnic.find('.itv-photo-picnic.marker-1-target > div').addClass('img-hello');
        },
        onEnterBack: function onEnterBack() {
          secPicnic.find('.itv-people__name.marker-2-target').removeClass('txt-hello');
          secPicnic.find('.itv-photo-picnic.marker-2-target').removeClass('active');
        }
      }
    });
    var picnicInterviewSec2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".itv-picnic-marker-2",
        start: "top 80%",
        end: "bottom 30%",
        // markers:true,
        id: 'maker-2',
        scrub: 1,
        onEnter: function onEnter() {
          secPicnic.find('.itv-people__name.marker-1-target').removeClass('txt-hello');
          secPicnic.find('.itv-photo-picnic.marker-1-target').removeClass('active');
          secPicnic.find('.itv-photo-picnic.marker-1-target > div').removeClass('img-hello');
          secPicnic.find('.itv-people__name.marker-2-target').addClass('txt-hello');
          secPicnic.find('.itv-photo-picnic.marker-2-target').addClass('active');
        },
        onLeaveBack: function onLeaveBack() {
          secPicnic.find('.itv-people__name.marker-2-target').removeClass('txt-hello');
          secPicnic.find('.itv-photo-picnic.marker-2-target').removeClass('active');
          secPicnic.find('.itv-people__name.marker-1-target').addClass('txt-hello');
          secPicnic.find('.itv-photo-picnic.marker-1-target').addClass('active leave-back');
        }
      }
    }); ///////////////picnic- 슬라이드

    var picnicPicCard = gsap.timeline({
      scrollTrigger: _defineProperty({
        trigger: ".md__sec-picnic .pic-card__inner",
        start: "top top",
        end: '+=' + picnic + 'rem',
        //3000
        scrub: 1,
        pin: true,
        id: '',
        onEnter: function onEnter() {},
        onUpdate: function onUpdate(self) {
          if (self.progress < 0.33) {
            $('.md__sec-picnic .pic-card__change').each(function (idx, item) {
              $(item).find('.pic-card__target').eq(1).removeClass('hello');
              $(item).find('.pic-card__target').eq(0).addClass('hello');
              $(item).find('.pic-card__target').eq(2).removeClass('hello');
            });
            $(secPicnic).find('.curr-wrap').css({
              'transform': 'translateY(0)'
            });
          } else if (self.progress > 0.33 && self.progress < 0.66) {
            $('.md__sec-picnic .pic-card__change').each(function (idx, item) {
              $(item).find('.pic-card__target').eq(2).removeClass('hello');
              $(item).find('.pic-card__target').eq(0).removeClass('hello');
              $(item).find('.pic-card__target').eq(1).addClass('hello');
            });
            $(secPicnic).find('.curr-wrap').css({
              'transform': 'translateY(-33%)'
            });
          } else {
            $('.md__sec-picnic .pic-card__change').each(function (idx, item) {
              $(item).find('.pic-card__target').eq(0).removeClass('hello');
              $(item).find('.pic-card__target').eq(1).removeClass('hello');
              $(item).find('.pic-card__target').eq(2).addClass('hello');
            });
            $(secPicnic).find('.curr-wrap').css({
              'transform': 'translateY(-66%)'
            });
          }
        },
        onLeave: function onLeave() {// moveSecFunc(interviewCoverMotion2.scrollTrigger.start + 1, 0.6)
        },
        onLeaveBack: function onLeaveBack() {// moveSecFunc(interviewArticleMotion.scrollTrigger.end, 0.6)
        }
      }, "onLeaveBack", function onLeaveBack() {})
    }); //2번 섹션 - 피크닉 섹션 관련 시작(mo)
    //3번 섹션 - 그라운드 섹션 관련 시작(mo)

    var interviewCoverMotion2 = gsap.timeline({
      scrollTrigger: {
        trigger: $('.md__sec-ground .visual-full-inner'),
        // markers:true,
        start: function start() {
          return 'top top';
        },
        end: function end() {
          return '+=' + downTotal + 'rem';
        },
        scrub: 1,
        pin: true,
        onEnter: function onEnter() {
          keyvisualAnimateNormal(secGround);
        }
      }
    });
    interviewCoverMotion2.to({}, {
      delay: downDelay,
      duration: downDelayDuration,
      onStart: function onStart() {}
    }).fromTo('.md__sec-ground .down-unit-3', {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: -50,
      yPercent: -58
    }, {
      top: 100 + "%",
      left: 50 + "%",
      xPercent: -50,
      yPercent: 0,
      duration: downUnitDuration
    }).fromTo('.md__sec-ground .down-unit-2', {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: 3,
      yPercent: -119
    }, {
      top: 100 + "%",
      left: 50 + "%",
      xPercent: 3,
      yPercent: 0,
      duration: downUnitDuration
    }).fromTo('.md__sec-ground .down-unit-1', {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: -61,
      yPercent: -2
    }, {
      top: 100 + "%",
      left: 50 + "%",
      xPercent: -61,
      yPercent: 0,
      duration: downUnitDuration
    }).addLabel('txtFade').fromTo('.md__sec-ground .txt-unit__tit', {
      opacity: 1
    }, {
      duration: 0.5,
      opacity: 0
    }, 'txtFade').fromTo('.md__sec-ground .visual__key-txt', {
      opacity: 1
    }, {
      duration: 0.5,
      opacity: 0
    }, 'txtFade').to('.md__sec-ground .txt-unit__tit', {
      duration: 0.2
    });
    var interviewArticleMotion2 = gsap.timeline({
      scrollTrigger: {
        trigger: $('.md__sec-ground .interview'),
        pin: $('.md__sec-ground .itv-photo-fix'),
        start: function start() {
          return 'top top';
        },
        end: function end() {
          return 'bottom bottom';
        },
        scrub: 1,
        onEnter: function onEnter() {
          $('.sec-ground-symbol').css({
            'position': 'fixed'
          });
        },
        onLeave: function onLeave() {
          $('.sec-ground-symbol').css({
            'position': 'absolute',
            'top': $('.md__sec-ground .interview').outerHeight() - symbolSet(0.65) + 'px'
          }); // moveSecFunc(interviewArticleMotion2.scrollTrigger.start +1, 0.6)
        },
        onEnterBack: function onEnterBack() {
          $('.sec-ground-symbol').css({
            'position': 'fixed',
            'top': '65vh'
          });
        },
        onLeaveBack: function onLeaveBack() {
          // moveSecFunc(picnicPicCard.scrollTrigger.end, 0.6)
          $('.sec-ground-symbol').css({
            'position': 'absolute',
            'top': '65vh'
          });
        }
      }
    });
    var groundInterviewSec1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".itv-ground-marker-1",
        start: "top 40%",
        end: "bottom 30%",
        // markers:true,
        id: 'maker-1',
        scrub: 1,
        onEnter: function onEnter() {
          secGround.find('.itv-people__name.marker-1-target').addClass('txt-hello');
          secGround.find('.itv-photo-ground.marker-1-target > div').addClass('img-hello');
        }
      }
    });
    var groundPicCard = gsap.timeline({
      scrollTrigger: {
        trigger: ".md__sec-ground .pic-card__inner",
        start: "top top",
        end: '+=' + ground + 'rem',
        //1800
        scrub: 1,
        // markers:true,
        pin: true,
        id: '',
        onEnter: function onEnter() {// $('.sec-better-symbol-mo').css({
          //   'position': 'fixed',
          //   'top':'100vh'
          // })
        },
        onEnterBack: function onEnterBack() {// $('.sec-better-symbol-mo').css({
          //   'position': 'fixed',
          //   'top':'100vh'
          // })
        },
        onUpdate: function onUpdate(self) {
          if (self.progress < 0.5) {
            $('.md__sec-ground .pic-card__change').each(function (idx, item) {
              $(item).find('.pic-card__target').eq(1).removeClass('hello');
              $(item).find('.pic-card__target').eq(0).addClass('hello');
            });
            $(secGround).find('.curr-wrap').css({
              'transform': 'translateY(0)'
            });
          } else {
            $('.md__sec-ground .pic-card__change').each(function (idx, item) {
              $(item).find('.pic-card__target').eq(0).removeClass('hello');
              $(item).find('.pic-card__target').eq(1).addClass('hello');
            });
            $(secGround).find('.curr-wrap').css({
              'transform': 'translateY(-50%)'
            });
          }
        },
        onLeave: function onLeave() {// if (!secBetter.hasClass('active')) {
          //   $('html, body').css({
          //     overflow: 'hidden'
          //   })
          // }
          // moveSecFunc(secBetterTl.scrollTrigger.start +1, 0.6)
          // $('.sec-better-symbol-mo').css({
          //   'position': 'absolute',
          //   'top': '100%'
          // })
        },
        onLeaveBack: function onLeaveBack() {// moveSecFunc(interviewArticleMotion2.scrollTrigger.end, 0.6);
          // $('.sec-better-symbol-mo').css({
          //   'position': 'absolute',
          //   'top': 'calc(100vh + 90rem)'
          // })
        }
      }
    }); // $('body').addClass('scrollDisable').on('scroll touchmove mousewheel', function(e){
    //   e.preventDefault();
    // });
    // $('body').removeClass('scrollDisable').off('scroll touchmove mousewheel');
    //3번 섹션 - 그라운드 섹션 관련 끝(mo)
    //4번 섹션 - 베러 섹션 관련 시작(mo)

    var secBetterTl = gsap.timeline({
      scrollTrigger: {
        trigger: secBetter,
        start: function start() {
          return 'top top';
        },
        end: function end() {
          return '+=' + better + 'rem'; //8000
        },
        scrub: 1,
        pin: true,
        onUpdate: function onUpdate(self) {},
        onEnter: function onEnter() {
          $('.sec-better-symbol-mo').css({
            'position': 'fixed',
            'top': '88%'
          });
          keyvisualAnimateBetter(secBetter);
        },
        onLeave: function onLeave() {
          betterFirstLoad = false; // moveSecFunc(picnicPicCard.scrollTrigger.start, 0.6);
        },
        onLeaveBack: function onLeaveBack() {// moveSecFunc(groundPicCard.scrollTrigger.end, 0.6);
          // $('.sec-better-symbol-mo').css({
          //   'position': 'absolute',
          //   'top': '100%'
          // })
        }
      }
    }); // var betterPicDuration= 0.2;

    var betterPicDuration = 0.5;
    secBetterTl.to({}, {
      duration: styleBetterEmpty,
      delay: sectionLockDelay,
      onStart: function onStart() {}
    }).addLabel('moving').fromTo(secBetter.find('.pic-card__unit--left'), {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '-50',
      yPercent: '-50'
    }, {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '44',
      yPercent: '170',
      duration: movingDuration,
      onComplete: function onComplete() {
        //브랜드 네임 등장 인터렉션
        secBetter.find('.pic-card__unit').find('.pic-card__target.hello').find('.motion-txt').addClass('txt-hello');
      }
    }, 'moving').fromTo(secBetter.find('.pic-card__unit--top'), {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '-50',
      yPercent: '-50'
    }, {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '-91',
      yPercent: '187',
      duration: movingDuration,
      onComplete: function onComplete() {},
      onReverseComplete: function onReverseComplete() {}
    }, 'moving').fromTo(secBetter.find('.pic-card__unit--right'), {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '-50',
      yPercent: '-50'
    }, {
      top: 50 + "%",
      left: 50 + "%",
      xPercent: '0',
      yPercent: '-120',
      duration: movingDuration,
      onComplete: function onComplete() {}
    }, 'moving').addLabel('secBetter-text').fromTo(secBetter.find('.pic-card__section-tit__box'), {
      opacity: 1
    }, {
      opacity: 0,
      duration: 0.1,
      onUpdate: function onUpdate() {
        var thisPrg = this.progress();

        if (thisPrg > 0.8 && thisPrg < 0.9) {
          secBetter.find('.pic-card__txt-set').find('.pic-card__txt:first-child').removeClass('hello');
        }
      }
    }, 'moving').fromTo(secBetter.find('.pic-card__intro-txt p'), {
      opacity: 1
    }, {
      duration: 0.1,
      opacity: 0
    }, 'moving').to({}, {
      onStart: function onStart() {
        secBetter.find('.pic-card__txt-set').find('.pic-card__txt:first-child').addClass('hello');
        secBetter.find('.pic-card__nav').addClass('hello');
      },
      onReverseComplete: function onReverseComplete() {
        secBetter.find('.pic-card__unit').find('.pic-card__target.hello').find('.motion-txt').removeClass('txt-hello');
        secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(1)').removeClass('hello');
      }
    }).addLabel('changeTo2') // 두번째 섹션
    .to(secBetter.find('.pic-card__unit--left'), {
      opacity: 1,
      onStart: function onStart() {
        secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(1)').removeClass('hello');
        secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(1)').removeClass('hello');
        secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').addClass('hello');
        secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(2)').addClass('hello');
        secBetter.find('.curr-wrap').css({
          'transform': 'translateY(-33%)'
        });
      },
      onComplete: function onComplete() {},
      onReverseComplete: function onReverseComplete() {
        secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(2)').removeClass('hello');
        secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').removeClass('hello');
        secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(1)').addClass('hello');
        secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(1)').addClass('hello');
        secBetter.find('.curr-wrap').css({
          'transform': 'translateY(0)'
        });
      }
    }, 'changeTo2').addLabel('changeTo3') // 세번째 섹션
    .to(secBetter.find('.pic-card__unit--left'), {
      opacity: 1,
      onStart: function onStart() {
        secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(2)').removeClass('hello');
        secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').removeClass('hello');
        secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(3)').addClass('hello');
        secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(3)').addClass('hello');
        secBetter.find('.pic-card__img-set').find('.pic-card__img.pic-card__target-alone').addClass('hello');
        secBetter.find('.curr-wrap').css({
          'transform': 'translateY(-66%)'
        });
      },
      onComplete: function onComplete() {},
      onReverseComplete: function onReverseComplete() {
        secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(3)').removeClass('hello');
        secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(3)').removeClass('hello');
        secBetter.find('.pic-card__img-set').find('.pic-card__img.pic-card__target-alone').removeClass('hello');
        secBetter.find('.pic-card__img-set').find('.pic-card__target:nth-child(2)').addClass('hello');
        secBetter.find('.pic-card__txt-set').find('.pic-card__txt:nth-child(2)').addClass('hello');
        secBetter.find('.curr-wrap').css({
          'transform': 'translateY(-33%)'
        });
      }
    }, 'changeTo3'); //4번 섹션 - 베러 섹션 관련 끝(mo)

    backgroundColorChange();
  }
});
var listClassArray = [];
var listNameArray = [];
var secHeightArray = [];
var quickNameW = $('.quick__nav a').outerWidth();
var listWidth = 0;
window.addEventListener('load', function () {
  windowH = $(window).outerHeight();
  windowPos = $(window).scrollTop();
  listWidth = App.sizeMode == 0 ? 350 : 607;
  quickNameW = $('.quick__nav a').outerWidth();
  $('.quick__nav').css({
    'width': quickNameW,
    'max-width': listWidth
  });
  $('.quick__list').css({
    'width': quickNameW,
    'max-width': listWidth
  });
  $('.quick__item-btn').on('click', function () {
    var clickItemIndex = $(this).parent('.quick__item').index();
    var moGap = App.sizeMode == 0 ? 100 : 10;
    var secPos = clickItemIndex == 0 || 3 ? secHeightArray[clickItemIndex] - (windowH - moGap) : secHeightArray[clickItemIndex];
    scrollToFlag = false;
    betterScrollToFlag = false;
    gsap.to(window, {
      ease: 'none',
      duration: 0,
      scrollTo: {
        y: secPos,
        autoKill: false
      },
      onComplete: function onComplete() {
        setTimeout(function () {
          scrollToFlag = true;
          betterScrollToFlag = true;
        }, 2000);
      }
    });
  });

  if (!App.sizeMode == 0) {
    $('.quick__nav').on('mouseenter', function (e) {
      e.preventDefault();
      $('.quick').addClass('quick--active');
    });
    $('.quick').on('mouseleave', function () {
      $('.quick').removeClass('quick--active');
    });
  } else {
    $('.quick__nav a').on('click', function (e) {
      e.preventDefault();
      $('.quick').addClass('quick--active');
    });
    $('.quick__item-btn').on('click', function (e) {
      e.preventDefault();
      $('.quick').removeClass('quick--active');
    });
  }

  mdMenuArr();
  scrollMenuSet();
  secHeight();
});
App.bindCallback(['resize'], function () {
  quickNameW = $('.quick__nav a').outerWidth();
  listWidth = App.sizeMode == 0 ? 350 : 607;
  $('.quick__nav').css({
    'width': quickNameW,
    'max-width': listWidth
  });
  $('.quick__list').css({
    'width': quickNameW,
    'max-width': listWidth
  });
  mdMenuArr();
  setTimeout(function () {
    windowH = window.innerHeight;
    secHeight();
  }, 10);
}); //섹션 높이값 계산

function secHeight() {
  secHeightArray = [];
  windowH = window.innerHeight;
  $('.md__sec-box').each(function () {
    var thisOffset = $(this).offset().top + windowH;
    secHeightArray.push(thisOffset);
  });
} //페이지 메뉴 array 생성


function mdMenuArr() {
  var listChildren = $(".quick__list li").children();

  for (var i = 0; i < listChildren.length; i++) {
    var listChild = listChildren[i];
    var listClass = $(listChild).attr('data-section');
    var listName = $(listChild).text();
    listClassArray.push(listClass);
    listNameArray.push(listName);
  }
} //discover menu 셋팅


function scrollMenuSet(curScroll) {
  for (var i = 0; i < listClassArray.length; i++) {
    var secClass = listClassArray[i];
    var secName = listNameArray[i];
    var SecPos = $('.' + secClass).offset().top;
    var secHeight = $('.' + secClass).height();

    if (windowPos >= SecPos && windowPos < SecPos + secHeight) {
      $(".quick__item-btn[data-section='" + secClass + "']").addClass("quick__item-btn--active");
      $('.quick__nav a').text(secName);
      quickNameW = $('.quick__nav a').outerWidth();
      $('.quick__nav').css({
        'width': quickNameW
      });
      $('.quick__list').css({
        'width': quickNameW
      });
    } else {
      $(".quick__item-btn[data-section='" + secClass + "']").removeClass("quick__item-btn--active");
    }
  }
}

var windowH, windowPos;
$(window).scroll(function () {
  windowH = $(window).outerHeight();
  windowPos = $(window).scrollTop();
  scrollMenuSet($(window).scrollTop());
  secHeight();
}); //공통: 섹션 메뉴가 푸터 있을때

gsap.timeline({
  scrollTrigger: {
    trigger: $('.footer-map'),
    start: 'top bottom',
    end: 'bottom bottom',
    scrub: 0,
    onEnter: function onEnter() {
      $('.quick').addClass('quick--hide');
    },
    onLeaveBack: function onLeaveBack() {
      $('.quick').removeClass('quick--hide');
    }
  }
});