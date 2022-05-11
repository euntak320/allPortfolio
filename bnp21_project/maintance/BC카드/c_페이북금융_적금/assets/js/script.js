$(document).ready(function(){

	/* 주민번호 포커스 제어 */
	$(".send-info-content .name-num-area .num-cnt").on("focusin" , function(){
		$(this).addClass("on");
	});
	$(".send-info-content .name-num-area .num-cnt").on("focusout" , function(){
		$(this).removeClass("on");
	});

	/* 하위 체크박스 클릭시 부모 체크박스 체크 */
	$(".check-agree-content .link-list.check input").on("change" , function(){		
		var inputCheckedNum = $(this).parents(".check-area").find(".com-check.type-2 input:checked").length;
		if( inputCheckedNum > 0 ){
			$(this).parents(".check-area").find("> .com-check input").prop("checked" , true);
		}else{
			$(this).parents(".check-area").find("> .com-check input").prop("checked" , false);
		}
	});
	$(".check-agree-content .check-area > .com-check > input").on("change" , function(){		
		if( !$(this).prop("checked") ){
			$(this).parents(".check-area").find(".link-list.check input").prop("checked" , false);
		}else{
			$(this).parents(".check-area").find(".link-list.check input").prop("checked" , true);
		}
	});

});