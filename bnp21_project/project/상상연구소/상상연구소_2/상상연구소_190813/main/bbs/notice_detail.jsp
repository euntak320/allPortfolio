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
	
	function detail_move(key){
		$("#seqKey").val(key);
		
		$("#page_form").attr("action", "/bbs/notice/detail.do");
		$("#page_form").submit();
	};
	
	function list_move(){
		$("#page_form").attr("action", "/bbs/notice/list.do");
		$("#page_form").submit();
	};
	
	function file_download() {
		$("#notice_file_down_form").submit();
	};
</script>


<form id="page_form" method="POST">
	<input type="hidden" id="pageIndex" name="pageIndex" value="${params.pageIndex}"/>
	<input type="hidden" id="seqKey" name="notice_key" value="${params.notice_key}">
	<input type="hidden" id="searchWord" name="search_word" value="${params.search_word}">
</form>


<section>
	<%@include file="/bannerLayer.jsp" %>
	
	<div class="content_area">
		<div class="tab_area">
      		<a href="/bbs/qna/list.do" >Q & A</a>
      		<a href="/bbs/data/list.do" >자료실</a>
      		<a href="/bbs/notice/list.do" class="on">공지사항</a>
	    </div>
		<div class="com_table">
			<div class="ask_area">
				<div class="title_area">
					<span class="ask_title fl">${detail.notice_title}</span>
					<div class="ask_detail fr">
						<span class="txt">${detail.reg_name}</span> <span class="txt">${detail.reg_date}</span> <span
							class="txt">${detail.notice_hit}</span>
					</div>
				</div>
				<c:if test="${detail.notice_file_org ne null and detail.notice_file_org ne ''}">
					<div class="down_area">
						<span class="file_name" onclick="file_download();">${detail.notice_file_org}</span>						
						<form id="notice_file_down_form" method="POST" action="/down/file.do">
							<input type="hidden" name="file_name" value="${detail.notice_file}"/>
							<input type="hidden" name="file_name_org" value="${detail.notice_file_org}"/>
							<input type="hidden" name="file_path" value="notice"/>
						</form>
					</div>
				</c:if>
				<div class="ask_content_area">${detail.notice_content}</div>
			</div>
			<div class="select_list">
				<div class="list_area">
					<span class="list_title bef">이전글</span>
					<c:choose>
						<c:when test="${prev.notice_key ne null and prev.notice_key ne ''}">
							<a href="javascript:;" onclick="detail_move(${prev.notice_key})"><span class="txt">${prev.notice_title}</span></a>
						</c:when>
						<c:otherwise><span class="txt">이전글이 없습니다.</span></c:otherwise>
					</c:choose>
				</div>
				<div class="list_area">
					<span class="list_title aft">다음글</span>
					<c:choose>
						<c:when test="${next.notice_key ne null and next.notice_key ne ''}">
							<a href="javascript:;" onclick="detail_move(${next.notice_key})"><span class="txt">${next.notice_title}</span></a>
						</c:when>
						<c:otherwise><span class="txt">다음글이 없습니다.</span></c:otherwise>
					</c:choose>	
				</div>
			</div>
		</div>
		<div class="list_btn">
			<span class="btn list fr" onclick="list_move()">목록</span>
		</div>
	</div>
</section>