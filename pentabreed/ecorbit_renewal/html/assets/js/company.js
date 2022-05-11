
$(function () {

    if($('.company').length > 0){
        var liN = $('.main_tab_area ul.sub_tab > li.on').index();
        var water_scrollL = 0;
        for(i=0;i<liN;i++){
            water_scrollL += $('.main_tab_area ul.sub_tab > li').eq(i).width();
        }
        $('.main_tab_area .scroll_wrap').scrollLeft(water_scrollL-100);
    };

     /* 워터 > 환경소재 */

    $(window).resize(function(){
        if($(this).width()<767){
            $('.water_title_area .sub_tab_area ul').css('display','none'); 
        }else{
            $('.water_title_area .sub_tab_area ul').css('display','flex'); 
        }
    }).resize();
    $('.water_title_area .sub_tab_area li').on('click',function(){
        var liN = $(this).index()+1;
        var liTxt = $(this).find('button').text();
        if($(window).width()<767){
            $(this).parents('ul').slideUp();
            $(this).parents('ul').prev('p').removeClass('on')
        }
        $(this).parents('ul').prev('p').text(liTxt);
        $('.material_con').removeClass('on')
        $('.material_con0'+liN).addClass('on');
        $(this).addClass('on').siblings().removeClass('on');
        $('.material_con.on .scroll_motion').removeClass('on');
        
        if(liN==1){
            $('.material_con01 .hashtag_area li').eq(0).click();
        }else{
            water_slide_01.autoplay.stop();
            water_slide_02.autoplay.stop();
            water_slide_04.autoplay.stop();
        }
    });
    $('.water_title_area .sub_tab_area p').on('click',function(){
        $(this).next('ul').slideToggle();
        $(this).toggleClass('on');
    });

    $(document).on('mouseenter','.material_con01 .hashtag_area li, .water_title_area .sub_tab_area',function(){
        water_slide_01.autoplay.stop();
        water_slide_02.autoplay.stop();
        water_slide_04.autoplay.stop();
    });
    
    $(document).on('mouseleave','.material_con01 .hashtag_area, .water_title_area .sub_tab_area',function(){
        var liN = $('.material_con01.material_con .hashtag_cont > div.on').index();
        switch(liN){
            case 0:
                water_slide_01.autoplay.start();
                break;
            case 1:
                water_slide_02.autoplay.start();
                break;
            case 2: break;
            case 3:
                water_slide_04.autoplay.start();
                break;
        }
    });
    
    
    $(document).on('click','.material_con.on .hashtag_area li',function(){
        var liN = $(this).index();
        var liW = 0;
        for(i=0;i<liN;i++){
            liW += $('.material_con.on .hashtag_area li').eq(i).width();
        }
        $('.hashtag_cont .scroll_motion').removeClass('on');
        $('.material_con .hashtag_area').scrollLeft(liW);
        $(this).addClass('on').siblings().removeClass('on');
        $('.material_con.on .hashtag_cont > div').eq(liN).addClass('on').siblings().removeClass('on');
        motion_scroll();

        if($('.material_con.on').hasClass('material_con01')){
            switch(liN){
                case 0:
                    water_slide_01.autoplay.start();
                    water_slide_02.autoplay.stop();
                    water_slide_04.autoplay.stop();
                    break;
                case 1:
                    water_slide_01.autoplay.stop();
                    water_slide_02.autoplay.start();
                    water_slide_04.autoplay.stop();
                    break;
                case 2: break;
                case 3:
                    water_slide_01.autoplay.stop();
                    water_slide_02.autoplay.stop();
                    water_slide_04.autoplay.start();
                    break;
            }
        }
        
    });
    
    var water_slide_01 = new Swiper('.material_con01 .slide_box.type01 .img_slide', {
        speed : 500,
        slidesPerView: 'auto',
        touchRatio: 0,
        spaceBetween:80,
        loop: true,
        observeParents:true,
        observer:true,
        observeSlideChildren:true,
        autoplay : {  
            delay : 2500, 
            disableOnInteraction : false, 
        },
        pagination: {
            el: ".material_con01 .slide_box.type01 .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            prevEl: '.material_con01 .slide_box.type01 .swiper-prev',
            nextEl: '.material_con01 .slide_box.type01 .swiper-next'
        },
        on:{
            slideChangeTransitionStart: function(){
                $(".material_con01 .slide_box.type01 .txt_slide li").eq(this.realIndex).addClass("visible").siblings().removeClass('visible');
            }
        }
    });

    var water_slide_02 = new Swiper('.material_con01 .slide_box.type02 .img_slide', {
        speed : 500,
        slidesPerView: 'auto',
        touchRatio: 0,
        spaceBetween:80,
        loop: true,
        observeParents:true,
        observer:true,
        observeSlideChildren:true,
        autoplay : {  
            delay : 2500, 
            disableOnInteraction : false, 
        },
        pagination: {
            el: ".material_con01 .slide_box.type02 .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            prevEl: '.material_con01 .slide_box.type02 .swiper-prev',
            nextEl: '.material_con01 .slide_box.type02 .swiper-next'
        },
        on:{
            slideChangeTransitionStart: function(){
                $(".material_con01 .slide_box.type02 .txt_slide li").eq(this.realIndex).addClass("visible").siblings().removeClass('visible');
            }
        }
    });

    var water_slide_04 = new Swiper('.material_con01 .slide_box.type04 .img_slide', {
        speed : 500,
        slidesPerView: 'auto',
        touchRatio: 0,
        spaceBetween:80,
        loop: true,
        observeParents:true,
        observer:true,
        observeSlideChildren:true,
        autoplay : {  
            delay : 2500, 
            disableOnInteraction : false, 
        },
        pagination: {
            el: ".material_con01 .slide_box.type04 .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            prevEl: '.material_con01 .slide_box.type04 .swiper-prev',
            nextEl: '.material_con01 .slide_box.type04 .swiper-next'
        },
        on:{
            slideChangeTransitionStart: function(){
                $(".material_con01 .slide_box.type04 .txt_slide li").eq(this.realIndex).addClass("visible").siblings().removeClass('visible');
            }
        }
    });

    if($('.material_con').length>0){
        water_slide_01.autoplay.start();
        water_slide_02.autoplay.stop();
        water_slide_04.autoplay.stop();
    }

    //에너지 탭
    $(window).resize(function(){
        var energy_liston = $('.energy .scroll_wrap li.on').index();
        var energy_scrollL = 0;
        for(i=0;i<energy_liston;i++){
            energy_scrollL += $('.energy .scroll_wrap li').eq(i).width();
        }
        $('.energy .scroll_wrap').scrollLeft(energy_scrollL-100);
    }).resize();

    $(window).resize(function(){
        if($(this).width()<767){
            $('.energy .sub_tab_area ul').css('display','none'); 
        }else{
            $('.energy .sub_tab_area ul').css('display','flex'); 
        }
    }).resize();

    $('.energy_title_area .sub_tab_area p').on('click',function(){
        $(this).next('ul').slideToggle();
        $(this).toggleClass('on');
    });

    $('.energy .sub_tab_area li').on('click',function(){
        if(!$(this).parents('sub_tab_area').hasClass('type02')){
            var liN = $(this).index();
            var liTxt = $(this).find('button').text();
            if($(window).width()<767){
                $(this).parents('ul').slideUp();
                $(this).parents('ul').prev('p').removeClass('on')
            }
            $(this).parents('ul').prev('p').text(liTxt);
            $(this).addClass('on').siblings().removeClass('on');
            $('.energy .sub_cont > div').eq(liN).addClass('on').siblings().removeClass('on'); 
            //scroll_motion on 없애기(인터랙션초기화)
            $('.energy .sub_cont .scroll_motion').removeClass('on');
            motion_scroll();
        }
    });

    $('.energy .sub_tab_area.type02 li').on('click',function(){
        var liN = $(this).index();
        var liTxt = $(this).find('button').text();
        if($(window).width()<767){
            $(this).parents('ul').slideUp();
            $(this).parents('ul').prev('p').removeClass('on')
        }
        $(this).parents('ul').prev('p').text(liTxt);
        $(this).addClass('on').siblings().removeClass('on');
        $('.energy .sub_cont_type02 > div').eq(liN).addClass('on').siblings().removeClass('on');
        //scroll_motion on 없애기(인터랙션초기화)
        $('.energy .sub_cont_type02 .scroll_motion').removeClass('on');
        motion_scroll();
    });

    function scrollbtn_controll(){
        if($('.energy .main_tab_area .scroll_wrap').scrollLeft()==0){
            $('.energy .main_tab_area span.prev').hide();
        }else{
            $('.energy .main_tab_area span.prev').show();
        }
        var leftmax = $('.energy .main_tab_area ul').width() - $('.energy .main_tab_area .scroll_wrap').width(); 
        if($('.energy .main_tab_area .scroll_wrap').scrollLeft() == leftmax){
            $('.energy .main_tab_area span.next').hide();
        }else{
            $('.energy .main_tab_area span.next').show();
        }
    }
    scrollbtn_controll()

    $('.energy .main_tab_area span.next').on('click',function(){
        var scL = $('.energy .main_tab_area .scroll_wrap').scrollLeft()+100;
        $('.energy .main_tab_area .scroll_wrap').scrollLeft(scL);
        scrollbtn_controll()
    });

    $('.energy .main_tab_area span.prev').on('click',function(){
        var scL = $('.energy .main_tab_area .scroll_wrap').scrollLeft()-100;
        $('.energy .main_tab_area .scroll_wrap').scrollLeft(scL);
        scrollbtn_controll()
    });

    $('.sterilization_hashtag li').on('click',function(){
        var liN = $(this).index();
        var liW = 0;
        for(i=0;i<liN;i++){
            liW += $('.hashtag_area li').eq(i).width();
        }
        $('.hashtag_area').scrollLeft(liW);
        $(this).addClass('on').siblings().removeClass('on');
        $('.sterilization_hash_cont > div').eq(liN).addClass('on').siblings().removeClass('on');
        $('.sterilization_hash_cont .scroll_motion').removeClass('on');
        motion_scroll();
    });



     //그린 > 폐기물 매립사업
    $('.landfill_con02 .hashtag_area li').on('click',function(){
        var liN = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.landfill_con02 .hash_cont ul').eq(liN).addClass('on').siblings().removeClass('on');
        //scroll_motion on 없애기(인터랙션초기화)
        $('.landfill .scroll_motion').removeClass('on');
        motion_scroll();
    });


    //미래사업 탭
    $('.remediation_con01 .hashtag_area li').on('click',function(){
        var liN = $(this).index();
        var liW = 0;
        for(i=0;i<liN;i++){
            liW += $('.hashtag_area li').eq(i).width();
        }
        $('.hashtag_area').scrollLeft(liW);
        $(this).addClass('on').siblings().removeClass('on');
        $('.remediation_con02 > div').eq(liN).addClass('on').siblings().removeClass('on');
        //scroll_motion on 없애기(인터랙션초기화)
        $('.remediation .scroll_motion').removeClass('on');
        motion_scroll();
    });


    /* 미래사업 > 산업용 수처리 */
    var SubSwiper = new Swiper('.water_sub_slider_container', {
        speed : 500,
        slidesPerView: 'auto',
        touchRatio: 0,
        spaceBetween:121,
        loop: true,
        autoHeight : true,
        autoplay : {  
            delay : 2500, 
            disableOnInteraction : false, 
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            prevEl: ' .swiper-prev',
            nextEl: '.swiper-next'
        },
        breakpoints:{
            767:{
                slidesPerView: 1,
                spaceBetween:60,
            }
        },
        on:{
            slideChangeTransitionStart: function(){
                $(".water_main_slider_slide").removeClass("visible");
                $(".water_main_slider_slide").eq(this.realIndex).addClass("visible");
                var colorN=this.realIndex+1;
                $(".industrial_water_slider_background").removeClass("color1 color2 color3 color4 color5 color6 color7 color8").addClass("color"+colorN);
            }
        }
    });

    if($('.company').hasClass('industrial_water')){
        SubSwiper.autoplay.stop();
        $(window).on('scroll',function(){
            var scT = $(this).scrollTop();
            if(scT > $('.industrial_water_slider_header').offset().top-200){
                SubSwiper.autoplay.start();
            }else{
                SubSwiper.autoplay.stop();
            }
        });
    }

    //미래사업 > 도시광산 
    var tablist = new Swiper('.citymining_con02 .tab_cont',{
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 1500,
            disableOnInteraction:false,
        },
        on:{
            slideChangeTransitionStart:function(){
                var liN = $('.citymining_con02 .tab_cont li.swiper-slide-active').index();
                $('.citymining_con02 .list_box .tab.pc_ver li').eq(liN).addClass('on').siblings().removeClass('on');
            }
        }
    });
    if($('.company').hasClass('citymining')){
        tablist.autoplay.stop();
        var scrolling = false;
        $(window).on('scroll',function(){
            var scT = $(this).scrollTop();
            if(scT > $('.citymining_con02').offset().top-300){
                tablist.autoplay.start();
            }else{
                tablist.autoplay.stop();
            }

            if(scT > $('.citymining_con03').offset().top-($(window).height()/2)-100){
                if(!scrolling){
                    cityauto();
                }
                scrolling = true;
            }
        });
    }

    $('.citymining_con02 .sub_tab_area p').on('click',function(){
        $(this).next('ul').slideToggle();
        $(this).toggleClass('on');
    });
    $('.citymining_con02 .sub_tab_area li').on('click',function(){
        var liN = $(this).index();
        var liTxt = $(this).find('button').text();
        if($(window).width()<767){
            $(this).parents('ul').slideUp();
            $(this).parents('ul').prev('p').removeClass('on')
        }
        $(this).parents('ul').prev('p').text(liTxt);
        $('.sub_tab_cont > div').eq(liN).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    });
    

    $('.citymining_con02 .list_box .tab.pc_ver li').on('click',function(){
        var liN = $(this).index();
        tablist.slideTo(liN);
        $(this).addClass('on').siblings().removeClass('on');
    });

    function cityauto(){
        var timer = 0;
        setInterval(function(){
            if(timer>4){
                timer = 0;
            }
            $('.citymining_con03 .graph_box ul li').eq(timer).toggleClass('on');
            timer++;
        },800);
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