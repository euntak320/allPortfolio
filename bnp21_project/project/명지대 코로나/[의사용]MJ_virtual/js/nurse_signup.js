	
	function setInit(fileId, delFileId, sn, ftype){
		if ($.browser.msie) {
			// ie 일때 input[type=file] init. 
			$("#"+fileId).replaceWith( $("#"+fileId).clone(true) );
		} else {
			// other browser 일때 input[type=file] init. 
			$("#"+fileId).val(""); 
		}
		$("#box_"+fileId).remove();
		
		if(delFileId != ""){
			var delFileStr = delFileId+"/"+sn;
			var delfile = $("#delfile"+ftype).val();
			if(delfile != ""){
				$("#delfile"+ftype).val(delfile +"," +delFileStr);
			} else {
				$("#delfile"+ftype).val(delFileStr);				
			}
		}
	}
	
	
	//태그 삭제
	function tag_del(e){
		var this_id = $(e).parent().parent().attr("id").replace("_box","");
		var hd_val = $("#"+this_id).val();
		var hd_val_arr = hd_val.split("#");
		var del_str = $(e).parent().find("span").text();
		hd_val_arr.splice(hd_val_arr.indexOf(del_str),1);
		$("#"+this_id).val(hd_val_arr.join("#"));
		$(e).parent().remove();
	}
	
	function nextStep(this_lvl){
		$('html').scrollTop(0);
		$("#step_"+this_lvl).hide();
		$("#step_"+(Number(this_lvl)+1)).show();
		$("#stepbar_"+this_lvl).css("width","100%");
		$("#stepbar_"+(Number(this_lvl)+1)).css("width","10%");
		$("#signup_step").val((Number(this_lvl)+1));
		
		$(".regist-step-wrap").removeClass("active-step"+this_lvl);
		$(".regist-step-wrap").addClass("active-step"+(Number(this_lvl)+1));
	}

	$(function(){
		
		var numChk = 0;
		var ranNum = 0;
		var regExp = /^\d{10,11}$/;
		$("#btnNumSend").on("click", function(){
			ranNum = Math.floor(Math.random()*999999+1);		//임시
			if($("#mem_phone").val() == ""){
				alert("휴대전화번호를 입력해주세요.");
				return;
			}
			
			if(!regExp.test($("#mem_phone").val())) {
				alert("휴대전화를 인증할 수 없습니다.");
				return;
			}
			
			//휴대폰sms보내는 로직 들어가기
			$("#cert_num").val(ranNum);
		});	
		
		//인증번호 확인하는 로직 들어가기
		$("#btnNumChk").on("click", function(){
			if($("#cert_num").val() == ranNum){
				numChk++;
				$("#chkTxt").html("<i class=\"ico-chk-blue\"></i>인증에 성공하였습니다.");
				$("#chkTxt").css("color","#3BBDF6");
				$("#chkTxt").show();
			} else {
				numChk = 0;
				$("#chkTxt").html("인증번호가 일치하지 않습니다.");
				$("#chkTxt").css("color","#FC2C2C");
				$("#chkTxt").show();
			}			
			
			$.ajax({
		        url: '/doctor/signup/phone_chk.json',
		        type: 'POST',
		        data: "memPhone="+$("#mem_phone").val(),
		        async : false,
		        error: function(output) {
		        	alert("오류가 발생하였습니다. 관리자에게 문의하세요.");
		        },
		        success: function(data) {
		        	if(data.result == 'success'){
		        		if(data.chk == 0){
		        			$("#phone_chk").val("Y");
		        		} else {
		        			$("#phone_chk").val("N");
		        		}
					} else {
						alert(data.msg);
					}
		        }
		    });
			
		});	
		
		//이미지 첨부 클릭
		$("#btnUpFile").click(function(){
			$("#doc_image").click();
		});
		
		//이미지 미리보기
		$("#doc_image").change(function(){
			//파일이름
			var cut_name = this.files[0].name.split(".");
			var this_id = $(this).attr("id");
			//이미지 썸네일
			var reader = new FileReader();
			var this_files = this.files[0];
			reader.readAsDataURL(this_files);
			reader.onload = function(){
				$("#profile_thumb").attr("src",this.result);
				$("#doc_image_name").val(cut_name[0]);
			}	
		});
						
		$("#hos_idx").change(function(){
			$.ajax({
		        url: '/doctor/host/info.json',
		        type: 'POST',
		        data: "htCode="+$(this).val(),
		        async : false,
		        error: function(output) {
		        	alert("오류가 발생하였습니다. 관리자에게 문의하세요.");
		        },
		        success: function(data) {
		        	if(data.result == 'success'){
		        		var hstInfo = data.host_info;
						$("#hos_addr").val(hstInfo.hos_addr);
						$("#hos_zip_code").val(hstInfo.hos_zip_code);
						$("#doc_tel").val(hstInfo.hos_tel);
					} else if(data.result == 'false') {
						alert(data.msg);
						$("#hos_addr").val("");
						$("#hos_zip_code").val("");
						$("#doc_tel").val("");
					} else {
						alert(data.msg);
						$("#hos_addr").val("");
						$("#hos_zip_code").val("");
						$("#doc_tel").val("");
					}
		        }
		    });
		});
		
		$("#btnNext").click(function(){
			
			if($("#signup_step").val() == "1"){
				
				if($("#mem_name").val().trim() == ""){
					alert("이름을 입력해주세요.");
					return;
				}
				if($("#mem_phone").val().trim() == ""){
					alert("휴대전화 번호를 입력해주세요.");
					return;
				}
				if($("#cert_num").val().trim() == ""){
					alert("휴대전화 번호를 인증해주세요.");
					return;
				}
				if($("#doc_code").val().trim() == ""){
					alert("간호사 코드를 입력해주세요.");
					return;
				}
				
				if($("#phone_chk").val() != "Y"){
					alert("이미 가입된 휴대번호 정보입니다.");
					return;
				}
				
				nextStep($("#signup_step").val());
			} else if($("#signup_step").val() == "2"){
				nextStep($("#signup_step").val());
				$("#btnNext").html("<span>등록</span>");
			} else if($("#signup_step").val() == "3"){
				var form = $("#frm")[0];
				var frmData = new FormData(form);
				$.ajax({
			        url: '/doctor/signup/nurse_proc.do',
			        type: 'POST',
			        data: frmData,
			        async : false,
			        processData: false,    // 반드시 작성
			        contentType: false,    // 반드시 작성
			        error: function(output) {
			        	alert("오류가 발생하였습니다. 관리자에게 문의하세요.");
			        },
			        success: function(data) {
			        	if(data.result == 'success'){
			        		alert("간호사정보를 등록하였습니다.");
			        		location.href="/doctor";
						} else if(data.result == 'error') {
							alert(data.msg);
							return;
						} else {
							alert("오류가 발생하였습니다.");
							return;
						}
			        }
			    });				
			}
			
		});

	});