$(document).ready(function(){

	setToggleNav();

	$("header .mobile-menu").on("click" , function(){
		$("header nav").toggleClass("on");

		return false;
	});

	$("header .menu-list > li > a").on("click" , function(){
		$("header .menu-list > li").not($(this).parent()).removeClass("on");
		$(this).parent().toggleClass("on");

		if( $(window).width() > 1100 ){
			var link_txt = $(this).next(".depth-2").find("> li:eq(0) a").prop("href").split("#");
			location.href = link_txt[0];
		}
		return false;
	});

	/* 모바일 메뉴 적용 */
	$("header #busi .depth-2 a").on("click" , function(){
		$("a.mobile-menu").trigger("click");
	});

	$("nav.pc-only .menu-2 .sub-box a").on("click" , function(){
		$("header").removeClass("on");
	});

	/* 연혁 */
	$(".history-tab a").on("click" , function(){

		$(".history-tab a").removeClass("on");
		$(this).addClass("on");

		$(".hitory-content").removeClass("on");
		$(".hitory-content").eq( $(this).index() ).addClass("on");

		return false;
	});

	if( !$("#wrap").hasClass("main") ){
		$(".container > div  , .container > div > div").not(".location-content , .com-send-btn").css("opacity" , 0.2)
		$(".container > div  , .container > div > div").not(".location-content , .com-send-btn").css("top" , 118)
		$(window).on("scroll.sub_motion" , function(){
			$(".container > div  , .container > div > div").not(".com-send-btn").each(function(index){
				if( $(this).offset().top < ( $(window).scrollTop() + $(window).height()) ){
					TweenMax.to( $(this) , 0.5 ,  {opacity:1 , "top" : 0});
				}
			});
		});
		$(window).trigger("scroll.sub_motion");
	}

	/* 메인 */
	var motion_time = -1.3;
	var main_motion_2 = new TimelineLite();
	main_motion_2.from( $(".num-2 .top-area") , 1, {opacity:0 , top:-100})
	.from( $(".num-2 .left-area") , 1, {opacity:0 , left:-100} , "0.2")
	.from( $(".num-2 .right-area") , 1, {opacity:0 , right:-100} , "0.2")
	.from( $(".num-2 .symbol") , 0.5, {opacity:0 , scale:0.8 , rotation:90 } , "0.2");

	var main_motion_3 = new TimelineLite();
	main_motion_3
	.to( $(".num-3 .top-area") , 0, {opacity:0 , top:80})
	.to( $(".num-3 .banner-area .banner-1") , 0, {opacity:0 ,left:-200})
	.to( $(".num-3 .banner-area .banner-2") , 0, {opacity:0 ,left:50})
	.to( $(".num-3 .banner-area .banner-3") , 0, {opacity:0 ,left:300})
	.to( $(".num-3 .banner-area .banner-4") , 0, {opacity:0 ,left:550})
	.to( $(".num-3 .top-area") , 1, {opacity:1 , top:120})
	.to( $(".num-3 .banner-area .banner-1") , 0.5, {opacity:1 , left:0} , "+0.2")
	.to( $(".num-3 .banner-area .banner-2") , 0.5, {opacity:1 , left:250} , "+0.4")
	.to( $(".num-3 .banner-area .banner-3") , 0.5, {opacity:1 , left:500} , "+0.6")
	.to( $(".num-3 .banner-area .banner-4") , 0.5, {opacity:1 , left:750} , "+0.8");

	var main_motion_4 = new TimelineLite();
	main_motion_4.from( $(".num-4 .list-1") , 0.5, {opacity:0 ,scale:0.8} )
	.from( $(".num-4 .list-2") , 0.5, {opacity:0 ,scale:0.8} , "0.5")
	.from( $(".num-4 .list-3") , 0.5, {opacity:0 ,scale:0.8} , "1" );

	$(window).on("resize.width" , function(){
		if( $(window).width() < 821 ){
			main_motion_2.pause(5);
			main_motion_3.pause(5);
			main_motion_4.pause(5);
		}
	});

	$(".fullpage").fullpage({
		onLeave : function(index, nextIndex , direction){
			$(".banner-nav a").removeClass("on");
			$(".banner-nav a").eq(nextIndex-1).addClass("on");

			if( nextIndex != 1){
				$("header").addClass("down");
			}else{
				$("header").removeClass("down");
			}

			if( $(window).width() > 820 ){

				if(index == 2){
					main_motion_2.timeScale(3);
					main_motion_2.reverse();
				}else if(index == 3){
					main_motion_3.timeScale(2);
					main_motion_3.reverse();
				}else if(index == 4 && nextIndex != 5){
					main_motion_4.timeScale(2);
					main_motion_4.reverse();
				}

				if(nextIndex == 2){
					main_motion_2.timeScale(1);
						main_motion_2.play( motion_time );
				}else if(nextIndex == 3){
						main_motion_3.timeScale(1);
						main_motion_3.play( motion_time );
				}else if(nextIndex == 4 && index != 5){
					main_motion_4.timeScale(1);
						main_motion_4.play( -2 );
				}
			}else{
				main_motion_2.pause(5);
				main_motion_3.pause(5);
				main_motion_4.pause(5);
			}
		}
	});
	if( $(".fullpage .num-2 .left-area .detail-txt").length > 0){
		$(".fullpage .num-2 .left-area .detail-txt").data("pc" , $(".fullpage .num-2 .left-area .detail-txt").html() );
		$(".fullpage .num-2 .left-area .detail-txt").data("mo" , $(".fullpage .num-2 .left-area .detail-txt").html().replace(/<br\s*\/?>/gi,'') );
		$(".fullpage .num-2 .right-area .detail-txt").data("pc" , $(".fullpage .num-2 .right-area .detail-txt").html() );
		$(".fullpage .num-2 .right-area .detail-txt").data("mo" , $(".fullpage .num-2 .right-area .detail-txt").html().replace(/<br\s*\/?>/gi,'') );
	}

	var main_banner = $(".main-banner-area").slick({
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		speed: 800,
		autoplaySpeed : 6000,
		slidesToShow: 1
	});

	/* 2018-07-15 추가 */
	$(".main-banner-area .b_1 .over").fadeIn(2000);
	$(".main-banner-area").on("afterChange", function(event, slick, currentSlide){
		var obj = $(".main-banner-area .b_"+(currentSlide+1)+" .over");
		$(".main-banner-area .over").not(obj).hide();
		obj.fadeIn(2000);
	});
	/* //2018-07-15 추가 */

	$(".container").on("mouseleave" , function(){
		main_banner.slick("slickPlay");
	});

	$(window).on("resize.fullpage" , function(){
		if( $(".fullpage .num-2 .left-area .detail-txt").length < 1){
			return;
		}
		if( $(window).width() < 821 ){
			$.fn.fullpage.setAutoScrolling(false);
			$(".fullpage .num-2 .left-area .detail-txt").html( $(".fullpage .num-2 .left-area .detail-txt").data("mo") );
			$(".fullpage .num-2 .right-area .detail-txt").html( $(".fullpage .num-2 .right-area .detail-txt").data("mo") );
		}else{
			$.fn.fullpage.setAutoScrolling(true);
			$(".fullpage .num-2 .left-area .detail-txt").html( $(".fullpage .num-2 .left-area .detail-txt").data("pc") );
			$(".fullpage .num-2 .right-area .detail-txt").html( $(".fullpage .num-2 .right-area .detail-txt").data("pc") );
		}
	});
	$(window).trigger("resize.fullpage");

	$(".banner-nav a").on("click" , function(){
		$.fn.fullpage.moveTo( $(this).index()+1 );
		return false;
	});

	$("header").on("mouseenter" , function(){
		$(this).addClass("on");

	});

	$("header").on("mouseleave" , function(){
		$(this).removeClass("on");
	});

	$(window).on("scroll" , function(){
		if( $(window).scrollTop() > 100 ){
			$("header").addClass("down");
		}else{
			$("header").removeClass("down");
		}

	});

	/* 패밀리 사이트 */
	$('.family-site').find('.title').click(function() {
		if ($(this).parent().hasClass('active')) {
			$(this).parent().removeClass('active');
		} else {
			$(this).parent().addClass('active');
		}
	});
	$('.family-site').mouseleave(function() {
		$(this).removeClass('active');
	});
});

