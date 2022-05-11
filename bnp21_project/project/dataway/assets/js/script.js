$(document).ready(function() {

  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 100) {
      $("header").addClass("down");
    } else {
      $("header").removeClass("down");
    }
  });

  if ($(window).width() > 1367) {
    $(".fullpage").fullpage({
      anchors: ["home", "first_area", "second_area", "third_area", "forth_area"],
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
  });

  $(".circle").click(function(){
    var layerID = $(this).attr('class').split(" ");
    $("#ourvalue_" + layerID[1]).show();
    $("body").css("overflow","hidden");
  });

  $(".num_5 .rect").click(function(){
    var layerID = $(this).attr('class').split(" ");
    $("#servie_" + layerID[1]).show();
    $("body").css("overflow","hidden");
  });

  // 
  // $(".num_4 .rect.one").click(function(){
  //   $("#servie_1").show();
  //   $("body").css("overflow","hidden");
  // });
  // $(".num_4 .rect.two").click(function(){
  //   $("#servie_2").show();
  //   $("body").css("overflow","hidden");
  // });
  // $(".num_4 .rect.three").click(function(){
  //   $("#servie_3").show();
  //   $("body").css("overflow","hidden");
  // });

  $(".close_btn").click(function(){
    $(".layer_frame").hide();
    $("body").css("overflow","visible");
  });

});
