// GNB
// 2020-05-20
function fn_gnb(){
	var header = $("#header"),
		util = header.find(".util"),
		btnMenu = header.find(".btnMenu"),
		gnb = header.find("#gnb"),
		btnMenuClose = gnb.find(".btnMenuClose"),
		depth01 = gnb.find("> ul > li");

	depth01.find("ul").wrap("<div>");
	var depth02 = depth01.find("> div"),
		curr = gnb.find("> ul > li.curr").index();
	depth01.on({
		mouseenter : function(){
			depth01.removeClass("curr");
			$(this).find("div").show().clearQueue();
		},
		mouseleave : function(){
			depth01.eq(curr).addClass("curr");
			$(this).find("div").hide().clearQueue();
		}
	});
	depth01.focusin(function(){
		$(this).find("div").show();
	});
	depth02.find("li:last-child").focusout(function(){
		$(this).parent().hide();
	});

	btnMenu.click(function(){
		gnb.addClass("open");
		util.animate({"right":"20px"},200);
		$("html, body").css({"overflow":"hidden"});
	});

	btnMenuClose.click(function(){
		gnb.removeClass("open");
		util.animate({"right":"-300px"},200);
		$("html, body").css({"overflow-y":"auto"});
	});
}
//-- 2020-05-20

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
	$("body, html").css({"overflow":"auto"});
}

// 중분류 추가
function fn_addMClass(){
	var addContWrap = $(".addContWrap"),
		mClass = '<div class="addContArea"><table class="mClassTable"><caption>중분류코드, 코드명, 정렬, 사용여부 항목으로 구성된 코드관리 상세분류 등록 테이블입니다.</caption><colgroup><col style="width:96px"><col style="width:auto"><col style="width:96px"><col style="width:auto"><col style="width:96px"><col style="width:auto"><col style="width:96px"><col style="width:410px"></colgroup><tbody><tr><th scope="row">중분류코드</th><td><input type="text" title="코드 입력"></td><th scope="row">코드명</th><td><input type="text" title="코드명 입력"></td><th scope="row">정렬</th><td><input type="text" title="정렬 입력"></td><th scope="row">사용여부</th><td><!-- checkBox --><div class="checkBox"><span><input type="radio" name="chk01" id="chk0101" checked><label for="chk0101">사용</label></span><span><input type="radio" name="chk01" id="chk0102"><label for="chk0102">미사용</label></span></div><!--// checkBox --><div class="btnArea"><button class="btn btnYellowL" onclick="fn_del(this)"><span class="icoTrash">삭제</span></button><button class="btn btnYellow" onclick="fn_addSClass(this)">+ 소분류추가</button></div></td></tr><tr><th scope="row">코드설명</th><td colspan="7"><input type="text" title="코드설명 입력" class="w100p"></td></tr></tbody></table></div>';
	addContWrap.append(mClass);
}
// 소분류 추가
function fn_addSClass(e){
	var sClass = '<table class="sClassTable"><caption>소분류코드, 코드명, 정렬, 사용여부 항목으로 구성된 코드관리 상세분류 등록 테이블입니다.</caption><colgroup><col style="width:96px"><col style="width:auto"><col style="width:96px"><col style="width:auto"><col style="width:96px"><col style="width:auto"><col style="width:96px"><col style="width:300px"></colgroup><tbody><tr><th scope="row">소분류코드</th><td><input type="text" title="소분류코드 입력"></td><th scope="row">코드명</th><td><input type="text" title="코드명 입력"></td><th scope="row">정렬</th><td><input type="text" title="정렬 입력"></td><th scope="row">사용여부</th><td><!-- checkBox --><div class="checkBox"><span><input type="radio" name="chk01" id="chk0101" checked><label for="chk0101">사용</label></span><span><input type="radio" name="chk01" id="chk0102"><label for="chk0102">미사용</label></span></div><!--// checkBox --><div class="btnArea"><button class="btn btnYellowL" onclick="fn_delS(this)"><span class="icoTrash">삭제</span></button></div></td></tr><tr><th scope="row">코드설명</th><td colspan="7"><input type="text" title="코드설명 입력" class="w100p"></td></tr></tbody></table>';
	if($(e).closest("table").next(".sClassTable").length){
		$(e).closest(".addContArea").append(sClass);
	}else{
		$(e).closest("table").after(sClass);
	}
}
// 중분류 삭제
function fn_del(e){
	if($(".addContArea").length > 1){
		$(e).closest(".addContArea").remove();
	}else{
		alert("삭제할 수 없습니다.")
	}
}
// 소분류 삭제
function fn_delS(e){
	$(e).closest("table").remove();
}

// 그래프
/*function fn_graph(){
   var graphArea = $(".graphArea");
   graphArea.each(function(){
      var dl = $(this).find("dl"),
         maxValue = dl.find("strong em").text();
      
      dl.each(function(){
         var val = $(this).find("strong span").tex t();
         if($(this).find(".graph").hasClass("other")){
            var width = (maxValue/val)*100 > 100 ? 100 : (maxValue/val)*100;
            $(this).find(".graph p").css({width:width + "%"});
         }else{
            $(this).find(".graph p").css({width:(val/maxValue)*100 + "%"});
         }
      });
   });
}*/
$(function() {
	/*>>>>> 레이아웃 <<<<<*/

	// GNB
	fn_gnb();

	// 컨텐츠 사이즈
	$(window).resize(function(){
      var headerHeight = $("#header").outerHeight() == undefined ? 0 : $("#header").outerHeight();
      $("#container").css({"min-height":$(window).height() - headerHeight - $("#footer").outerHeight()});
   }).resize();

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
		buttonImage: "../images/ico-date.png",
		buttonImageOnly: true,
		buttonText: "선택",
		monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']               
	});
	
	// 파일 선택
	var fileWrap = $(".fileWrap"),
		selectFile = fileWrap.find("input[type=file]");
	selectFile.change(function(){
		var txt = $(this).val();
		$(this).siblings("input").val(txt);
	});

	// 2020-05-20
	$(".rowTable > table > tbody > tr > td").wrapInner("<div></div>");
	$(".rowTable > table > tbody > tr > td").has("textarea").siblings("th").css({"height":"113px"});
	//-- 2020-05-20
})
/*>>>>> 페이지 <<<<<*/
// 대시보드
$(window).on("load", function() {
	//fn_graph();
});