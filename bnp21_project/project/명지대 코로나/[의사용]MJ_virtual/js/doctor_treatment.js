	$(function(){
		
		//창이동
		$("#patient-info").draggable({ containment: ".treat-area", scroll: true, handle:"#patient-info-head" });
		$("#write-treat").draggable({ containment: ".treat-area", scroll: true, handle:"#write-treat-head" });
		$("#chat-treat").draggable({ containment: ".treat-area", scroll: true, handle:"#chat-treat-head" });
		$("#camera-area").draggable({ containment: ".treat-area", scroll: true, handle:"#camera-area-head" });
		
		//환자 정보 보기
		$("#btnPatInfo").on("click", function(){
			if($(this).hasClass("open-sec") === true) {
				$(this).removeClass("open-sec");
				$("#patient-info").hide();
			} else {
				$(this).addClass("open-sec");
				$("#patient-info").show();
			}
		});
		
		//의료 상담내용 작성
		$("#btnTreatEdit").on("click", function(){
			if($(this).hasClass("open-sec") === true) {
				$(this).removeClass("open-sec");
				$("#write-treat").hide();
			} else {
				$(this).addClass("open-sec");
				$("#write-treat").show();
			}
		});
		
		//채팅창 열기
		$("#btnTxtChat").on("click", function(){
			if($(this).hasClass("open-sec") === true) {
				$(this).removeClass("open-sec");
				$("#chat-treat").hide();
			} else {
				$(this).addClass("open-sec");
				$("#chat-treat").show();
			}
		});
		
		//화상 채팅창 열기
		$("#btnCamChat").on("click", function(){
			if($(this).hasClass("open-sec") === true) {
				$(this).removeClass("open-sec");
				$("#camera-area").hide();
			} else {
				$(this).addClass("open-sec");
				$("#camera-area").show();
			}
		});
		
		//종료하기
		$("#btnTtmClose").on("click", function(){
			if(confirm("의료 상담을 종료하시겠습니까?")){
				$.ajax({
			        url: '/doctor/treatment/doctor_close.json',
			        type: 'POST',
			        data: $("#frm").serialize(),
			        error: function(output) {
			        	alert("오류가 발생하였습니다. 관리자에게 문의하세요.");
			        },
			        success: function(data) {
			        	if(data.result == 'success'){
			        		alert("의료 상담이 종료되었습니다.");
			        		location.href="/doctor/treatment/main.do";
						} else {
							alert("오류가 발생하였습니다.");
							return;
						}
			        }
			    });
			}
		});
	});