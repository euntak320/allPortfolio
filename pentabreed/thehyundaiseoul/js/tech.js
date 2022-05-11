"use strict";

/* JS */
function scrollLock() {
  if (window.pageYOffset > 10) {
    document.querySelector('.p-tech').classList.remove('loading');
    document.querySelector('.keyvisual__desc').classList.add('txt-hello');
    document.querySelector('.keyvisual__cross-title').classList.add('keyvisual__cross-title--loaded');
    document.querySelector('.keyvisual__img__list--03').style.visibility = 'visible';
  }
} //텍스트, 사진 스크롤 인터렉션


function timeInteraction() {
  var sections = ['#newtech', '#technology'];
  sections.reduce(function (acc, cur) {
    var texts = "".concat(cur, " .motion-txt");
    var pics = "".concat(cur, " .img-box");
    ScrollTrigger.create({
      trigger: cur,
      start: "top-=40% top",
      onEnter: function onEnter() {
        gsap.utils.toArray(texts).forEach(function (text) {
          ScrollTrigger.create({
            trigger: text,
            // start: "40% bottom",
            onEnter: function onEnter() {
              text.classList.add('txt-hello');
            }
          });
        });
        gsap.utils.toArray(pics).forEach(function (pic) {
          ScrollTrigger.create({
            trigger: pic,
            start: "40% bottom",
            onEnter: function onEnter() {
              pic.classList.add('img-hello');
            }
          });
        });
      }
    });
  }, 0);
  return false;
} // 키비쥬얼 애니메이션


function keyvisualAnimate() {
  var kvDescription = document.querySelector('.keyvisual__desc');
  var kvTitle = document.querySelector('.keyvisual__cross-title');
  var myduration = 0.4;
  var timeline = gsap.timeline({
    trigger: '.keyvisual',
    start: function start() {
      return "top top";
    },
    ease: 'none'
  });
  timeline.to('.keyvisual__img__list--01', {
    visibility: 'visible',
    duration: myduration
  }).to('.keyvisual__img__list--02', {
    visibility: 'visible',
    duration: myduration
  }).to('.keyvisual__img__list--03', {
    visibility: 'visible',
    duration: myduration
  }).to('.keyvisual__img__list--04', {
    visibility: 'visible',
    duration: myduration
  }).addLabel('a').to(kvDescription, {
    onStart: function onStart() {
      return kvDescription.classList.add('txt-hello');
    }
  }, 'a').to(kvTitle, {
    onStart: function onStart() {
      return kvTitle.classList.add('keyvisual__cross-title--loaded');
    }
  }, 'a');
  timeline.eventCallback('onComplete', function () {
    document.querySelector('.p-tech').classList.remove('loading');
  });
} // 테크 백그라운드 체인지


function backgroundColorChange() {
  var changeEl = document.querySelector('.p-tech');
  var targetEl = document.querySelector('.technology');
  ScrollTrigger.create({
    trigger: targetEl,
    start: function start() {
      return "top 30%";
    },
    onEnter: function onEnter() {
      changeEl.classList.add('black');
    },
    onLeaveBack: function onLeaveBack() {
      changeEl.classList.remove('black');
    }
  });
}

App.bindCallback(['load'], function () {
  scrollLock();
});
ScrollTrigger.matchMedia({
  // 전 구간
  'all': function all() {
    keyvisualAnimate();
    timeInteraction();
    backgroundColorChange();
  }
});