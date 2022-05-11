<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<script type="text/javascript">
	$(document).ready(function() {
		$("#txt_birth").datepicker({
			showOn: "button",
			defaultDate: "+1w",
			changeYear: true,
			changeMonth: true,
			numberOfMonths: 1,
			buttonImage: "/assets/main/images/icon_cal.png",
			buttonImageOnly: true,
			showMonthAfterYear: true,
			yearRange : "c-80:c+0"
		});
		
		$("#img_captcha").click(function() {
			var rand = Math.random();
			var url = "/join/captchaImg.do?rand=" + rand;
			$("#img_captcha").attr("src", url);
		});
		
		$("#txt_tel").on("keyup", function() {
			$(this).val($(this).val().replace(/[^0-9]/g,""));
		});
	});
	
	function user_join() {
		if (inspect()) {
			if ($("#txt_id").val().length < 3) {
				alert("아이디는 최소 3자 이상 입력해주세요.");
				return false;
			} else {
				let regID = /[^\w]/;
				if (regID.test($("#txt_id").val())) {
					alert("아이디는 영문, 숫자만 가능합니다.");
					return false;
				}
			}			
			
			if ($("#txt_pw").val().length < 4) {
				alert("패스워드는 최소 4자 이상 입력해주세요.");
				return false;
			} else {
				if ($("#txt_pw").val() != $("#txt_pw_check").val()) {
					alert("입력하신 패스워드가 서로 다릅니다.");
					return false;
				}
			}
			
			let regName = /([^가-힣\x20^a-z^A-Z])/;
			if (regName.test($("#txt_name").val())) {
				alert("이름은 한글, 영문만 가능합니다.");
				return false;
			}
			
			let regNick = /([^가-힣\x20^a-z^A-Z^0-9])/;
			if (regNick.test($("#txt_nick").val())) {
				alert("별명은 한글, 영문, 숫자만 가능합니다.");
				return false;
			} else {
				var numCnt = $("#txt_nick").val().replace(/[^0-9]/g,"").length;
				var byteKo = 0, byteEn = 0;
				for (var i=0; i<$("#txt_nick").val().length; i++) {
					var oneChar = $("#txt_nick").val().charAt(i);
					if (escape(oneChar).length > 4) {
						byteKo += 2;
					} else {
						byteEn++;
					}
				}
				
				if (byteKo < 4 && byteEn < 4 && numCnt < 4) {
					alert("별명은 한글 2글자, 영문 4글자 이상 입력 가능합니다.");
					return false;
				}				
			}
			
			var regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
			if (!regEmail.test($("#txt_email").val())) {
				alert("이메일 형식이 올바르지않습니다.");
				return false;
			}
			
			if ($("#txt_birth").val() == null || $("#txt_birth").val() == '') {
				alert("생년월일을 선택해주세요.");
				return false;
			}
			
			if ($("#sel_sex").val() == null || $("#sel_sex").val() == '') {
				alert("성별을 선택해주세요.");
				return false;				
			}			

			if ($("#txt_captcha").val() == null || $("#txt_captcha").val() == '') {
				alert("자동입력방지문자를 입력해주세요.");
				return false;				
			}
			
			var mailling = $("input:checkbox[id='agree_mailling']").is(":checked") == true ? "Y" : "N";
			
			$.ajax({
				url: "/json/user_reg.ajax",
				type: "POST",
				data: {
					user_id: $("#txt_id").val(),
					user_pw: $("#txt_pw").val(),
					user_name: $("#txt_name").val(),
					user_nick_name: $("#txt_nick").val(),
					user_email: $("#txt_email").val(),
					user_tel: $("#txt_tel").val(),
					user_sex: $("#sel_sex").val(),
					user_birth: $("#txt_birth").val(),
					user_mailling_yn: mailling,
					in_captcha: $("#txt_captcha").val()
				},
				dataType: "json",
				success: function(data) {
					if (data.resultCode == "00") {
						location.href = "/completion.do";
					} else {
						alert(data.resultMsg);
						return false;
					}
				}
			});
		}
	};
</script>


