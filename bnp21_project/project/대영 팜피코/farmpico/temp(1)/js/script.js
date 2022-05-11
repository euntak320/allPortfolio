jQuery(document).ready(function(){

  $('selector').css('width', $(window).width());
    $('selector').css('height', $(window).height());
    $(window).resize(function() {
        $('selector').css('width', $(window).width());
        $('selector').css('height', $(window).height());
    }); 

  $(window).scroll(function(){
		if($(window).scrollTop() > 0){
			$('.header').stop().animate({top:-85},{duration:300,easing:'easeOutCubic'});
		}
		else if($(window).scrollTop() == 0){
			$('.header').stop().animate({top:0},{duration:400,easing:'easeOutCubic'});
		}
	});

  window.onload = function () {
      $(".visual-area > .box").each(function () {
          // 개별적으로 Wheel 이벤트 적용
          $(this).on("mousewheel DOMMouseScroll", function (e) {
              e.preventDefault();
              var delta = 0;
              if (!event) event = window.event;
              if (event.wheelDelta) {
                  delta = event.wheelDelta / 150;
                  if (window.opera) delta = -delta;
              } else if (event.detail) delta = -event.detail / 3;
              var moveTop = null;
              // 마우스휠을 위에서 아래로
              if (delta < 0) {
                  if ($(this).next() != undefined) {
                      moveTop = $(this).next().offset().top;
                  }
              // 마우스휠을 아래에서 위로
              } else {
                  if ($(this).prev() != undefined) {
                      moveTop = $(this).prev().offset().top;
                  }
              }
              // 화면 이동 0.8초(800)
              $("html,body").stop().animate({
                  scrollTop: moveTop + 'px'
              }, {
                  duration: 800, complete: function () {
                  }
              });
          });
      });
    }

  var quick = $('.nav-area > a');
      var contents =$('section > div');
      quick.click(function(event){
        event.preventDefault();
        var tg = $(this);
        var i = tg.index();
        var section = contents.eq(i);
        //console.log(section);
        var tt = section.offset().top;
        //offset() 이동.offset 어디에서 떨어지는지
        $('html,body').stop().animate({scrollTop:tt});
      });

      $(window).scroll(function(){
      // $(window).on('scroll',function(){});
        var sct=$(window).scrollTop();
        contents.each(function(){
          var tg = $(this);
          var i = tg.index();
          if(tg.offset().top-80 <= sct){
            quick.removeClass('on');
            quick.eq(i).addClass('on');
          }
        });
      });

      //퀵메뉴 움직이는 부분
      $(window).on('scroll',function(){
        var scv = $(window).scrollTop(); // scv = scrolls
        if(scv<100){scv=100}; // 465 = quickbar's height
        $('.nav').stop().animate({top: scv+180+'px'},3500); //defaultTop = 176px
      });
      $('.nav').css({top: '200px'},2000);

      var mySwipe = $('#mySwipe').Swipe({
     		auto: 3000,
     		continuous: true,
     		callback: function(index, element){
          $("#visual1 #visual .touch_bullet li").removeClass("on");
          $("#visual1 #visual .touch_bullet li").eq(index).addClass("on");
     		}
     	}).data('Swipe');

      $("#visual1 #visual .touch_bullet li a").on("click" , function(){

        var num = $(this).parent().index();

        mySwipe.slide(num);


        return false;
      });

      var slide01moving = false;
      	var slide01timer = setInterval(function(){
      		$('.nextBtn').trigger('click');
      	},1000);

      	$('.nextBtn').click(function(){
      		if(!slide01moving){
      			slide01moving = true;
      			$('ul.productList li:first').clone().appendTo('ul.productList');
      			$('ul.productList').stop().animate({left:'-280px'},1000,function(){
      				slide01moving = false;
      				$('ul.productList li:first').remove();
      				$('ul.productList').css({left:'+=280px'});
      			});
      		};
      	});

      	$('.prevBtn').click(function(){
      		if(!slide01moving){
      			slide01moving = true;
      			$('ul.productList li:last').clone().prependTo('ul.productList');
      			$('ul.productList').css({left:'-=280px'});
      			$('ul.productList').stop().animate({left:'+=280px'},1000,function(){
      				slide01moving = false;
      				$('ul.productList li:last').remove();
      			});
      		}
      	});

      	$('.frame, .nextBtn, .prevBtn').hover(
      		function(){
      			clearInterval(slide01timer);
      		},
      		function(){
      			slide01timer = setInterval(function(){
      				$('.nextBtn').trigger('click');
      			},3000);
      		}
      	);



});
