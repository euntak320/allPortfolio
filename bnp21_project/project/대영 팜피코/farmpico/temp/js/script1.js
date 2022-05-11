$(document).ready(function(){
	var mobileFlag = /Mobile|iP(hone|od)|Windows (CE|Phone)|Minimo|Opera M(obi|ini)|BlackBerry|Nokia/;
	var mobileFlagType = "E";

	if (navigator.userAgent.match(mobileFlag)) {
		mobileFlagType = "E";
    } else if (navigator.userAgent.match(/Android/) || navigator.userAgent.match(/iPad/)) {
    	mobileFlagType = "T";
    	/*$("header").addClass("tablet");
    	$(".pc-only").css("display","none");*/
    }  else {
    	mobileFlagType = "E";
    }

	/* 硫붿씤 */
	var motion_time = -1.3;
	var main_motion_2 = new TimelineLite();
	var main_motion_3 = new TimelineLite();
	var main_motion_4 = new TimelineLite();

	$(window).on("resize.width" , function(){
		if( $(window).width() < 821 ){
			main_motion_2.pause(5);
			main_motion_3.pause(5);
			main_motion_4.pause(5);
		}
	});

	function isMobileDevice() {
		return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
	};

	if( isMobileDevice() == false ){
		$(".fullpage").fullpage({
			onLeave : function(index, nextIndex , direction){
				$(".banner-nav a").removeClass("on");
				$(".banner-nav a").eq(nextIndex-1).addClass("on");

				if( nextIndex != 1){
					$("header").addClass("down");
				}else{
					$("header").removeClass("down");
				}

				if( $(window).width() > 820 ){

					if(index == 2){
						main_motion_2.timeScale(3);
						main_motion_2.reverse();
					}else if(index == 3){
						main_motion_3.timeScale(2);
						main_motion_3.reverse();
					}else if(index == 4 && nextIndex != 5){
						main_motion_4.timeScale(2);
						main_motion_4.reverse();
					}

					if(nextIndex == 2){
						main_motion_2.timeScale(1);
							main_motion_2.play( motion_time );
					}else if(nextIndex == 3){
							main_motion_3.timeScale(1);
							main_motion_3.play( motion_time );
					}else if(nextIndex == 4 && index != 5){
						main_motion_4.timeScale(1);
							main_motion_4.play( -2 );
					}
				}else{
					main_motion_2.pause(5);
					main_motion_3.pause(5);
					main_motion_4.pause(5);
				}
			}
		});
	}else{
		$("body").addClass("mobile");
	}




	var main_banner = $(".main-banner-area").slick({
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		speed: 800,
		autoplaySpeed : 6000,
		slidesToShow: 1
	});

	$(".banner-nav a").on("click" , function(){
		$.fn.fullpage.moveTo( $(this).index()+1 );
		return false;
	});

});
