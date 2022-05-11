$(document).ready(function(){

  $(window).on("scroll" , function(){
		if( $(window).scrollTop() > 100 ){
			$("header").addClass("down");
		}else{
			$("header").removeClass("down");
		}
	});

  $(".moblie_btn").click(function(){
    $(".m_moblie").toggle();
    return false;
  });

  $("a.click_1").click(function(){
    $(".sub_menu.one").show();
    $(".sub_menu.one").css("z-index","1");
    $(".sub_menu.two").css("z-index","0");
  });

  $("a.click_2").click(function(){
    $(".sub_menu.two").show();
    $(".sub_menu.two").css("z-index","1");
    $(".sub_menu.one").css("z-index","0");
  });

  $(".main_menu").on("mouseleave" ,function(){
    $(".sub_menu").hide();
  });

  $(".tab_list ul li").click(function(){
    var idx= $(".tab_list ul li").index(this);
    $(".tab_list ul li").removeClass("on");
    $(".tab_list ul li").eq(idx).addClass("on");

  });
});
