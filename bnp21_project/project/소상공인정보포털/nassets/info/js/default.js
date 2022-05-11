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
		topnavsUl.stop().animate({"height": 200 + "px","padding-top": 0 + "px"},300);
	})

	topnav.bind('mouseleave focusout',function(e){
		topnavsUl.stop().animate({"height": 0 + "px","padding-top": 0 + "px"},300)
		topnavs.removeClass('on');
	})

	topnavsA.bind('focusin',function(){
		topnavs.removeClass('on');
		topnavsA.removeClass('hover')
		$(this).addClass('hover').closest('.topbtn').addClass('on')
		topnavsUl.stop().css({"height": 200 + "px","padding-top": 0 + "px"},300);
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



// Owl Carousel Settings
$(".portfolio-gallery").owlCarousel({
    items: 3,
});

// Magnific Popup jQuery Lightbox Gallery Settings
$('.gallery-link').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    },
    image: {
        titleSrc: 'title'
    }
});



/* Photo Gallery List */
$(function(){
	$(document).bind('masonryconf', function(){
		var $container = $('#product-board');
		
		var cw = 180;
		cwr = $container.width();
		if(cwr >= 768){
			cw = cwr/4;
		}
		if(cwr < 767){
			cw = cwr/3;
		}
		if(cwr < 500){
			cw = cwr/2;
		}
		
		$container.imagesLoaded( function(){
		  $container.masonry({
				itemSelector: '.product',
				isAnimated: true,
				columnWidth: cw,
				animationOptions: {
					duration: 300
				}
		  });
		});
	}).trigger('masonryconf');
	
});

$(window).resize(function(){
	// Reflow masonry columns, not really needed in normal life, but web devs will appreciate
	var $container = $('#product-board');
	var cw = 180;
	cwr = $container.width();
	if(cwr >= 768){
		cw = cwr/4;
	}
	if(cwr < 767){
		cw = cwr/3;
	}
	if(cwr < 520){
		cw = cwr/2;
	}
    $container.masonry( 'option', { columnWidth: cw });
});


$(window).load(function(){
	//Reflow masonry when fonts are loaded
	$('#product-board').masonry();
});


$(document).ready(function(){
	//Product board filtering 
	$(document).on('click', '.board-filters a', function(e){
		$filter = $(this);

		$('.board-filters a').removeClass('filter-hidden');
		
		if($filter.data('filter') == 'all'){
			//show all
			$('.product').show();
			$filter.addClass('filter-hidden');			
		}
		else{
			if(!$filter.hasClass('filter-hidden')){
				//hide
				$('.'+$filter.data('filter')).show();
				$('.product').not('.'+$filter.data('filter')).not('.static').hide();
				$filter.addClass('filter-hidden');
			}
			else{
				//show
				$('.product').not('.'+$filter.data('filter')).show();
				$filter.removeClass('filter-hidden');
			}
		}
		
		// reflow masonry		
		$('#product-board').masonry();		
		e.preventDefault();
	});	
}); //end doc ready



