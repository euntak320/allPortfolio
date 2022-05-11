$(function(){

    gnbMenu();
    addFile ();
    imgFrame();

    $("#header .meunList > ul").on({
        mouseenter: function(){
            $(this).parents("#header").addClass("on");
        },
        mouseleave: function(){
            $(this).parents("#header").removeClass("on");
        }
    });

    //달력
    $( ".datepicker" ).datepicker({
        showOn: "button",
        buttonImage: "assets/images/ico_calendar.png",
        buttonImageOnly: true,
        buttonText: "날짜 선택",
        closeText: '닫기',
        prevText: '이전달',
        nextText: '다음달',
        currentText: '오늘',
        monthNames: ['1월','2월','3월','4월','5월','6월', '7월','8월','9월','10월','11월','12월'],
        monthNamesShort: ['1월','2월','3월','4월','5월','6월', '7월','8월','9월','10월','11월','12월'],
        dayNames: ['일','월','화','수','목','금','토'],
        dayNamesShort: ['일','월','화','수','목','금','토'],
        dayNamesMin: ['일','월','화','수','목','금','토'],
        weekHeader: 'Wk',
        dateFormat: 'yy-mm-dd',
        firstDay: 0,
        isRTL: false,
        duration:200,
        showAnim:'show',
        showMonthAfterYear: true,
        yearSuffix: ''
    });

    // 탭메뉴
    $(".tab_area .tab_txt").click(function(){
        $(".tab_area .tab_txt").removeClass("on")
        $(this).addClass("on");
        $(".result_area").removeClass("on");
        $(".result_area").eq($(this).index()).addClass("on");
    });

   
});

function gnbMenu() {
    var menu = $('.meunList > ul > li');
	
	menu.on({
		mouseover:function(){
			var tg = $(this); //마우스 오버된 1뎁스
			menu.removeClass('on');
			tg.addClass('on'); //tg = 타겟은 호버된 1뎁스
		},
		mouseout:function(){
			var tg = $(this); //마우스 오버된 1뎁스
			menu.removeClass('on');
		}
    });
}

function addFile () {
    var fileWrap = $(".fileArea");
    fileWrap.each(function(){
        var btnFile = $(this).find("input[type=file]");

        btnFile.change(function(){
            var fileTxt = $(this).val();
            $(this).siblings("input[type=text]").val(fileTxt);
        });
    });
}
function imgFrame(){
    var imgArea = $(".imgSize");
    imgArea.each(function(){
        var imgSrc = $(this).find("img").attr("src");
        $(this).css({
            "background" : "url(" + imgSrc + ") no-repeat",
            "background-size" : "cover",
            "background-position" : "center"
        });
    })
};