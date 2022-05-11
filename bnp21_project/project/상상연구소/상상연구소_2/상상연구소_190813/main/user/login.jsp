<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<script type="text/javascript">
	$(document).ready(function() {		
		$("#txt_pw").keydown(function(item) {
			if(item.keyCode == 13) {
				user_login();
			}
		});
		
		$("#img_captcha").click(function() {
			var rand = Math.random();
			var url = "/acc/captchaImg.do?rand=" + rand;
			$("#img_captcha").attr("src", url);
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
						location.href = "/main.do";
					} else {
						var pType = rePlatform();
						var boxW = pType == "w" ? "27%" : "95%";
						var msg = "<div style='line-height:30px; padding:25px 10px; padding-bottom:15px;'>";
						
						if (data.resultCode == "01") {
							msg += "일치하는 회원정보가 없습니다.";
							
							if (pType == "w") {
								boxW = "18%";
							}
						} else if (data.resultCode == "02") {
							msg += "비밀번호 암호화 방식이 변경되어 기존 비밀번호를 사용하실 수 없습니다.</br>";
							msg += "임시 비밀번호를 메일로 발송드렸습니다.</br>";
							msg += "( email : " + data.resultMsg + " )</br>";							
							msg += "확인 부탁드립니다.";
						} else if (data.resultCode == "03") {
							msg += "비밀번호 암호화 방식이 변경되어 기존 비밀번호를 사용하실 수 없습니다.</br>";
							msg += "초기화된 암호를 발송하고있으나, 메일발송에 문제가 발생했습니다.<br>";							
							msg += "관리자에게 문의바랍니다.";
						} else if (data.resultCode == "04") {
							msg += "접근이 차단된 계정입니다.";
							
							if (pType == "w") {
								boxW = "18%";
							}
						}
						
						msg += "</div>";

						$.alert({
							boxWidth: boxW,
							useBootstrap: false,
							draggable: true,
							title: '<div>안내<div>',
							content: msg,
							buttons: {
								"확인": function() { }
							}
						});
					}
				}
			});
		}
	};
	
	function open_account() {
		layer_popup("#layer_account");
	};
	
	function close_account() {
		$("#layer_account").hide();
		$("body").css("overflow-y","hidden");
	};
	
	function user_certify() {
		if ($("#txt_join_email").val() == null || $("#txt_join_email").val() == null) {
			alert("가입 시 등록하신 이메일을 입력해주세요.");
			return false;
		}
		
		if ($("#txt_captcha").val() == null || $("#txt_captcha").val() == '') {
			alert("자동입력방지문자를 입력해주세요.");
			return false;				
		}
		
		$.ajax({
			url: "/json/user_certify.ajax",
			type: "POST",
			data: {
				user_email: $("#txt_join_email").val(),
				in_captcha: $("#txt_captcha").val()
			},
			dataType: "json",
			success: function(data) {
				if (data.resultCode == "00") {
					alert("요청하신 메일로 회원아이디와 패스워드가 발송되었습니다.\n메일을 확인해주세요.");
					location.reload();
				} else {
					alert(data.resultMsg);
					return false;
				}
			}
		});		
	};
</script>

<section>
	<%@include file="/bannerLayer.jsp" %>
	
	<div class="content_area">
		<div class="login_area">
			<div class="top_area">
				<span class="logo_area">로고이미지</span>
				<div class="txt_area">
					<span class="txt bold">상상을 현실로! 국어 평가 콘텐츠의 리더!</span>
					<span class="txt">Better than the best 최고 그 이상을 추구합니다.</span>
				</div>
			</div>
			<div class="btm_area">
				<div class="input_area">
					<input type="text" id="txt_id" value="" title="아이디" placeholder="아이디" msg="아이디를 입력해주세요." request>
				</div>
				<div class="input_area">
					<input type="password" id="txt_pw" value="" title="비밀번호" placeholder="비밀번호" msg="비밀번호를 입력해주세요." request>
				</div>
			</div>
			<div class="login_btm" id="btn_login" onclick="user_login();">
				<span>로그인</span>
			</div>
			<div class="etc_area">
				<a href="/regulation.do" class="fl">회원가입</a>
				<a href="javascript:;" class="fr" onclick="open_account();">아이디, 비밀번호 찾기</a>
			</div>
		</div>
	</div>
</section>

<div class="layer_pop" id="layer_account" style="display: none;">
	<div class="pop_container">
		<div class="top_area">
			<span class="title">아이디/패스워드 찾기</span> <a href="javascript:;" class="close_btn" onclick="close_account();">팝업 닫기</a>
		</div>
		<div class="view_area">
			<input type="text" id="txt_join_email" placeholder="회원가입 시 등록하신 이메일주소">
			<!-- <input type="text" id="txt_join_name" placeholder="회원가입 시 등록하신 이름"> -->
			<div class="txt_input" style="border:0;">
				<img id="img_captcha" src="/acc/captchaImg.do" alt="captcha" />
				<input id="txt_captcha" type="text" placeholder="자동입력방지문자">
			</div>
			<span class="coment">* 이미지를 클릭하시면 새로운 글자가 나타납니다.</span>
			<span class="layer-btm" onclick="user_certify();">확인</span>
		</div>
	</div>
</div>