/* Slide */
$(function() {
  var offset = $("#sidebar").offset();
  var topPadding = -115;
     $(window).scroll(function() {
       if ($(window).scrollTop() > offset.top) {
          $("#sidebar").stop().animate({
              marginTop: 55
          });
        } else {
          $("#sidebar").stop().animate({
             marginTop: 0
         });
       };
    });
});


/* Search */
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






/* page top */
$( window ).scroll(function() {
	var scrollTop = $(window).scrollTop();

	if( scrollTop < 20 ){
		if(!$("#pagetop").hasClass("hide")){			
			$("#pagetop").addClass("hide");
		}
	} else {
		if($("#pagetop").hasClass("hide")){			
			$("#pagetop").removeClass("hide");
		}
	}
});


/* Global Navigation Bar */
function gnbFnc(){
	var topnav = $('.topnav');
	var topnavs = topnav.find('li.topbtn');
	var topnavsA = topnavs.find('a');
	var topnavsUl = topnavs.find('ul');

	topnavs.bind('mouseenter',function(){
		topnavsA.removeClass('hover')
		topnavs.removeClass('on');
		$(this).addClass('on');
		topnavsUl.stop().animate({"height": 340 + "px","padding-top": 0 + "px"},300);
	})

	topnav.bind('mouseleave focusout',function(e){
		topnavsUl.stop().animate({"height": 0 + "px","padding-top": 0 + "px"},300)
		topnavs.removeClass('on');
	})

	topnavsA.bind('focusin',function(){
		topnavs.removeClass('on');
		topnavsA.removeClass('hover')
		$(this).addClass('hover').closest('.topbtn').addClass('on')
		topnavsUl.stop().css({"height": 340 + "px","padding-top": 0 + "px"},300);
	})
}

function gnb(dep1, dep2, dep3){

	var $header = $("#header_wrap");
	var $gnb = $(".topnav");
	var $gnb_1dep = $(".topnav > li");
	var $gnb_2dep = $(".topnav > li > ul > li");

	$header.css({'height':'96px'});


	if (dep1) {

		$gnb_1dep.eq(dep1-1).addClass('active').attr('title','현재 활성화 되어있는 1차 메뉴입니다.');


		if (dep2) {
			$gnb_1dep.eq(dep1-1).find('ul li').eq(dep2-1).find('a').addClass('active2').attr('title','현재 활성화되어 있는 2차 메뉴입니다.');
		}
	}
	/* //gnb 리셋 */
	
	function lnb(dep1, dep2){

		$('body').append("<div id='temp_lnb'></div>");
		var temp_lnb = $('#temp_lnb');

		var $lnb = $('.lnb'),
			$lnbBox = $('.leftmenu'),
			$lnb_1dep = $('.lnb > li'),
			$lnb_2dep = $('.lnb li .lnb_dep2 > li'),
			$onLnb_1dep = $lnb_1dep.eq(dep1-1),
			$onLnb_2dep = $lnb_1dep.eq(dep1-1).find('.lnb_dep2'),
			$lnb_1depBtn = $lnb_1dep.find('>a'),
			dep1Cnt = dep1,
			dep2Cnt = dep2

			//$lnb_1dep.find('img').clone().appendTo(temp_lnb)
			$lnb_1dep.find('img').each(function(){
				$(this).clone().appendTo(temp_lnb);
				$(this).clone().attr('src',on).appendTo(temp_lnb);
			})
			temp_lnb.remove();

			$('.lnb_dep2').hide();
		function initLnb(){
			//$('.lnb_dep2').css('display','none');
			//$('.lnb_dep2').stop().slideUp();
			$('.lnb_dep2').hide();

			$lnb_1dep.removeClass('on').find('> a > img').each(off)
			$lnb_1dep.eq(dep1-1).addClass('on').find('> a > img').each(on);

			if(dep2){
				//$onLnb_2dep.css('display','block');
				//$onLnb_2dep.slideDown();
				$onLnb_2dep.show();
				$onLnb_2dep.find('li').eq(dep2-1).addClass('on').find('> a > img').each(on);
			}
		}

		initLnb();

		$lnb_1dep.bind('click', function(e){
			//if( $(this).index() != dep1 - 1){
				e.stopPropagation();
				//$lnb_1dep.find('> a > img').each(off);
				$(this).siblings().find('> a > img').each(off);
				$(this).find('> a > img').each(on); // 2013-08-27
				$(this).addClass('active');
				//$(this).closest('li').siblings().find('ul').stop().slideUp();
				$(this).closest('li').siblings().find('ul').stop().hide();
				//$(this).find('ul').slideDown();
				$(this).find('ul').show();
			//}
		});

		$(window).bind('keyup',function(e){if(e.keyCode == 16){isTab = false}})

		$lnb_1dep.find('>a').bind('keydown',function(e){
			if($(this).parent().index() != 0){
				if(e.keyCode == 9 && e.shiftKey){
					e.preventDefault();
					$lnb_1dep.eq($(this).closest('li').index() - 1).find(' > a').trigger('focus').next('ul.lnb_dep2').find('li:last-child > a').focus();
				}
			}
		})

		$lnb_1dep.bind('focusin', function(e){
			//if( $(this).index() != dep1 - 1){
				e.stopPropagation();
				$lnb_1dep.find('> a > img').each(off);
				$(this).find('> a > img').each(on); // 2013-08-27
				$(this).addClass('active');
				$(this).closest('li').siblings().find('ul').stop().hide();
				$(this).find('ul').stop().show();
			//}
		});


		$lnb_2dep.bind('mouseenter focusin', function(e){
			if( !$(this).hasClass('on')){
				$onLnb_2dep.find('li').removeClass('on');
				$(this).find('> a > img').each(on); // 2013-08-27
				$(this).addClass('on');
			}
		});

		$lnb_2dep.bind('mouseleave focusout', function(e){
			//if( !$(this).hasClass('on')){
				$(this).removeClass('on');
				$(this).find('> a > img').each(off);
			//}
		});

		$lnbBox.bind('mouseleave',function(e){
			initLnb();
		})


		$('ul.location li:first-child a').bind('focusin',function(){
			$('.lnb_dep2').hide();
			$lnb_1dep.find('> a > img').each(off);
			$lnb_1dep.eq(dep1-1).addClass('on').find('> a > img').each(on);

			if(dep2){
				$onLnb_2dep.show();
				$onLnb_2dep.find('li').eq(dep2-1).addClass('on').find('> a > img').each(on);
			}
		})

		$lnb.find('li').eq(0).find('>a').bind('keydown',function(e){
			if(e.keyCode == 9 && e.shiftKey){
				$('.lnb_dep2').hide();
				$lnb_1dep.find('> a > img').each(off);
				$lnb_1dep.eq(dep1-1).addClass('on').find('> a > img').each(on);
				if(dep2){
					$onLnb_2dep.show();
					$onLnb_2dep.find('li').eq(dep2-1).addClass('on').find('> a > img').each(on);
				}
			}
		})

		
		/*
		$lnb.find('li:last > a').bind('blur',function(e){
			$('.lnb_dep2').stop().hide();
			$lnb_1dep.eq(dep1-1).addClass('on').find('> a > img').each(on);
			if(dep2){
				$onLnb_2dep.stop().show();
				$onLnb_2dep.find('li').eq(dep2-1).addClass('on').find('> a > img').each(on);
			}
		})
		*/

	}

	lnb(dep2, dep3);

}

