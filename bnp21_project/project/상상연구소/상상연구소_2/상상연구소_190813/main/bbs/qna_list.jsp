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

		$("#page_form").attr("action", "/bbs/qna/detail.do");
		$("#page_form").submit();
	};
	
	function search_move(){
		$("#searchWord").val($("#txt_keyword").val());
		page_move(1);
	};
	
	function page_move(pageNo){
		$("#pageIndex").val(pageNo);
		
		$("#page_form").attr("action", "/bbs/qna/list.do");
		$("#page_form").submit();
	};
	
	function reg_move(){
		$("#regType").val("i");
		
		$("#page_form").attr("action", "/bbs/qna/reg.do");
		$("#page_form").submit();
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
					<col width="40%">
					<col width="15%">
					<col width="16%">
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
					<c:choose>
						<c:when test="${fn:length(resultList) > 0}">
							<c:forEach	items="${resultList}" var="item" varStatus="status">
								<tr>
									<td>${item.rownum}</td>
									<td class="txt-left">
										<span class="result_title">
											<a href="javascript:;" onclick="detail_move(${item.qna_key})">
												<c:choose>
													<c:when test="${fn:length(item.qna_title) > 30}">${fn:substring(item.qna_title,0,30)}...</c:when>
													<c:otherwise>${item.qna_title}</c:otherwise>
												</c:choose>
											</a>
										</span>
										<c:if test="${item.qna_cmt_cnt > 0 }"><span class="title_result imp">답변완료</span></c:if>
									</td>
									<td>${item.reg_name}</td> 
									<td>${item.reg_date}</td>
									<td>${item.qna_hit}</td>
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
		
		<c:if test="${cneUserSession.user_id != null}">
			<div class="list_btn" onclick="reg_move();">
				<span class="btn fr">글쓰기</span>
			</div>
		</c:if>
		
		<div class="com_paging mt40">
			<ul>
				<ui:pagination paginationInfo="${paginationInfo}" type="front" jsFunction="page_move"/>
			</ul>
		</div>
	</div>
</section>