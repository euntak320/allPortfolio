<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<style>
	#main_popup{position: fixed; top:0; left:0; bottom:0; right:0; background: rgba(0,0,0,0.5); z-index:10000;}
	#main_popup .layer_area{position:absolute; top:190px; left:350px; width:450px; height:350px; background: #fff;}
	#main_popup .layer_area .top_area{width:454px;}
	#main_popup .layer_area .top_area .img_area{display:block; width:454px; height:297px; background:url(/assets/main/images/layer_top.jpg) no-repeat 0 0;  text-indent:-9999px;}
	#main_popup .layer_area .top_area .img_area a{display: block; width:100%; height:297px; text-indent: -9999px;}
	#main_popup .layer_area .bottom_area{overflow: hidden;}
	#main_popup .layer_area .bottom_area a{display:block; float:left; width:225px; height:50px; text-align:center; line-height:50px; cursor: pointer; border-right:1px solid #ccc;}
</style>

<script src="/assets/common/js/jquery.cookie.js"></script>
<script>	
	$(document).ready(function() {
		console.log($.cookie("cne_nottoday"));
		
		if($.cookie("cne_nottoday") == "Y"){
			console.log("닫기");
			$("#main_popup").hide();
			closePopupNotToday();
		} else {
			console.log("show");
			$("#main_popup").show('fade');
		}
	});
	
	function closePopupNotToday(){	             
		$.cookie("cne_nottoday", "Y", { expires: 1 });
		$("#main_popup").hide('fade');
	};
	
	function closeMainPopup(){
		$("#main_popup").hide('fade');
	};
	
	function moveLinkPage(seq){
		location.href = "https://www.imaginecne.com/bbs/notice/detail.do?notice_key=" + seq;
	};
</script>

<div class="layer_frame" id="main_popup">
	<div class="layer_area">
		<div class="top_area" >
			<span class="img_area" onclick="moveLinkPage(109);" style="cursor:pointer;"></span>
		</div>
		<div class="bottom_area">
			<a href="javascript:closePopupNotToday()">오늘 하루 보지않기</a> 
			<a href="javascript:closeMainPopup();">닫기</a>
		</div>
	</div>
</div>