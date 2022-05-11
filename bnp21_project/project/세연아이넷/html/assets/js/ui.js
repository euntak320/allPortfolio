$(document).ready(function(){
	responsive();
	$(window).resize(function(){
		responsive();
	});
	function responsive(){
		var winW = $(window).width();
		if (winW < 1025) {
			$("body").addClass("mobile");
		} else {
			$("body").removeClass("mobile");
			$('.gnb').removeClass("open");
		}
	}
});

// tab
$(document).on("click", ".tab_wrap [role='tablist'] [role='tab']", function(e){
	e.preventDefault();
	var target = "#" + $(this).attr("aria-controls");
	$(this).attr("aria-selected", true).removeAttr("tabindex").parent("li").siblings("li").find("[role='tab']").attr({"aria-selected": "false", "tabindex": "-1"});
	$(target).attr("aria-hidden", false).show().siblings("[role='tabpanel']").attr("aria-hidden", true).hide();
});
$(document).on("keydown", ".tab_wrap [role='tablist'] [role='tab']:not(button)", function(e){
	if (e.keyCode == 32){
		e.preventDefault();
		var target = "#" + $(this).attr("aria-controls");
		$(this).attr("aria-selected", true).removeAttr("tabindex").parent("li").siblings("li").find("[role='tab']").attr({"aria-selected": "false", "tabindex": "-1"});
		$(target).attr("aria-hidden", false).show().siblings("[role='tabpanel']").attr("aria-hidden", true).hide();
	}
});
$(document).on("keydown", ".tab_wrap [role='tablist']:not([aria-orientation='vertical']) [role='tab']", function(e){
	if (e.keyCode == 39){
		e.preventDefault();
		$(this).parent("li").next("li").find("[role='tab']").focus();
	}
	if (e.keyCode == 37){
		e.preventDefault();
		$(this).parent("li").prev("li").find("[role='tab']").focus();
	}
});
$(document).on("keydown", ".tab_wrap [role='tablist']:not([aria-orientation='vertical']) > li:first-child [role='tab']", function(e){
	if (e.keyCode == 37){
		e.preventDefault();
		$(this).closest("[role='tablist']").find("li:last").find("[role='tab']").focus();
	}
});
$(document).on("keydown", ".tab_wrap [role='tablist']:not([aria-orientation='vertical']) > li:last-child [role='tab']", function(e){
	if (e.keyCode == 39){
		e.preventDefault();
		$(this).parentsUntil(".tab_wrap").find("li:first").find("[role='tab']").focus();
	}
});
$(document).on("keydown", ".tab_wrap [role='tablist'][aria-orientation='vertical'] [role='tab']", function(e){
	if (e.keyCode == 40){
		e.preventDefault();
		$(this).parent("li").next("li").find("[role='tab']").focus();
	}
	if (e.keyCode == 38){
		e.preventDefault();
		$(this).parent("li").prev("li").find("[role='tab']").focus();
	}
});
$(document).on("keydown", ".tab_wrap [role='tablist'][aria-orientation='vertical'] > li:first-child [role='tab']", function(e){
	if (e.keyCode == 38){
		e.preventDefault();
		$(this).parentsUntil(".tab_wrap").find("li:last").find("[role='tab']").focus();
	}
});
$(document).on("keydown", ".tab_wrap [role='tablist'][aria-orientation='vertical'] > li:last-child [role='tab']", function(e){
	e.preventDefault();
	if (e.keyCode == 40){
		e.preventDefault();
		$(this).parentsUntil(".tab_wrap").find("li:first").find("[role='tab']").focus();
		
	}
});
$(document).on("keydown", ".tab_wrap [role='tablist'] [role='tab']", function(e){
	if (e.keyCode == 36){
		e.preventDefault();
		$(this).parentsUntil(".tab_wrap").find("li:first").find("[role='tab']").focus();
	}
	if (e.keyCode == 35){
		e.preventDefault();
		$(this).parentsUntil(".tab_wrap").find("li:last").find("[role='tab']").focus();
	}
});

