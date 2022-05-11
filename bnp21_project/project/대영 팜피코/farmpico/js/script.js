$(document).ready(function() {

  $(".fullpage").fullpage({
		anchors: ['num1', 'num2', 'num3', 'num4', 'num5'],
    onLeave: function(index, nextIndex, direction) {
      $(".banner-nav a").removeClass("on");
      $(".banner-nav a").eq(nextIndex - 1).addClass("on");
    }
  });

  var main_banner = $(".main-banner-area").slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 6000,
    slidesToShow: 1
  });

	var sub_banner = $(".frame").slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 6000,
    slidesToShow: 4
  });

  $(".banner-nav a").on("click", function() {
    $.fn.fullpage.moveTo($(this).index() + 1);
    return false;
  });




});
