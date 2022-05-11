$(function(){

	$(window).scroll(function(){
		var windowScroll = $(window).scrollTop();
		if (windowScroll >= 50){
			$(".header").addClass("scroll");
		}
		else{
			$(".header").removeClass("scroll");
		}
	});
	$(window).resize(function(){
		if($(window).width() >= 1200){

			$(".header").mouseenter(function(){
				$(this).addClass("on");
			});
			$(".header").mouseleave(function(){
				$(this).removeClass("on");
			});
		}
		else{
			$(".header").mouseenter(function(){
				$(this).removeClass("on");
			});
		}
	}).resize();


	$(".header .menuList .m_btn").click(function(){
		$(".header .menuList .subList").slideToggle();
		$(".header .menuList li .m_btn").toggleClass("on");
	});
	


	$(".header .mMenuBtn").click(function(){
		$(".header .menuList").addClass("on");
		$("body").css({
			"overflow":"hidden"	
		})
	});
	$(".header .mMenuClose").click(function(){
		$(".header .menuList").removeClass("on");
		$("body").css({
			"overflow":"visible"	
		})
	});


});
