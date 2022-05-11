$(function () {

    setTimeout(function(){
        $('.content__hashtag-show').fadeOut();
        $('html,body').css({
            "overflow":"visible"
        });
    }, 3300)


    $(window).on('scroll', function () {

        $(".up__slide").each(function (index) {
            if ($(this).offset().top < ($(window).scrollTop() + $(window).height())) {
                TweenMax.to($(this), 0.5, {
                    opacity: 1,
                    "top": 0
                });
            }
        });
        windowPos = $(window).scrollTop();
        imgInteraction();
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.top-btn').fadeIn();
        } else {
            $('.top-btn').fadeOut();
        }
    });
    
    $(".top-btn").click(function() {
        $('html, body').animate({scrollTop : 0 }, 400);
        return false;
    });



    // 상단 텍스트 일시정지
    $('.content__hashtag-list--item').mouseenter(function () {
        $(this).addClass("item-border");
        $(this).css({
            "animation-play-state": "paused"
        })
    });

    $('.content__hashtag-list--item').mouseleave(function () {
        $(this).removeClass("item-border");
        $(this).css({
            "animation-play-state": "running"
        })
    });

    // 하단 비전너리 바
    var swiperImages = new Swiper(".keyword-swiper-images", {
        spaceBetween: 0,
        slidesPerView: 1,
        touchRatio: 0,
        watchSlidesProgress: true,
        loop: true,
        breakpoints :{
            1025 : {
                touchRatio: 0,
                spaceBetween: 30,
                slidesPerView: 1.5,
            },
        },
    });

    var swiperInfotext = new Swiper(".keyword-swiper-text", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        thumbs: {
            swiper: swiperImages,
        },
    });


    var brwoserWidth = $(window).width();
    

    if(brwoserWidth <= 1024) {
        $('.content__hashtag-list--item').click(function () {
            $(this).removeClass("item-border");
            $(this).css({
                "animation-play-state": "running"
            })
        });

        $(".content__awardlist-image").click(function(){
            $(this).toggleClass("mobile-view");
        });
    }

    if(brwoserWidth <= 767) { 
        var swiper = new Swiper('.content__awardlist', {
            slidesPerView: 1.2,
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
            }, 
        });
    }

});

// 이미지 인터렉션
function imgInteraction() {
    var $helloImg = $('.content__program').find('.content__program-poster');
    $helloImg.each(function () {
        var $this = $(this),
            thisH = $this.find('img').outerHeight(),
            thisT = $this.offset().top;

        if (windowPos >= thisT - $(window).height() + thisH / 3 && !$this.hasClass('img-view')) {
            $this.addClass('img-view');
        }
    });
}
