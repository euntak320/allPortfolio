$(function(){
      // 공통셀렉트
    $("#firstMenu").selectmenu();
    $("#secMenu").selectmenu();


    $(window).resize(function(){
        $( "#firstMenu" ).selectmenu("");
        $( "#secMenu" ).selectmenu("");
    });


    //   공통헤더
    $(".topArea .mBtn").click(function(){
        $(this).toggleClass("close")
        $(".header .topArea .searchArea").toggleClass("active");
        $(".header .menuListArea").toggleClass("active");
        if($(".header .menuListArea").not(".active").css({
            "transition" : "0.5s"
        }));
        $("body").toggleClass("over")
    });

    var windowWidth = $(window).width();

	$(".header .comLayout > ul > li > a").click(function(e){
		e.preventDefault();
		if($(this).hasClass("on")){
			$(".header .comLayout > ul > li > a").removeClass("on");
			$(".header .comLayout > ul > li > div").slideUp(200);
		}else{
			$(".header .comLayout > ul > li > a").removeClass("on");
			$(".header .comLayout > ul > li > div").slideUp(200);
			$(this).addClass("on");
			$(this).siblings("div").slideDown(200);
		}
	});

    $("li.addMenu > a").click(function (e) {
        e.preventDefault();
		if($(this).parent().hasClass("on")){
			$("li.addMenu").removeClass("on");
			$("li.addMenu > a").next().slideUp(200);
		}else{
			$("li.addMenu").removeClass("on");
			$("li.addMenu > a").next().slideUp(200);
			$(this).parent().addClass("on");
			$(this).next().slideDown(200);
		}
    });

    $(".header .comLayout .first").on({
        mouseenter: function() {
            $(".menuBoxList").addClass("on");
        },
        mouseleave: function() {
            $(".menuBoxList").removeClass("on");
        },  
    });

    // 위원현황
    $(".stateArea .buttonArea button").click(function(){
        $(".stateArea .buttonArea button").removeClass("on")
        $(".stateArea .buttonArea button").eq($(this).index()).addClass("on");
        $(".stateArea .viewList .list").removeClass("on")
        $(".stateArea .viewList .list").eq($(this).index()).addClass("on");
    });
});