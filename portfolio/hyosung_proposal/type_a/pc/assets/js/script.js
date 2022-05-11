function playVideo(el) {
    var vid = document.getElementById(el);
    vid.play();
}

function pauseVideo(el) {
    var vid = document.getElementById(el);
    vid.pause();
}

$(function(){

    $(".pdl").click(function(){
        $("html, body").animate({scrollTop:"0"}, 500)
    }); 

    // 마우스 인터렉션
    var $grid = $('.mouse_area .content')
    var $gridItem = $('.grid__item')
    var gridItemHeight = $gridItem.height()
    var gridItemWidth = $gridItem.width()

    var horzCount = Math.floor($grid.width() / gridItemWidth)
    var vertCount = Math.floor($grid.height() / gridItemHeight)

    var totalGridItems = horzCount * vertCount
    for (var i = 0; i < totalGridItems; i++) {
        var $gridItemClone = $gridItem.clone();
        $grid.append($gridItemClone);
    }
    
    $(".menu_btn button").click(function(){
        $(".menu_list_area").addClass("on");
        $("main").addClass("on");
        $("html,body").css("overflow","hidden");
    });

    $(".top_link_area button").click(function(){
        $(".menu_list_area").removeClass("on");
        $("main").removeClass("on");
        $("html,body").css("overflow","visible");
    });
    

    $(".meun_link ul > li").mouseenter(function(){
        $(this).each(function(){
            $(this).parents(".meun_link").find("span").css({
                "color":"black", 
                "transition" : "0.5s"}
            )
        });
    });

    $(".meun_link li a").mouseleave(function(){
        $(this).parents("div").find(".first").css({
            "color":"white", 
            "transition" : "0.5s"}
        )
    });

    $(".meun_link .one").mouseenter(function(){
        $(this).parents(".menu_list_area").find(".left_image_area .one").addClass("on")
    });
    $(".meun_link .two").mouseenter(function(){
        $(this).parents(".menu_list_area").find(".left_image_area .two").addClass("on")
    });
    $(".meun_link .three").mouseenter(function(){
        $(this).parents(".menu_list_area").find(".left_image_area .three").addClass("on")
    });
    $(".meun_link .four").mouseenter(function(){
        $(this).parents(".menu_list_area").find(".left_image_area .four").addClass("on")
    });
    $(".meun_link .five").mouseenter(function(){
        $(this).parents(".menu_list_area").find(".left_image_area .five").addClass("on")
    });
    $(".meun_link .six").mouseenter(function(){
        $(this).parents(".menu_list_area").find(".left_image_area .six").addClass("on")
    });
    $(".meun_link .seven").mouseenter(function(){
        $(this).parents(".menu_list_area").find(".left_image_area .seven").addClass("on")
    });
    $(".meun_link .eight").mouseenter(function(){
        $(this).parents(".menu_list_area").find(".left_image_area .eight").addClass("on")
    });
    $(".meun_link .nine").mouseenter(function(){
        $(this).parents(".menu_list_area").find(".left_image_area .nine").addClass("on")
    });
    $(".meun_link .ten").mouseenter(function(){
        $(this).parents(".menu_list_area").find(".left_image_area .ten").addClass("on")
    });
    $(".meun_link .eleven").mouseenter(function(){
        $(this).parents(".menu_list_area").find(".left_image_area .eleven").addClass("on")
    });
    $(".meun_link .twelve").mouseenter(function(){
        $(this).parents(".menu_list_area").find(".left_image_area .twelve").addClass("on")
    });
    $(".meun_link .threeteen").mouseenter(function(){
        $(this).parents(".menu_list_area").find(".left_image_area .threeteen").addClass("on")
    });
    $(".meun_link .fourteen").mouseenter(function(){
        $(this).parents(".menu_list_area").find(".left_image_area .fourteen").addClass("on")
    });
    $(".meun_link .fivteen").mouseenter(function(){
        $(this).parents(".menu_list_area").find(".left_image_area .fivteen").addClass("on")
    });
    $(".meun_link .sixtheen").mouseenter(function(){
        $(this).parents(".menu_list_area").find(".left_image_area .sixtheen").addClass("on")
    });
    $(".meun_link .seventheen").mouseenter(function(){
        $(this).parents(".menu_list_area").find(".left_image_area .seventheen").addClass("on")
    });
    $(".meun_link .eighteen").mouseenter(function(){
        $(this).parents(".menu_list_area").find(".left_image_area .eighteen").addClass("on")
    });

    $(".meun_link li").mouseleave(function(){
        $(this).parents(".menu_list_area").find(".left_image_area .img_frame").removeClass("on");
    });
    
    $('.arrow_box').hover(function () {
        var imgsrc =  $(this).find("img");
        imgsrc.attr("src", "./assets/images/icon-arrow_black.png")
    }, function () {
        var imgsrc =  $(this).find("img");
        imgsrc.attr("src", "./assets/images/icon-arrow_white.png")
    });

    $('.meun_link ul > li').hover(function () {
        var leftArea =  $(this).parents(".menu_list_area").find(".left_image_area")
        leftArea.addClass("on")
    }, function () {
        var leftArea =  $(this).parents(".menu_list_area").find(".left_image_area")
        leftArea.removeClass("on")
    });

    // scroll 이벤트

    

    var controller = new ScrollMagic.Controller();

    var firstArea = new TimelineMax()
        firstArea
        .to(".bi_text", 1, {scale:0, opacity:0, ease: Linear.easeNone})
        .to(".logo", 1, {width:"140px", height:"63px", ease: Linear.easeNone})
        
        
        .add("start_right")
        .to(".one .center", 3, {x: "-200%", opacity:0, ease: Linear.easeNone})
        .from(".one .right", 3, {x:0, scale:0.1, opacity:0, ease: Linear.easeNone},'start_right')


        .add("start_left")
        .to(".one .right", 3, {x: "200%", opacity:0, scale:1, ease: Linear.easeNone})
        .from(".one .left", 3, {opacity:0, scale:0.1, ease: Linear.easeNone},'start_left')

        .add("start_last")
        .to(".one .left", 3, {x: "-200%", opacity:0, scale:1, ease: Linear.easeNone})
        .from(".one .v2", 3, {scale:0, ease: Linear.easeNone}, 'start_last')
        
        .to(".one .v2", 3, {x: "200%", opacity:0, scale:1, ease: Linear.easeNone})
        .fromTo(".video_area", 3, {opacity:0, scale:0, onComplete: videoPause}, {scale:1, opacity:1, onComplete: videoPlay})

        var vid = document.getElementById("intro_video");

        function videoPlay (){
            vid.play();
        }

        function videoPause (){
            vid.pause();
        }

    
    var scene1 = new ScrollMagic.Scene({
        triggerElement: ".one", // 영역시작
        triggerHook: "0", // 상단 위치
        duration: "100%"  // 도달했을때
    })
    .setPin(".one") // 페이지고정
    .setTween(firstArea)
    .addIndicators() 
    .addTo(controller);


    var secondArea = new TimelineMax()

    var scene2 = new ScrollMagic.Scene({
        triggerElement: ".two", // 영역시작
        triggerHook: "0", // 상단 위치
        duration: "100%"  // 도달했을때
    })
    .on("enter",function(){
        $(".content.two .title").addClass("on")
    })
    .on("leave",function(){
        $(".content.two .title").removeClass("on")
    })

    .setTween(secondArea)
    .addIndicators() 
    .addTo(controller);

    var secondArea_1 = new TimelineMax()

    var scene2 = new ScrollMagic.Scene({
        triggerElement: ".two .title", // 영역시작
        triggerHook: "0", // 상단 위치
        duration: "100%"  // 도달했을때
    })
    .on("enter",function(){
        $(".bar_area .bar").addClass("on")
    })
    .on("leave",function(){
        $(".bar_area .bar").removeClass("on")
    })

    .setTween(secondArea_1)
    .addIndicators() 
    .addTo(controller);

    // 숫자 카운팅
    $(".bar_area .number").each(function(i) {
	
        let max_count = $(this).data("count"); // 카운트 될 값
        var scoreDisplay = this;
        var count = {score:0};
        
        var tween1 = new TimelineMax();

        tween1.to(count, 1, {score:max_count, roundProps:"score", onUpdate:function(){  
            scoreDisplay.innerHTML = count.score; 
        }, 
            ease:Linear.easeNone});
        new ScrollMagic.Scene({
            triggerElement: $(".progress_area")[0]
        })
        .setTween(tween1)
        .addTo(controller);
    });

    var thirdArea = new TimelineMax()

    thirdArea
    .fromTo(".para", 1 ,{opacity:0}, {opacity:1, ease: Linear.easeNone})
    
    var scene3 = new ScrollMagic.Scene({
        triggerElement: ".three", // 영역시작
        triggerHook: 1, // 상단 위치
        duration: "100%"  // 도달했을때
    }) 

    .setTween(thirdArea)
    .addIndicators() 
    .addTo(controller);

    var forthArea = new TimelineMax()

    forthArea
    .fromTo(".blueline_left", 1, {top:"10%", width:0, opacity:0}, {top:"25%", width:"120%", opacity:1, ease: Linear.easeNone})
    .fromTo(".blueline_right", 1, {bottom:"39%", width:"0%"}, {bottom:"20%",  width:"120%", ease: Linear.easeNone})
    
    
    var scene4 = new ScrollMagic.Scene({
        triggerElement: ".four", // 영역시작
        triggerHook: "0", // 상단 위치
        duration: "100%"  // 도달했을때
    })

    .setTween(forthArea)
    .addIndicators() 
    .addTo(controller);


    var textArea = new TimelineMax()

    var scene4_1 = new ScrollMagic.Scene({
        triggerElement: ".action_area", // 영역시작
        triggerHook: "0", // 상단 위치
        duration: "100%"  // 도달했을때
    })
    .on("enter", function(){
        $(".action_area .title_text span").addClass("on")
    })
    .on("leave", function(){
        $(".action_area .title_text span").removeClass("on")
    })
    .setTween(textArea)
    .addIndicators() 
    .addTo(controller);


    var loagArea = new TimelineMax()

    loagArea
    .add("paddingLeft")
    .to(".logo", 3, {top:"95px", left:"90px", width:"715px", height:"700px", paddingTop:"14px", paddingLeft:"15px", paddingBottom:0,paddingRight:0, ease: Linear.easeNone})
    .to(".logo .pdl", 3 ,{paddingLeft:"62px" , paddingTop:"85px"}, "PaddingLeft")
    
    
    var scene4_2 = new ScrollMagic.Scene({
        triggerElement: ".five_text", // 영역시작
        triggerHook: "0", // 상단 위치
        duration: "100%"  // 도달했을때
    })

    .setTween(loagArea)
    .addIndicators() 
    .addTo(controller);



    var fifthArea = new TimelineMax()

    fifthArea

    .add("trand_area")
    .to(".prallex_area .one", 3, {display:"none", ease: Linear.easeNone})
    .to(".five_area .trand", 3, {display:"none", ease: Linear.easeNone}, "trand_area")

    .from(".prallex_area .two", 1, {display:"block", ease: Linear.easeNone})
    .from(".five_area .news", 1, {display:"block", ease: Linear.easeNone})
    
    .add("news_area")
    .to(".prallex_area .two", 1, {display:"none", ease: Linear.easeNone})
    .to(".five_area .news", 1, {display:"none", ease: Linear.easeNone},"news_area")

    .from(".prallex_area .three", 1, {display:"block", ease: Linear.easeNone})
    .from(".five_area .sns", 1, {display:"block", ease: Linear.easeNone})
    
    .add("sns_area")
    .to(".prallex_area .three", 1, {display:"none", ease: Linear.easeNone})
    .to(".five_area .sns", 1, {display:"none", ease: Linear.easeNone},"sns_area")
    
    .set(".prallex_area .three", {display:"block", ease: Linear.easeNone})

    .add ("reback")
    .to(".logo", 0.5, {top:0, left:0, width:"140px", height:"63px", paddingTop:"14px", paddingBottom:"14px", paddingLeft:"15px",  paddingRight:"15px",ease: Linear.easeNone})
    .to(".logo .pdl", 1 ,{paddingLeft:0, paddingTop:0}, "reback")
    
    
    var scene5 = new ScrollMagic.Scene({
        triggerElement: ".five", // 영역시작
        triggerHook: "0", // 상단 위치
        duration: "200%"  // 도달했을때
    })

    .on("enter", function(){
        $(".bi_text, .logo .pdl span").hide()
        $(".five_area").addClass("on")
    })
    .on("leave", function(){
        $(".bi_text, .logo .pdl span").show()
        $(".five_area").removeClass("on")
    })

    .setPin(".five")
    .setTween(fifthArea)
    .addIndicators() 
    .addTo(controller);
});
