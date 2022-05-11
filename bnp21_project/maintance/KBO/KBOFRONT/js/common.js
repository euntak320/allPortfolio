// POPUP
function fn_layer(e,s){
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
		$scrollDiv.css({"max-height":$elementH - $eInnerTitH - 65});
	}).resize();
}

// 레이어 팝업 닫기
function fn_layer_close(e){
	$(e).closest(".layer").fadeOut().removeClass("on");
	$("body, html").css({"overflow-y":"auto"});
}

// 이미지 배경으로 변경
function fn_imgArea(){
	var thumbs = $(".imgArea");

	thumbs.each(function(){
		if($(this).find("img").css("display") == "inline"){
			var src = $(this).find("img").attr("src");

			$(this).find("img").css({opacity:0,"position":"absolute","z-index":"-1"}).attr("alt","관련 이미지");
			$(this).css({background:"url("+ src +") no-repeat center", "background-size":"cover"});
		}
		$(this).outerHeight($(this).width()/1.76744);
	});
	$(window).resize(function(){
		thumbs.each(function(){
			$(this).outerHeight($(this).width()/1.76744);
		});
	}).resize();

}
$(function(){
	fn_imgArea();
	

	/*>>>>> 공통 <<<<<*/
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
		buttonImage: "../images/btn-date.png",
		buttonImageOnly: true,
		buttonText: "선택",
		monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']               
	});
})