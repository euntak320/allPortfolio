// GNB
function fn_gnb(){
	var gnb = $("#gnb"),
		depth01 = gnb.find("> ul > li"),
		depth02 = depth01.find("> ul");
	depth02.find("> li").has("ul").addClass("more");
	depth01.on({
		mouseenter : function(){
			$(this).find("> ul").stop().slideDown(100);
		},
		mouseleave : function(){
			depth02.stop().slideUp(100);
			depth02.find("> li.more").removeClass("on");
			depth02.find("> li.more").find("ul").hide();
		}
	});
	depth02.find("> li.more a").click(function(e){
		e.preventDefault();
		if($(this).parent().hasClass("on")){
			$(this).parent().removeClass("on");
			$(this).siblings().hide();
		}else{
			$(this).parent().addClass("on");
			$(this).siblings().show();
		}
	});
}

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

		if($eInner.hasClass("v2")){
			$scrollDiv.css({"max-height":$elementH - $eInnerTitH});
		}else{
			$scrollDiv.css({"max-height":$elementH - $eInnerTitH - 98});
		}
	}).resize();
}

// 레이어 팝업 닫기
function fn_layer_close(e){
	$(e).closest(".layer").fadeOut().removeClass("on");
	$("body, html").css({"overflow":"auto"});
}

// 라벨 삭제
function fn_label_del(e){
   $(e).parent().remove();
}

// accordion
function fn_accord(){
	var accord = $(".accord"),
		d01 = accord.find("> ul > li");
	d01.each(function(){
		$(this).find("> a").click(function(e){
			e.preventDefault();
			if($(this).hasClass("on")){
				d01.find("> a").removeClass("on");
				d01.find(".dapth02").slideUp(200);
			}else{
				d01.find("> a").removeClass("on");
				d01.find(".dapth02").slideUp(200);
				$(this).addClass("on");
				$(this).siblings(".dapth02").slideDown(200);
			
			}
		})
	})
}

