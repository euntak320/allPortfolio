
$(function() {
	
	// WINDOW SETUP
	// $(window).resize(function(){
	// 	$(".content").css({"min-height":$(window).height() - $("#header").outerHeight() - $("#footer").outerHeight() - 50});
	// }).resize();

	// SKIP NAV
	$("a[href^='#']").click(function(evt){
		var anchortarget = $(this).attr("href");
		$(anchortarget).attr("tabindex", -1).focus();
		$(anchortarget).removeAttr("tabindex");
	});
	if (window.location.hash) {
		$(window.location.hash).attr("tabindex", -1).focus();
	}
	$("#skip_nav a").focus(function(){
		$("#skip_nav a").removeClass("on");
		$(this).addClass("on");
	});
	$("#skip_nav a").blur(function(){
		$("#skip_nav a").removeClass("on");
	});
	
	// HEADER SCROLL
	$(window).scroll(function(){
		if($(window).scrollTop() > 10){
			$("#header").addClass("scroll");
		}else{
			$("#header").removeClass("scroll");
		}
	});

	// GNB
	var gnb = $("#gnb > ul > li");
		gnb.mouseenter(function(){
			$(this).find("div").stop().fadeIn(200);
			$(this).addClass("on");
		});
		gnb.mouseleave(function(){
			$(this).find("div").stop().fadeOut(200);
			$(this).removeClass("on");
		});

	// GNBICON
	var gnbIcon = $(".gnbIcon");
	
		gnbIcon.click(function(e){
			e.preventDefault();
			if($(this).hasClass("on")){
				$(this).removeClass("on");
				$(this).closest("#header").find("#gnb").slideUp(200);
			}else{
				$(this).addClass("on");
				$(this).closest("#header").find("#gnb").slideDown(200);
			}
		});
	
})