function setToggleNav(){
	$("body #wrap").removeClass();
	$("body header .menu-list li").removeClass("on");

	var path = $(location).attr("pathname");
	var navID = "";
	var wrapClass = "";

	if (path.indexOf("/comp/") > -1) {
		wrapClass = "company";
		navID = "comp";
	} else if (path.indexOf("/busi/") > -1) {
		wrapClass = "business";
		navID = "busi";
	} else if (path.indexOf("/oper/") > -1) {
		wrapClass = "continue";
		navID = "oper";
	} else if (path.indexOf("/inve/") > -1) {
		wrapClass = "fund";
		navID = "inve";
	} else if (path.indexOf("/prom/") > -1) {
		wrapClass = "news";
		navID = "prom";
	} else {
		if (path.indexOf("siteMap") > -1 || path.indexOf("privacy") > -1) {
			wrapClass = "fund";
		} else {
			wrapClass = "main";
			navID = "main";
		}
	}

	$("body #wrap").addClass(wrapClass);

	if (navID != "") {
		$("body header .menu-list #" + navID).addClass("on");
	}
}

function inspect(){
	var rv = true;
	$.each($("[request]"), function(index, item){
		if ($(this).val() == ""){
			$(this).focus();

			alert($(this).attr("title"));

			rv = false;
			return false;
		}
	});

	return rv;
};
