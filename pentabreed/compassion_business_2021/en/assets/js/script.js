"use strict";

$(function () {
  swing();

  $(".content-total a").click(function (e) {
    e.preventDefault();
    $(".layer-frame").fadeIn();
    $("html, body").css({
      "overflow": "hidden"
    });
  });
  $(".layer-frame button").click(function () {
    $(this).closest(".layer-frame").fadeOut();
    $("html, body").css({
      "overflow": "visible"
    });
  });
  $(window).scroll(function () {
    var $sections = $('.content > div');
    var $siteLogo = $('.header h1');
    var targetTop = $(window).scrollTop() + parseInt($siteLogo.css('top')) + $siteLogo.height();

    $sections.each(function (index) {
        var condition = $(this).offset().top;

        if (condition <= targetTop) {
            current = index;
        }
    });

    switch (current) {
        case 1:
        case 3:
            $siteLogo.find('a').addClass('white');
            break;
        default:
            $siteLogo.find('a').removeClass('white');
            break;
    }
});
  $(".content__swiper-area").each(function (index, element) {
    var $this = $(this);
    $this.addClass("instance-" + index);
    var swiper = new Swiper(".instance-" + index, {
      slidesPerView: 3,
      spaceBetween: 40,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  });
  var textareaMargin = 307;
  var contentMargin = 765;
  var clickCount = 0;
  $(".happen__button--down").click(function () {
    var $upBtn = $('.happen__button--up');
    clickCount++;
    $upBtn.addClass('happen__button-txt--on');
    $upBtn.find('.happen__button-txt').removeClass('happen__button-txt--on');
    $(this).find('.happen__button-txt').removeClass('happen__button-txt--on');

    if (clickCount == 1) {
      $(this).find('.happen__button-txt').removeClass('happen__button-txt--on');
      $(this).find('.happen__button-txt').eq(1).addClass('happen__button-txt--on');
      $upBtn.find('.happen__button-txt').eq(0).addClass('happen__button-txt--on');
    } else if (clickCount == 2) {
      $(this).hide();
      $upBtn.find('.happen__button-txt').eq(1).addClass('happen__button-txt--on');
    }

    $('.happen__text-group').css({
      'transform': "translateY(" + -textareaMargin * clickCount + "px)"
    });
    $('.content__swiper-area').css({
      'transform': "translateY(" + -contentMargin * clickCount + "px)"
    });
  });
  $(".happen__button--up").click(function () {
    var $downBtn = $('.happen__button--down');
    clickCount--;
    $downBtn.show();
    $downBtn.find('.happen__button-txt').removeClass('happen__button-txt--on');
    $(this).find('.happen__button-txt').removeClass('happen__button-txt--on');

    if (clickCount == 0) {
      $(this).removeClass('happen__button-txt--on');
      $downBtn.find('.happen__button-txt').eq(0).addClass('happen__button-txt--on');
    } else if (clickCount == 1) {
      $(this).find('.happen__button-txt').removeClass('happen__button-txt--on');
      $(this).find('.happen__button-txt').eq(0).addClass('happen__button-txt--on');
      $downBtn.find('.happen__button-txt').eq(0).addClass('happen__button-txt--on');
    }

    $('.happen__text-group').css({
      'transform': "translateY(" + -textareaMargin * clickCount + "px)"
    });
    $('.content__swiper-area').css({
      'transform': "translateY(" + -contentMargin * clickCount + "px)"
    });
  });
  var ado = new Audio("/assets/media/amusoni_audio.mp3");
  $(".content-video .video-btn").click(function () {
    $(this).fadeOut();
    var finalVideo = $("#video");
    finalVideo.attr("src", "/assets/media/2020_YearEnd_final.mp4");
    finalVideo.get(0).play();
    audioPause();
  });

  $(".content-sponsor .video-btn").click(function () {
    $(this).fadeOut();
    var miriamVideo = $("#video2");
    miriamVideo.attr("src", "/assets/media/2020_Dear_miriam.mp4");
    miriamVideo.get(0).play();
    audioPause();
  });

  $("video").on("ended", function () {
    audioPlay();
  });

  $(".audio__button--play").click(function () {
    audioPlay();
  });

  $(".audio__button--pause").click(function () {
    audioPause();
  });
});

var ado = new Audio("/assets/media/amusoni_audio.mp3");
ado.loop = true;

function audioPlay() {
  ado.play();
  $(".audio__button--play").hide();
  $(".audio__button--pause").show();
  $(".aside").addClass("on");
}

function audioPause() {
  ado.pause();
  $(".audio__button--pause").hide();
  $(".audio__button--play").show();
  $(".aside").removeClass("on");
}

function swing() {
  $(".down-arrow .down-arrow__image").animate({
    "top": "10px"
  }, 1500, null);
  $(".down-arrow .down-arrow__image").animate({
    "top": "-10px"
  }, 1500, swing);
}

(function () {
  // 페이지 로드 후 애니메이션 처리
  document.documentElement.classList.add("no-transition");
  window.addEventListener("load", function () {
    document.documentElement.classList.remove("no-transition");
  });
})();
/**
 * Scroll Animation & Parallax
 */


(function () {
  var jsScrollItem = document.querySelectorAll('.js-scroll-item');
  var jsParallaxItem = document.querySelectorAll('.js-parallax-item');
  var jsDataDelayItem = document.querySelectorAll('[data-delay]');
  var jsDataDurationItem = document.querySelectorAll('[data-duration]');
  var windowScroll = window.scrollY;

  function circleCycle() {
    var path = document.querySelector('.donut_circle_value_three'),
      offset = 84;

    var offsetMe = function offsetMe() {
      if (offset < 0) offset = 0;
      path.style.strokeDashoffset = offset;
      offset--;
      requestAnimationFrame(offsetMe);
    };

    offsetMe();
  }

  var sectionIsMoving = false;

  function jsScroll() {
    for (var i = 0; i < jsScrollItem.length; i++) {
      var posY = jsScrollItem[i].getBoundingClientRect().top;
      var windowRate = 0.7;

      if (posY < window.innerHeight * windowRate) {
        jsScrollItem[i].classList.add('is-selected');
      }

      if (!sectionIsMoving) {
        if ($(".content-total .js-scroll-item").hasClass("is-selected")) {
          circleCycle();
          $('.content-total_chartpercent').each(function () {
            $(this).prop('Counter', 0).animate({
              Counter: $(this).text()
            }, {
              duration: 1500,
              easing: 'swing',
              step: function step(txt) {
                $(this).text(Math.floor(txt) + ".2%");
              }
            });
          });
          sectionIsMoving = true;
        }
      }
    }
  }

  function jsDataDelay() {
    for (var i = 0; i < jsDataDelayItem.length; i++) {
      var delayNum = jsDataDelayItem[i].getAttribute('data-delay');
      jsDataDelayItem[i].style.transitionDelay = delayNum + 'ms';
    }
  }

  function jsDataDuration() {
    for (var i = 0; i < jsDataDurationItem.length; i++) {
      var delayNum = jsDataDurationItem[i].getAttribute('data-duration');
      jsDataDurationItem[i].style.transitionDuration = delayNum + 'ms';
    }
  }

  function jsParallax() {
    var maxScrollValue = document.body.offsetHeight - window.innerHeight;
    var scrollPer = pageYOffset / maxScrollValue;

    for (var i = 0; i < jsParallaxItem.length; i++) {
      var scrollOffset = jsParallaxItem[i].getAttribute('data-offset');
      var scrollSpeed = jsParallaxItem[i].getAttribute('data-speed');
      var yMove = scrollPer * scrollOffset - scrollSpeed;
      jsParallaxItem[i].style.transform = 'translateY(' + -yMove + 'px)';
    }
  }

  document.addEventListener('DOMContentLoaded', jsDataDelay);
  document.addEventListener('DOMContentLoaded', jsDataDuration);
  window.addEventListener('load', jsScroll);
  window.addEventListener('scroll', jsScroll);
  window.addEventListener('scroll', jsParallax);
})();
/**
 * youtube
 */


(function () {
  var tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var playButton = document.querySelector('.js-play-button');
  var playPoster = document.querySelector('.video__poster');
  var player;

  window.onYouTubeIframeAPIReady = function () {
    player = new YT.Player('player', {
      videoId: 'jffrpOp1kr4',
      playerVars: {
        showinfo: 0,
        modestbranding: 1,
        fs: 0,
        rel: 0
      },
      events: {
        /*
        'onStateChange': function (event) {
          if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
            playPoster.classList.remove('is-play');
          }
        } */
      }
    });
  };

  if (playButton) {
    playButton.addEventListener('click', function (e) {
      player.playVideo();
      playPoster.classList.add('is-play');
    });
  }
})();
/**
 * keyvisual height
 */


(function () {
  function keyvisualHeight() {
    var windowHeight = window.innerHeight;
    var keyvisualSection = document.querySelector('.section--keyvisual');
    keyvisualSection.style.height = windowHeight + "px";
  }

  document.addEventListener('DOMContentLoaded', keyvisualHeight);
  window.addEventListener('resize', keyvisualHeight);
})();