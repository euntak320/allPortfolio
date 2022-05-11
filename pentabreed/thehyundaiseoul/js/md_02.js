"use strict";

/* JS */
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
  ease: "none",
  duration: 2
});
App.bindCallback(['load'], function () {// introAni01.play();
  // introAni02.pause();
  // introAni01.pause();
  // introAni02.play();
  // $('html, body').css({
  //   height: '100%',
  //   overflow: 'hidden'
  // })
});
ScrollTrigger.matchMedia({
  'all': function all() {},
  '(min-width: 769px)': function minWidth769px() {
    App.bindCallback(['load'], function () {
      introAni01.play();
      introAni01.eventCallback("onComplete", function () {
        $('html, body').css({
          height: 'auto',
          overflow: 'auto'
        });
      });
    });
    var introAni01 = gsap.timeline().fromTo('.intro__symbol01', {
      top: 0 + '%',
      yPercent: -100,
      xPercent: -62,
      rotation: 20,
      opacity: 0
    }, {
      duration: 1.2,
      top: 50 + '%',
      yPercent: 25,
      xPercent: -62,
      rotation: 20,
      opacity: 1,
      ease: Expo.easeIn
    }).to('.intro__symbol01', {
      duration: 0.2,
      rotation: -0,
      ease: "Power1.easeIn"
    }, '-=0.1').fromTo('.intro__symbol02', {
      top: 0 + '%',
      yPercent: -100,
      xPercent: -122,
      rotation: 10,
      opacity: 0
    }, {
      duration: 1.3,
      top: 50 + '%',
      yPercent: -47,
      xPercent: -122,
      rotation: 10,
      opacity: 1,
      ease: Expo.easeIn
    }, '-=1').to('.intro__symbol02', {
      duration: 0.3,
      rotation: 0,
      ease: "Power1.easeIn"
    }).fromTo('.intro__symbol03', {
      top: 0 + '%',
      yPercent: -100,
      xPercent: -11,
      rotation: -10,
      opacity: 0
    }, {
      duration: 1.5,
      top: 50 + '%',
      yPercent: -50,
      xPercent: -11,
      rotation: -10,
      opacity: 1,
      ease: Expo.easeIn
    }, '-=1.5').to('.intro__symbol03', {
      duration: 0.4,
      rotation: 0,
      ease: "Power1.easeIn"
    }).fromTo('.intro__symbol04', {
      top: 0 + '%',
      yPercent: -100,
      xPercent: -50.7,
      rotation: -5,
      opacity: 0
    }, {
      duration: 1,
      top: 50 + '%',
      yPercent: -100,
      xPercent: -50.7,
      rotation: -5,
      opacity: 1,
      ease: Expo.easeIn
    }, '-=1').to('.intro__symbol04', {
      duration: 0.6,
      rotation: 10,
      ease: Bounce.easeOut
    }, '-=0.2').fromTo('.intro__tit-life', {
      top: 0 + '%',
      yPercent: -100,
      xPercent: -262,
      rotation: 43,
      opacity: 0
    }, {
      duration: 1,
      top: 50 + '%',
      yPercent: 147,
      xPercent: -262,
      rotation: 43,
      opacity: 1,
      ease: Expo.easeIn
    }, '-=1.5').to('.intro__tit-life', {
      duration: 0.2,
      rotation: 33,
      ease: "Power1.easeIn"
    }, '-=0.5').fromTo('.intro__tit-cu', {
      top: 0 + '%',
      yPercent: -100,
      xPercent: 26.5,
      rotation: -32,
      opacity: 0
    }, {
      duration: 1,
      top: 50 + '%',
      yPercent: 222,
      xPercent: 26.5,
      rotation: -32,
      opacity: 1,
      ease: Expo.easeIn
    }, '-=1.2').to('.intro__tit-cu', {
      duration: 0.2,
      rotation: -22,
      ease: "Power1.easeIn"
    }, '-=0.3').fromTo('.intro__desc', {
      top: 0 + '%',
      yPercent: -100,
      xPercent: 65,
      rotation: -19.5,
      opacity: 0
    }, {
      duration: 1,
      top: 50 + '%',
      yPercent: 286,
      xPercent: 65,
      rotation: -19.5,
      opacity: 1,
      ease: Expo.easeIn
    }, '-=1.1').to('.intro__desc', {
      duration: 0.2,
      rotation: -9.5,
      ease: "Power1.easeIn"
    }, '-=0.2'); // .fromTo('.intro__desc',{
    //   top: 50+'%',
    //   yPercent: 286,
    //   xPercent: 65,
    //   rotation : -9.5,
    //   opacity: 0,
    // },{
    //   duration: 1,
    //   top: 50+'%',
    //   yPercent: 286,
    //   xPercent: 65,
    //   rotation : -9.5,
    //   opacity: 1,
    //   ease: 'none'
    // },'-=0.2')
  },
  '(max-width: 768px)': function maxWidth768px() {
    App.bindCallback(['load'], function () {
      introAni02.play();
      introAni02.eventCallback("onComplete", function () {
        $('html, body').css({
          height: 'auto',
          overflow: 'auto'
        });
      });
    });
    var introAni02 = gsap.timeline().fromTo('.intro__symbol01', {
      top: 0 + '%',
      yPercent: -100,
      xPercent: -52,
      rotation: 15,
      opacity: 0
    }, {
      duration: 1.2,
      top: 50 + '%',
      yPercent: 81,
      xPercent: -52,
      rotation: 15,
      opacity: 1,
      ease: Expo.easeIn
    }).to('.intro__symbol01', {
      duration: 0.2,
      rotation: 0,
      ease: "Power1.easeIn"
    }, '-=0.1').fromTo('.intro__symbol02', {
      top: 0 + '%',
      yPercent: -100,
      xPercent: -102,
      rotation: 12,
      opacity: 0
    }, {
      duration: 1.3,
      top: 50 + '%',
      yPercent: -13,
      xPercent: -102,
      rotation: 12,
      opacity: 1,
      ease: Expo.easeIn
    }, '-=1').to('.intro__symbol02', {
      duration: 0.3,
      rotation: 5,
      ease: "Power1.easeIn"
    }).fromTo('.intro__symbol03', {
      top: 0 + '%',
      yPercent: -100,
      xPercent: -18,
      rotation: -50,
      opacity: 0
    }, {
      duration: 1.5,
      top: 50 + '%',
      yPercent: 60,
      xPercent: -18,
      rotation: -55,
      opacity: 1,
      ease: Expo.easeIn
    }, '-=1.5').to('.intro__symbol03', {
      duration: 0.3,
      rotation: -45,
      ease: "Power1.easeIn"
    }).fromTo('.intro__symbol04', {
      top: 0 + '%',
      yPercent: -100,
      xPercent: -32,
      rotation: -10,
      opacity: 0
    }, {
      duration: 1,
      top: 50 + '%',
      yPercent: -67,
      xPercent: -32,
      rotation: -10,
      opacity: 1,
      ease: Expo.easeIn
    }, '-=1').to('.intro__symbol04', {
      duration: 0.4,
      rotation: -4,
      ease: "Power1.easeIn"
    }, '-=0.2').fromTo('.intro__tit-life', {
      top: 0 + '%',
      yPercent: -100,
      xPercent: -157,
      rotation: -38,
      opacity: 0
    }, {
      duration: 1,
      top: 50 + '%',
      yPercent: 532,
      xPercent: -157,
      rotation: -38,
      opacity: 1,
      ease: Expo.easeIn
    }, '-=1.3').to('.intro__tit-life', {
      duration: 0.2,
      rotation: -33,
      ease: "Power1.easeIn"
    }, '-=0.5').fromTo('.intro__tit-cu', {
      top: 0 + '%',
      yPercent: -100,
      xPercent: -56,
      rotation: 96,
      opacity: 0
    }, {
      duration: 1,
      top: 50 + '%',
      yPercent: -16,
      xPercent: -56,
      rotation: 96,
      opacity: 1,
      ease: Expo.easeIn
    }, '-=1').to('.intro__tit-cu', {
      duration: 0.1,
      rotation: 106,
      ease: "Power1.easeIn"
    }).fromTo('.intro__desc', {
      top: 0 + '%',
      yPercent: -100,
      xPercent: -47,
      rotation: -40.9,
      opacity: 0
    }, {
      duration: 1,
      top: 50 + '%',
      yPercent: -104,
      xPercent: -47,
      rotation: -40.9,
      opacity: 1,
      ease: Expo.easeIn
    }, '-=1').to('.intro__desc', {
      duration: 0.2,
      rotation: -33.9,
      ease: "Power1.easeIn"
    }); // .fromTo('.intro__desc',{
    //   top: 50+'%',
    //   yPercent: -104,
    //   xPercent: -47,
    //   rotation: -33.9,
    //   opacity: 0,
    // },{
    //   duration: 1,
    //   top: 50+'%',
    //   yPercent: -104,
    //   xPercent: -47,
    //   rotation : -33.9,
    //   opacity: 1,
    //   ease: 'none'
    // },'-=0.2')'
  }
});
var tl = gsap.timeline();
tl.add("start").from(".orange", {
  xPercent: -100
}).add("orange").from(".purple", {
  xPercent: 100
}).add("purple").from(".green", {
  yPercent: -100
}).add("green"); // ScrollTrigger.create({
//   animation: tl,
//   trigger: "#container",
//   start: "top top",
//   end: "+=4000", 
//   scrub: true,
//   pin: true,
//   anticipatePin: 1
// });

