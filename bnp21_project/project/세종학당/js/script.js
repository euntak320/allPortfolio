// JavaScript Document
$(function(){
	$('.top_nav button').click(function(){
		var navPos = $(this).offset();

		if($(this).hasClass('nav_btn1')){
			$('.nav_depth1').toggle().css({
				'top': navPos.top+33+'px',
				'left': navPos.left+'px'
			});
			$('.nav_depth1').siblings('ul').hide();
		}else if($(this).hasClass('nav_btn2')){
			$('.nav_depth2').toggle().css({
				'top': navPos.top+33+'px',
				'left': navPos.left+'px'
			});
			$('.nav_depth2').siblings('ul').hide();
		}else if($(this).hasClass('nav_btn3')){
			$('.nav_depth3').toggle().css({
				'top': navPos.top+33+'px',
				'left': navPos.left+'px'
			});
			$('.nav_depth3').siblings('ul').hide();
		}
	});
});