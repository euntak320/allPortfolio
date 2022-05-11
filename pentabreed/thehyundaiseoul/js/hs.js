"use strict";

/* JS */
;

(function ($) {
  // 새로고침 시 상단이동 처리
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  } else {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  } // 브라우저 로드 시 키 비주얼 텍스트 인터랙션 시작


  $(window).on('load', function () {
    var loadTl = gsap.timeline();
    loadTl.to('html', {
      onStart: function onStart() {
        $('html, body').css({
          height: '100%',
          overflow: 'hidden'
        });
        $('.kv__txt-otr').addClass('txt-hello');
      }
    }).to('html', {
      delay: 1.2,
      onStart: function onStart() {
        $('html, body').css({
          height: 'auto',
          overflow: 'auto'
        }); // 새로고침시 kv 이미지들 재 정렬되는 모습 보여지는 현상 가림 처리

        $('.kv__vi-box--load').removeClass('kv__vi-box--load');
      }
    });
  }); // section 1 : key visual 벗어나면서 마지막 key visual 이미지 확장

  function kvOutInteraction() {
    $(window).on('load resize', function () {
      var kvOutTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.hs__sec--2',
          id: 'kv',
          start: 'top bottom',
          // markers: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onEnter: function onEnter() {
            kvOutTl.scrollTrigger.refresh();
          }
        }
      });
      kvOutTl.addLabel('outLabel').fromTo('.kv__vi-img--6', {
        ease: 'none',
        xPercent: -50,
        yPercent: -50,
        scale: 1
      }, {
        ease: 'none',
        xPercent: -50,
        yPercent: -50,
        scale: 2
      });
      return kvOutTl;
    });
  } // section 2 : CF 인터랙션


  function cfInteraction() {
    $(window).on('load', function () {
      var cfSt = ScrollTrigger.create({
        trigger: '.itr__cf-box',
        id: 'itrCF',
        start: 'top center',
        end: 'bottom 70%',
        scrub: 1,
        // markers: true,
        onEnter: function onEnter(self) {
          $(self.trigger).addClass('img-hello');
        }
      });
      return cfSt;
    });
  } // section 2 : text 인터랙션 timeline


  function txtTl() {
    var txtTl = gsap.timeline();
    txtTl.to('.itr__txt-inr--1', {
      ease: 'none',
      duration: 0,
      onStart: function onStart() {
        $('.itr__txt-inr--1').addClass('itr__txt-inr--active');
      }
    }).to('.itr__txt-inr--2', {
      delay: 0.2,
      ease: 'none',
      duration: 0,
      onStart: function onStart() {
        $('.itr__txt-inr--2').addClass('itr__txt-inr--active');
      }
    });
  } // section 2 : text 인터랙션 (fadeIn/fadeOut)


  function txtInteraction() {
    $(window).on('load', function () {
      var txtSt = ScrollTrigger.create({
        trigger: '.itr__txt-box',
        id: 'itrtxt',
        start: 'top 60%',
        end: 'bottom bottom',
        scrub: 1,
        // markers: true,
        onEnter: function onEnter(self) {
          txtTl();
        },
        onEnterBack: function onEnterBack() {
          txtTl();
        }
      });
      return txtSt;
    });
  }

  ScrollTrigger.matchMedia({
    '(min-width: 769px)': function minWidth769px() {
      // section 1 : key visual (pc)
      // 빈 스크롤 생성
      function emptyTween(dur) {
        return gsap.to({}, {
          duration: dur ? dur : 0.3
        });
      }

      var rollCurTxtDur = 0.2; // 현재 롤링 텍스트 duration

      var rollNextTxtDur = 0.1; // 다음 롤링 텍스트 duration

      var kvTlPc = gsap.timeline({
        scrollTrigger: {
          trigger: '.kv',
          id: 'kv',
          start: function start() {
            return 0;
          },
          end: function end() {
            return '+=' + 9800 + 'rem';
          },
          // markers: true,
          pin: true,
          scrub: 0.5
        },
        defaults: {
          ease: 'none'
        }
      });
      kvTlPc.addLabel('kv2') // kv section 2
      .fromTo('.kv__vi-box--2', {
        xPercent: -50,
        yPercent: -50,
        y: '100vh'
      }, {
        xPercent: -50,
        yPercent: -50,
        y: '0vh'
      }).fromTo('.kv__roll-txt--1', {
        y: '0vh',
        yPercent: 0
      }, {
        y: '-100vh',
        yPercent: 0
      }, 'kv2').to('.kv__roll-txt--1', {
        duration: rollCurTxtDur,
        opacity: 0
      }, 'kv2+=0.13').fromTo('.kv__roll-txt--2', {
        y: '20vh',
        yPercent: 0
      }, {
        duration: rollNextTxtDur,
        y: '0vh',
        yPercent: 0
      }, 'kv2').add(emptyTween()).addLabel('kv3') // kv section 3
      .fromTo('.kv__vi-box--3', {
        xPercent: -50,
        yPercent: -50,
        y: '100vh'
      }, {
        xPercent: -50,
        yPercent: -50,
        y: '0vh'
      }).fromTo('.kv__roll-txt--2', {
        y: '0vh',
        yPercent: 0
      }, {
        y: '-100vh',
        yPercent: 0
      }, 'kv3').to('.kv__roll-txt--2', {
        duration: rollCurTxtDur,
        opacity: 0
      }, 'kv3+=0.13').fromTo('.kv__roll-txt--3', {
        y: '20vh',
        yPercent: 0
      }, {
        duration: rollNextTxtDur,
        y: '0vh',
        yPercent: 0
      }, 'kv3').add(emptyTween()).addLabel('kv4') // kv section 4
      .fromTo('.kv__vi-box--4', {
        xPercent: -50,
        yPercent: -50,
        y: '100vh'
      }, {
        xPercent: -50,
        yPercent: -50,
        y: '0vh'
      }).fromTo('.kv__roll-txt--3', {
        y: '0vh',
        yPercent: 0
      }, {
        y: '-100vh',
        yPercent: 0
      }, 'kv4').to('.kv__roll-txt--3', {
        duration: rollCurTxtDur,
        opacity: 0
      }, 'kv4+=0.13').fromTo('.kv__roll-txt--4', {
        y: '20vh',
        yPercent: 0
      }, {
        duration: rollNextTxtDur,
        y: '0vh',
        yPercent: 0
      }, 'kv4').add(emptyTween()).addLabel('kv6') // kv section 6
      .fromTo('.kv__vi-box--5', {
        xPercent: -50,
        yPercent: -50,
        y: '100vh'
      }, {
        xPercent: -50,
        yPercent: -50,
        y: '0vh',
        onReverseComplete: function onReverseComplete() {
          $('.kv__vi-txt-box').removeClass('txt-hello');
        }
      }).fromTo('.kv__roll-txt--4', {
        y: '0vh',
        yPercent: 0
      }, {
        y: '-100vh',
        yPercent: 0
      }, 'kv6').to('.kv__roll-txt--4', {
        duration: rollCurTxtDur,
        opacity: 0
      }, 'kv6+=0.13').fromTo('.kv__roll-txt--5', {
        y: '20vh',
        yPercent: 0
      }, {
        duration: rollNextTxtDur,
        y: '0vh',
        yPercent: 0
      }, 'kv6').add('txtMotion').to({}, {
        onStart: function onStart() {
          gsap.to('.kv__vi-txt-box', {
            duration: 0,
            opacity: 1,
            onStart: function onStart() {
              $('.kv__vi-txt-box').addClass('txt-hello');
            }
          });
        },
        onComplete: function onComplete() {
          gsap.to('.kv__vi-txt-box', {
            duration: 0,
            opacity: 1,
            onStart: function onStart() {
              $('.kv__vi-txt-box').addClass('txt-hello');
            }
          });
        }
      }).to({}, {
        duration: 0,
        onReverseComplete: function onReverseComplete() {
          gsap.to('.kv__vi-txt-box', {
            duration: 0.3,
            opacity: 0,
            onComplete: function onComplete() {
              $('.kv__vi-txt-box').removeClass('txt-hello');
            }
          });
        }
      }, 'txtMotion-=0.1');
      kvOutInteraction(); // section 1 : key visual 벗어나면서 마지막 key visual 이미지 확장

      cfInteraction(); // section 2 : CF 인터랙션

      txtInteraction(); // section 2 : text 인터랙션 (fadeIn/fadeOut)
    },
    '(max-width: 768px)': function maxWidth768px() {
      // 빈 스크롤 생성
      function emptyTween(dur) {
        return gsap.to({}, {
          duration: dur ? dur : 0.5
        });
      }

      var rollCurTxtDur = 0.1; // 현재 롤링 텍스트 duration

      var rollNextTxtDur = 0.1; // 다음 롤링 텍스트 duration
      // section 1 : key visual (mobile)

      var kvTlMo = gsap.timeline({
        scrollTrigger: {
          trigger: '.kv',
          id: 'kv',
          start: function start() {
            return 0;
          },
          end: function end() {
            return '+=' + 8000 + 'rem';
          },
          // markers: true,
          pin: true,
          scrub: 1
        },
        defaults: {
          ease: 'none'
        }
      });
      kvTlMo.addLabel('kv2').fromTo('.kv__vi-box--2', {
        xPercent: -50,
        yPercent: -50,
        y: '100vh'
      }, {
        xPercent: -50,
        yPercent: -50,
        y: '0vh'
      }).fromTo('.kv__roll-txt--1', {
        y: 0,
        yPercent: 0,
        opacity: 1
      }, {
        duration: rollCurTxtDur,
        yPercent: -105,
        opacity: 0
      }, 'kv2+=0.25').fromTo('.kv__roll-txt--2', {
        yPercent: 105
      }, {
        duration: rollNextTxtDur,
        y: 0,
        yPercent: 0
      }, 'kv2+=0.33').add(emptyTween()).addLabel('kv3').fromTo('.kv__vi-box--3', {
        xPercent: -50,
        yPercent: -50,
        y: '100vh'
      }, {
        xPercent: -50,
        yPercent: -50,
        y: '0vh'
      }).fromTo('.kv__roll-txt--2', {
        y: 0,
        yPercent: 0,
        opacity: 1
      }, {
        duration: rollCurTxtDur,
        y: 0,
        yPercent: -105,
        opacity: 0
      }, 'kv3+=0.25').fromTo('.kv__roll-txt--3', {
        y: 0,
        yPercent: 105
      }, {
        duration: rollNextTxtDur,
        y: 0,
        yPercent: 0
      }, 'kv3+=0.33').add(emptyTween()).addLabel('kv4').fromTo('.kv__vi-box--4', {
        xPercent: -50,
        yPercent: -50,
        y: '100vh'
      }, {
        xPercent: -50,
        yPercent: -50,
        y: '0vh'
      }).fromTo('.kv__roll-txt--3', {
        y: 0,
        yPercent: 0,
        opacity: 1
      }, {
        duration: rollCurTxtDur,
        y: 0,
        yPercent: -105,
        opacity: 0
      }, 'kv4+=0.25').fromTo('.kv__roll-txt--4', {
        y: 0,
        yPercent: 105
      }, {
        duration: rollNextTxtDur,
        y: 0,
        yPercent: 0
      }, 'kv4+=0.33').add(emptyTween()).addLabel('kv5').fromTo('.kv__vi-box--5', {
        xPercent: -50,
        yPercent: -50,
        y: '100vh'
      }, {
        xPercent: -50,
        yPercent: -50,
        y: '0vh'
      }).fromTo('.kv__roll-txt--4', {
        y: 0,
        yPercent: 0,
        opacity: 1
      }, {
        duration: rollCurTxtDur,
        y: 0,
        yPercent: -105,
        opacity: 0
      }, 'kv5+=0.25').fromTo('.kv__roll-txt--5', {
        y: 0,
        yPercent: 105
      }, {
        duration: rollNextTxtDur,
        y: 0,
        yPercent: 0,
        onStart: function onStart() {
          $('.kv__roll-txt-box').addClass('kv__roll-txt-box--active');
        },
        onReverseComplete: function onReverseComplete() {
          $('.kv__roll-txt-box').removeClass('kv__roll-txt-box--active');
        }
      }, 'kv5+=0.33').add(emptyTween()).to('.kv__txt-wrp', {
        opacity: 0
      }).to({}, {
        onStart: function onStart() {
          gsap.to('.kv__vi-txt-box', {
            duration: 0,
            opacity: 1,
            onStart: function onStart() {
              $('.kv__vi-txt-box').addClass('txt-hello');
            }
          });
        },
        onReverseComplete: function onReverseComplete() {
          gsap.to('.kv__vi-txt-box', {
            duration: 0.3,
            opacity: 0,
            onComplete: function onComplete() {
              $('.kv__vi-txt-box').removeClass('txt-hello');
            }
          });
        }
      }).add(emptyTween());
      kvOutInteraction(); // section 1 : key visual 벗어나면서 마지막 key visual 이미지 확장

      cfInteraction(); // section 2 : CF 인터랙션

      txtInteraction(); // section 2 : text 인터랙션 (fadeIn/fadeOut)
    }
  });
})(window.jQuery);