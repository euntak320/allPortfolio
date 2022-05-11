
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

    var offsetMe = function() {
      if(offset < 0) offset = 0;
      path.style.strokeDashoffset = offset;
      offset--;
      
      requestAnimationFrame(offsetMe);
    }

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


    if(!sectionIsMoving) {
      if($(".content-total .js-scroll-item").hasClass("is-selected")) {
        circleCycle ();
        $('.content-total_chartpercent').each(function () {
          $(this).prop('Counter',0).animate({Counter: $(this).text()}, {
              duration: 1500,
              easing: 'swing',
              step: function (txt) {
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