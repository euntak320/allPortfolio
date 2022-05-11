
$(function () {
    //컴플라이언스 동적효과
    if($('.esg').hasClass('compliance')){
        $(window).on('scroll',function(){
            var scT = $(this).scrollTop();
            var winH = $(window).height()/2;
            var graph_top = $('.graph_box').offset().top;
            if(scT > graph_top - winH){
                $('.graph_box').addClass('on');
            }
        }).scroll();
    }

    //안전보건 경영방침
    if($('.esg').hasClass('safety')){
        $(window).on('scroll',function(){
            var scT = $(this).scrollTop();
            var winH = $(window).height();
            var contT = $('.safety_con01').offset().top;
            var cont2T = $('.safety_con02').offset().top;
            //숫자나오기
            if(scT > contT-winH/20 && scT < cont2T-winH/1.5){
                $('.safety_con01').addClass('on');
            }else{
                $('.safety_con01').removeClass('on');
            }
            //title 변경
            $('.safety_con01 dl').each(function(){
                var safety_top = $(this).offset().top;
                if(scT > safety_top - winH/2){
                    $(this).addClass('on').siblings().removeClass('on');
                }else{
                    $(this).removeClass('on');
                }
            });
        });
    }

    //aos 들어가는 페이지
    if($('.esg').hasClass('environment')){
        $(window).on('scroll',function(){
            var scT = $(this).scrollTop();
            var winH = $(this).height();

            $('.scroll_motion_step').each(function(){
                var motion_top = $(this).offset().top;
                var list = $(this).find('li');
                if(scT > motion_top-winH/1.5){
                    list.eq(0).addClass('on');
                    setTimeout(function(){
                        list.eq(1).addClass('on');
                    },450);
                    setTimeout(function(){
                        list.eq(2).addClass('on');
                    },900);
                }
            });
        }).scroll();
    }

    if($('.esg').hasClass('environment') || $('.esg').hasClass('compliance') || $('.esg').hasClass('safety') || $('.esg').hasClass('composition')){
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
    };


});