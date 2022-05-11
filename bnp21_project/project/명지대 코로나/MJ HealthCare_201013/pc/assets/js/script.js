$(function(){



    $( ".datepicker" ).datepicker({
        showOn: "button",
        buttonImage: "assets/images/btn_calendar.png",
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

    imgFrame();
   
      // 댓글영역 확인
      $(".box .counting").click(function () {
        $(this).next().slideToggle();
    });

    //수정 버튼 클릭시
    $(".control .modify").click(function () {
        $(this).parents(".rightArea").addClass("on");
    });

    //변경 버튼 클릭식
    $(".modBtn").click(function () {
        $(this).parents(".rightArea").removeClass("on");
    });

    //삭제 버튼 클릭시
    $(".control .del").click(function () {
        $(this).parents(".rightArea").hide();
    });

    $(".buttonArea button").click(function(){
        $(".buttonArea button").removeClass("on");
        $(".buttonArea button").eq($(this).index()).addClass("on");
    });
    
});

function layerOpen () {
    $(".layerFrame").show();
}
function layerClose () {
    $(".layerFrame").hide();
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