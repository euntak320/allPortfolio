/*******************************************************************************
 * 파 일 명 : extension.js
 * 작 성 자 : ohy
 * 작 성 일 : 2019-11-11
 * 기    능 : interaction script
 ******************************************************************************/

 // 레이어 팝업
function fn_layer(e){
	var $element = $("."+e);
	$element.fadeIn();
	$("body, html").css({"overflow":"hidden"});
}
function fn_layer_close(e){
	$(e).closest(".layer, .popWrap").fadeOut().removeClass("on");
	$("body, html").css({"overflow":"auto"});
}

 $(function(){
    //jquery start


    $(document).on("click", "a[href='#'], a[href='#none']", function(e){e.preventDefault();});

    ($(".leftMenu .on").length > 0 ) ? $(".leftMenu .on").find(".sub").show() : '';

    $(".leftMenu .mm").on("click", function(){
        var _this = $(this);

        $(".leftMenu .li li").removeClass("on");
        _this.closest("li").siblings("li").find(".sub").slideUp();
        _this.closest("li").addClass("on")
        _this.siblings(".sub").slideToggle("fast");
    });


    if($(".datepicker, .datepicker2").length > 0){
        $.datetimepicker.setLocale('kr');

    	$('.d').datetimepicker({
    	onChangeDateTime : function(dp,$input){
    	$input.text($input.val());
    	},

    	 i18n:{
    	  kr:{
    	   months:[
    		'1월','2월','3월','4월',
    		'5월','6월','7월','8월',
    		'9월','10월','11월','12월',
    	   ],
    	   dayOfWeek:[
    		"일", "월", "화", "수",
    		"목", "금", "토",
    	   ]
    	  }
    	 },
    	  timepicker:false,
    	  format:'Y.m.d',
          mask:false
    	});
    }

    if($(".datepicker").length > 0){
		$('.datepicker').datetimepicker({
			timepicker:false,
			format:'Y.m.d',
            mask:false
		});
	}

    if($(".datepicker2").length > 0){
		$('.datepicker2').datetimepicker({
			timepicker:false,
            datepicker: true,
			format:'Y.m',
            showApplyButton: true,
            onShow: function (){$(this).addClass("no")},
            validateOnBlur:false,
            mask:false
		});
	}

	//jquery end


	// 20-08-26 추가
	$("#header li.moblieBtn button").click(function(){
		$(".leftMenu").addClass("on");
	});
	$(".leftMenu .ul button").click(function(){
		$(".leftMenu").removeClass("on");
	});
});


