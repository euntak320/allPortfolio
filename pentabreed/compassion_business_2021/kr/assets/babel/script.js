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
  $(".content__happen--rightcontent").each(function (index, element) {
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

  var contentMargin = 810; 

  var clickCount = 0;
  $(".slidebtn.down").click(function () {
    var $upBtn = $('.slidebtn.up');
    clickCount++;
    $upBtn.addClass('on');
    $upBtn.find('.txt').removeClass('on');
    $(this).find('.txt').removeClass('on');

    if (clickCount == 1) {
      $(this).find('.txt').removeClass('on');
      $(this).find('.txt').eq(1).addClass('on');
      $upBtn.find('.txt').eq(0).addClass('on');
    } else if (clickCount == 2) {
      $(this).hide();
      $upBtn.find('.txt').eq(1).addClass('on');
    }

    $('.content__happen--textarea').css({
      'transform': "translateY(" + -textareaMargin * clickCount + "px)"
    });
    $('.content__happen--textarea').css({
      'transform': "translateY(" + -contentMargin * clickCount + "px)"
    });
  });
  $(".slidebtn.up").click(function () {
    var $downBtn = $('.slidebtn.down');
    clickCount--;
    $downBtn.show();
    $downBtn.find('.txt').removeClass('on');
    $(this).find('.txt').removeClass('on');

    if (clickCount == 0) {
      $(this).removeClass('on');
      $downBtn.find('.txt').eq(0).addClass('on');
    } else if (clickCount == 1) {
      $(this).find('.txt').removeClass('on');
      $(this).find('.txt').eq(0).addClass('on');
      $downBtn.find('.txt').eq(0).addClass('on');
    }

    $('.content__happen--textarea').css({
      'transform': "translateY(" + -textareaMargin * clickCount + "px)"
    });
    $('.content__happen--rightcontent').css({
      'transform': "translateY(" + -contentMargin * clickCount + "px)"
    });
  });
  var ado = new Audio("../../audio/amusoni_audio.mp3");
  $(".content-video .video-btn").click(function () {
    $(this).fadeOut();
    var finalVideo = $("#video");
    finalVideo.attr("src", "http://121.254.179.42:2106/video/2020_YearEnd_final.mp4");
    finalVideo.get(0).play();
    audioPause();
  });
  $(".content-sponsor .video-btn").click(function () {
    $(this).fadeOut();
    var miriamVideo = $("#video2");
    miriamVideo.attr("src", "/video/2020_Dear_miriam.mp4");
    miriamVideo.get(0).play();
    audioPause();
  });
  $("video").on("ended", function () {
    audioPlay();
  });
}); // 오디오

var ado = new Audio("../../audio/amusoni_audio.mp3");
ado.loop = true;

function audioPlay() {
  ado.play();
  $(".btn-sound-circle .play").hide();
  $(".btn-sound-circle .pause").show();
  $(".btn-sound").addClass("on");
}

function audioPause() {
  ado.pause();
  $(".btn-sound-circle .pause").hide();
  $(".btn-sound-circle .play").show();
  $(".btn-sound").removeClass("on");
}

function swing() {
  $(".content-main_arrow img").animate({
    "top": "10px"
  }, 1500, null);
  $(".content-main_arrow img").animate({
    "top": "-10px"
  }, 1500, swing);
}

"use strict";

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