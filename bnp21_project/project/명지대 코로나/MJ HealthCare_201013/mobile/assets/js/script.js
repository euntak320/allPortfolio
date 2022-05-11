$(function(){

    // 높이값 확인
    var allHeight = $(window).innerHeight();
    var topHeight = $(".header").innerHeight();
    var contentHeight = allHeight - topHeight;
    $(".contentArea").css({
        "height" : contentHeight
    });

    //로그인 버튼 높이값
    var logo = $(".logoArea").innerHeight();
    var title = $(".titleArea").innerHeight();
    var inputArea = $(".btmSelect").innerHeight();

    var spaceHeight = allHeight - (logo + title + inputArea);


    $(".btmSelect").css({
        "margin-top" : spaceHeight - 80
    });

    imgFrame();
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