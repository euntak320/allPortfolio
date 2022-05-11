$(function(){
	var noticeSlide = $(".notice-slide");

	noticeSlide.find("a").click(function(e){
		e.preventDefault();

		if($(this).parent().hasClass("on")){
			$(this).parent().removeClass("on");
			$(this).parent().siblings().slideUp();
		}else{
			$(this).parent().addClass("on");
			$(this).parent().siblings().slideDown();
		}
	});
})