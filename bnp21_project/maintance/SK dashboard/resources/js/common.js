$(window).load(function(){
	// 막대 그래프
	var graphArea = $(".graphArea");
	graphArea.each(function(){
		var graph = $(this).find(".graph"),
			graphVal = $(this).find("em").text();
		graph.find("p").css({width:graphVal + "%"});
		if(graphVal > 89){
			$(this).addClass("cR");
		}else if(graphVal > 69 && graphVal < 90){
			$(this).addClass("cO");
		}else if(graphVal > 59 && graphVal < 70){
			$(this).addClass("cY");
		}
	});

	// 반원 차트
	var chartArea = $(".chartArea");
	chartArea.each(function(){
		var chartVal = $(this).find("span em").text();
		$(this).find(".chart p").css({"transform":"rotateZ("+chartVal*1.8+"deg)"});
		if(chartVal > 89){
			$(this).addClass("cR");
		}else if(chartVal > 69 && chartVal < 90){
			$(this).addClass("cO");
		}else if(chartVal > 59 && chartVal < 70){
			$(this).addClass("cY");
		}
	});

	// 레이아웃 변경
	$(".btnLayoutSet").click(function(e){
		e.preventDefault();
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$("#wrap").removeClass("type02");
			$(".layer-frame").removeClass("type02");
		}else{
			$(this).addClass("on");
			$("#wrap").addClass("type02");
			$(".layer-frame").addClass("type02");
		}
	});

	// 카드형, 그리드형 변경
	$(".btnContSet").click(function(e){
		e.preventDefault();
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(".cardWrap").slideDown(100);
			$(".gridWrap").slideUp(100);
		}else{
			$(this).addClass("on");
			$(".gridWrap").slideDown(100);
			$(".cardWrap").slideUp(100);
		}
	});

	// TOOLTIP
	var toolTip = $(".toolTip");
	toolTip.each(function(){
		var text = $(this).text();
		$(this).attr("title",text)
	})
	toolTip.tooltip();

})
function fn_layer(e){
	var $this = $("."+e);
	$this.fadeIn(100).addClass("on");
}
function fn_layerClose(e){
	$(e).closest(".layer-frame").removeClass("on").fadeOut(100);
}