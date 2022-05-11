$(document).ready(function() {
	$(".fullpage").fullpage({
		onLeave : function(index, nextIndex, direction) {
			$(".banner_nav a").removeClass("on");
			$(".banner_nav a").eq(nextIndex - 1).addClass("on");

			if (nextIndex >= 1 && nextIndex <= 3) {
				$(".scroll_icon").show();
				$(".scroll_icon_up").hide();
			} else {
				$(".scroll_icon").hide();
				$(".scroll_icon_up").hide();
			}
		}
	});

	$("header .mobile_menu").on("click", function() {
		$("header nav.mobile_on").toggleClass("on");
		return false;
	});

	$(".m_menu_list").click(function() {
		var idx = $(".m_menu_list").index(this);

		if (idx > 0 && idx < 4) {
			$(".m_menu_list > .menu_sub").eq(idx).toggle();
			$(".m_menu_list > .slide_frame").eq(idx).toggleClass("on");
		}
	});

	$(".over_frame").on("touchstart click mousemove", function() {
		$(this).find(".icon").remove();
	});

	$(".banner_nav a").on("click", function() {
		$.fn.fullpage.moveTo($(this).index() + 1);
		return false;
	});

	$("header").on("mouseenter", function() {
		$(this).addClass("on");
	});

	$("header").on("mouseleave", function() {
		$(this).removeClass("on");
	});
});
