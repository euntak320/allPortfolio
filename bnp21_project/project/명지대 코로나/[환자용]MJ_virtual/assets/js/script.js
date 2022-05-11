$(function(){
    imgFrame();
    contentHeight();
    contentHeightV2();

    // 비밀번호 보기
    $(".passInput button").click(function(){
        $(".input").toggleClass("active");
        if ($(".input").hasClass("active")){
            $(this).prev("input").attr("type","text");
        } else {
            $(this).prev("input").attr("type","password");
        }
    });

    $("input").focusin(function(){
        $(this).toggleClass("on");
    });
        

    // tab기능
    $(".tab > ul > li").click(function(){
        $(".tab > ul > li").removeClass("on");
        $(".tab > ul > li").eq($(this).index()).addClass("on");
        $(".tab .viewArea .view").removeClass("on");
        $(".tab .viewArea .view").eq($(this).index()).addClass("on");
    });

    // 공통 좋아요 표시
    $(".comBtn.two .like").click(function(){
        $(this).toggleClass("on")
    });

    // 좋아요 기능
    $(".topArea button").click(function () {
        $(this).toggleClass("on");
    });

});

// 이미지 사이즈 조절
function imgFrame(){
    var imgArea = $(".imgSize");
    imgArea.each(function(){
        var imgSrc = $(this).find("img").attr("src");
        $(this).css({
            "background" : "url(" + imgSrc + ") no-repeat",
            "background-size" : "cover",
            "background-position" : "center"
        });
    });
};

// 레이어 공통 닫기
function layerClose(){
    $(".layerFrame").hide();
    $("body").css({
        "overflow" : "visible"
    })
}

// 레이어 공통 열기
function layerOpen(){
    $(".layerFrame").show();
    $("body").css({
        "overflow" : "hidden"
    })
}

// 컨텐츠 높이값 측정
function contentHeight(){
    var allHeight = $(window).outerHeight();
    var headerHeight = $("#header").outerHeight();
    var btmHeight = $(".comBtn").outerHeight();
    var contentHeight = allHeight - (headerHeight + btmHeight);

    $("#content").css({
        "height" : contentHeight
    })
}

function contentHeightV2(){
    var allHeight = $(window).outerHeight();
    var headerHeight = $("#header").outerHeight();
    var contentHeight = allHeight - headerHeight;

    $("#content.v2").css({
        "height" : contentHeight
    })
}