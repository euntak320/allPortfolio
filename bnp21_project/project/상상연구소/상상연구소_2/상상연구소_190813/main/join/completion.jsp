<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<script type="text/javascript">
	$(document).ready(function() {
	});
</script>

<section>
	<div class="content_area">
		<div class="title_area">
			<span class="title">가입완료</span>
			<br>
			<span class="sub_title">회원님의 개인정보를 소중하게 생각하며 회원님의 동의없이는 공개 또는 제3자에게 제공되지않습니다.</span>
		</div>
		<div class="join_list_area">
			<span class="three">가입방법이미지</span>
		</div>

		<div class="last_area">
			<div class="last_txt_area">
				<span class="ment">${cneUserSession.user_name}님의 회원가입을 감사드립니다.</span>
				<span class="txt_sub">지금부터 회원님의 아이디 ${cneUserSession.user_id}(으)로 서비스 이용하실 수 있습니다.</span>
				<a href="/main.do" class="check_btn">홈으로 가기</a>
			</div>
		</div>

	</div>
</section>