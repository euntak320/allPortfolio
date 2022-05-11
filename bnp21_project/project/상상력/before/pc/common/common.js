function moviepop(type, url){
	if (type=='show')
	{
		$('.shadow').fadeIn();
		$('.movie-pop').find('iframe').attr('src',url);
		$('.movie-pop').fadeIn();
	}
	else
	{
		$('.shadow').fadeOut();
		$('.movie-pop').fadeOut();
		$('.movie-pop').find('iframe').attr('src','');
	}
}


$(document).ready(function(){
	$('.navigation .depth1').each(function(){
		$(this).bind({
			mouseenter : function(){
				$(this).click(function(){
					if (!$(this).hasClass('selected'))
					{
						//$('.navigation .depth1').find('ul').hide()
						$(this).find('ul').show();
					}
				})
				$(this).find('.depth2').click(function(){
					$('.navigation .depth2').find('div').hide();
					$(this).find('div').show();
				})
			}
		})
	})
	$('.navigation').mouseleave(function(){
		$('.navigation').find('ul').removeAttr('style');
		$('.navigation').find('div').removeAttr('style');
	})
})