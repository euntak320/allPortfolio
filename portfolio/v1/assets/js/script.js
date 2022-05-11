$(function(){

    // fullpage script
    fullParallax(); 

    // 애니메이션
    swing();

    // 모바일 버튼
    $(".toggle").click(function(){
        $(this).toggleClass("active");
        $("nav ul").toggleClass("active-menu");
    });

    $("#maintainTab button").click(function(){
        $("#maintainTab button").removeClass("on");
        $("#maintainTab button").eq($(this).index()).addClass("on");
        $("#maintainTab .view").removeClass("on");
        $("#maintainTab .view").eq($(this).index()).addClass("on");
    });

    // 유지보수 스와이퍼
    maintain();

    
});

function fullParallax() {
    $(".fullpage").fullpage({
        anchors: ['main', 'about', 'maintain', 'portfolio', 'contact-form'],
        onLeave : function(index, nextIndex , direction){
            $("nav .menu a").removeClass("active");
            $("nav .menu a").eq(nextIndex-1).addClass("active");
        }
    });
    if($(window).width() < 1200){
        $(".fullpage").fullpage({
            autoScrolling:false,
            scrollHorizontally: false
        });
    }
}

function swing(){
    $('.arrow').animate({'bottom':'50px'},1500).animate({'bottom':'20px'},1500, swing);
} 

function maintain(){
    var swiper = new Swiper('.s-b-container', {
        slidesPerView: "auto",
        loop: true,
        speed : 1500,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            500: {
              slidesPerView: 1
            },
        }

    });
}

