$(document).ready(function(){

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
