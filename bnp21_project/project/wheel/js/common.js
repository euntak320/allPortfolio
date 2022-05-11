// GNB
function fn_gnb(){
	var wrap = $("#wrap"),
		btnMenu = wrap.find(".btnMenu"),
		gnb = wrap.find("#gnb"),
		btnList = gnb.find("ul li a"),
		btnMenuClose = gnb.find(".btnMenuClose"),
		cont = $("#container > div");

	gnb.after('<p class="dim"></p>');
	btnMenu.click(function(e){
		e.preventDefault();
		gnb.addClass("open");
		wrap.removeClass("on");
	});
	btnMenuClose.click(function(e){
		e.preventDefault();
		gnb.removeClass("open");
		wrap.addClass("on");
	});

	// 2020-05-18
	btnList.click(function(e){
		e.preventDefault();
		var i = $(this).parent().index();
		btnList.parent().removeClass("curr");
		$(this).parent().addClass("curr");
		cont.removeClass("on");
		cont.eq(i).addClass("on");
		$("#container").animate({top:-$(window).height()*i});
	});
	//-- 2020-05-18
}

function fn_rese(){
	$(".cont").removeClass("on");
	$(".cont02").addClass("on");
}

function fn_layer(e,s,t){
	var $element = $("."+e),
		$eInner = $element.find("> .inner"),
		$eInnerTit = $eInner.find(".tit"),
		$scrollDiv = $element.find(".tit + div");
	$element.fadeIn();
	$eInner.css({width:s});
	$("body, html").css({"overflow":"hidden"});
	$(window).resize(function(){
		var $elementH = $element.height();
		var $eInnerH = $eInner.outerHeight();
		var $eInnerTitH = $eInnerTit.outerHeight();
		var i = $elementH - $eInnerH;
		$scrollDiv.css({"max-height":$elementH - $eInnerTitH - 70});
	}).resize();

	if($("iframe").length){
		var thisSrc = $(t).attr("data-src");
		$element.find("iframe").attr("src", thisSrc + "?&autoplay=1");
	}

	$(".closeLayer").addClass("on");
	$(".closeLayer").click(function(e){
		e.preventDefault();
		$(this).closest(".layer").fadeOut();
		$(this).removeClass("on");
		$("body, html").css({"overflow":"auto"});
		$("iframe").attr("src", "");
	});
}

$(function(){
	$(window).resize(function(){
		$("#container .content").css({"min-height":$(window).height()});
		$(".videoList").height($(".videoList").width()/1.08435582);

		if($(window).width() > 1160){
			$(".eventArea > div > div, .eventArea .btnArea").width($(".eventArea > div > div").height()/0.5722222);
		}else{
			$(".eventArea > div > div, .eventArea .btnArea").width($(".eventArea > div > div").height()/1.117474);
		}
	
		var videoArea = $(".videoPop iframe");
		videoArea.each(function(){
			var videoW = $(this).attr("width"),
				videoH = $(this).attr("height"),
				videoP = videoW/videoH;
			$(this).height($(this).width()/videoP);
		});
	}).resize();

	// 2020-05-18
	$(window).on("load", function(){
		$("#wrap").addClass("on");
		$(".cont01").addClass("on");

		var container = $("#container"),
			cont = container.find("> div");
		cont.each(function () {
			$(this).on("mousewheel DOMMouseScroll", function(event) {
				var delta = 0;
				var boxMax = cont.length - 1;
				var winEvent = "";
				var i = $(this).index();
				$("#gnb ul li").removeClass("curr");
				if(!winEvent) {
					winEvent = window.event;
				}
				if(winEvent.wheelDelta) {
					delta = winEvent.wheelDelta / 120;
					if(window.opera) {
						delta = -delta;
					}
				}else if(winEvent.detail) {
					delta = -winEvent.detail / 3;
				}
				if(delta < 0) {
					if($(this).index() < boxMax) {
						cont.removeClass("on");
						$(this).next().addClass("on");
						$("#gnb ul li").eq(i+1).addClass("curr");
					}else {
						$("#gnb ul li").eq(i).addClass("curr");
						return false;
					}
				}else {
					if($(this).index() > 0) {
						cont.removeClass("on");
						$(this).prev().addClass("on");
						$("#gnb ul li").eq(i-1).addClass("curr");
					}else {
						$("#gnb ul li").eq(i).addClass("curr");
						return false;
					}
				}
			});
			$(this).unbind('touchstart touchend');

			container.css({"height":$(window).height()*6});
			var ts;
			$(this).bind('touchstart', function (e){
			   ts = e.originalEvent.touches[0].clientY;
			});
			$(this).bind('touchend', function (e){
				var te = e.originalEvent.changedTouches[0].clientY;
				var i = $(this).index()+1;
				var a = $(this).index();
				var contH = cont.css("height").replace("px","");
				$("#gnb ul li").removeClass("curr");
				if(ts > te+5){
					if($(this).hasClass("cont06") == false){
						cont.removeClass("on");
						$(this).next().addClass("on");
						container.animate({top:-$(window).height()*i});
						$("#gnb ul li").eq(i).addClass("curr");
					}else{
						$("#gnb ul li").eq(i-1).addClass("curr");
					}
				}else if(ts < te-5){
					if($(this).hasClass("cont01") == false){
						cont.removeClass("on");
						$(this).prev().addClass("on");
						container.animate({top:-(($(window).height()*a)-contH)});
						$("#gnb ul li").eq(i-2).addClass("curr");
					}else{
						$("#gnb ul li").eq(i-1).addClass("curr");
					}
				}
			});
		});
	});
	//-- 2020-05-18

	fn_gnb();
	var swiper = new Swiper('.cont03 .swiper', {
		slidesPerView: 1,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});

	var swiper = new Swiper('.cont04 .swiper', {
		slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});
	// 2020-05-18
	var charWrap = $(".charWrap"),
		btnChar = charWrap.find(".swiper ul li"),
		selectChar = $(".titArea ul, .charArea ul");
	btnChar.find("a").click(function(e){
		e.preventDefault();
		var i = $(this).parent().attr("class");
		if($(this).parent().hasClass("on") == false){
			btnChar.removeClass("on");
			$(this).parent().addClass("on");
			selectChar.find("li").removeClass("on");
			selectChar.find("li."+ i).addClass("on");
		}
	});

	btnChar.each(function(){
		thisSrc = $(this).find("img").attr("src").replace('.png', '');
		$(this).find("a").append("<span></span>");
		$(this).find("span").css({"background":"url("+thisSrc+"-on.png) no-repeat center"});
	});
	//-- 2020-05-18 수정

	var eventArea = $(".eventArea"),
		btnEvent = eventArea.find(".btnArea a"),
		event = eventArea.find(".event");
	btnEvent.click(function(e){
		e.preventDefault();
		btnEvent.removeClass("on");
		$(this).addClass("on");
		event.hide();
		if($(this).hasClass("btn01")){
			$(".event01").show();
		}else{
			$(".event02").show();
		}
	});
})