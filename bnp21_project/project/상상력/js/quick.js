jQuery(document).ready(function(){
	var quick = $('.nav > li');
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
						quick.removeClass('active');
						quick.eq(i).addClass('active');
					}
				});
			});

			//퀵메뉴 움직이는 부분
			$(window).on('scroll',function(){
				var scv = $(window).scrollTop(); // scv = scrolls
				if(scv<100){scv=100}; // 465 = quickbar's height
				$('.nav').stop().animate({top: scv+180+'px'},1000); //defaultTop = 176px
			});
			$('.nav').css({top: '200px'},2000);
});
