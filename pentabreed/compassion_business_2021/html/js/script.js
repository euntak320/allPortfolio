$(function () {

    swing();

    $(".content-total a").click(function (e) {
        e.preventDefault();
        $(".layer-frame").fadeIn();
        $("html, body").css({
            "overflow": "hidden"
        })
    });

    $(".layer-frame button").click(function () {
        $(this).closest(".layer-frame").fadeOut();
        $("html, body").css({
            "overflow": "visible"
        })
    });

    $(window).scroll(function () {
        var $sections = $('.content > div');
        var $siteLogo = $('.header h1');
        var targetTop = $(window).scrollTop() + parseInt($siteLogo.css('top')) + $siteLogo.height();
        var $swiperArea = $(".content-happen");

        $sections.each(function (index) {
            var condition = $(this).offset().top;

            if (condition <= targetTop) {
                current = index;
            }
        });

        switch (current) {
            case 1:
            case 3:
                $siteLogo.find('a').addClass('white');
                break;
            default:
                $siteLogo.find('a').removeClass('white');
                break;
        }
    });

    $(".content-happen_right_content").each(function (index, element) {
        var $this = $(this);
        $this.addClass("instance-" + index);
        var swiper = new Swiper(".instance-" + index, {
            slidesPerView: 3,
            spaceBetween : 40,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    });


    // 해당 버튼 클릭시 텍스트 변경이 되어야됨
    // 첫번째 영역 도착시 상단 버튼 부분 없어져야됨
    // 마지막 영역 도착시 하단 버튼 부분 없어져야됨
    // 클릭시 각 length 값 찾아서 넣어서 값에 적용 (1 * 710)

    var textareaMargin = 307; // 텍스트쪽 트렌지션값
    var contentMargin = 810; //  swiper쪽 트렌지션값 

    var clickCount = 0;

    $(".slidebtn.down").click(function () {
        var $upBtn = $('.slidebtn.up');

        clickCount ++;
        
        $upBtn.addClass('on');
        $upBtn.find('.txt').removeClass('on');
        $(this).find('.txt').removeClass('on');

        if( clickCount == 1 ){
            $(this).find('.txt').removeClass('on');
            $(this).find('.txt').eq(1).addClass('on');

            $upBtn.find('.txt').eq(0).addClass('on');
        }else if( clickCount == 2 ){
            $(this).hide();
            $upBtn.find('.txt').eq(1).addClass('on');
        }

        $('.content-happen_txtarea').css({
            'transform': "translateY(" + (-textareaMargin*clickCount) + "px)"
        });

        $('.content-happen_right_content').css({
            'transform': "translateY(" + (-contentMargin*clickCount) + "px)"
        });
    });

    $(".slidebtn.up").click(function () {
        var $downBtn = $('.slidebtn.down');

        clickCount --;

        $downBtn.show();
        $downBtn.find('.txt').removeClass('on');
        $(this).find('.txt').removeClass('on');

        if( clickCount == 0 ){
            $(this).removeClass('on');
            $downBtn.find('.txt').eq(0).addClass('on');
        }else if( clickCount == 1 ){
            
            $(this).find('.txt').removeClass('on');
            $(this).find('.txt').eq(0).addClass('on');

            $downBtn.find('.txt').eq(0).addClass('on');
        }

        $('.content-happen_txtarea').css({
            'transform': "translateY(" + (-textareaMargin*clickCount) + "px)"
        });

        $('.content-happen_right_content').css({
            'transform': "translateY(" + (-contentMargin*clickCount) + "px)"
        });
    });

    var ado = new Audio("http://121.254.179.42:2106/audio/amusoni_audio.mp3");

    $(".content-video .video-btn").click(function () {
        $(this).fadeOut();
        var finalVideo = $("#video");
        finalVideo.attr("src", "http://121.254.179.42:2106/video/2020_YearEnd_final.mp4")
        finalVideo.get(0).play();
        audioPause();
    });

    $(".content-sponsor .video-btn").click(function () {
        $(this).fadeOut();
        var miriamVideo = $("#video2");
        miriamVideo.attr("src", "http://121.254.179.42:2106/video/2020_Dear_miriam.mp4")
        miriamVideo.get(0).play();
        audioPause();
    });


    $("video").on("ended", function () {
        audioPlay();
    });

});

// 오디오
var ado = new Audio("http://121.254.179.42:2106/audio/amusoni_audio.mp3");
ado.loop = true;

function audioPlay() {
    ado.play();
    $(".btn-sound-circle .play").hide();
    $(".btn-sound-circle .pause").show();
    $(".btn-sound").addClass("on");
}

function audioPause() {
    ado.pause();
    $(".btn-sound-circle .pause").hide();
    $(".btn-sound-circle .play").show();
    $(".btn-sound").removeClass("on");
}


function swing() {
    $(".content-main_arrow img").animate({
        "top": "10px"
    }, 1500, null);
    $(".content-main_arrow img").animate({
        "top": "-10px"
    }, 1500, swing);
}