var secStyle = '.md__sec-style';

function imgCover() {
  var secStyleTl = gsap.timeline({
    scrollTrigger: {
      trigger: secStyle,
      start: function start() {
        return 'top top';
      },
      end: function end() {
        return '+=' + 9000 + 'rem';
      },
      onEnter: function onEnter() {
        var firstMotionTarget = $('.img-unit-wrap--first');
        $(firstMotionTarget).find('.img-unit').each(function (idx, target) {
          setTimeout(function () {
            $(target).addClass('img-unit--on');
          }, idx * 500);
        });
      },
      scrub: 1,
      pin: true // markers: true,

    }
  });
  secStyleTl.addLabel('sss').to('.img-unit-wrap--first', {
    duration: 1,
    x: '0',
    y: '0'
  }).to('.img-unit-wrap--first .img-unit--rb .img-unit__img', {
    duration: 0.2,
    x: 189.5 + "%",
    y: 15 + "%"
  }, 'sss').to('.img-unit-wrap--first .img-unit--lt .img-unit__img', {
    duration: 0.2,
    x: -96 + "%",
    y: -98 + "%"
  }, 'sss').to('.img-unit-wrap--first .img-unit--lt .img-unit__img', {
    duration: 0.2
  }, 'sss').to();
}

imgCover();