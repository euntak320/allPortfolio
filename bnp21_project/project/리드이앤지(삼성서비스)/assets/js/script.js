$(function(){

     var winSize = $(window).width();

     $(window).scroll(function(){
          var topScroll = 0;
          var scroll = $(this).scrollTop();
          if(scroll > 85){
               $(".header").addClass("active");
          }
          else{
               $(".header").removeClass("active")
          }

          if(scroll > 700){
               $(".topbtn").addClass("on");
          }
          else{
               $(".topbtn").removeClass("on");
          }
          topScroll = scroll;
     });

     $(".header .btmArea ul li a, #mainVisual .listBox a").click(function(){
          $('html, body').animate({
               scrollTop: $( $.attr(this, 'href') ).offset().top
               }, 500);
               return false;
     });
     
     $("#buinessTab .tabTxt div").click(function(){
          $("#buinessTab .tabTxt div").removeClass("on")
          $(this).addClass("on");
          $("#buinessTab .view").removeClass("on");
          $("#buinessTab .view").eq($(this).index()).addClass("on");
     });

     $("#btm .tabTxt div").click(function(){
          $("#btm .tabTxt div").removeClass("on")
          $(this).addClass("on");
          $("#btm .view").removeClass("on");
          $("#btm .view").eq($(this).index()).addClass("on");
     });

     var swiper = new Swiper('.swiper-container',{
          slidesPerView: 6,
          navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
          },
          breakpoints: {
          640: {
               slidesPerView: "auto",
               spaceBetween: 10,
          },
          768: {
               slidesPerView: "auto",
               spaceBetween: 10,
          },
          1024: {
               slidesPerView: "auto",
               spaceBetween: 10,
          },
     }
     });

     var slide = $(".tabTxt > .swiper-slide"),
     viewArea = $("#top .resultArea > .view");

     slide.eq(0).addClass("on");
     viewArea.not(":eq(0)").hide();

     slide.click(function(){
          var i = $(this).index();
          slide.removeClass("on");
          $(this).addClass("on");
          viewArea.hide();
          viewArea.eq(i).show();
     });

     var subList = $(".listBox .box");
     subList.not(":eq(3)").click(function(){
          var i = $(this).index();
          slide.removeClass("on");
          slide.eq(i).addClass("on");
          viewArea.hide();
          viewArea.eq(i).show();
     })

     if(winSize < 1024){
          var allHeight = $("html").innerHeight();
          var headerHeight  = $(".header").innerHeight();
          var contentHeight = $(".container").innerHeight();
          var mainVisualHeight = allHeight - (headerHeight + contentHeight);

          $("#mainVisual").css({
               "height": mainVisualHeight
          });
     }

     $(".filter .rightArea a").click(function(){
          $(this).parents(".filter").removeClass("on");
          $(this).parents(".filter").next().addClass("on");
          console.log(par);
     });
     $(".filter button").click(function(){
          $(this).parents(".filter").removeClass("on");
          $(this).parents(".filter").prev().addClass("on");
     });

     $("#layer_1").click(function(){
          $("#layer1").show();
          $("body").css({
               "overflow":"hidden"
          })
     });

     $("#layer_2").click(function(){
          $("#layer2").show();
          $("body").css({
               "overflow":"hidden"
          })
     });

     $("#layer_3").click(function(){
          $("#layer3").show();
          $("body").css({
               "overflow":"hidden"
          })
     });

     $("#layer_4").click(function(){
          $("#layer4").show();
          $("body").css({
               "overflow":"hidden"
          })
     });
});

function closeLayer(){
     $(".layerFrame").hide();
     $("body").css({
          "overflow":"visible"
     });
};