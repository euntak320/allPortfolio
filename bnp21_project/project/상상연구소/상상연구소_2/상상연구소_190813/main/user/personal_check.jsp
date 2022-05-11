<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<script type="text/javascript">
	$(document).ready(function() {
		$("#txt_pw").keydown(function(item) {
			if(item.keyCode == 13) {
				user_login();
			}
		});
	});
	
	function user_login() {
		if (inspect()) {
			$.ajax({
				url: "/json/user_info.ajax",
				type: "POST",
				data: {
					user_id: $("#txt_id").val(),
					user_pw: $("#txt_pw").val()				
				},
				dataType: "json",
				success: function(data) {
					if (data.resultCode == "00") {
						location.href = "/personal/info.do";
					} else {
						alert("비밀번호를 확인해주세요.");
						return false;
					}
				}
			});
		}
	};
</script>

<section>
	<div class="content_area">
		<div class="login_area find_area">
			<div class="top_area">
				<span class="logo_area">로고이미지</span>
				<div class="txt_area">
					<span class="txt bold">상상을 현실로! 국어 평가 콘텐츠의 리더!</span>
					<span class="txt">Better than the best 최고 그 이상을 추구합니다.</span>
				</div>
			</div>
			<div class="btm_area">
				<div class="two_area">
					<div class="one_area">
						<input type="hidden" id="txt_id" value="${cneUserSession.user_id}">
						<span class="title fl">회원아이디</span> <span class="name_id fr">${cneUserSession.user_id}</span>
					</div>
					<div class="one_area">
						<span class="title fl">비밀번호</span> <span class="name_id fr"> <input type="password" id="txt_pw" title="비밀번호입력"></span>
					</div>
				</div>
			</div>
			<div class="login_btm" id="btn_login" onclick="user_login();">
				<span>로그인</span>
			</div>
			<div class="etc_area">
				<span class="etc_txt">외부로부터 회원님의 정보를 안전한게 보호하기 위해 비밀번호를 확인하셔야 됩니다.</span>
			</div>
		</div>
	</div>
</section>