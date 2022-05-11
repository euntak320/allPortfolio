"use strict";

// 새로고침 시 상단이동 처리
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
} // 디바이스 전환 시 새로고침 추가


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

(function ($) {
  // 인트로 페이지 메뉴 인터랙션(로딩시 하나씩 등장 - 공통 텍스트 인터랙션 적용)
  if ($('.floor--info').length > 0) {
    $($('.floor-info__itm').get().reverse()).each(function (idx, itm) {
      setTimeout(function () {
        $(itm).addClass('txt-hello');
      }, 110 * (idx + 1));
    }); // 인트로페이지 스크롤 생기는 이슈 대응(ie, window chrome)

    $('body').addClass('floor-info-body');
  } // 커버 영역 층수 표시 인터랙션(공통 텍스트 인터랙션 적용)


  if ($('.floor__otr').length > 0) {
    setTimeout(function () {
      $('.cover__floor-box').addClass('txt-hello');
    }, 250);
  } // move floor


  $('.quick__all-btn').on('click', function () {
    $('.quick').toggleClass('quick--active');
  });
  $('.quick__map-btn').on('click', function () {
    $('.quick').removeClass('quick--active');
  }); // brand

  $('.brd__main-tit').on('click', function (e) {
    e.preventDefault();
  }); // tag

  function tagInteraction(itm) {
    return gsap.to(itm, {
      paused: true,
      duration: 1,
      stagger: 0.1,
      display: 'block'
    });
  }

  gsap.registerPlugin(ScrollToPlugin);
  ScrollTrigger.matchMedia({
    '(min-width: 769px)': function minWidth769px() {
      // floor
      var $floor = $('.floor');
      var $floorWrp = $('.floor__wrp');
      var floorWidth = 0;
      var emptyDur = 0.3;
      var relVh = 0.0925925925925926;
      App.bindCallback(['load', 'resize'], function () {
        floorWidth = 0;
        $('.floor__otr').each(function (idx, itm) {
          floorWidth += $(itm).outerWidth();
        });
        $floor.css({
          height: floorWidth + 'px'
        }); // brand - all 영역 커스텀 스크롤 바 적용(ie 대응)

        $('.brd__store-wrp').css({
          height: Math.floor($('.brd__store').height())
        }); // 도면 영역 커스텀 스크롤 바 적용(ie 대응)

        $('.map__inr').css({
          height: Math.floor($('.map__wrp').height())
        });
      }); // pc 리사이즈 시 scrollTrigger - refresh 처리

      App.bindCallback(['resize'], function () {
        ScrollTrigger.getAll().forEach(function (ST) {
          ST.refresh();
        });
      }); // tag 영역 pc/mo 분기

      var tagTweens = tagInteraction('.tag__svg--pc .tag__itm'); // 커스텀 스크롤 바 적용(ie 대응)
      // barnd all

      $('.brd__store-wrp').mCustomScrollbar({
        scrollInertia: 500,
        advanced: {
          updateOnContentResize: true
        }
      }); // 도면 영역

      $('.map__inr').mCustomScrollbar({
        scrollInertia: 500,
        advanced: {
          updateOnContentResize: true
        }
      }); // move floor (퀵 버튼 마우스 오버 시 펼쳐짐)

      $('.quick').on('mouseenter', function () {
        $('.quick').addClass('quick--active');
      }).on('mouseleave', function () {
        $('.quick').removeClass('quick--active');
      }); // info - 층 마우스 오버시 이미지 노출, 텍스트 중간 이미지 마스킹관련 클래스 추가

      $('.floor-info__itm').each(function (idx, itm) {
        $(this).on('mouseenter', function () {
          $('.floor-info__bg-box').removeClass('floor-info__bg-box--active');
          $('.floor-info__bg-box').eq(idx).addClass('floor-info__bg-box--active');
          $(this).find('.img-box').addClass('img-hello');
        }).on('mouseleave', function () {
          $('.floor-info__bg-box').removeClass('floor-info__bg-box--active');
          $(this).find('.img-box').removeClass('img-hello');
        });
      }); // scrollTrigger Resize

      var curPrg;
      ScrollTrigger.addEventListener('refreshInit', function () {
        curPrg = flTl0.scrollTrigger.progress;
      });
      ScrollTrigger.addEventListener('refresh', function () {
        flTl0.scrollTrigger.scroll(curPrg * ScrollTrigger.maxScroll(window));
      });

      var quickReset = function quickReset() {
        gsap.to('.quick', {
          opacity: 1,
          display: 'flex'
        });
      }; // brand all - store 마우스 오비 시 썸네일 등장


      $('.brd__store-itm').on('mouseenter', function () {
        $(this).addClass('brd__store-itm--active');
      }).on('mouseleave', function () {
        $(this).removeClass('brd__store-itm--active');
      }); // brand class toggle function

      var brdTogFunc = function brdTogFunc(direction, $itm, progress) {
        if (direction === 1) {
          if (progress === 1) {
            $itm.removeClass('brd__itm--active');
          } else {
            $itm.addClass('brd__itm--active');
            $itm.prev('.brd__itm--1').removeClass('brd__itm--active');
          }
        } else {
          if (progress === 0) {
            $itm.removeClass('brd__itm--active');
            $itm.prev('.brd__itm--1').addClass('brd__itm--active');
          } else {
            $itm.addClass('brd__itm--active');
          }
        }

        if (progress > 0) {
          $itm.addClass('brd__itm--open');
        } else {
          $itm.removeClass('brd__itm--open');
        }
      }; //*******************
      //*******************
      // Floor : common
      //*******************
      //*******************


      var flTl0 = gsap.timeline({
        defaults: {
          ease: 'none'
        },
        scrollTrigger: {
          start: function start() {
            return 0;
          },
          end: function end() {
            return $('.floor__otr').width();
          },
          invalidateOnRefresh: true,
          scrub: 1,
          markers: true,
          onEnter: function onEnter(self) {
            $('.floor__otr').removeClass('floor__otr--active');
            $('.floor__otr').addClass('floor__otr--active');
            $('.floor__otr').addClass('floor__otr--res-load'); // reverseFlag = false
          },
          onEnterBack: function onEnterBack(self) {
            $('.floor__otr').removeClass('floor__otr--active');
            $('.floor__otr').addClass('floor__otr--active');
            $('.floor__otr .brd__itm').removeClass('brd__itm--active');
          },
          onUpdate: function onUpdate(self) {
            gsap.to('.quick__all-btn--open', {
              rotation: 360 * self.progress
            });

            if ($('.floor__wrp').data('next')) {
              if (self.progress === 1) {
                $('.floor__otr .map').addClass('map--active');
                $('.floor__otr .floor__pre').addClass('floor__pre--active');
              } else {
                $('.floor__otr .map').removeClass('map--active');
                $('.floor__otr .floor__pre').removeClass('floor__pre--active');
              }
            }
          },
          onLeave: function onLeave(self) {
            $('.c-header__wrap').addClass('c-header__wrap--floor-active');
          }
        }
      });
      flTl0.fromTo($floorWrp, {
        x: function x() {
          return 0;
        }
      }, {
        x: function x() {
          return -$('.floor__otr .floor__sec--visual').position().left + 'px';
        },
        onUpdate: function onUpdate() {
          var thisPrg = this.progress();
          gsap.to('.vi', {
            x: function x() {
              return -100 + 100 * thisPrg;
            }
          });
        }
      }).to($floorWrp, {
        duration: 1,
        x: function x() {
          return -$('.floor__otr .floor__sec--tag').position().left + 'px';
        },
        onUpdate: function onUpdate() {
          var thisPrg = this.progress();

          if (thisPrg > 0.6) {
            tagTweens.play();
          } else if (thisPrg < 0.4) {
            tagTweens.pause().progress(0);
          }

          gsap.to('.vi', {
            x: function x() {
              return 100 * thisPrg;
            }
          });
        }
      }).to($floorWrp, {
        x: function x() {
          return -$('.floor__otr .floor__sec--brand').position().left + 'px';
        }
      }).to({}, {
        duration: emptyDur
      }).addLabel('brd2').fromTo('.floor__otr .brd__itm--2', {
        y: -160 * relVh + 'vh'
      }, {
        y: '-91.94444vh' // .brd__itm 높이

      }).to('.floor__otr .brd__itm--1', {
        y: function y() {
          return '-=' + 80 * relVh + 'vh';
        }
      }, 'brd2').fromTo('.floor__otr .brd__itm--2 .brd__img', {
        x: '-50%',
        y: '-50%',
        opacity: 0,
        scale: 1.5
      }, {
        duration: 0.5,
        x: '-50%',
        y: 0,
        opacity: 1,
        scale: 1
      }, 'brd2').addLabel('brd3').fromTo('.floor__otr .brd__itm--3', {
        y: -80 * relVh + 'vh'
      }, {
        y: '-91.94444vh'
      }).to('.floor__otr .brd__itm--2', {
        y: function y() {
          return '-=' + 80 * relVh + 'vh';
        }
      }, 'brd3').fromTo('.floor__otr .brd__itm--3 .brd__img', {
        x: '-50%',
        y: '-50%',
        opacity: 0,
        scale: 1.5
      }, {
        duration: 0.5,
        x: '-50%',
        y: 0,
        opacity: 1,
        scale: 1
      }, 'brd3').to({}, {
        duration: emptyDur
      }).to($floorWrp, {
        x: function x() {
          return -$('.floor__otr .floor__sec--map').position().left + 'px';
        }
      }).addLabel('pre').to({}, {
        duration: 0.2
      }); // end point

      $('.quick__map-btn').on('click', function () {
        var tlStart = flTl0.scrollTrigger.start;
        var tlEnd = flTl0.scrollTrigger.end;
        var tlDur = flTl0._dur;
        var preLabel = flTl0.labels.pre;
        var calcPos = tlStart + (tlEnd - tlStart) / tlDur * preLabel;
        gsap.to(window, {
          duration: 1.2,
          ease: 'none',
          scrollTo: {
            y: calcPos,
            autoKill: false
          }
        });
        $('.quick').removeClass('quick--active');
      });
    },
    '(max-width: 768px)': function maxWidth768px() {
      // 로드시 도면보기 영역에 클래스 세팅(영역 색상 반전 효과)
      $('.floor__sec').addClass('floor__sec--black'); // 모바일 페이지 로딩 시 인트로/커버 영역 네비게이션 바 높이만큼 제외한 화면 높이로 설정

      App.bindCallback(['load', 'resize'], function () {
        if ($('.floor__sec--info').length > 0) {
          $('.floor__sec--info').css({
            height: window.innerHeight
          });
        }
      });

      if ($('.floor__sec--cover').length > 0) {
        $('.floor__sec--cover, .cover').css({
          height: window.innerHeight
        });
      } // 인트로페이지 제외한 모든 층


      if ($('.floor__otr').length > 0) {
        // 도면 보기 영역 위치 설정
        var mapPos;

        var setFunc = function setFunc() {
          mapPos = $('.floor__sec--map').offset().top;
        };

        setFunc(); // 층 scrollTrigger

        ScrollTrigger.create({
          scrub: 1,
          onUpdate: function onUpdate(self) {
            gsap.to('.quick__all-btn--open', {
              rotation: 360 * self.progress
            });
          }
        }); // visual parallax

        var viTl = gsap.timeline({
          scrollTrigger: {
            start: 'top top',
            endTrigger: '.floor__sec--tag',
            end: 'top top',
            scrub: 1
          }
        });
        viTl.to('.vi', {
          y: function y() {
            return 100;
          }
        }); // tag 영역 pc/mo 분기

        var tagTweens = tagInteraction('.tag__svg--mo .tag__itm'); // tag animation

        ScrollTrigger.create({
          trigger: '.floor__sec--tag',
          start: 'top bottom',
          end: 'bottom bottom',
          // markers: true,
          onEnter: function onEnter() {
            tagTweens.play();
          },
          onLeaveBack: function onLeaveBack() {
            tagTweens.pause(0);
          }
        }); // 도면 보기

        $('.quick__map-btn').on('click', function () {
          setFunc();
          gsap.to(window, {
            duration: 1,
            scrollTo: {
              y: mapPos
            }
          });
        }); // brand all - store 마우스 오비 시 썸네일 등장

        $('.brd__store-itm').on('click', function () {
          if ($(this).hasClass('brd__store-itm--active')) {
            $('.brd__store-itm').removeClass('brd__store-itm--active');
          } else {
            $('.brd__store-itm').removeClass('brd__store-itm--active');
            $(this).addClass('brd__store-itm--active');
          }
        }); // brand (all 영역)

        $('.brd__main-tit').on('click', function () {
          if ($(this).parent().hasClass('brd__itm--active')) {
            $(this).parent().removeClass('brd__itm--open');
            $(this).parent().nextAll().removeClass('brd__itm--open').removeClass('brd__itm--active');
            $(this).parent().removeClass('brd__itm--active');
          } else {
            $(this).parent().addClass('brd__itm--open');
            $(this).parent().nextAll().removeClass('brd__itm--open').removeClass('brd__itm--active');
            $(this).parent().prevAll().addClass('brd__itm--open');
          }

          $('.brd__itm--open').removeClass('brd__itm--active');
          $('.brd__itm--open').last().addClass('brd__itm--active');

          if ($('.brd__itm').eq(1).hasClass('brd__itm--open')) {
            $('.brd__itm').eq(0).removeClass('brd__itm--active');
          } else {
            $('.brd__itm').eq(0).addClass('brd__itm--active');
            $(this).parent().removeClass('brd__itm--active');
          }

          if ($(this).parent().hasClass('brd__itm--1')) {
            $(this).parent().addClass('brd__itm--active');
          }
        }); // 도면보기 영역(진입 시 색상 반전 효과 적용)
        // ScrollTrigger.create({
        //   trigger: '.floor__sec--map',
        //   start: 'top top+=80rem',
        //   end: 'bottom bottom',
        //   onEnter: function () {
        //     $('.floor__sec--map').removeClass('floor__sec--black')
        //     $('.floor__sec--map').addClass('floor__sec--enter')
        //   },
        //   onLeaveBack: function () {
        //     $('.floor__sec--map').addClass('floor__sec--black')
        //     $('.floor__sec--map').removeClass('floor__sec--enter')
        //   }
        // })
      }
    }
  }); // 도면 전체 팝업

  var allPopPos;
  $('.map__all-btn').on('click', function () {
    $('.c-header, .top').addClass('floor-order');

    if ($(window).width() >= 769) {
      gsap.to($(this).parents('.map').find('.guide-all'), {
        duration: 0.5,
        opacity: 1,
        display: 'block'
      });
      $(this).parents('.floor__otr').css({
        zIndex: 10
      });
      $(this).parents('.floor__otr').css({
        zIndex: 10
      });
    } else {
      allPopPos = $(window).scrollTop();
      $(this).parents('.map').find('.guide-all').addClass('guide-all--active');
      $('.floor').bind('touchmove', function (e) {
        e.preventDefault();
      }); // $('.guide-brand--mo').bind('touchmove', function (e) {
      //   e.stopPropagation()
      // })

      $('html, body').css({
        height: '100%',
        overflow: 'hidden'
      });
    }

    gsap.to('.quick', {
      duration: 0.5,
      opacity: 0,
      display: 'none'
    });
  });
  $('.guide-all__close').on('click', function () {
    $('.c-header, .top').removeClass('floor-order');

    if ($(window).width() >= 769) {
      gsap.to($(this).parents('.map').find('.guide-all'), {
        duration: 0.5,
        opacity: 0,
        display: 'none'
      });
      $(this).parents('.floor__otr').css({
        zIndex: 'auto'
      });
      $('html, body').css({
        overflow: 'auto'
      });
    } else {
      var $objThis = $(this);
      $('html, body').css({
        height: 'auto',
        overflow: 'auto'
      });
      $('.floor').unbind('touchmove');
      setTimeout(function () {
        $('html, body').animate({
          scrollTop: allPopPos
        }, 0);
      }, 10);
      setTimeout(function () {
        $objThis.parents('.map').find('.guide-all').removeClass('guide-all--active');
      }, 100);
    }

    gsap.to('.quick', {
      duration: 0.5,
      opacity: 1,
      display: 'block'
    });
  }); // brand map

  var popCurPos;
  //$('.map__tit').on('click', function () {
	$("#store_list").on("click", ".map__tit", function(){
    if ($(window).width() < 769) {
      popCurPos = $(window).scrollTop();
      $(this).parents('.map').find('.guide-brand--mo').addClass('guide-brand--active');
      $('html, body').css({
        height: '100%',
        overflow: 'hidden'
      });
      $('.floor').bind('touchmove', function (e) {
        e.preventDefault();
      });
      //$('.guide-brand--mo').bind('touchmove', function (e) {
      //  e.stopPropagation();
      //});
      gsap.to('.quick', {
        duration: 0.5,
        opacity: 0,
        display: 'none'
      });
    }
  });
  $('.guide-all__close').on('click', function () {
    if ($(window).width() < 769) {
      var $objThis = $(this);
      $('html, body').css({
        height: 'auto',
        overflow: 'auto'
      });
      $('.floor').unbind('touchmove');
      setTimeout(function () {
        $('html, body').animate({
          scrollTop: popCurPos
        }, 0);
      }, 10);
      setTimeout(function () {
        $objThis.parents('.map').find('.guide-brand--mo').removeClass('guide-brand--active');
      }, 100);
      gsap.to('.quick', {
        duration: 0.5,
        opacity: 1,
        display: 'block'
      });
    }
  });
})(window.jQuery);