// desktop gnb
$(document).on("mouseenter", "body:not(.mobile) .gnb [role='menubar'] > li", function(e){
	$(this).addClass("on").siblings("li").removeClass("on");
	$("body:not(.mobile) .gnb [role='menu'], body:not(.mobile) .gnb .gnb_bg").show();
});
$(document).on("mouseleave", "body:not(.mobile) .gnb [role='menubar'] > li", function(e){
	$("body:not(.mobile) .gnb [role='menubar'] > li").removeClass("on");
	$("body:not(.mobile) .gnb [role='menu'], body:not(.mobile) .gnb .gnb_bg").hide();
});
$(document).on("focusin", "body:not(.mobile) .gnb [role='menubar'] li a", function(e){
	$(this).parentsUntil("[role='menubar']").addClass("on").siblings("li").removeClass("on");
	$("body:not(.mobile) .gnb [role='menu'], body:not(.mobile) .gnb .gnb_bg").show();
});
$(document).on("keydown", "body:not(.mobile) .gnb [role='menubar'] > li > [role='menuitem'], body:not(.mobile) .gnb [role='menu'] > li > [role='menuitem']:not([aria-haspopup])", function(e){
	if (e.keyCode == 39) {
		$(this).parentsUntil("[role='menubar']").next("li").children("[role='menuitem']").removeAttr("tabindex").focus().parent("li").siblings("li").children("[role='menuitem']").attr("tabindex", "-1");
	}
	if (e.keyCode == 37) {
		e.preventDefault();
		$(this).parentsUntil("[role='menubar']").prev("li").children("[role='menuitem']").removeAttr("tabindex").focus().parent("li").siblings("li").children("[role='menuitem']").attr("tabindex", "-1");
	}
	if (e.keyCode == 9) {
		$("body:not(.mobile) .gnb [role='menubar'] > li").removeClass("on");
		$("body:not(.mobile) .gnb [role='menu'], body:not(.mobile) .gnb .gnb_bg").hide();
	}
	if (e.keyCode == 36){
		e.preventDefault();
		$(this).closest("ul").children("li:first").children("[role='menuitem']").focus();
	}
	if (e.keyCode == 35){
		e.preventDefault();
		$(this).closest("ul").children("li:last").children("[role='menuitem']").focus();
	}
});
$(document).on("keydown", "body:not(.mobile) .gnb [role='menubar'] > li > [role='menuitem']", function(e){
	if (e.keyCode == 38){
		e.preventDefault();
		$(this).next("ul[role='menu']").children("li:last").children("[role='menuitem']").focus();
	}
	if (e.keyCode == 40){
		e.preventDefault();
		$(this).next("ul[role='menu']").children("li:first").children("[role='menuitem']").focus();
	}
});
$(document).on("keydown", "body:not(.mobile) .gnb [role='menu'] > li > [role='menuitem']", function(e){
	if (e.keyCode == 38){
		e.preventDefault();
		$(this).parent("li").prev("li").children("[role='menuitem']").focus();
	}
	if (e.keyCode == 40){
		e.preventDefault();
		$(this).parent("li").next("li").children("[role='menuitem']").focus();
	}
});

// mobile gnb
$(document).on("click", "body.mobile .gnb [role='menubar'] li a", function(e){
	if ($(this).attr("aria-expanded") == "false"){
		$(this).attr("aria-expanded", true).parent("li").siblings("li").children("[role='menuitem']").attr("aria-expanded", false);
	} else {
		$(this).attr("aria-expanded", false);
	}
	e.preventDefault();
});
$(document).on("click", "body.mobile #header .all_menu", function(e){
	$("body.mobile .gnb").addClass("open");
});
$(document).on("click", "body.mobile .gnb .btn_close, body.mobile .gnb .gnb_bg", function(e){
	$("body.mobile .gnb").removeClass("open");
});
