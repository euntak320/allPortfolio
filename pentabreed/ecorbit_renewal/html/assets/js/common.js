
$(window).on('load',function(){
    if($('.popup_ui').length>0){
        var popup = new Swiper('.popup_ui .swiper-container',{
            observer:true,
            observeParents:true,
            observeSlideChildren:true,
            navigation: {
                nextEl: '.popup_ui .swiper-button-next',
                prevEl: '.popup_ui .swiper-button-prev',
            },
            autoHeight : true,
            centeredSlides: true
        });
    }
});

$(function(){

    $(".btn_pop_close,.mobile_close_btn").click(function(){
        $(".popup_ui ").fadeOut();
    });

    // header
    var this_scroll = 0;
    $(window).scroll(function(e) {
        scrollTop = $(window).scrollTop();
        if (scrollTop > this_scroll+5 && scrollTop>5) {
            $(".header").addClass("up")
        } else {
            if(scrollTop - this_scroll < 0){
                $(".header").removeClass("up")
            }
        }
        this_scroll = $(window).scrollTop()
    });

     /* meun btn */
    $(".menu_button").click(function(){
        $(this).toggleClass("on");
        $('body').toggleClass('hidden');
        $(".menu_wrap").toggleClass("on");

        if ($(".menu_wrap").hasClass("on")){
            $("header").addClass("fixed")
            $(".menu_button").addClass("white")
        }
        else {
            $(".menu_button").removeClass("white")
            $("header").removeClass("fixed")
        }
    });

    $('select').css('color', 'gray');
    $('select').change(function () {
        var current = $('select').val();
        if (current != 'null') {
            $('select').css('color', 'black');
        } else {
            $('select').css('color', 'gray');
        }
    });

    // 모바일 헤더
    $(window).on('resize',function(){
        var winW = $(this).width();
        if(winW<768){
            $('.menu_wrap').addClass('mo_ver');
            $('.menu_wrap ul').css('height','0');
            $('.menu_wrap .list_area').removeClass('active');
        }else{
            $('.menu_wrap').removeClass('mo_ver');
            $('.menu_wrap ul').css('height','auto');
            $('.menu_wrap .list_area').removeClass('active');
        }
    }).resize();

    $(document).on('click','.menu_wrap.mo_ver .title',function(){
        if(!$(this).parent('.list_area').hasClass('active')){
            $(this).parent('.list_area').addClass('active').siblings().removeClass('active');
            var litotal = $(this).next().find('li').length;
            if($('.menu_wrap.mo_ver').hasClass('eng')){
                //영문일때
                var ulH = (litotal+(litotal%2))*$(this).next().find('li').innerHeight();
            }else{  //국문일때
                var ulH = (parseInt(litotal/2)+(litotal%2))*$(this).next().find('li').innerHeight()+50;
            }
            $(this).next().css('height',ulH).parent('.list_area').siblings().find('ul').css('height',0)
        }else{
            $(this).parent('.list_area').removeClass('active');
            $(this).next().css('height',0)
        }


    });

    $(window).scroll(function(){
        var scrollValue = $(document).scrollTop();
        var keyHeight = $(".keyvisual_area").outerHeight()-90;
        var contentHeight = $(".keyvisual_area").outerHeight()-90;
        if($(window).width()>767){
            var contentHeight2 = $(".keyvisual_area").outerHeight() + 120;
        }else{
            var contentHeight2 = $(".keyvisual_area").outerHeight() + 50;
        }

        if (scrollValue === 0) {
            $(".keyvisual_area").removeClass("fixed")
        }
        else {
            $(".keyvisual_area").addClass("fixed")
        }

        if (scrollValue >= contentHeight) {
            $(".header").addClass("small_height");
        }
        else {
            $(".header").removeClass("small_height");
        }

        if (scrollValue >= contentHeight2) {
            $(".main_tab_area").addClass("fixed");
        }
        else {
            $(".main_tab_area").removeClass("fixed");
        }

        if (scrollValue >= keyHeight) {
            $(".header_area").addClass("on")
        }
        else {
            $(".header_area").removeClass("on")
        }

        if (scrollValue > 50) {
            $(".floating_banner").addClass("on");
            $(".floating_banner .top_btn").addClass("on")
        }
        else {
            $(".floating_banner").removeClass("on");
            $(".floating_banner .top_btn").removeClass("on")
        }
    }).scroll();



    // GNB
    $(".list_area ul > li").mouseenter(function(){
        var winW = $(window).width();
        if(winW>768){
            $(this).each(function(){
                $(this).parents(".list_area").find("span").addClass("on")
            });
        }
    });

    $(".list_area ul > li").mouseleave(function(){
        $(this).parents(".list_area").find("span").removeClass("on")
    });


    // quick btn
    $(".floating_banner .banner_btn").click(function(){
        $(this).toggleClass("on");
        if(!$(this).hasClass("on")){
            $(".hidden_btn a").eq(0).removeClass('on');
            setTimeout(function(){
                $(".hidden_btn a").eq(1).removeClass('on');
                setTimeout(function(){
                    $(".hidden_btn").removeClass("on");
                },400)
            },100);
        }else{
            $(".hidden_btn").addClass("on");
            $(".hidden_btn a").eq(1).addClass('on');
            setTimeout(function(){
                $(".hidden_btn a").eq(0).addClass('on');
            },10);
        }

        if($(this).parents(".floating_banner").hasClass("on")) {
            $(".hidden_btn").css("button","165px");
        }
        else {
            $(".hidden_btn").css("button","84px");
        }
    })

    $(".floating_banner .top_btn").click(function(){
        $(".header").removeClass("up")
        $('html, body').animate({scrollTop:0},500);
    })



    /* select_custom */
    $('.select_custom p').on('click',function(){
        $(this).toggleClass('on');
        $(this).next().slideToggle();
    });
    $(document).click(function(e){
        if(!$(e.target).is('.select_custom p')){
            $('.select_custom p').removeClass('on');
            $('.select_custom p').next().slideUp('on');
        }
    });

    // subtab
    setTimeout(subTabMenuListVisible, 10);

    function subTabMenuListVisible() {
        var menuHeight = 0;
        if (!$('.current').hasClass('has_no_treeview')) {
            if ($(window).width() > 767) {
                menuHeight = $('.current').find(".sub_meun_list").outerHeight() + 70;
            } else {
                menuHeight = $('.current').find(".sub_meun_list").outerHeight() + 50;
            }
        }else {
            if ($(window).width() > 767) {
                menuHeight = 70;
            } else {
                menuHeight = 50;
            }
        }

        $('.current').parents(".meun_list_wrap").css({
            height:menuHeight+"px",
            transition: "height 0.5s"
        });
        $('.current').parents(".sub_tab_wrap").css({
            height:menuHeight+"px",
            transition: "height 0.5s"
        });
        $('.current').parents(".main_tab_area").css({
            height:menuHeight+"px",
            transition: "height 0.5s"
        });

        $(".sub_tab > li").removeClass('on');
        $(".current").addClass("on");
    }

    $(".sub_tab > li").mouseenter(function () {
        var menuHeight = 0;

        if (!$(this).hasClass('has_no_treeview')) {
            if ($(window).width() > 767) {
                menuHeight = $(this).find(".sub_meun_list").outerHeight() + 70;
            } else {
                menuHeight = $(this).find(".sub_meun_list").outerHeight() + 50;
            }
        } else {
            if ($(window).width() > 767) {
                menuHeight = 70;
            } else {
                menuHeight = 50;
            }
        }

        $(this).siblings().removeClass("on");
        $(this).addClass("on");

        $(this).parents(".meun_list_wrap").css({
            height:menuHeight+"px",
            transition: "height 0.5s"
        });
        $(this).parents(".sub_tab_wrap").css({
            height:menuHeight+"px",
            transition: "height 0.5s"
        });
        $(this).parents(".main_tab_area").css({
            height:menuHeight+"px",
            transition: "height 0.5s"
        });
    });

    $(".sub_tab_wrap").mouseleave(function () {
        console.log("sub_tab_wrap leave");
        subTabMenuListVisible();
    });

    /* var tab_height ="";
    $(window).resize(function(){
        if($(this).width()>767){
            tab_height = "70px";
            $(".meun_list_wrap").css({height:tab_height});
            $(".sub_tab_wrap").css({height:tab_height});
            $(".main_tab_area").css({height:tab_height});
        }else{
            tab_height = "50px";
            $(".meun_list_wrap").css({height:tab_height});
            $(".sub_tab_wrap").css({height:tab_height});
            $(".main_tab_area").css({height:tab_height});
        }
    }).resize(); */

    /*
    $(".sub_tab > li").mouseleave(function(){
        $(this).find(".sub_meun_list").removeClass("on");
         $(this).parents(".meun_list_wrap").css({
            height: tab_height,
            transition: "height 0.5s"
        });
        $(this).parents(".sub_tab_wrap").css({
            height: tab_height,
            transition: "height 0.5s"
        });
        $(this).parents(".main_tab_area").css({
            height: tab_height,
            transition: "height 0.5s"
        });
    });
    */

    $(".sub_tab > li").click(function(){
        $(this).siblings().removeClass("current");
        $(this).addClass("current");
    });

    $(".menu_search_bar button").click(function(){
        $(".search_input").toggleClass("on");
    });

});