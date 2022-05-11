$(window).on('load',function(){

    $('main').show();
	$('.top_banner').show();
/*
	if (getCookie("topClose") == "Y") {
	    $('.top_banner').hide();
		$('#wrap').removeClass('topbanner_show');
	}
	else {
	    $('.top_banner').show();
		$('#wrap').addClass('topbanner_show');
	}
*/
	if (getCookie("popClose") == "Y") {
		$('.popup_ui').hide();
	}
	else {
		$('.popup_ui').show();
	}
});

$(function () {

	//인트로안보이게
    var urlhome = window.location.search;
    if(urlhome == '?home'){
        $('#intro_frame').hide();
        $('.intro_skip_btn').hide();
		$('#wrap').removeClass('intro_play');
    }
	
	//쿠키 - 탑배너 안보이게    
	setTimeout(function(){
		if (getCookie("topClose") == "Y") {
			$('.top_banner').addClass('hide');
			$('#wrap').removeClass('topbanner_show');
		}
		else {
			$('.top_banner').removeClass('hide');
			$('#wrap').addClass('topbanner_show');
		}
	},10);
    
    //gnb 나왔을때 fullpage 안돌아가게
    $('.menu_button').click(function(){
        if ($(".menu_button").hasClass("on")){
            $('body').on('scroll touchmove mousewheel', function(event) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            });
        }else{
            $('body').off('scroll touchmove mousewheel');
        }
    });
        
	$('main').hide();
    $('.top_banner').hide();
	
    //intro
    setTimeout(function(){
        $('#wrap').removeClass('intro_play');
        $('#intro_frame').fadeOut();
        $('.intro_skip_btn').fadeOut();
    },22500);

    $('.intro_skip_btn').on('click',function(){
        $('#intro_frame').fadeOut();
        $('#wrap').removeClass('intro_play');
        $('.intro_skip_btn').fadeOut();
		$('main').show();
		$('.top_banner').show();
		/*
		if (getCookie("topClose") == "Y") {
			$('.top_banner').hide();
			$('#wrap').removeClass('topbanner_show');
		}
		else {
			$('.top_banner').show();
		}*/
    });
    
    //top_banner 
    $('.top_banner .btn_box .close_btn, .top_banner .btn_box.mo_ver button').on("click",function(){
        $('.top_banner').addClass('hide');
        $('#wrap').removeClass('topbanner_show');
    });

    //main_count
    var countSlide = new Swiper('.main_count .w1360',{
		observeParents:true,
		observeSlideChildren:true,
		observer:true,
        simulateTouch:false,
        allowTouchMove:false,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        loop:false,
        autoplay: {
            delay: 3500,
        },
        on: {
            slideChangeTransitionEnd: function () {
                var liN = $('.main_count .swiper-slide-active').index();
                if(liN == 0){
                    $('.counter_02').text("0");
                }else if(liN == 1){
                    $('.counter_01').text("0");
                    counter_02();
                    countSlide.autoplay.stop();
                }
            },
            slideChangeTransitionStart: function () {
                var liN = $('.main_count .swiper-slide-active').index();
                if(liN == 0){
                    $('.main_count').removeClass('second');
                }else if(liN == 1){
                    $('.main_count').addClass('second');
                }
            }
        },
    });
    countSlide.autoplay.stop();

    //fullpage
    var mainFull = new fullpage('.content_area',{
        licenseKey : 'B07DB1B7-FEED4A68-A93B908F-5EE34BAA',
        //dropEffect
        dropEffect: true, 
        dropEffectKey: '0F4A2847-C6B2471D-B0DF88B3-9516AB48',
        dropEffectOptions: {
            speed: 2000,
            color: '#00382f',
            zIndex: 101
        },
        scrollOverflow: true,
        afterLoad: function(prev,now,direc){
            if(now.index==1){
                $('.main_count .swiper-slide').eq(0).addClass('on');
                countSlide.slideTo(0);
                countSlide.autoplay.start();
                counter_01();
            }else{
                $('.main_count .swiper-slide').eq(0).removeClass('on');
                countSlide.slideTo(0);
                countSlide.autoplay.stop();
                $('.main_count .right_text p.count strong').text('0');
            }
        },
        onLeave:function(prev,now,direc){
            if(now.index && direc=="up"){
                $('.main_world').addClass('no_trans');
            }else{
                $('.main_world').removeClass('no_trans');
            }
            if(now.index==1){
                $('.main_count').removeClass('second');
            }
            if(now.index==0){
                $(".floating_banner").removeClass("on");
                $(".floating_banner .top_btn").removeClass("on")
            }else{
                $(".floating_banner").addClass("on");
                $(".floating_banner .top_btn").addClass("on")
            }

            //헤더
            if(now.index>1){
                $('header .header_area').addClass('on');
            }else{
                $('header .header_area').removeClass('on');
            }
            if(now.index==4 || now.index==5){
                if($(window).width()<768){
                    $('header .header_area').removeClass('on');
                }else{
                    $('header .header_area').addClass('on');
                }
            }

            // 헤더 위치
            if(now.index==0){
                $('#wrap').addClass('fullpage_01').removeClass('fullpage_02').removeClass('fullpage_03');
            }else if(now.index==1){
                $('#wrap').addClass('fullpage_02').removeClass('fullpage_01').removeClass('fullpage_03');
                $('.top_banner').removeClass('top_nodelay');
            }else if(now.index==2){
                $('#wrap').addClass('fullpage_03').removeClass('fullpage_01').removeClass('fullpage_02');
                $('.top_banner').removeClass('top_nodelay');
            }else{
                $('#wrap').removeClass('fullpage_02').removeClass('fullpage_01').removeClass('fullpage_03');
            }

            console.log(now.index);

            //탑배너 
            if(now.index!=0){
                $('.top_banner').addClass('off');
                $('#wrap').removeClass('transdelay');
            }else{
                $('.top_banner').removeClass('off');
                $('#wrap').addClass('transdelay');
            }
        },
    });

    $('.main_visual .menu_list ul li span').on('click',function(){
        $(this).parent().addClass('on').siblings().removeClass('on');
    });
    $('.main_visual .menu_list .mo_close_btn').on('click',function(){
        $(this).parents('li').removeClass('on');
    });
    $(window).on('resize',function(){
        if($(this).width()>766){
            $('.main_visual .menu_list li').removeClass('on')
        }
    }).resize();

    //top_btn
    $('.floating_banner .top_btn').on('click',function(){
        fullpage_api.moveTo(1);
        $('#wrap').removeClass('transdelay');
        $('.top_banner').addClass('top_nodelay');
    })

    //video
    var video = document.getElementById('visual_video');
    var video_timer = 0;
    setTimeout(function(){
        video_timer = video.duration
    },100)
    var video_time = 0;
    var timeline = setInterval(function(){
        video_time += 1;
        if(video_time<video_timer*10){
            var per = video.currentTime/video_timer;
            $('.main_visual .play_btn .bar i').css('width',(Math.min(1,per)*100)+'%');
        }else{
            video_time = 0;
        }
    },1);
    
    // var stop_btn = $('.main_visual .play_btn span.stop');
    // var paly_btn = $('.main_visual .play_btn span.play');
    // stop_btn.on('click',function(){
    //     video.pause();
    //     paly_btn.hide();
    //     stop_btn.show();
    //     clearInterval(timeline);
    // });
    // paly_btn.on('click',function(){
    //     video.play();
    //     paly_btn.show();
    //     stop_btn.hide();
    //     timeline = setInterval(function(){
    //         time += 10;
    //         if(time<6000){
    //             $('.main_visual .play_btn .bar i').css('width',((time/timer)*100)+'%');
    //         }else{
    //             time = 0;
    //         }
    //     },10);
    // });


    // 카운트
    function counter_01(){
        var count_timer_01 = 200;
        var count_01 = 0;
        var count_01_num = $('.counter_01').data('counter');
        var count_01_time = (10/count_01_num)*count_timer_01;
        var counter = setInterval(count_1_up,count_01_time);
        function count_1_up(){
            count_01++;
            if(count_01>count_01_num){
                clearInterval(counter);
            }else{
                $('.counter_01').text(count_01);
            }
        }
    }
    function counter_02(){
        var count_timer_02 = 100;
        var count_02 = 0;
        var count_02_num = $('.counter_02').data('counter');
        var count_02_time = (10/count_02_num)*count_timer_02;
        var counter = setInterval(count_1_up,count_02_time);
        function count_1_up(){
            count_02++;
            if(count_02>count_02_num){
                clearInterval(counter);
            }else{
                $('.counter_02').text(count_02);
            }
        }
    }

    //news
    var newsSlide = new Swiper('.news_list',{
		observeParents:true,
		observeSlideChildren:true,
		observer:true,
        spaceBetween:50,
        loop:true,
        speed:700,
        loopAdditionalSlides:8,
        loopedSlides:8,
        autoplay: {
            delay: 2500,
            disableOnInteraction:false,
        },
        navigation: {
            nextEl: '.news_list .arrow.next',
            prevEl: '.news_list .arrow.prev',
        },
    });


});