<section>
	<div class="content_area">
		<div class="title_area">
			<span class="title">기본정보입력</span>
			<br>
			<span class="sub_title">회원님의 개인정보를 소중하게 생각하며 회원님의 동의없이는 공개 또는 제3자에게 제공되지 않습니다.</span>
		</div>
		<div class="join_list_area">
			<span class="two">가입방법이미지</span>
		</div>
		<div class="join_content">
			<div class="com_table join">
				<table>
					<colgroup>
						<col style="width:25%;">
						<col style="width:75%;">
					</colgroup>
					<tbody>
						<tr>
							<th class="txt_left"><span class="imp">*</span> 아이디</th>
							<td>
								<div class="com_input_small">
									<input type="text" id="txt_id" name="" value="" title="아이디" msg="아이디를 입력해주세요." request>
								</div>
								<span class="blue fl">※ 영문, 숫자만 입력 가능, 최소 3자이상 입력하세요.</span>
							</td>
						</tr>
						<tr>
							<th class="txt_left"><span class="imp">*</span> 비밀번호</th>
							<td>
								<div class="com_input_small">
									<input type="password" id="txt_pw" name="" value="" title="비밀번호" msg="비밀번호를 입력해주세요." request>
								</div>
							</td>
						</tr>
						<tr>
							<th class="txt_left"><span class="imp">*</span> 비밀번호 확인</th>
							<td>
								<div class="com_input_small">
									<input type="password" id="txt_pw_check" name="" value="" title="비밀번호 확인" msg="비밀번호 확인란을 입력해주세요." request>
								</div>
							</td>
						</tr>
						<tr>
							<th class="txt_left"><span class="imp">*</span> 이름</th>
							<td>
								<div class="com_input_small">
									<input type="text" id="txt_name" name="" value="" title="이름" msg="이름을 입력해주세요." request>
								</div>
							</td>
						</tr>
						<tr>
							<th class="txt_left"><span class="imp">*</span> 별명</th>
							<td>
								<div class="com_input_small fl">
									<input type="text" id="txt_nick" name="" value="" title="별명" msg="별명을 입력해주세요." request>
								</div>								
								<p class="txt_list clear">
									<span>공백없이 한글, 영문, 숫자만 입력가능(한글2자, 영문4자 이상)</span>
									<br>
		                    		<span>가입 후 60일 이내에는 변경 할 수 없습니다.</span>
								</p>
							</td>
						</tr>
						<tr>
                			<th class="txt_left">전화번호</th>
                			<td>
                  				<div class="telephone">
                    				<input type="text" id="txt_tel" value=""/>
                  				</div>
                  				<span class="warning"> "-" 를 제외한 후 적어주세요</span>
                			</td>
              			</tr>
						<tr>
							<th class="txt_left"><span class="imp">*</span> E-mail</th>
							<td>
								<div class="com_input_regular fl">
									<input type="text" id="txt_email" name="" value="" title="e-mail" msg="이메일을 입력해주세요." request>
								</div>
							</td>
						</tr>
						<tr>
							<th class="txt_left"><span class="imp">*</span> 생년월일</th>
							<td>
								<div class="com_input_cal fl">
									<input type="text" id="txt_birth" name="" value="" title="생년월일" id="datepicker" readonly="readonly">
								</div>
							</td>
						</tr>
						<tr>
							<th class="txt_left"><span class="imp">*</span> 성별</th>
							<td>
								<div class="com_input_small">
									<select id="sel_sex">
										<option value="">선택하세요</option>
										<option value="M">남</option>
										<option value="F">여</option>
									</select>
								</div>
							</td>
						</tr>
						<tr>
							<th class="txt_left">메일링 서비스</th>
							<td>
								<div class="check fl">
									<input type="checkbox" name="" value="" id="agree_mailling" checked="checked"> <label for="agree_mailling">정보메일을 받겠습니다.</label>
								</div>
							</td>
						</tr>
						<tr>
							<th style="padding:12px 0px; cursor:pointer;">
								<div class="text_input">
									<img id="img_captcha" title="클릭하시면 새로운 글자가 나타납니다." src="/join/captchaImg.do" alt="captcha" />
								</div>
							</th>
							<td>
								<div class="com_input_small fl">
									<input type="text" id="txt_captcha" name="" value="" >
								</div>
								<span class="noraml fl">왼쪽의 글자를 입력하세요.</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="list_btn" onclick="user_join();">
				<span class="btn circle fr">확인</span>
			</div>

		</div>
	</div>
</section>