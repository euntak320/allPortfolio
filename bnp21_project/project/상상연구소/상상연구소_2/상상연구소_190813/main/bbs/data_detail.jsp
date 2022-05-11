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
		
		$("#page_form").attr("action", "/bbs/data/detail.do");
		$("#page_form").submit();
	};
	
	function list_move(){
		$("#page_form").attr("action", "/bbs/data/list.do");
		$("#page_form").submit();
	};
	
	function file_download(idx) {
		var formID = "file_down_form_" + idx;
		$("#" + formID).submit();
	};
</script>


<form id="page_form" method="POST">
	<input type="hidden" id="pageIndex" name="pageIndex" value="${params.pageIndex}"/>
	<input type="hidden" id="seqKey" name="data_key" value="${params.data_key}">
	<input type="hidden" id="searchWord" name="search_word" value="${params.search_word}">
</form>

<section>
	<%@include file="/bannerLayer.jsp" %>
	
	<div class="content_area">
		<div class="tab_area">
      		<a href="/bbs/qna/list.do" >Q & A</a>
      		<a href="/bbs/data/list.do" class="on">자료실</a>
      		<a href="/bbs/notice/list.do">공지사항</a>
	    </div>
		<div class="com_table">
			<div class="ask_area">
				<div class="title_area">
					<span class="ask_title fl">${detail.data_title}</span>
					<div class="ask_detail fr">
						<span class="txt">${detail.reg_name}</span>
						<span class="txt">${detail.reg_date}</span>
						<span class="txt">${detail.data_hit}</span>
					</div>
				</div>
				<c:if test="${fn:length(detailFile) > 0}">
					<c:forEach items="${detailFile}" var="result" varStatus="status">
						<div class="down_area">
							<span class="file_name" onclick="file_download(${status.index});">${result.bbs_file_org}</span>						
							<form id="file_down_form_${status.index}" method="POST" action="/down/file.do">
								<input type="hidden" name="file_name" value="${result.bbs_file}"/>
								<input type="hidden" name="file_name_org" value="${result.bbs_file_org}"/>
								<input type="hidden" name="file_path" value="data"/>
							</form>
						</div>
					</c:forEach>
				</c:if>
				<div class="ask_content_area">${detail.data_content}</div>
			</div>
			<div class="select_list">
				<div class="list_area">
					<span class="list_title bef">이전글</span>
					<c:choose>
						<c:when test="${prev.data_key ne null and prev.data_key ne ''}">
							<a href="javascript:;" onclick="detail_move('${prev.data_key}')"><span class="txt">${prev.data_title}</span></a>
						</c:when>
						<c:otherwise><span class="txt">이전글이 없습니다.</span></c:otherwise>
					</c:choose>
				</div>
				<div class="list_area">
					<span class="list_title aft">다음글</span>
					<c:choose>
						<c:when test="${next.data_key ne null and next.data_key ne ''}">
							<a href="javascript:;" onclick="detail_move(${next.data_key})"><span class="txt">${next.data_title}</span></a>
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