"use strict";

/* JS */
;

(function ($) {
  var windowPos = 0;
  var windowH = $(window).outerHeight();
  var windowW = $(window).outerWidth();
  var listClassArray = [];
  var listNameArray = [];
  var isIe = document.querySelector('html').classList.contains('br-ie');
  var mobileBarH;
  var quickNameW = $('.quick__nav a').outerWidth();
  var listWidth = 0;
  var secHeightArray = [];
  window.addEventListener('load', function () {
    windowPos = $(window).scrollTop();
    listWidth = App.sizeMode == 0 ? 300 : 530;
    quickNameW = $('.quick__nav a').outerWidth();
    secHeight();

    if (windowPos <= 10) {
      $('html, body').css({
        height: '100%',
        overflow: 'hidden'
      });
    }

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
      var dataSec = $(this).attr('data-section');
      var secPos = dataSec == "discover__sec-1" ? 10 : secHeightArray[clickItemIndex] + (App.sizeMode == 0 ? 200 : 100);
      $('html, body').animate({
        scrollTop: secPos
      }, 500);
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
      setTimeout(function () {
        $('.discover__sec-1 .c-pin-target').css('height', window.outerHeight); // $('.cover-img').css('height',window.outerHeight)
      }, 100);
      $('.quick__nav a').on('click', function (e) {
        e.preventDefault();
        $('.quick').addClass('quick--active');
      });
      $('.quick__item-btn').on('click', function (e) {
        e.preventDefault();
        $('.quick').removeClass('quick--active');
      });
    }

    mVoyageSet();
    discoverMenuArr();
    scrollMenuSet();
    ieFix();
  });
  App.bindCallback(['resize'], function () {
    windowW = $(window).outerWidth();
    quickNameW = $('.quick__nav a').outerWidth();
    listWidth = App.sizeMode == 0 ? 300 : 530;
    $('.quick__nav').css({
      'width': quickNameW,
      'max-width': listWidth
    });
    $('.quick__list').css({
      'width': quickNameW,
      'max-width': listWidth
    });
    mVoyageSet();
    discoverMenuArr();
    ieFix();
    setTimeout(function () {
      secHeight();

      if (App.sizeMode == 0) {
        $('.discover__sec-1 .c-pin-target').css('height', window.outerHeight); // $('.cover-img').css('height',window.innerHeight)
      }
    }, 100); // $('.discover-info-fix.only-pc .motion-txt').each(function(idx,item){
    //   $(item).removeClass('txt-hello')
    // })

    ScrollTrigger.refresh();
  });
  ScrollTrigger.addEventListener('refresh', function () {
    ScrollTrigger.update();
  });
  $(window).scroll(function () {
    windowH = $(window).outerHeight();
    windowPos = $(window).scrollTop();
    scrollMenuSet($(window).scrollTop());
    setTimeout(function () {
      imgHello();
    }, 100);
    secHeight();
  }); //requestAnimationFrame

  var renderLoopID = undefined;

  (function renderLoop() {
    mobileBarH = $('.height-default').height() - window.innerHeight;
    renderLoopID = window.requestAnimationFrame(renderLoop);
  })(); //ie check


  function ieFix() {
    if (isIe) {
      $('.discover-info-fix.only-pc .discover-info__txt').each(function (idx, itm) {
        var targetH = $(itm).height() / 2;
        $(itm).css('margin-top', -targetH + "px");
      });
    }
  } //section 위치


  function secHeight() {
    secHeightArray = [];
    windowH = window.innerHeight;
    $('.discover__sec').each(function () {
      var thisOffset = $(this).offset().top + windowH;
      secHeightArray.push(thisOffset);
    });
  } //페이지 메뉴 array 생성


  function discoverMenuArr() {
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

      if (secClass == "discover__sec-1") {
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
      } else {
        if (windowPos >= SecPos + App.winHeight && windowPos < SecPos + secHeight) {
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
  } //voyage gallery 공통 인터렉션 적용


  function imgHello() {
    var $helloImg = $('.c-voyage-gallery').find('.img-box');
    $helloImg.each(function () {
      var $this = $(this),
          thisH = $this.find('img').outerHeight(),
          thisT = $this.offset().top;

      if (windowPos >= thisT - $(window).height() + thisH / 3 && !$this.hasClass('img-hello')) {
        $this.addClass('img-hello');
      }
    });
  } //mobile voyage 높이값 셋팅


  function mVoyageSet() {
    if (App.sizeMode == 0) {
      $('.c-pin-target').css('height', windowH);
    }
  }

  function moSec2Dim() {
    //section 2  -  timeline
    var $section02 = $('.discover__sec-2 .c-pin-target');
    var scrSection02 = gsap.timeline({
      scrollTrigger: {
        trigger: $section02,
        start: function start() {
          return 'top top';
        },
        // end: '+='+ windowH,
        end: '+=' + (windowH + 1200) + 'rem',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onUpdate: function onUpdate(self) {
          if (self.progress > 0.65) {
            if (!$('.discover__sec-2 .discover-visual .motion-txt').hasClass('txt-hello')) {
              $('.discover__sec-2 .discover-visual .motion-txt').addClass('txt-hello');
            }
          }
        }
      }
    }); //section 2  -  dimd 인터렉션

    scrSection02.addLabel('section02').to('.discover__sec-2 .c-dimmed', {
      duration: 1,
      ease: "none",
      autoAlpha: 0
    }, 'section02').to('.discover__sec-1', {
      duration: 1,
      ease: "none",
      top: -mobileBarH
    }, 'section02').fromTo('.discover__sec-2 .discover-visual__img', {
      scale: 1.1
    }, {
      duration: 1,
      ease: 'none',
      scale: 1
    }, "section02").fromTo('.discover__sec-2 .cover-img img', {
      top: 0,
      yPercent: 0
    }, {
      duration: 1,
      delay: 0.5,
      ease: 'none',
      top: 100 + '%',
      yPercent: -100
    }).to('.discover__sec-2 .cover-img', {
      duration: 2,
      ease: 'none'
    });
  }

  function moSec3Dim() {
    //section 3  -  timeline
    var $section03 = $('.discover__sec-3 .c-pin-target');
    var scrSection03 = gsap.timeline({
      scrollTrigger: {
        trigger: $section03,
        start: function start() {
          return 'top top';
        },
        end: '+=' + (windowH + 1000),
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    }); //section 3  -  딤드

    scrSection03.addLabel('section03').to('.discover__sec-3 .c-dimmed', {
      ease: "none",
      autoAlpha: 0,
      duration: 0.1
    }, 'section03').to('.discover__sec-2', {
      duration: 0.2,
      ease: "none",
      top: -mobileBarH
    }, 'section03').fromTo('.discover__sec-3 .discover-visual__img', {
      scale: 1.1
    }, {
      ease: 'none',
      scale: 1,
      duration: 0.1
    }, "section03");
  }

  function moSec2Img() {
    window.addEventListener('load', function () {
      //section 2  -  비주얼 이미지 텍스트 모션
      var section02Visual = $('.discover__sec-2 .discover-visual');
      var visualTextMotion = gsap.timeline({
        scrollTrigger: {
          trigger: section02Visual,
          start: 'bottom 90%',
          // end:'bottom bottom',
          scrub: 0 // pin: true,
          // markers: true,
          // onEnter: function () {
          //   gsap.utils.toArray('.discover__sec-2 .discover-visual .motion-txt').forEach(function(text,index){
          //     ScrollTrigger.create({
          //       trigger: text,
          //       start: 'top 90%',
          //       end:'bottom bottom',
          //       // markers: true,
          //       onEnter: function () {
          //         text.classList.add("txt-hello");
          //       },
          //     });
          //   });
          // },

        }
      }); // section 2 - 텍스트 픽스

      dcInfoFix('.discover__sec-2'); // section 2 - 건축가

      richardMotion();
      var sec2Change = gsap.timeline({
        scrollTrigger: {
          trigger: ".sec-2__content-marker-1",
          start: "top 90%",
          end: "bottom center",
          scrub: 1,
          // markers: true,
          onEnter: function onEnter() {
            $('.sec-2__txt-2 .motion-txt').removeClass('txt-hello');
            $('.sec-2__txt-1 .motion-txt').addClass('txt-hello');
          },
          onLeaveBack: function onLeaveBack() {
            $('.sec-2__txt-1 .motion-txt').addClass('txt-hello');
          }
        }
      }); //section2 - 이미지리스트와 텍스트 매칭 2

      var sec2Change2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sec-2__content-marker-2",
          start: "top 70%",
          end: "bottom center",
          scrub: 1,
          onEnter: function onEnter() {
            $('.sec-2__txt-1 .motion-txt').removeClass('txt-hello');
            $('.sec-2__txt-2 .motion-txt').addClass('txt-hello');
          },
          onLeaveBack: function onLeaveBack() {
            $('.sec-2__txt-1 .motion-txt').addClass('txt-hello');
            $('.sec-2__txt-2 .motion-txt').removeClass('txt-hello');
          }
        }
      });
    });
  }

  function moSec3Img() {
    //section 3  -  비주얼 이미지 텍스트 모션
    window.addEventListener('load', function () {
      var section03Visual = $('.discover__sec-3 .discover-visual');
      var visualTextMotion02 = gsap.timeline({
        scrollTrigger: {
          trigger: section03Visual,
          start: '+=' + windowH + ' top',
          bottom: 'bottom bottom',
          scrub: 1,
          onEnter: function onEnter() {
            gsap.utils.toArray('.discover__sec-3 .discover-visual .motion-txt').forEach(function (text, index) {
              ScrollTrigger.create({
                trigger: text,
                start: 'top 90%',
                bottom: 'bottom bottom',
                onEnter: function onEnter() {
                  text.classList.add("txt-hello");
                }
              });
            });
          }
        }
      }); // section 3 - 텍스트 픽스

      dcInfoFix('.discover__sec-3'); //section3 - 이미지리스트와 텍스트 매칭 1

      var sec3Change = gsap.timeline({
        scrollTrigger: {
          trigger: ".sec-3__content-marker-1",
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
          onEnter: function onEnter() {
            $('.sec-3__txt-1 .motion-txt').addClass('txt-hello');
          },
          onLeaveBack: function onLeaveBack() {
            $('.sec-3__txt-1 .motion-txt').addClass('txt-hello');
          }
        }
      }); //section3 - 이미지리스트와 텍스트 매칭 2

      var sec3Change2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sec-3__content-marker-2",
          start: "top 78%",
          end: "bottom center",
          scrub: 1,
          onEnter: function onEnter() {
            $('.sec-3__txt-1 .motion-txt').removeClass('txt-hello');
            $('.sec-3__txt-2 .motion-txt').addClass('txt-hello');
          },
          onLeaveBack: function onLeaveBack() {
            $('.sec-3__txt-1 .motion-txt').addClass('txt-hello');
            $('.sec-3__txt-2 .motion-txt').removeClass('txt-hello');
          }
        }
      });
    });
  }

  function dcInfoFix(parent) {
    var value = '60%';
    gsap.utils.toArray($(parent).find('.discover-info-wrap')).forEach(function (fixItem, i) {
      if ($(parent).hasClass('discover__sec-3')) {
        value = '100%';
      }

      ScrollTrigger.create({
        trigger: fixItem,
        pin: $(fixItem).find('.discover-info-fix'),
        start: "top top",
        end: "bottom " + value,
        onEnter: function onEnter() {
          $(fixItem).find('.discover-info-fix').find('.discover-info__txt:first-child').find('.motion-txt').addClass('txt-hello');
          commonPicMotion(parent);
        }
      });
    });
  }

  function imgTxtMatching(target) {
    if (typeof $(target).data('pic') !== 'undefined') {
      var dataValue = $(target).data('pic');
      $('.discover-info__txt').each(function (index, txtItem) {
        $(txtItem).find('.motion-txt').removeClass('txt-hello');
        $(txtItem).filter("[data-marker='" + dataValue + "']").find('.motion-txt').addClass('txt-hello');
      });
    }
  }

  function commonPicMotion(picParent) {
    gsap.utils.toArray($(picParent).find(".discover-info__gallery-item .img-box")).forEach(function (picItem, i) {
      ScrollTrigger.create({
        trigger: picItem,
        start: "40% bottom",
        // markers: true,
        onEnter: function onEnter() {
          picItem.classList.add('img-hello'); // 마스킹 클래스
        }
      });
    });
  }

  function richardMotion() {
    var targetParent = $('.discover-richard');
    gsap.utils.toArray($(targetParent).find(".motion-txt")).forEach(function (txtItem, i) {
      ScrollTrigger.create({
        trigger: txtItem,
        start: 'top 80%',
        bottom: 'bottom top',
        // markers:true,
        onEnter: function onEnter() {
          txtItem.classList.add('txt-hello'); // 마스킹 클래스
        }
      });
    });
    gsap.utils.toArray($(targetParent).find(".discover-richard__img > div")).forEach(function (picItem, i) {
      ScrollTrigger.create({
        trigger: picItem,
        start: "40% bottom",
        // markers: true,
        onEnter: function onEnter() {
          picItem.classList.add('img-hello'); // 마스킹 클래스
        }
      });
    });
  }

  ScrollTrigger.matchMedia({
    'all': function all() {
      window.addEventListener('load', function () {
        windowPos = $(window).scrollTop();

        if (windowPos <= 10) {
          var voyage = gsap.timeline({
            delay: 0.3
          });
          voyage.to('.c-voyage-copy__tit div', {
            duration: 0.7,
            ease: 'power2.easeOut',
            x: 0 + "%",
            y: 0 + "%"
          }).to('.c-voyage-copy__txt', {
            duration: 0.5,
            opacity: 1
          });
          voyage.eventCallback("onComplete", function () {
            $('html, body').attr('style', "");
          });
        } else {
          $('.c-voyage-copy__tit div').css({
            'transform': 'translate(0%,0%)'
          });
          $('.c-voyage-copy__txt').css({
            'opacity': '1'
          });
        } //공통: 섹션 메뉴가 푸터 있을때


        gsap.timeline({
          scrollTrigger: {
            trigger: $('.c-footer'),
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
      });
    },
    '(min-width: 769px)': function minWidth769px() {
      App.bindCallback(['resize'], function () {
        ScrollTrigger.getAll().forEach(function (ST) {
          ST.refresh();
        });
      }); //section 1 timeline

      var $section01 = $('.discover__sec-1 .c-pin-target');
      var scrSection01 = gsap.timeline({
        scrollTrigger: {
          trigger: $section01,
          start: function start() {
            return 'top top';
          },
          end: function end() {
            return '+=' + 3000 + 'rem';
          },
          scrub: 1,
          pin: true
        }
      });
      scrSection01.to('.c-voyage-copy__txt p', {
        duration: 0.5,
        opacity: 0
      }).fromTo('.c-voyage-gallery__list .c-voyage-gallery__img-box1', {
        top: 100 + '%',
        x: 143 + "%",
        y: -0 + "%"
      }, {
        duration: 1,
        delay: 0,
        ease: "none",
        top: 0,
        x: 143 + "%",
        y: -101 + "%"
      }).fromTo('.c-voyage-gallery__list .c-voyage-gallery__img-box2', {
        top: 100 + '%',
        x: -165 + "%",
        y: -0 + "%"
      }, {
        duration: 1,
        delay: 0,
        ease: "none",
        top: 0,
        x: -165 + "%",
        y: -101 + "%"
      }, '-=0.3').addLabel('voyage-color').to('.discover__sec-1', {
        duration: 0.2,
        ease: 'none',
        backgroundColor: "#000"
      }, '-=0.3', 'voyage-color').to('.c-voyage-copy__tit', {
        duration: 0.2,
        ease: 'none',
        color: "#fff"
      }, '-=0.3', 'voyage-color').addLabel('voyage-gallery01').fromTo('.c-voyage-gallery__list .c-voyage-gallery__img-box3', {
        top: 100 + '%',
        x: -39.5 + "%",
        y: -0 + "%"
      }, {
        duration: 1.2,
        delay: 0,
        ease: "none",
        top: 0,
        x: -39.5 + "%",
        y: -101 + "%"
      }, '-=0.2', 'voyage-gallery01').fromTo('.c-voyage-gallery__list .c-voyage-gallery__img-box4', {
        top: 100 + '%',
        x: 20.6 + "%",
        y: -0 + "%"
      }, {
        duration: 1,
        delay: 0.8,
        ease: "none",
        top: 0,
        x: 20.6 + "%",
        y: -101 + "%"
      }, 'voyage-gallery01').fromTo('.c-voyage-gallery__list .c-voyage-gallery__img-box5', {
        top: 100 + '%',
        x: -160 + "%",
        y: -0 + "%"
      }, {
        duration: 1.2,
        delay: 1.6,
        ease: "none",
        top: 0,
        x: -160 + "%",
        y: -101 + "%"
      }, 'voyage-gallery01').addLabel('voyage-text').fromTo('.c-voyage-copy__tit', {
        fontSize: "360rem",
        top: 50 + "%",
        left: 50 + "%",
        xPercent: -50,
        yPercent: -50
      }, {
        duration: 0.8,
        ease: "none",
        fontSize: "32rem",
        top: 100 + "%",
        left: 50 + "%",
        xPercent: -50,
        yPercent: -100
      }, 'voyage-text').fromTo('.c-voyage-copy__tit div', {
        opacity: 1
      }, {
        duration: 0.4,
        delay: 0.3,
        ease: "none",
        opacity: 0
      }, 'voyage-text').fromTo('.c-voyage-copy__tit .v', {
        fontSize: "330rem"
      }, {
        duration: 0.8,
        ease: "none",
        fontSize: "30rem"
      }, 'voyage-text').fromTo('.c-voyage-copy__tit .o', {
        fontSize: "330rem"
      }, {
        duration: 0.8,
        ease: "none",
        fontSize: "30rem"
      }, 'voyage-text').fromTo('.quick', {
        autoAlpha: 0
      }, {
        ease: "none",
        duration: 0.1,
        delay: 0.5,
        autoAlpha: 1
      }, 'voyage-text').to('.quick', {
        duration: 0.5
      }); //section 2 timeline

      var $section02 = $('.discover__sec-2 .c-pin-target');
      var scrSection02 = gsap.timeline({
        scrollTrigger: {
          trigger: $section02,
          start: function start() {
            return 'top top';
          },
          end: function end() {
            return '+=' + windowH;
          },
          scrub: 1,
          pin: true
        }
      }); //section 2  -  dimd

      scrSection02.addLabel('section02').to('.discover__sec-2 .c-dimmed', {
        ease: 'Power1.easeIn',
        autoAlpha: 0
      }, 'section02').fromTo('.discover__sec-2 .discover-visual__img', {
        scale: 1.1
      }, {
        scale: 1
      }, "section02"); //section2 시작 (pc)

      window.addEventListener('load', function () {
        var section02Visual = $('.discover__sec-2 .discover-visual');
        var visualTextMotion = gsap.timeline({
          scrollTrigger: {
            trigger: section02Visual,
            start: '+=' + windowH + ' top',
            end: 'bottom bottom',
            scrub: 1,
            onEnter: function onEnter() {
              gsap.utils.toArray('.discover__sec-2 .discover-visual .motion-txt').forEach(function (text, index) {
                ScrollTrigger.create({
                  trigger: text,
                  start: 'top 90%',
                  end: 'bottom center',
                  onEnter: function onEnter() {
                    text.classList.add("txt-hello");
                  }
                });
              });
            }
          }
        });
        dcInfoFix('.discover__sec-2'); //section2 - 이미지리스트와 텍스트 매칭 1

        var sec2Change = gsap.timeline({
          scrollTrigger: {
            trigger: ".sec-2__content-marker-1",
            start: "top bottom",
            end: "bottom center",
            scrub: 1,
            onEnter: function onEnter() {
              $('.sec-2__txt-2 .motion-txt').removeClass('txt-hello');
              $('.sec-2__txt-1 .motion-txt').addClass('txt-hello');
            },
            onLeaveBack: function onLeaveBack() {
              $('.sec-2__txt-1 .motion-txt').addClass('txt-hello');
            }
          }
        }); //section2 - 이미지리스트와 텍스트 매칭 2

        var sec2Change2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".sec-2__content-marker-2",
            start: "top 75%",
            end: "bottom center",
            scrub: 1,
            onEnter: function onEnter() {
              $('.sec-2__txt-1 .motion-txt').removeClass('txt-hello');
              $('.sec-2__txt-2 .motion-txt').addClass('txt-hello');
            },
            onLeaveBack: function onLeaveBack() {
              $('.sec-2__txt-1 .motion-txt').addClass('txt-hello');
              $('.sec-2__txt-2 .motion-txt').removeClass('txt-hello');
            }
          }
        });
        richardMotion();
      }); //section 3 timeline

      var $section03 = $('.discover__sec-3 .c-pin-target');
      var scrSection03 = gsap.timeline({
        scrollTrigger: {
          trigger: $section03,
          start: function start() {
            return 'top top';
          },
          end: function end() {
            return '+=' + windowH;
          },
          scrub: 1,
          pin: true // markers :true

        }
      }); //section 3  -  dimmed

      scrSection03.addLabel('section03').to('.discover__sec-3 .c-dimmed', {
        ease: "none",
        autoAlpha: 0
      }, 'section03').fromTo('.discover__sec-3 .discover-visual__img', {
        ease: 'none',
        scale: 1.1
      }, {
        ease: 'none',
        scale: 1
      }, "section03"); // //section 3  -  비주얼 이미지 텍스트 모션

      window.addEventListener('load', function () {
        var section03Visual = $('.discover__sec-3 .discover-visual');
        var visualTextMotion02 = gsap.timeline({
          scrollTrigger: {
            trigger: section03Visual,
            start: '+=' + windowH + ' top',
            bottom: 'bottom bottom',
            scrub: 1,
            onEnter: function onEnter() {
              gsap.utils.toArray('.discover__sec-3 .discover-visual .motion-txt').forEach(function (text, index) {
                ScrollTrigger.create({
                  trigger: text,
                  start: 'top 90%',
                  bottom: 'bottom bottom',
                  onEnter: function onEnter() {
                    text.classList.add("txt-hello");
                  }
                });
              });
            }
          }
        });
        dcInfoFix('.discover__sec-3');
        var sec3Change = gsap.timeline({
          scrollTrigger: {
            trigger: ".sec-3__content-marker-1",
            start: "top bottom",
            end: "bottom center",
            scrub: 1,
            onEnter: function onEnter() {
              $('.sec-3__txt-1 .motion-txt').addClass('txt-hello');
            },
            onLeaveBack: function onLeaveBack() {
              $('.sec-3__txt-1 .motion-txt').addClass('txt-hello');
            }
          }
        }); //section3 - 이미지리스트와 텍스트 매칭 2

        var sec3Change1 = gsap.timeline({
          scrollTrigger: {
            trigger: ".sec-3__content-marker-2",
            start: "top 75%",
            end: "bottom center",
            scrub: 1,
            onEnter: function onEnter() {
              $('.sec-3__txt-1 .motion-txt').removeClass('txt-hello');
              $('.sec-3__txt-2 .motion-txt').addClass('txt-hello');
            },
            onLeaveBack: function onLeaveBack() {
              $('.sec-3__txt-1 .motion-txt').addClass('txt-hello');
              $('.sec-3__txt-2 .motion-txt').removeClass('txt-hello');
            }
          }
        });
      });
    },
    '(max-width: 768px) and (min-width: 500px)': function maxWidth768pxAndMinWidth500px() {
      //section 1 timeline
      var $section01 = $('.discover__sec-1 .c-pin-target');
      var scrSection01 = gsap.timeline({
        scrollTrigger: {
          trigger: $section01,
          start: 'top top',
          end: function end() {
            return '+=' + 2000 + 'rem';
          },
          scrub: 0.5,
          pin: true
        }
      });
      scrSection01.to('.c-voyage-copy__txt p', {
        duration: 0.5,
        opacity: 0
      }).fromTo('.c-voyage-gallery__list .c-voyage-gallery__img-box1', {
        top: 100 + '%',
        x: 52 + "%",
        y: -0 + "%"
      }, {
        ease: 'none',
        duration: 1.5,
        top: 0 + '%',
        x: 52 + "%",
        y: -101 + "%"
      }).fromTo('.c-voyage-gallery__list .c-voyage-gallery__img-box2', {
        top: 100 + '%',
        x: 0 + "%",
        y: -0 + "%"
      }, {
        ease: 'none',
        duration: 1,
        delay: 0,
        top: 0,
        x: 0 + "%",
        y: -101 + "%"
      }, '-=0.3').addLabel('voyage-color').to('.discover__sec-1', {
        duration: 0.2,
        ease: 'none',
        backgroundColor: "#000"
      }, "-=0.25", 'voyage-color').to('.c-voyage-copy__tit', {
        duration: 0.2,
        ease: 'none',
        color: "#fff"
      }, "-=0.25", 'voyage-color').addLabel('voyage-gallery1').fromTo('.c-voyage-gallery__list .c-voyage-gallery__img-box3', {
        top: 100 + '%',
        x: 0 + "%",
        y: -0 + "%"
      }, {
        ease: 'none',
        duration: 1.2,
        delay: 0,
        top: 0,
        x: 0 + "%",
        y: -101 + "%"
      }, '-=0.2', 'voyage-gallery1').fromTo('.c-voyage-gallery__list .c-voyage-gallery__img-box4', {
        top: 100 + '%',
        x: 0 + "%",
        y: -0 + "%"
      }, {
        ease: 'none',
        duration: 1.3,
        delay: 0.8,
        top: 0,
        x: 0 + "%",
        y: -101 + "%"
      }, 'voyage-gallery1').fromTo('.c-voyage-gallery__list .c-voyage-gallery__img-box5', {
        top: 100 + '%',
        x: 0 + "%",
        y: -0 + "%"
      }, {
        ease: 'none',
        duration: 1.5,
        delay: 1.7,
        top: 0,
        x: 0 + "%",
        y: -101 + "%"
      }, 'voyage-gallery1').addLabel('voyage-text').fromTo('.c-voyage-copy__tit', {
        fontSize: '151rem',
        top: 50 + "%",
        left: 50 + '%',
        xPercent: -50,
        yPercent: -50
      }, {
        duration: 0.8,
        ease: "none",
        fontSize: "14rem",
        top: 100 + "%",
        left: 50 + '%',
        xPercent: -50,
        yPercent: -100
      }, 'voyage-text').fromTo('.c-voyage-copy__tit div', {
        opacity: 1
      }, {
        duration: 0.4,
        delay: 0.3,
        ease: "none",
        opacity: 0
      }, 'voyage-text').fromTo('.c-voyage-copy__tit .v', {
        fontSize: '140rem'
      }, {
        duration: 0.8,
        ease: "none",
        fontSize: "12rem"
      }, 'voyage-text').fromTo('.c-voyage-copy__tit .o', {
        fontSize: '140rem'
      }, {
        duration: 0.8,
        ease: "none",
        fontSize: "12rem"
      }, 'voyage-text').fromTo('.quick', {
        autoAlpha: 0
      }, {
        ease: "none",
        duration: 0.1,
        delay: 0.5,
        autoAlpha: 1
      }, 'voyage-text').to('.quick', {
        duration: 0.5
      });
      moSec2Dim();
      moSec2Img();
      moSec3Dim();
      moSec3Img();
    },
    '(max-width: 499px)': function maxWidth499px() {
      var $section01 = $('.discover__sec-1 .c-pin-target');
      var scrSection01 = gsap.timeline({
        scrollTrigger: {
          trigger: $section01,
          start: 'top top',
          end: function end() {
            return '+=' + 2000 + 'rem';
          },
          scrub: 0.5,
          pin: true
        }
      });
      scrSection01.to('.c-voyage-copy__txt p', {
        duration: 0.5,
        opacity: 0
      }).fromTo('.c-voyage-gallery__list .c-voyage-gallery__img-box1', {
        top: 100 + '%',
        x: 52 + "%",
        y: -0 + "%"
      }, {
        ease: 'none',
        duration: 1.3,
        top: 0 + '%',
        x: 52 + "%",
        y: -101 + "%"
      }).fromTo('.c-voyage-gallery__list .c-voyage-gallery__img-box2', {
        top: 100 + '%',
        x: 0 + "%",
        y: -0 + "%"
      }, {
        ease: 'none',
        duration: 1,
        delay: 0,
        top: 0,
        x: 0 + "%",
        y: -101 + "%"
      }, '-=0.4').addLabel('voyage-color').to('.discover__sec-1', {
        duration: 0.2,
        ease: 'none',
        backgroundColor: "#000"
      }, "-=0.25", 'voyage-color').to('.c-voyage-copy__tit', {
        duration: 0.2,
        ease: 'none',
        color: "#fff"
      }, "-=0.25", 'voyage-color').addLabel('voyage-gallery1').fromTo('.c-voyage-gallery__list .c-voyage-gallery__img-box3', {
        top: 100 + '%',
        x: 0 + "%",
        y: -0 + "%"
      }, {
        ease: 'none',
        duration: 1.2,
        delay: 0,
        top: 0,
        x: 0 + "%",
        y: -101 + "%"
      }, '-=0.2', 'voyage-gallery1').fromTo('.c-voyage-gallery__list .c-voyage-gallery__img-box4', {
        top: 100 + '%',
        x: 0 + "%",
        y: -0 + "%"
      }, {
        ease: 'none',
        duration: 1.3,
        delay: 0.8,
        top: 0,
        x: 0 + "%",
        y: -101 + "%"
      }, 'voyage-gallery1').fromTo('.c-voyage-gallery__list .c-voyage-gallery__img-box5', {
        top: 100 + '%',
        x: 0 + "%",
        y: -0 + "%"
      }, {
        ease: 'none',
        duration: 1.5,
        delay: 1.7,
        top: 0,
        x: 0 + "%",
        y: -101 + "%"
      }, 'voyage-gallery1').addLabel('voyage-text').fromTo('.c-voyage-copy__tit', {
        fontSize: "87rem",
        top: 50 + "%",
        left: 50 + '%',
        xPercent: -50,
        yPercent: -50
      }, {
        duration: 0.8,
        ease: "none",
        fontSize: "14rem",
        top: 100 + "%",
        left: 50 + '%',
        xPercent: -50,
        yPercent: -100
      }, 'voyage-text').fromTo('.c-voyage-copy__tit div', {
        opacity: 1
      }, {
        duration: 0.4,
        delay: 0.3,
        ease: "none",
        opacity: 0
      }, 'voyage-text').fromTo('.c-voyage-copy__tit .v', {
        fontSize: "80rem"
      }, {
        duration: 0.8,
        ease: "none",
        fontSize: "12rem"
      }, 'voyage-text').fromTo('.c-voyage-copy__tit .o', {
        fontSize: "80rem"
      }, {
        duration: 0.8,
        ease: "none",
        fontSize: "12rem"
      }, 'voyage-text').fromTo('.quick', {
        autoAlpha: 0
      }, {
        ease: "none",
        duration: 0.1,
        delay: 0.5,
        autoAlpha: 1
      }, 'voyage-text').to('.quick', {
        duration: 0.5
      });
      moSec2Dim();
      moSec2Img();
      moSec3Dim();
      moSec3Img();
    }
  });
})(window.jQuery);