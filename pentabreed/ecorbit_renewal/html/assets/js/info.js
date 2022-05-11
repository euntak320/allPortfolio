
//팝업 열기
function view_layer(modalname) {
    document.get
    $("." + modalname).fadeIn(300);
}

$(function () {

    // 자회사 레이어 부분
    $(".subsidiaries .button_area a").click(function(){
        $(".layer_wrap").css("display","block");
        $("html, body").css("overflow","hidden");
        $(".layer_wrap").prepend("<div class='layer_bg'></div)");
    });

    $(document).on("click", ".close_btn", function(){
        $("html, body").css("overflow","visible");
        $(".layer_bg").remove();
        $(".layer_wrap").fadeOut();
        $(".subsidiaries .layer_area").hide();    
    });

    
    $(document).on("click", ".layer_bg",  function(){
        $(this).remove();
        $("html, body").css("overflow","visible");
        $(".subsidiaries .layer_wrap").hide();
        $(".subsidiaries .layer_area").hide();
    });

    $(window).on('scroll' , function(){

        var scrollTop = $(window).scrollTop();
        var widowHeight = $(window).height();
        var contentHeight = $(window).height()/2

        $('.circle_list').each(function(){
            var motion_top = $(this).offset().top;
            var list = $(this).find("div");
            if(scrollTop > motion_top-contentHeight/1.5){
                $(this).addClass("on")
                list.eq(0).addClass("on");
                list.eq(1).addClass("on");
                setTimeout(function(){
                    list.eq(2).addClass("on");
                },200);
                setTimeout(function(){
                    list.eq(3).addClass("on");
                },400);
            }
        });

        $('.develop_area').each(function(){
            var motion_top = $(this).offset().top;
            var list = $(this).find("div");
            if(scrollTop > motion_top-contentHeight/1.5){
                list.eq(0).addClass("on");
                setTimeout(function(){
                    list.eq(1).addClass("on");
                },100);
                setTimeout(function(){
                    list.eq(2).addClass("on");
                },350);
                setTimeout(function(){
                    list.eq(3).addClass("on");
                },500);
                setTimeout(function(){
                    list.eq(4).addClass("on");
                },650);
                setTimeout(function(){
                    list.eq(5).addClass("on");
                },800);
                setTimeout(function(){
                    list.eq(6).addClass("on");
                },950);
                setTimeout(function(){
                    list.eq(7).addClass("on");
                },1200);
            }
        });

        $('.box_list').each(function(){
            var motion_top = $(this).offset().top;
            var list = $(this).find(".box");
            if(scrollTop < motion_top-contentHeight){
                if (width >= 767) {
                    setTimeout(function(){
                        list.eq(1).addClass("on");
                        list.eq(3).addClass("on");
                    },3000);
                }
            }
        });

        
        $('.subsidiaries_contentbox').each(function(){
            var subsidiariesTop = $(this).offset().top;
            var contentTop = $('.subsidiaries .content_area').offset().top - $(window).scrollTop();
            if(scrollTop > subsidiariesTop - widowHeight/3){
                $(this).addClass('on').siblings().removeClass('on');
                if ($(this).hasClass("last")) {
                    $(this).addClass("stop")
                }
            }
            else {
                $(this).removeClass('on');
            }

            if(contentTop > 0){
                $(this).removeClass("stop")
            }

        });

        // ver2
        // $('.subsidiaries_contentbox').each(function(){
        //     var subsidiariesTop = $(this).offset().top;
        //     var contentTop = $('.subsidiaries .content_area').offset().top - $(window).scrollTop();
        //     if(scrollTop > subsidiariesTop - widowHeight/2){
        //         $(this).addClass('on').siblings().removeClass('on');
        //         if ($(this).hasClass("last")) {
        //             $(this).addClass("stop")
        //         }
        //     }
        //     else {
        //         $(this).removeClass('on');
        //     }

        //     if(contentTop > 0){
        //         $(this).removeClass("stop")
        //     }

        // });


        // 자회사 부분
        // $('.subsidiaries .scrolling_img').each(function (index) {
        //     var imgTop = $(this).offset().top - $(window).scrollTop() - 250;    //이미지 탑 위치
        //     var contentTop = $('.subsidiaries .content_area').offset().top - $
        //     (window).scrollTop(); //이미지 컨텐츠 시작영역
        //     var footerTop = $('.footer').offset().top - $(window).scrollTop();
            
        //     if( contentTop > 0 ){
        //         $('.subsidiaries .content_box').removeClass('stop');
        //         $('.subsidiaries .category_title').removeClass('on');
        //         $('.subsidiaries .fixed_area').removeClass('on');
        //         $('.subsidiaries .count_area').removeClass('on');
        //         $('.subsidiaries .fixed_area').last().removeClass('fixed')
        //     }
        //     // 올렷을때
            
        //     if( imgTop < 0 && contentTop < 0 ){
        //         $('.subsidiaries .content_box').removeClass('stop');
        //         $('.subsidiaries .count_area').addClass('on');
        //         $('.subsidiaries .active_count').text(index + 1);
        //         $('.subsidiaries .fixed_area').removeClass('on');
        //         $('.subsidiaries .fixed_area').eq(index).addClass('on');
        //         $('.subsidiaries .category_title').removeClass('on');
        //         $('.subsidiaries .fixed_area').eq(index).prevAll('.subsidiaries .category_title').addClass('on');
        //     }
        //     // 컨텐츠 영역

        //     if( contentTop > 0 || footerTop < 1000 ){
        //         $('.subsidiaries .content_box').addClass('stop');
        //         $('.subsidiaries .category_title').removeClass('on');
        //         $('.subsidiaries .fixed_area').removeClass('on');
        //         $('.subsidiaries .count_area').removeClass('on');
        //     }
        //     //푸터랑 겹칠때 
        // });

        var agent = navigator.userAgent.toLowerCase();
    if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
        // ie일 경우
    }else{
        // ie가 아닐 경우
    }


        // 연혁
        
        var nowIndex = 0;
        $('.history_text_box').each(function (index) {
            var imgArea = $(this).offset().top;
            var viewImg = $(".text_box").find(".img_area")

            if(scrollTop > imgArea-contentHeight/1.5){
                viewImg.addClass("on")
            }

            var imgTop = $(this).offset().top - $(window).scrollTop() - 250;    //이미지 탑 위치
            var contentTop = $('.content_area').offset().top - $(window).scrollTop() - 475; //이미지 컨텐츠 시작영역
            var footerTop = $('.footer').offset().top - $(window).scrollTop() - 130;
            var width = $(window).width();

            if( contentTop > 0 ){
                $('.history_area .content_box').removeClass('stop');
                $('.history_area .content_box').removeClass('on');
            }

            if( imgTop < 0 && contentTop < 0 ){
                nowIndex = index;
                $('.history_area .content_box').removeClass('stop');
            }
            
            $('.history_area .category_title.on').prevAll().hide();
            $('.history_area .category_title.on').prev().show();
            $('.history_area .category_title.on').nextAll().hide();
            $('.history_area .category_title.on').next().show();
            $('.history_area .category_title.on').next().next().show();
            $('.history_area .category_title.on').next().next().next().show();
            $('.history_area .category_title.on').next().next().next().next().show();
            $('.history_area .category_title.on').next().next().next().next().next().show();

            if (width < 767 ) {
                var activeTxt = $(".history_area .category_title.on a span").text();
                $(".history_area .moblie_title_area span").text(activeTxt);
                $('.history_area .category_title.on').nextAll().hide();
                $('.history_area .category_title.on').next().show();
                $('.history_area .category_title.on').next().next().show();
                $('.history_area .category_title.on').next().next().next().show();
            }

            if( contentTop > 0 || footerTop < 600 ){
                $('.history_area .content_box').removeClass('on');
                if(width > 767 ) {
                    $('.content_box').addClass('stop');
                }
            }
        });

        $('.history_area .content_box').addClass("on");
        $('.history_area .category_title').removeClass('on');
        $('.history_area .category_title').eq(nowIndex).addClass('on');
    });

    $(window).trigger('scroll');


    var width = $(window).width();
    if (width < 767 ) {
        $(".history .moblie_title_area").click(function(){
            $(this).toggleClass("on");
            $(".category_list").slideToggle();
        });

        $(".category_title a").click(function(){
            var yearText = $(this).find("span").text();
            $(".moblie_title_area span").text(yearText);
            $(".category_list").slideUp();
            $(".moblie_title_area").toggleClass("on");
        })
    }
    
    //공통 인터랙션
    function motion_scroll(){
        $(window).on('scroll',function(){
            var scT = $(this).scrollTop();
            var winH = $(this).height();
            
            $('.scroll_motion').each(function(){
                var motion_top = $(this).offset().top;
                if(scT > motion_top-winH/1.5){
                    $(this).addClass('on');
                }
            });
        }).scroll();
    }
    motion_scroll()
});