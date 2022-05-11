$(document).ready(function() {

  // 새로고침 확인
  $(window).resize(function() {
    if ($(window).width() > 1200) {
      location.reload();
    }
  });

  if ($(window).width() > 1200) {
    $(".fullpage").fullpage({
      anchors: ["home", "first_area", "second_area", "third_area", "forth_area", "fifth_area"],
    });
  }
  $(".m_menu").click(function() {
    $(".m_menu_list").toggle();
  });

  $(".m_menu_list > span").click(function() {
    $(".m_menu_list").hide();
  });

  $(".tab_area .tab_txt").on("click", function() {

    $(".tab_area .tab_txt").removeClass("on");
    $(this).addClass("on");
    $(".content_display").removeClass("on");
    $(".content_display").eq($(this).index()).addClass("on");
    $(".content_display > #slide_area").slick("setPosition");
  });
  
 

  $(".content_display > #slide_area").slick({
    autoplay: false,
    dots: true,
    speed: 1000,
    infinite: true,
    autoplaySpeed: 1000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
  });

  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 100) {
      $("header").addClass("down");
    } else {
      $("header").removeClass("down");
    }
  });
  
  if ($(window).width() < 700) {
    $(".num_3 .m_slide_area").slick({
      autoplay: false,
      dots: true,
      speed: 1000,
      infinite: true,
      autoplaySpeed: 1000,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: false
    });
  }
  $(".num_5 .customer_area").slick({
    autoplay: false,
    dots: true,
    speed: 1000,
    infinite: true,
    autoplaySpeed: 1000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false
  });

  $(".num_6 .news_box").click(function(){
    $(".layer_frame").show();
    // 마우스 휠 정지 모드
    $.fn.fullpage.setAllowScrolling(false);
    
  });
  $(".layer_frame .close_btn").click(function(){
    $(".layer_frame").hide();
    $.fn.fullpage.setAllowScrolling(true);
  });

  if($(window).width() < 1200){
    $(".fullpage").fullpage({
      autoScrolling:false,
		  scrollHorizontally: false
    });

    $(".num_6 .news_box").click(function(){
      $(".layer_frame").show();
      $("body").css("overflow","hidden");
    });

    $(".layer_frame .close_btn").click(function(){
      $(".layer_frame").hide();
      $("body").css("overflow","visible");
    });
  }

});
