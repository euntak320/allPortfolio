$(function(){
    imgFrame();
    contentHeight();

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
        


});

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

function layerClose(){
    $(".layerFrame").hide();
    $("body").css({
        "overflow" : "visible"
    })
}

function layerOpen(){
    $(".layerFrame").show();
    $("body").css({
        "overflow" : "hidden"
    })
}

function contentHeight(){
    var allHeight = $(window).outerHeight();
    var headerHeight = $("#header").outerHeight();
    var btmHeight = $(".comBtn").outerHeight();
    var contentHeight = allHeight - (headerHeight + btmHeight);

    $("#content").css({
        "height" : contentHeight
    })
}