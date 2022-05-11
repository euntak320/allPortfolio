$(document).ready(function() {

  $(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
      $('.header').stop().animate({
        top: -85
      }, {
        duration: 300,
        easing: 'easeOutCubic'
      });
    } else if ($(window).scrollTop() == 0) {
      $('.header').stop().animate({
        top: 0
      }, {
        duration: 400,
        easing: 'easeOutCubic'
      });
    }
  });

  

});
