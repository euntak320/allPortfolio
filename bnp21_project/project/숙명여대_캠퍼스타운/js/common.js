$(function() {
	$(window).resize(function(){
		var header = $("#header"),
			container = $("#container"),
			footer = $("#footer");
		container.css({"min-height":$(window).height() - header.height() - footer.height()});
	}).resize();
	
	// scroll
	$(".btnPause").hide();
	$(window).scroll(function(){
		if($(window).scrollTop() > 0){
			$("#header").addClass("scroll");
		}else{
			$("#header").removeClass("scroll");
		}
	});
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
	
	// HEADER
    // pc
    $("#header .inner > div").on({
        mouseenter: function() {
         $(".gnbList.pc .boxList").addClass("on");
        },
        mouseleave: function() {
         $(".gnbList.pc .boxList").removeClass("on");
        }
    });
    // mobile
	$("#header .gnbLayout > ul > li > a").click(function(e){
		e.preventDefault();

		$("#header .gnbList.mobile .gnbLayout > ul > li").removeClass("curr");
		$("#header .gnbList.mobile .gnbLayout > ul > li > a").siblings(".boxList").slideUp(200);

		$(this).parent("li").addClass("curr");
		$(this).siblings(".boxList").slideDown(200);
	});

    // gnb accordion
	$("#header .gnbIcon").click(function(){
		$("#header #gnb").toggleClass("on");
		$(this).parents("#wrap").toggleClass("dim");
		$(this).toggleClass("on");
   
        if ($("#header #gnb").attr("class") == "on")
        {
			//모바일일 때
			$("#header .gnbList").removeClass("pc");
			$("#header .gnbList").addClass("mobile");
			$(".gnbList.mobile .boxList").removeClass("on");
		} else {
			//pc일 때
			$("#header .gnbList").removeClass("mobile");
			$("#header .gnbList").addClass("pc");
			$("#header .gnbList .boxList").removeAttr("style");
		}
    });

	// VISUAL AREA
	var visualArea = new Swiper('.visualArea', {
		autoplay: {
			delay: 4000,
			loop: true,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		loop: true,
	});
	
	$(".btnStop").click(function(e){
		e.preventDefault();
		visualArea.autoplay.stop();
		$(this).hide();
		$(".btnPause").show();
	});

	$(".btnPlay").click(function(e){
		e.preventDefault();
		visualArea.autoplay.start();
		$(".btnStop").show();
		$(".btnPause").hide();
	});

	// swiper list
	var swiper = new Swiper('.pfWrap, .bizWrap, .localWrap', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
	
	// TAB
	var tabFunc = $(".tabFunc");
	tabFunc.each(function(){
		var btnTab = $(this).find("> ul > li > a"),
			tabBox = $(this).find("> .tabBox > div"),
			curr = $(this).find("> ul > li.curr").index();
		tabBox.not(":eq("+curr+")").hide();
		btnTab.click(function(e){
			e.preventDefault();
			var i = $(this).parent().index();
			btnTab.parent().removeClass("curr");
			$(this).parent().addClass("curr");
			tabBox.hide();
			tabBox.eq(i).show();
		});
	});
})

