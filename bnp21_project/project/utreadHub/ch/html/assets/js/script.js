$(function(){
	$(".accordian > li").click(function() {
        if($(this).find("ul").is(":visible")){
            $(".accordian > li").addClass("on");
            $(".accordian > li").removeClass("on");
            $(this).find("ul").slideUp();
            
        } else {
            $(".accordian li > ul").slideUp()
            
            $(this).find("ul").slideToggle();
            
        }
    });
});