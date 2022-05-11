$(function(){
    gnbMenu();
    
    $("#topBanner button").click(function(){
        $("#topBanner").addClass("off");
    });

    $("#header .meunList > ul").on({
        mouseenter: function(){
            $(this).parents("#header").addClass("on");
        },
        mouseleave: function(){
            $(this).parents("#header").removeClass("on");
        }
    });
    

    // 메뉴 정보
    $("#header .loginArea .login").click(function(e){
        e.preventDefault();
        $("#header .infoArea").addClass("on");
    });
    $("#header .infoArea button").click(function(){
        $("#header .infoArea").removeClass("on");
    });

    $(".topBtn .sitemap").click(function(){
        $("#sitemap").toggle();
    });

});

function gnbMenu() {
    var menu = $('.meunList > ul > li');
	
	menu.on({
		mouseover:function(){
			var tg = $(this); //마우스 오버된 1뎁스
			menu.removeClass('on');
			tg.addClass('on'); //tg = 타겟은 호버된 1뎁스
		},
		mouseout:function(){
			var tg = $(this); //마우스 오버된 1뎁스
			menu.removeClass('on');
		}
    });
}