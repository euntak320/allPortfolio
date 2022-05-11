<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<script type="text/javascript">
	$(document).ready(function(){
	});
	
	function save(){
		if ($("#txt_title").val() == "" || $("#txt_title").val() == null) {
			alert("제목을 입력해주세요.");
			return false;
		}
		
		if ($("#txt_content").val() == "" || $("#txt_content").val() == null) {
			alert("문의내용을 입력해주세요.");
			return false;
		}
		
		$.ajax({
			url: "/json/qna_reg.ajax",
			type: "POST",
			dataType: "json",
			data: {
				reg_type: $("#regType").val(),
				qna_key: $("#seqKey").val(),
				qna_title: $("#txt_title").val(),
				qna_content: $("#txt_content").val()
			},
			success: function(data){
				if (data.resultCode == "00"){
					alert("저장되었습니다.");
					location.href = "/bbs/qna/list.do";
				} else {
					alert("문제가 발생했습니다.");
					return;
				}
			}
		});
	};
	
	function cancel(){
		if (confirm("지금까지 입력한 내용은 저장되지 않습니다. 취소하시겠습니까?")){
			$("#page_form").attr("action", "/bbs/qna/list.do");
			$("#page_form").submit();
		} else {
			return;
		}
	};
</script>


<form id="page_form" method="POST">
	<input type="hidden" id="pageIndex" name="pageIndex" value="${params.pageIndex}"/>
	<input type="hidden" id="seqKey" name="qna_key" value="${params.qna_key}">
	<input type="hidden" id="searchWord" name="search_word" value="${params.search_word}">
</form>

<input type="hidden" id="regType" name="reg_type" value="${params.reg_type}">

<section>
	<%@include file="/bannerLayer.jsp" %>
	
	<div class="content_area">
		<div class="tab_area">
      		<a href="/bbs/qna/list.do" class="on">Q & A</a>
      		<a href="/bbs/data/list.do" >자료실</a>
      		<a href="/bbs/notice/list.do" >공지사항</a>
	    </div>
		<div class="com_table">
			<div class="writing_area">
				<input type="text" id="txt_title" value="${detail.qna_title}" placeholder="제목을 입력해주세요">
			</div>
			<div class="text_writing">
				<textarea id="txt_content" rows="20" cols="80" placeholder="내용을 적어주세요">${detail.qna_content}</textarea>
			</div>
		</div>
		<div class="list_btn">
			<span class="btn fr" onclick="save();">글쓰기</span>
			<span class="btn cancel fr" onclick="cancel();">취소</span>
		</div>
	</div>
</section>