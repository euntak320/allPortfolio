$(document).ready(function(){
  //main slcik
  $(".first_area.moblie").slick({
      autoplay: true,
			dots: true,
			speed: 1000 /* 이미지가 슬라이딩시 걸리는 시간 */ ,
			infinite: true,
			autoplaySpeed: 3000 /* 이미지가 다른 이미지로 넘어 갈때의 텀 */ ,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: false
  });

  $(window).on("scroll" , function(){
		if( $(window).scrollTop() > 100 ){
			$("header").addClass("down");
		}else{
			$("header").removeClass("down");
		}
	});
  $(".over_frame").on("touchstart click mousemove", function() {
		$(this).find(".icon").remove();
	});

  $("a.moblie_menu").click(function(){
    $(".m_menu").toggle();
    return false;
  });
});
