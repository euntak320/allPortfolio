$(function () {

    setTimeout(function(){
        $('.content__hashtag-show').fadeOut();
        $('html,body').css({
            "overflow":"visible"
        });
    }, 3300)


    var isVisible = false;

    $(window).on('scroll', function () {
        if (checkVisible($('.content__keyword')) && !isVisible) {
            $('.content__keyword-sliding').paroller();
            isVisible = true;
        }

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


// 스크롤시 해당 div 확인
function checkVisible(elm, eval) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}