/* on _ off javascript */
function on(){	this.src = this.src.replace("_off","_on"); }
function off(){	this.src = this.src.replace("_on","_off"); }


/* skip navigation */
function skip_navigating(){
	$("#skip_nav").attr("tabindex",0).focus();
	$("a[href^='#']").click(function(evt){
	  var anchortarget = $(this).attr("href");
	  if (anchortarget != "#")
	  {
			$(anchortarget).attr("tabindex", 0).focus();
			$(anchortarget).removeAttr("tabindex");
	  }
	 
	 });
	/*
	if (window.location.hash) {
		$(window.location.hash).attr("tabindex", -1).focus();
	}
	*/
	$("#skip_nav a").focus(function(){
		$("#skip_nav a").removeClass("on");
		$(this).addClass("on");
	 })
	 $("#skip_nav a").blur(function(){
		 $("#skip_nav a").removeClass("on");
	 })
}

/* 이미지 on off */
function over_img(img,n){

	if (n == "on")
	{
		var hover = "_on";
	}else{
		var hover = "_off";
	}
	if (img.parent().hasClass("home") == false && img.parent().hasClass("on") == false  && img.hasClass("on") == false){
		menuimg = img.find("img");
		if (menuimg.attr("src").indexOf(".jpg") > 0){
			menuimg_type = ".jpg";
		}else if (menuimg.attr("src").indexOf(".gif") > 0){
			menuimg_type = ".gif";
		}else if (menuimg.attr("src").indexOf(".png") > 0){
			menuimg_type = ".png";
		}

		menuimg_src = menuimg.attr("src").split("_off")[0];
		menuimg_src = menuimg_src.split("_on")[0];
		menuimg.attr("src",menuimg_src+hover+menuimg_type);
	}
}


function selectBoxFnc(){
	var selSet = $('.select_set');
	var selOkBtn = selSet.find('a.select_ok');
	var selWrap = $('.select_wrap');

	selWrap.find('li.select_cell').eq(0).css({'display':'block'});

	selOkBtn.bind('click',function(){
		var thisOption =  selSet.find('select[name=input_select]').attr('value');
		selWrap.find('li.select_cell').hide();
		selWrap.find('li.cell_' + thisOption).show();
	})
}


$(function(){
	skip_navigating();
	//slideGallery(); // page call

	selectBoxFnc();
	gnbFnc();
	//tabbox();
});

