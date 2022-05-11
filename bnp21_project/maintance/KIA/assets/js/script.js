$(document).ready(function(){
	/* 아코디언 리스트 공통 */
	$(".com-accordion a").on("click" , function(){
		$(".com-accordion .detail").not($(this).next(".detail")).stop().slideUp();
		$(this).next(".detail").stop().slideToggle();

		$(".com-accordion a").not($(this)).removeClass("on");
		$(this).toggleClass("on");

		return false;
	});

	// 20-06-03 제품보증서
	$(".com-accordion.v1 span").on("click" , function(){
		$(".com-accordion.v1 .detail").not($(this).next(".detail")).stop().slideUp();
		$(this).next(".detail").stop().slideToggle();

		$(".com-accordion.v1 span").not($(this)).removeClass("on");
		$(this).toggleClass("on");

		return false;
	});

	$(".com-accordion.v2 span").on("click" , function(){
		$(".com-accordion.v2 .detail").not($(this).next(".detail")).stop().slideUp();
		$(this).next(".detail").stop().slideToggle();

		$(".com-accordion.v2 span").not($(this)).removeClass("on");
		$(this).toggleClass("on");

		return false;
	});
	// 20-06-03 

	/* 약관 동의 */
	$(".agree-area .view-btn").on("click" , function(){
		$(this).parents(".info-box").toggleClass("on");
		return false;
	});
	$(".agree-area .agree-btn").on("click" , function(){
		$(this).toggleClass("on");
		if( $(".agree-btn").length == $(".agree-btn.on").length ){
			$(".all-check-box").addClass("on");
		}else{
			$(".all-check-box").removeClass("on");
		}
		return false;
	});
	$(".agree-area .all-check-box a").on("click" , function(){
		$(this).parent().toggleClass("on");
		if( $(".all-check-box").hasClass("on") ){
			$(".pay-content .agree-btn").addClass("on");
		}else{
			$(".pay-content .agree-btn").removeClass("on");
		}
		
		return false;
	});

	/* 결제 선택 */
	$(".pay-select-area .btn-box a").on("click" , function(){
		$(".pay-select-area .btn-box a").removeClass("on")
		$(this).addClass("on");
		return false;
	});

	/* 헤더 메뉴 클릭 */
	$("header .menu-btn").on("click" , function(){
		$('html').toggleClass('on');	// 2019-12-06 추가
		$(this).parents(".menu-content").toggleClass("on");
		return false;
	});

	/* 체크박스 input 제어 */
	$(".join-content .check-box input").on("change" , function(){
		var selectObj = $(this).parents(".info-box").find(".input-cnt select");
		var inputObj = $(this).parents(".info-box").find(".input-cnt input").not(".disabled");
		var bottomBtnObj = $(this).parents(".info-box").find(".bottom-btn");
		
		if( $(this).prop("checked") ){
			selectObj.prop("disabled" , false) 
			inputObj.prop("disabled" , false) 
			bottomBtnObj.show();
		}else{
			selectObj.prop("disabled" , true) 
			inputObj.prop("disabled" , true) 
			bottomBtnObj.hide();
		}
	})

	/* 레이어 오버레이 */
	$(".layer-pop.overlay .close-btn").on("click" , function(){
		$(this).parents(".overlay").fadeOut();
		return false;
	});

	$(".layer-pop.overlay .tabs a").on("click" , function(){
		var parentObj = $(this).parents(".overlay");

		$(".layer-pop.overlay .tabs a").removeClass("on");
		$(this).addClass("on");
		parentObj.find(".scroll-area").hide();
		parentObj.find("#tab"+($(this).index()+1)).show();

		return false;
	});
    /* 2019-10-24 수정 */ 
	$(".tabs a").on("click" , function(){
		var parentObj = $(this).parents(".content2");

		$(".tabs a").removeClass("on");
		$(this).addClass("on");
		parentObj.find(".scroll-area").hide();
		parentObj.find("#tab"+($(this).index()+1)).show();

		return false;
	});
    /* 2019-10-24 수정 end */ 

	/* 인증번호 입력 */
	$(".join-content .tel-input + .check-btn").on("click" , function(){
		var workTF = $(this).parents(".info-box").find(".check-box input").prop("checked");
		if( workTF ){
			$(this).parents(".line").next(".repeat").show();
		}
		
		return false;
	})

	/* 달력 2019-10-14 추가 */
	if( $(".sms-content .date-area .date-box").length ){
		$(".sms-content .date-area:not('.only-month') .date-box input[type='text']" ).datepicker({
			showOn: "both",
			buttonImage: "../assets/images/calc_icon.png",
			buttonImageOnly: true,
			dateFormat: 'yy-mm-dd',
			monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
			dayNamesShort : ['일', '월', '화', '수', '목', '금', '토'],
			yearSuffix : '년',
		});

		$(".sms-content .date-area.only-month .date-box input[type='text']" ).datepicker({
			showOn: "both",
			buttonImage: "../assets/images/calc_icon.png",
			buttonImageOnly: true,
			dateFormat: 'yy-mm',
			monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
			dayNamesShort : ['일', '월', '화', '수', '목', '금', '토'],
			changeMonth: true,
			changeYear: true,
			showButtonPanel: true,
			monthNamesShort: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
			beforeShow: function(input, inst) {
				$('#ui-datepicker-div').addClass("only-year-month");
			},
			onClose: function(dateText, inst) { 
				$(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
			}
		});
	}
	
});