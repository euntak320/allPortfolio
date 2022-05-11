// POPUP
function fn_layer(e,s){
	var $element = $("."+e),
		$eInner = $element.find("> .inner"),
		$eInnerTit = $eInner.find(".tit"),
		$scrollDiv = $element.find(".tit + div");
	$element.fadeIn(200);
	$eInner.css({width:s});
	$eInner.find(".popCont").wrapInner("<div class='inBox'></div>");
	$("body, html").css({"overflow":"hidden"});
	$(window).resize(function(){
		var $elementH = $element.height();
		var $eInnerH = $eInner.outerHeight();
		var $eInnerTitH = $eInnerTit.outerHeight();
		var i = $elementH - $eInnerH;
		$scrollDiv.css({"max-height":$elementH - $eInnerTitH});
	}).resize();
}

// 레이어 팝업 닫기
function fn_layer_close(e){
	$(e).closest(".layer").fadeOut(200).removeClass("on");
	$("body, html").css({"overflow":"auto"});
}

$(function(){
	/*>>>>>>>>>> 공통 <<<<<<<<<<*/
	$(window).resize(function(){
		$("#wrap").css({"min-height":$(window).height()});
	}).resize();

	if($(".btnFixed").length){
		$("#container").addClass("fixedBtn");
	}

	if($(".btnClose").length){
		$("h1").hide();
	}

	// 별표 체크
	$(".btnStar").click(function(){
		$(this).toggleClass("on");
	});

	/*>>>>>>>>>> 페이지 <<<<<<<<<<*/
	//* 헌금하기 *//
	var offeBox = $(".offeBox"),
		btnOffe = offeBox.find("ul li");
	btnOffe.click(function(){
		if($(this).hasClass("on")){
			btnOffe.removeClass("on");
		}else{
			btnOffe.removeClass("on");
			$(this).addClass("on");
		}
	});

	//* 회원가입 - 교회선택 *//
	var selectList = $(".selectList"),
		btnSelect = selectList.find("ul li a");
	btnSelect.click(function(e){
		e.preventDefault();
		btnSelect.removeClass("selected");
		$(this).addClass("selected");
		var changeName = $(".changeName");
		if(changeName.length){
			var thisTxt = $(this).text();
			changeName.find("strong span").text(thisTxt);
		}
	});

	//* 회원가입 - 본인인증 *//
	//통신사 선택
	var slideSelect = $(".slideSelect");
	slideSelect.each(function(){
		var selectTxt = $(this).find("strong span"),
			btnSlide = $(this).find("button"),
			slideOption = $(this).find("ul");
		btnSlide.click(function(){
			if($(this).hasClass("on")){
				$(this).removeClass("on").text("리스트 보기");
				slideOption.slideUp(200);
			}else{
				$(this).addClass("on").text("리스트 닫기");
				slideOption.slideDown(200);
				slideOption.find("a").click(function(e){
					e.preventDefault();
					var i = $(this).text();
					selectTxt.addClass("on").text(i);
				});
			}
		});
	})
	// 인증 동의
	var agreeCheck = $(".agreeCheck");
	agreeCheck.each(function(){
		var btnSlide = $(this).find("button"),
			checkList = $(this).find("> ul");
			check = checkList.find("> li"),
			checkAll = $(this).find("> .check input"),
			checkOne = $(this).find(".check input");

		btnSlide.click(function(){
			if($(this).hasClass("on")){
				$(this).removeClass("on").text("리스트 보기");
				checkList.slideUp(200);
			}else{
				$(this).addClass("on").text("리스트 닫기");
				checkList.slideDown(200);
			}
		});
		checkAll.click(function(){
			if(checkAll.is(":checked")){
				checkOne.prop("checked",true);
			}else{
				checkOne.prop("checked",false);
			}
		});
		checkOne.click(function(){
			if(check.find("input:checked").length == check.length){
				checkAll.prop("checked",true);
			}else{
				checkAll.prop("checked",false);
			}
		});

		check.has("div").find("a").addClass("btnSlide");
		$(".btnSlide").click(function(e){
			e.preventDefault();
			if($(this).hasClass("on")){
				$(this).removeClass("on").text("리스트 보기");
				$(this).closest("li").find("div").slideUp(200);
			}else{
				$(this).addClass("on").text("리스트 닫기");
				$(this).closest("li").find("div").slideDown(200);
			}
		});
	});
	
	//* 회원가입 - 약관동의 *//
	var agreeWrap = $(".agreeWrap");
	agreeWrap.each(function(){
		var check = $(this).find("li"),
			checkAll = $(this).find("dt .check input"),
			checkOne = $(this).find("dd .check input");
		checkAll.click(function(){
			if(checkAll.is(":checked")){
				checkOne.prop("checked",true);
			}else{
				checkOne.prop("checked",false);
			}
		});
		checkOne.click(function(){
			if(check.find("input:checked").length == check.length){
				checkAll.prop("checked",true);
			}else{
				checkAll.prop("checked",false);
			}
		});
	});

	//* 설정 - 계좌정보 등록 *//
	var bankList = $(".bankList");
	bankList.find("a").click(function(e){
		e.preventDefault();
		bankList.find("li").removeClass("on");
		$(this).parent().addClass("on");
	});

	//* 헌금하기 - 감사헌금 *//
	$(window).resize(function(){
		if($(window).width() > 767){
			$(".offeSelect").css({"min-height":$(window).height() - $("#subHeader").outerHeight() - 50});
		}else{
			$(".offeSelect").css({"min-height":$(window).height() - $("#subHeader").outerHeight() - 5});
		}
	}).resize();

	//* 조회 - 내역조회 *//
	$(".flex button").click(function(e){
		e.preventDefault();
		$(".flex button").removeClass("on");
		$(this).addClass("on");
	});
})