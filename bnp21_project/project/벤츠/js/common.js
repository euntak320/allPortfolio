function fn_layer(e){
	$("."+e).addClass("open");
	$("html, body").css({"overflow-y":"hidden"});
}
function fn_layerOpen(){
	$(".galleryPop").addClass("open");
	$("html, body").css({"overflow-y":"hidden"});
}
function fn_layerClose(e){
	$(e).closest(".inner").parent().removeClass("open");
	$("html, body").css({"overflow-y":"auto"});
}
$(function(){
	/*>>>>> 섹션 <<<<<*/
	/*** cont01 ***/
	$(window).resize(function(){
		var cont01 = $(".cont01"),
			video = cont01.find("video"),
			btnPlay = cont01.find(".mobileArea a"),
			btnStop = cont01.find(".btnClose");
		
		btnPlay.parent().removeClass("on");
		if($(window).width() > 767){
			video.get(0).play();
		}else{
			video.get(0).load();
			btnPlay.click(function(e){
				e.preventDefault();
				$(this).parent().addClass("on");
				video.get(0).play();
			});
			btnStop.click(function(e){
				e.preventDefault();
				btnPlay.parent().removeClass("on");
				video.get(0).load();
			});
		}
	}).resize();

	/*** cont02 ***/
	// 셀렉트박스
	var selectBox = $('.selectbox select');
	selectBox.change(function() {
		var selectName = $(this).children('option:selected').text();
		$(this).siblings('span').text(selectName);
	});
	selectBox.each(function() {
		var selectName = $(this).children('option:selected').text();
		$(this).siblings('span').text(selectName);
	});

	// 데이트피커
	$(".date input").datepicker({
		dateFormat: 'yy-mm-dd',
		showOtherMonths: true,
		showMonthAfterYear:true,
		changeYear: true,
		changeMonth: true,          
		showOn: "both",
		buttonImage: "images/ico-date.png",
		buttonImageOnly: true,
		buttonText: "선택",
		monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']               
	});

	/*** cont03 ***/
	var modelsWrap = $(".modelsWrap"),
		btnView = modelsWrap.find("> ul > li > a"),
		viewMoreArea = modelsWrap.find(".viewMoreArea"),
		btnClose = viewMoreArea.find(".btnClose");

	btnView.click(function(e){
		e.preventDefault();
		var i = $(this).parent().index();
		btnView.parent().removeClass("on");
		viewMoreArea.removeClass("on");
		$(this).parent().addClass("on");
		$(this).parent().find(".viewMoreArea").addClass("on");
	});
	btnClose.click(function(e){
		e.preventDefault();
		btnView.parent().removeClass("on");
		viewMoreArea.removeClass("on");
	});

	var galleryList = new Swiper('.galleryList', {
		slidesPerView:"auto",
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});
	var galleryThumbs = new Swiper('.galleryThumbs', {
		slidesPerView:"auto",
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
    });
    var galleryTop = new Swiper('.galleryTop', {
		spaceBetween: 50,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs
		}
	});

	$(window).resize(function(){
		$(".galleryTop .swiper-wrapper .swiper-slide").outerHeight($(".galleryPop").height());
	}).resize();

	//
	var btnTop = $(".btnTop");
	$(window).scroll(function(){
		if($(this).scrollTop() > 100 ) {
			btnTop.fadeIn(200);
		} else {
			btnTop.fadeOut(200);
		}
	})
	btnTop.click(function(e){
		e.preventDefault();
		$("html, body").animate({scrollTop:0});
	});
})