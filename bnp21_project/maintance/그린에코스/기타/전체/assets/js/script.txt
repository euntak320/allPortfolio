$( function() {
    
    $(".cal" ).datepicker({
      showOn: "button",
      buttonText: "Select date"
    });
});



$(document).ready(function() {
    // 토글 열기 닫기
    $(".hideToggle" ).click(function(){
      var toggleDiv = $(this).attr("data");
      if($(this).hasClass("close")) {
        $("#"+toggleDiv).show();
        $(this).removeClass("close").addClass("open");
      } else {
        $("#"+toggleDiv).hide();
        $(this).removeClass("open").addClass("close");
      };
    });

    // 대기정보 > 시군별 전체선택/ 전체해제 / 선택 
	$(".air_area").find(".allTogl").click(function(){
		if($(this).hasClass("off")){
			$(this).parents(".air_area").find(".area_list a").addClass("on");
			$(this).removeClass("off")
		}else{
			$(this).parents(".air_area").find(".area_list a").removeClass("on");
			$(this).addClass("off")
		}
        
    });
    $(".air_area").find(".allSelect").click(function(){
        $(".air_area .area_list").find("a").addClass("on");
    });
    $(".air_area").find(".allNone").click(function(){
        $(".air_area .area_list").find("a").removeClass("on");
    });
    $(".area_list li").find("button").click(function(){
        $(this).next().find("a").toggleClass("on");
    });
    $(".area_list li").find("a").click(function(){
        $(this).toggleClass("on");
    });
    $(".area_list.city").find("button").click(function(){
       $(".area_list.city li ul li:lt(3)").find("a").toggleClass("on");
    });

    //대기질현황
    $("#air_map").find(".area").click(function() {
        $("#air_map").find(".info").hide();
        $(this).next().toggle();
    });


    //이미지 플레이어
    var imgPlayer = $("#imagePlayer");
    var timeSpan = imgPlayer.find(".list > span");
    var timeLength = timeSpan.length;
    var timeWidth = 100/(timeLength-1);
    var timePoint = timeSpan.find("a");
    var progressBar = imgPlayer.find("#progBar");

    timeSpan.each(function(){
      var i = $(this).index();
      var position = timeWidth * i;
      $(this).css("left", position + "%"); // 시간 위치 조정
    });

    timePoint.click(function(){
        var me = $(this).parent();
        var mePosi = me.css("left");
        timePoint.parent().removeClass("on");
        me.addClass("on");
        progressBar.css("width", mePosi);
    });

	// 팝업 컨트롤
	$(".js_popup").click(function(){
		var popLayer = $(this).attr("href");
		$("html, body").css("overflow","hidden");
		$(popLayer).show();
		$(popLayer).find(".lyClose > a").click(function() {
			$(popLayer).hide();
			$(this).focus();
			$("html, body").removeAttr("style");
		});
	});

});

	function popClose(me) {
		$(me).parents(".layerPopupWrap").hide();
		$("html, body").removeAttr("style");
	}

    //이미지 플레이어 다음이전버튼
    function imgCtrl(num) {
      var imgPlayer = $("#imagePlayer");
      var progressBar = imgPlayer.find("#progBar");
      var timeSpan = imgPlayer.find(".list > span");
      var timeSpanLength = timeSpan.length;
      var curr = imgPlayer.find(".list > span.on").index();
      var curr = curr + num;
      var nextSpan = timeSpan.eq(curr);
      var nextPosi = nextSpan.css("left");

      
      if (curr < timeSpanLength)
      {
        timeSpan.removeClass("on");
        nextSpan.addClass("on");
        progressBar.css("width", nextPosi);
      } else {
        timeSpan.removeClass("on");
        timeSpan.eq(0).addClass("on");
        progressBar.css("width", 0);
      }
      moveStop();
      
    }

    //이미지 플레이어 처음버튼
    function imgCtrlFirst() {
        var imgPlayer = $("#imagePlayer");
        var timeSpan = imgPlayer.find(".list > span");
        var progressBar = imgPlayer.find("#progBar");

        timeSpan.removeClass("on");
        timeSpan.eq(0).addClass("on");
        progressBar.css("width", 0);
        moveStop();
    }

    //이미지 플레이어 마지막버튼
    function imgCtrlLast() {
        var imgPlayer = $("#imagePlayer");
        var timeSpan = imgPlayer.find(".list > span");
        var timeSpanLength = timeSpan.length;
        var progressBar = imgPlayer.find("#progBar");
        timeSpan.removeClass("on");
        timeSpan.eq(timeSpanLength-1).addClass("on");
        progressBar.css("width", 100 + "%");
        moveStop();
    }

    var moveId;
    function move() {
      moveId = setInterval(frame, 500); // 이미지 플레이어 속도 조절
      $(".movePlay").hide();
      $(".moveStop").show();
      function frame() {
        var imgPlayer = $("#imagePlayer");
        var progressBar = imgPlayer.find("#progBar");
        var timeSpan = imgPlayer.find(".list > span");
        var timeSpanLength = timeSpan.length;
        var curr = imgPlayer.find(".list > span.on").index();
        var curr = curr + 1
        var nextSpan = timeSpan.eq(curr);
        var nextPosi = nextSpan.css("left");

        if (curr < timeSpanLength)
          {
            timeSpan.removeClass("on");
            nextSpan.addClass("on");
            progressBar.css("width", nextPosi);
          } else {
            timeSpan.removeClass("on");
            timeSpan.eq(0).addClass("on");
            progressBar.css("width", 0);
          }
      }
    }

    function moveStop() {
        $(".moveStop").hide();
        $(".movePlay").show();
        clearTimeout(moveId);
    }


