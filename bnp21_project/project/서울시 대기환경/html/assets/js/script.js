$(document).ready(function() {

// 2019-06-03 추가
  $(".close_btn").click(function(){
    $(this).removeClass("on")
    $(".left_menu").removeClass("on");
    $(".slide_nav").removeClass("on");
  });
// 2019-06-03 추가

  $(".header_area .m_menu").click(function() {
    $(".slide_nav").toggleClass("on");
    $(".left_menu").toggleClass("on");
    $(".left_menu .close_btn").toggleClass("on");
    return false;
  });

  $(".slide_nav .sub_menu").click(function() {
    $(".hidden_menu_area").toggleClass("on");
  });

  $("header .spot_icon").click(function() {
    $(".position_area").toggleClass("on");
  });

  $(".blue_box.look").click(function() {
    $(".layer_area").toggleClass("on");
  });

  $(".x_btn").click(function() {
    $(".position_area, .layer_area").removeClass("on");
  });

  $(".x_btn").click(function() {
    $(".sms_area").hide();
  });

  $(".tab_area > .tab_txt").click(function() {
    $(".tab_txt").removeClass("on");
    $(this).addClass("on")
    $(".tab_show_area").removeClass("on");
    $(".tab_show_area").eq($(this).index()).addClass("on");
  });

});
