(function($) {
	$.fn.inputFocus = function(event) {
		$(this).each(function(){
			if($(this).val() !== '') {				
				$(this).prev().hide();
			}
		});
		
		$(this).on('focus focusout', function(event) {
			switch (event.type) {
				case 'focus' :					
					$(this).parent().addClass('focus');
				break;
				case 'focusout' :
					if($(this).val() === '') {
						$(this).prev().show();
					}
					$(this).parent().removeClass('focus');
				break;
			}
			
			if($(this).parent().hasClass('placeholder')) {
				switch (event.type) {
					case 'focus' :
						$(this).prev().hide();
					break;
					case 'focusout' :
						$(this).parent().removeClass('focus');
					break;
				}
			}
		});
	};	

	$.fn.tabFocus = function() {
		$(this).click(function(event) {
			var skipTo="#"+this.href.split('#')[1];
			$(skipTo).attr('tabindex', -1).on('blur focusout', function() {
				$(this).removeAttr('tabindex');
			}).focus();
			return false;
		});
	};		
	
})(jQuery);

$(document).ready(function() {		

	//검색옵션 메뉴	
	$('.search-option-menu > li > a,.more-btn > a,.sns-btn > a').on('click',function(){
		var view = $(this).next();
		if(view.is(':visible')){
			view.hide();
			if($(this).find('>span').attr('class') != 'nav-tabs'){
				$(this).find('>span').attr('class','ico-set up');
			}			
		} else {
			$('.more-layer').hide();
			$('.sns-btn > div.urlcp-alrt').hide();
			view.show();
			if($(this).find('>span').attr('class') != 'nav-tabs'){
				$('.search-option-menu a').find('>span').attr('class','ico-set up');
				$(this).find('>span').attr('class','ico-set down');
			} else if($(this).find('>span').attr('class') == 'nav-tabs'){
				$('.search-option-menu a').find('>span').attr('class','ico-set up');
			}		
		}
	});

	//검색옵션 버튼
	$('.search-option a').on('click',function(){
		var view = $('.search-option-inner');
		if(view.is(':visible')){
			$('.more-layer').hide();
			view.hide();
			$(this).find('>span').removeClass('down');
		} else {
			$('.more-layer').hide();
			view.show();
			$('.search-option-menu a').find('>span').attr('class','ico-set up');
			$(this).find('>span').attr('class','down');
		}
	});
});


