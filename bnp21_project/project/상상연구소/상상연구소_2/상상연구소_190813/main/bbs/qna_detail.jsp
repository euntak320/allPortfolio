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
	
	function detail_move(seqKey){
		$("#seqKey").val(seqKey);
		
		$("#page_form").attr("action", "/bbs/qna/detail.do");
		$("#page_form").submit();
	};
	
	function list_move(){
		$("#page_form").attr("action", "/bbs/qna/list.do");
		$("#page_form").submit();
	};
	
	function reg_move(){
		var cmt_cnt = "${detailQ.qna_cmt_cnt}";
		if (cmt_cnt > 0) {
			alert("답변이 등록된 문의글은 수정이 불가능합니다.");
			return false;
		} else {
			$("#regType").val("u");
			
			$("#page_form").attr("action", "/bbs/qna/reg.do");
			$("#page_form").submit();
		}
	};
	
	function file_download() {
		$("#file_down_form").submit();
	};
	
	function del(){
		var cmt_cnt = "${detailQ.qna_cmt_cnt}";
		if (cmt_cnt > 0) {
			alert("답변이 등록된 문의글은 삭제가 불가능합니다.");
			return false;
		} else {
			if (confirm("삭제하시겠습니까?")){
				$.ajax({
					url: "/json/qna_del.ajax",
					type: "POST",
					dataType: "json",
					data: {						
						qna_key: $("#seqKey").val()
					},
					success: function(data){
						if (data.resultCode == "00"){
							alert("삭제되었습니다.");
							location.href = "/bbs/qna/list.do";
						} else {
							alert("문제가 발생했습니다.");
							return;
						}
					}
				});
			} else {
				return;
			}
		}
	};
</script>

<form id="page_form" method="POST">
	<input type="hidden" id="pageIndex" name="pageIndex" value="${params.pageIndex}"/>
	<input type="hidden" id="seqKey" name="qna_key" value="${params.qna_key}">
	<input type="hidden" id="searchWord" name="search_word" value="${params.search_word}">
	<input type="hidden" id="regType" name="reg_type" value="${params.reg_type}">
</form>

<section>
	<%@include file="/bannerLayer.jsp" %>
	
	<div class="content_area">
		<div class="tab_area">
      		<a href="/bbs/qna/list.do" class="on">Q & A</a>
      		<a href="/bbs/data/list.do" >자료실</a>
      		<a href="/bbs/notice/list.do" >공지사항</a>
	    </div>
		<div class="com_table">
			<div class="ask_area">
				<div class="title_area">
					<span class="ask_title fl">${detailQ.qna_title}</span>
					<div class="ask_detail fr">
						<span class="txt">${detailQ.reg_name}</span> <span class="txt">${detailQ.reg_date}</span> <span class="txt">${detailQ.qna_hit}</span>
					</div>
				</div>
				<div class="ask_content_area">
					<span>${detailQ.qna_content}</span>
					
					<c:if test="${detailA ne null}">
						<div class="admin_area">
							<div class="admin_answer">
								<span class="admin_title">${detailA.reg_name}</span> <span class="date">(${detailA.reg_date})</span>
							</div>
							<span class="anwer_area">${detailA.qna_content}</span>
							<c:if test="${detailFile.bbs_file_org ne null and detailFile.bbs_file_org ne '' }">
								<div class="anwer_file" style="margin-top:30px;">첨부파일 : <span class="anwer_file_txt" onclick="file_download();" style="cursor:pointer; border-bottom:1px solid; margin-left:10px;">${detailFile.bbs_file_org}</span></div>
								<form id="file_down_form" method="POST" action="/down/file.do">
									<input type="hidden" name="file_name" value="${detailFile.bbs_file}"/>
									<input type="hidden" name="file_name_org" value="${detailFile.bbs_file_org}"/>
									<input type="hidden" name="file_path" value="qna"/>							
								</form>
							</c:if>
						</div>
					</c:if>
				</div>
			</div>
			<div class="select_list">
				<div class="list_area">
					<span class="list_title bef">이전글</span>
					<c:choose>
						<c:when test="${prev.qna_key ne null and prev.qna_key ne ''}">
							<a href="javascript:;" onclick="detail_move('${prev.qna_key}')"><span class="txt">${prev.qna_title}</span></a>
						</c:when>
						<c:otherwise><span class="txt">이전글이 없습니다.</span></c:otherwise>
					</c:choose>
				</div>
				<div class="list_area">
					<span class="list_title aft">다음글</span>
					<c:choose>
						<c:when test="${next.qna_key ne null and next.qna_key ne ''}">
							<a href="javascript:;" onclick="detail_move(${next.qna_key})"><span class="txt">${next.qna_title}</span></a>
						</c:when>
						<c:otherwise><span class="txt">다음글이 없습니다.</span></c:otherwise>
					</c:choose>
				</div>
			</div>
		</div>
		<div class="list_btn">
			<span class="btn list fr" onclick="list_move()">목록</span>
			<c:if test="${cneUserSession.user_id eq detailQ.reg_id}">
				<span class="btn fr" onclick="reg_move()" style="margin-right:10px;">수정</span>
				<span class="btn cancel fr" onclick="del()" style="margin-right:10px;">삭제</span>
			</c:if>
		</div>
	</div>
</section>