$(function(){

    $('input, textarea').placeholder();

    $("header .subTitle button").click(function(){
        $(".menuArea").addClass("on");
    });
    $(".menuArea .topArea .closeBtn").click(function(){
        $(".menuArea").removeClass("on");
    });

    $(".menuArea").click(function(){
        $(this).removeClass("on");
    });

    $(".choiceArea button").click(function(){
        $(".choiceArea button").removeClass("on");
        $(".choiceArea button").eq($(this).index()).addClass("on");
        $(".view").removeClass("on");
        $(".view").eq($(this).index()).addClass("on");
    });

});