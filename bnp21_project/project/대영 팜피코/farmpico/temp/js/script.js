jQuery(document).ready(function(){

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