$(function(){
	//* >>>>>>>> 레이아웃 <<<<<<<< *//

	// GNB 호출
	fn_gnb();
	
	// TOP BAR SELECT
	var menuSelect = $(".menuSelect"),
		btnOpen = menuSelect.find("> a");
	btnOpen.click(function(e){
		e.preventDefault();
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(this).siblings("ul").stop().slideUp(150);
		}else{
			$(this).addClass("on");
			$(this).siblings("ul").stop().slideDown(150);
		}
	});
	menuSelect.mouseleave(function(){
		$(this).find("> a").removeClass("on");
		$(this).find("ul").stop().slideUp(150);
	});

	$(window).resize(function(){
		$("#container").css({"min-height":$(window).height() - ($("#header").outerHeight() + $("#footer").outerHeight())})
	}).resize();

	//* >>>>>>>> 공통 <<<<<<<< *//

	// 데이트피커
	if($(".date").length){
		$(".date").datepicker({
			dateFormat: 'yy-mm-dd',
			showOtherMonths: true,
			showMonthAfterYear:true,
			changeYear: true,
			changeMonth: true,   
			monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
			monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			dayNamesMin: ['일','월','화','수','목','금','토'],
			dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']               
		});
	}

	// 탭 메뉴
	var tabFunc = $(".tabFunc");
	tabFunc.each(function(){
		var btnTab = $(this).find("> ul > li > a"),
			tabBox = $(this).find(".tabBox > div"),
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
	var subTabWrap = $(".subTabWrap");
	subTabWrap.each(function(){
		var tabLi = $(this).find("> ul > li"),
			tabLength = tabLi.length;
		tabLi.css({width:100/tabLength + "%"});
	});

	// LNB
	var lnb = $(".lnb"),
		depth01 = lnb.find("> ul > li"),
		depth02 = depth01.find("ul");
	depth01.has("ul").addClass("dapth02");
	lnb.find("> ul > li.curr ul").show();
	depth01.each(function(){
		if($(this).hasClass("dapth02")){
			lnb.find("> ul > li.curr").find("div").show();
			$(this).find("> a").click(function(e){
				e.preventDefault();
				if($(this).parent().hasClass("curr")){
					$(this).parent().removeClass("curr").find("ul").slideUp(200);
				}else{
					depth01.removeClass("curr").find("ul").slideUp(200);
					$(this).parent().addClass("curr").find("ul").slideDown(200);
				}
			});
		}
	});
	var btnToggle = $(".btnToggle");
	btnToggle.click(function(e){
		e.preventDefault();
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(".contentWrap, .lnb").removeClass("off");
		}else{
			$(this).addClass("on");
			$(".contentWrap, .lnb").addClass("off");
		}
	});

	// 디자인 셀렉트
	var selectBox = $(".selectBox"),
		btnSelect = selectBox.find("button"),
		option = selectBox.find(".option ul li a");
		//another = $("input, .btn, label, .selectBox");
	btnSelect.click(function(){
		if($(this).parent().hasClass("on")){
			$(this).parent().removeClass("on");
			//another.css({"z-index":"0"});
			$(".dim").remove();
		}else{
			selectBox.removeClass("on");
			//another.css({"z-index":"99"}).focus(function(){
			//	selectBox.removeClass("on");
			//	$(".dim").remove();
			//});
			$(this).parent().addClass("on");
			$("body").prepend("<p class='dim'></p>");
			$(".dim").click(function(){
				selectBox.removeClass("on");
				$(this).remove();
			});
		}
	});
	option.click(function(e){
		e.preventDefault();
		var thisTxt = $(this).text(),
			thisVal = $(this).parent().attr("value");

		$(".dim").remove();
		$(this).closest(".selectBox").removeClass("on");
		$(this).closest(".selectBox").find("button").text(thisTxt).attr("value", thisVal);
	});

	// 기본 셀렉트
	$(".select").selectmenu();

	// 필터 - DISPLAY 체크박스
	var dp = $(".selectBox .check"),
		dpAll = dp.eq(0).find("input"),
		dpOne = dp.find("input");
	dpAll.click(function(){
		if(dpAll.is(":checked")){
			dpOne.prop("checked",true);
		}else{
			dpOne.prop("checked",false);
		}
	});
	dpOne.click(function(){
		if(dp.find("input:checked").length == dp.length){
			dpAll.prop("checked",true);
		}else{
			dpAll.prop("checked",false);
		}
	});

	// 파일 업로드
	var fileWrap = $(".fileWrap");
	fileWrap.each(function(){
		var btnFile = $(this).find("input[type=file]");

		btnFile.change(function(){
			var fileTxt = $(this).val();
			$(this).siblings("input[type=text]").val(fileTxt);
		});
	});

	// 버튼클릭 색상변경 및 이름변경 _ ORPO013 ORPO016 ORPO015
	var btnToggle = $("button.btnToggle");
	btnToggle.click(function(){
		$(this).toggleClass("on");
		if($(this).text() == "None"){
			$(this).text("Display").addClass("on");
		}else if($(this).text() == "Display"){
			$(this).text("None").removeClass("on");
		}
		if($(this).text() == "생성 불가능"){
			$(this).text("생성 가능").addClass("on");
		}else if($(this).text() == "생성 가능"){
			$(this).text("생성 불가능").removeClass("on");
		}
	});

	// 드레그 앤 드롭
	$("#sortable").sortable();
	$("#sortable").disableSelection();

	
	// 슬라이드 이미지
	if($(".imgSwiper").length){
		var swiper = new Swiper('.imgSwiper', {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}

	// 하단 Anchor 버튼영역
	var fixedBtn = $(".fixedBtn li a");
	fixedBtn.click(function(e){
		e.preventDefault();
		var i = $(this).attr("href");
		$("html, body").animate({scrollTop:$(i).offset().top - 20},300);
		fixedBtn.parent().removeClass("on");
		$(this).parent().addClass("on");
	});

	// mgt 메인 아코디언 
	var accordBtn = $(".recAccord .accordBtn");

	accordBtn.on("click" , function(e){
		e.preventDefault();
		if($(this).hasClass("up")){
			accordBtn.removeClass("up");
			accordBtn.next(".recDapth02").slideUp();
		}else{
			accordBtn.removeClass("up");
			accordBtn.next(".recDapth02").slideUp();
			$(this).addClass("up");
			$(this).next(".recDapth02").slideDown();
		}
    });
	
	// mgt 메인 스와이퍼
	if($(".processList").length){
		var swiper = new Swiper('.processList', {
			slidesPerView: 4,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}

	// 테이블 포커스
	var btnFocus = $(".icoFocus");
	btnFocus.parent().click(function(e){
		e.preventDefault();
		var focusTable = $(this).closest(".topFilter").next(".colTable");
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(this).closest(".topFilter").next(".colTable").removeClass("focusTable");
			focusTable.find("tr").removeAttr("class");
		}else{
			$(this).addClass("on");
			$(this).closest(".topFilter").next(".colTable").addClass("focusTable");
		}
		focusTable.find("tr").click(function(){
			focusTable.find("tr").addClass("noneFocus");
			if($(this).hasClass("focus")){
				focusTable.find("tr").removeClass("focus");
			}else{
				focusTable.find("tr").removeClass("focus");
				$(this).addClass("focus");
			}
		});
	});

	
	

})