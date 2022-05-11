<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<script type="text/javascript">
	$(document).ready(function(){
		$("#txt_keyword").keydown(function(key) {
			if (key.keyCode == 13) {
				search_move();
			}
		});
	});
	
	function detail_move(key){
		$("#seqKey").val(key);
		$("#searchWord").val($("#txt_keyword").val());

		$("#page_form").attr("action", "/bbs/data/detail.do");
		$("#page_form").submit();
	};
	
	function search_move(){
		$("#searchWord").val($("#txt_keyword").val());
		page_move(1);
	};
	
	function page_move(pageNo){
		$("#pageIndex").val(pageNo);
		
		$("#page_form").attr("action", "/bbs/data/list.do");
		$("#page_form").submit();
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
		<div class="search_frame">
			<div class="search_area fr">
				<div class="input_area fl">
					<input type="text" id="txt_keyword" value="${params.search_word}" title="검색바">
				</div>
				<span class="search fr">검색</span>
			</div>
		</div>
		<div class="com_table">
			<table>
				<colgroup>
					<col width="15%">
					<col width="50%">
					<col width="10%">
					<col width="15%">
					<col width="15%">
				</colgroup>
				<thead>
					<tr>
						<th>번호</th>
						<th>제목</th>
						<th>작성자</th>
						<th>날짜</th>
						<th>조회</th>
					</tr>
				</thead>
				<tbody>
					<c:if test="${dataVO.search_word eq null or dataVO.search_word eq ''}">
						<c:forEach items="${resultListAn}" var="item" varStatus="status">
							<tr>
								<td><span class="notice">공지</span></td>
								<td class="txt-left">
									<a href="javascript:;" onclick="detail_move(${item.data_key})">${item.data_title}</a>
								</td>
								<td>${item.reg_name}</td>
								<td>${item.reg_date}</td>
								<td>${item.data_hit}</td>
							</tr>
						</c:forEach>
					</c:if>
					<c:choose>
						<c:when test="${fn:length(resultList) > 0}">
							<c:forEach	items="${resultList}" var="item" varStatus="status">
								<tr>
									<td>${item.rownum}</td>
									<td class="txt-left">
										<a href="javascript:;" onclick="detail_move(${item.data_key})">${item.data_title}</a>
									</td>
									<td>${item.reg_name}</td>
									<td>${item.reg_date}</td>
									<td>${item.data_hit}</td>
								</tr>								
							</c:forEach>
						</c:when>
						<c:otherwise>
							<tr>
								<td>등록된 게시글이 없습니다.</td>
							</tr>
						</c:otherwise>
					</c:choose>
				</tbody>
			</table>
		</div>
		
		
		<div class="com_paging mt40">
			<ul>
				<ui:pagination paginationInfo="${paginationInfo}" type="front" jsFunction="page_move"/>
			</ul>
		</div>
	</div>
</section>