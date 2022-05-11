Splitting();

$(window).on('load',function(){
    
    $(window).on('scroll',function(){
        $('.split_effect, .slide__up_mo').each(function(){
            if( $(this).offset().top < $(window).scrollTop() + ($(window).height()/1.5) ){
                $(this).addClass('on');
            }else{
                $(this).removeClass('on');
            }
        });
    });
    

    //content__listbox 이미지슬라이드
    var itemSlide = new Swiper('.content__studio .content__listbox-wrap',{
        speed:1000,
        spaceBetween:50,
        loop:true,
        loopAdditionalSlides:2,
        loopPreventsSlide:true,
        simulateTouch:false,
        autoplay:{
            delay:5000,
            disableOnInteraction:false,
        },
        on:{
            slideChangeTransitionStart:function(){
                $('.content__listbox--subtitle').animate({opacity:0,top:'30px'});
                $('.content__listbox--desc').delay(200).animate({opacity:0,top:'30px'});
            },
            slideChange:function(){
                setTimeout(function(){
                    var title = $('.swiper-slide-active .content__listbox-box--text').html();
                    $('.content__listbox-box--text-box').html(title);
                    $('.content__listbox--subtitle').animate({opacity:1,top:'0'});
                    $('.content__listbox--desc').delay(200).animate({opacity:1,top:'0'});
                },600);
            },
        },
        breakpoints:{
            767:{
                speed:2000,
            },
        },
    });
    
    // //로드 후 텍스트 넣어주기
    // var title = $('.swiper-slide-active .content__listbox-box--text').html();
    // $('.content__listbox-box--text-box').html(title);
    // $('.content__listbox--subtitle').animate({opacity:1,top:'0'});
    // $('.content__listbox--desc').delay(200).animate({opacity:1,top:'0'});




    //리스트 안에 pager 
    $('.content__listbox-box').each(function(){
        var pager = $(this).attr('aria-label');
        var pagernum = pager.split('/');
        $(this).find('.content__listbox-navigation').prepend('<span><b>'+pagernum[0]+'</b> /'+pagernum[1]+'</span>');
    });

    //다음슬라이드로 넘기기
    $('.content__listbox-navigation img').on('click',function(){
        itemSlide.slideNext();
    });


    //content__channel mousehover 
    $('.content__channel-listbox-box').each(function(){
        var img = $(this).data('cursor');
        $('.mousehover__img').append('<img src='+img+'>');
    });

    $('.content__channel-listbox-box').mouseenter(function(){
        var liN = $(this).index();
        $(this).addClass('hover');
        $(this).siblings().addClass('off');
        $('.mousehover__img img').eq(liN).stop(true,true).fadeIn(200);
    });

    $('.content__channel-listbox-box').mouseleave(function(){
        $(this).removeClass('hover');
        $(this).siblings().removeClass('off');
        $('.mousehover__img img').stop(true,true).fadeOut(200);
    });

    $('.content__channel-listbox-box').mousemove(function(e){
        $('.mousehover__img img').each(function(){
            var img_w = $(this).width()/2;    
            var img_h = $(this).height()/2;    
            $(this).css("top", e.pageY-img_h);
            $(this).css("left", e.pageX-img_w);
        });
    });


    //content_mama
    $('.content__mama_videobox').on('click',function(){
        $('.content__mama_full-video').fadeIn(200);
        $('body').addClass('hidden');
    });

    $('.content__mama_full-video_box__closebtn').on('click',function(){
        $('.content__mama_full-video').fadeOut(function(){
            $(".content__mama_full-video iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        });
        $('body').removeClass('hidden');

    });
    

});



