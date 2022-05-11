<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<script type="text/javascript">
	$(document).ready(function() {
		$("#img_captcha").click(function() {
			var rand = Math.random();
			var url = "/personal/captchaImg.do?rand=" + rand;
			$("#img_captcha").attr("src", url);
		});
		
		$("#txt_tel").on("keyup", function() {
			$(this).val($(this).val().replace(/[^0-9]/g,""));
		});
	});
	
	function user_proc() {
		if (inspect()) {	
			if ($("#txt_pw").val() != null && $("#txt_pw").val() != '') {
				if ($("#txt_pw").val().length < 4) {
					alert("패스워드는 최소 4자 이상 입력해주세요.");
					return false;
				} else {
					if ($("#txt_pw").val() != $("#txt_pw_check").val()) {
						alert("입력하신 패스워드가 서로 다릅니다.");
						return false;
					}
				}
			}	
			
			if ("${userInfo.user_nick_proc_yn}" == "Y") {
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
			}
			
			var regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
			if (!regEmail.test($("#txt_email").val())) {
				alert("이메일 형식이 올바르지않습니다.");
				return false;
			}	

			if ($("#txt_captcha").val() == null || $("#txt_captcha").val() == '') {
				alert("자동입력방지문자를 입력해주세요.");
				return false;				
			}
			
			var mailling = $("input:checkbox[id='agree_mailling']").is(":checked") == true ? "Y" : "N";
			
			$.ajax({
				url: "/json/user_info_proc.ajax",
				type: "POST",
				data: {
					user_pw: $("#txt_pw").val(),
					user_nick_name: $("#txt_nick").val(),
					user_email: $("#txt_email").val(),
					user_tel: $("#txt_tel").val(),
					user_mailling_yn: mailling,
					in_captcha: $("#txt_captcha").val()
				},
				dataType: "json",
				success: function(data) {
					if (data.resultCode == "00") {
						alert("정보가 수정되었습니다.");
						location.href = "/main.do";
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
			<span class="title">정보수정</span>
			<br>
			<span class="sub_title">회원님의 개인정보를 소중하게 생각하며 회원님의 동의없이는 공개 또는 제3자에게 제공되지않습니다.</span>
		</div>
		<div class="join_content">
			<div class="com_table join proc">
				<table>
					<colgroup>
						<col width="20%;">
						<col width="80%;">
					</colgroup>
					<tbody>
						<tr>
							<th class="txt_left">아이디</th>
							<td><span>${userInfo.user_id}</span></td>
						</tr>
						<tr>
							<th class="txt_left"><span class="imp">*</span> 비밀번호</th>
							<td>
								<div class="com_input_small">
									<input type="password" id="txt_pw" name="" value="" title="비밀번호">
								</div>
							</td>
						</tr>
						<tr>
							<th class="txt_left"><span class="imp">*</span> 비밀번호 확인</th>
							<td>
								<div class="com_input_small">
									<input type="password" id="txt_pw_check" name="" value="" title="비밀번호 확인">
								</div>
							</td>
						</tr>
						<tr>
							<th class="txt_left">이름</th>
							<td><span>${userInfo.user_name}</span></td>
						</tr>
						<tr>
							<th class="txt_left"><span class="imp">*</span> 별명</th>
							<td>
								
								<c:choose>
									<c:when test="${userInfo.user_nick_proc_yn eq 'Y'}">
										<div class="com_input_small fl">
											<input type="text" id="txt_nick" value="${userInfo.user_nick_name}" title="별명" msg="별명을 입력해주세요." request>
										</div>								
										<p class="txt_list clear">
											<span>공백없이 한글, 영문, 숫자만 입력가능(한글2자, 영문4자 이상)</span>
											<br>
		                    				<span>별명을 바꾸시면 앞으로 60일 이내에는 변경 할 수 없습니다.</span>
										</p>
									</c:when>
									<c:otherwise>
										<span>${userInfo.user_nick_name}</span>
										<br>
										<span>(${userInfo.user_nick_proc_date} 까지 변경불가능합니다.)</span>
									</c:otherwise>
								</c:choose>
							</td>
						</tr>
						<tr>
							<th class="txt_left">전화번호</th>
							<td>
								<div class="telephone">
                    				<input type="text" id="txt_tel" value="${userInfo.user_tel}"/>
                  				</div>
                  				<span class="warning"> "-" 를 제외한 후 적어주세요</span>
							</td>
						</tr>
						<tr>
							<th class="txt_left"><span class="imp">*</span> E-mail</th>
							<td>
								<div class="com_input_regular fl">
									<input type="text" id="txt_email" value="${userInfo.user_email}" title="e-mail" msg="이메일을 입력해주세요." request>
								</div>
							</td>
						</tr>
						<tr>
							<th class="txt_left">생년월일</th>
							<td><span>${userInfo.user_birth}</span></td>
						</tr>
						<tr>
							<th class="txt_left">성별</th>
							<td>
								<span>
									<c:choose>
										<c:when test="${userInfo.user_sex eq 'M'}">남</c:when>
										<c:when test="${userInfo.user_sex eq 'F'}">여</c:when>
									</c:choose>
								</span>
							</td>
						</tr>
						<tr>
							<th class="txt_left">메일링 서비스</th>
							<td>
								<div class="check fl">
									<input type="checkbox" name="" value="" id="agree_mailling" <c:if test="${userInfo.user_mailling_yn eq 'Y'}">checked="checked"</c:if>> 
									<label for="agree_mailling">정보메일을 받겠습니다.</label>
								</div>
							</td>
						</tr>
						<tr>
							<th style="padding:12px 0px; cursor:pointer;">
								<div class="text_input">
									<img id="img_captcha" title="클릭하시면 새로운 글자가 나타납니다." src="/personal/captchaImg.do" alt="captcha" />
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

			<div class="list_btn" onclick="user_proc();">
				<span class="btn circle fr">확인</span>
			</div>

		</div>
	</div>
</section>