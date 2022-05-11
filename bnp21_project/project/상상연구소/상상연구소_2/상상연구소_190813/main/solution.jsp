<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<script type="text/javascript">
	$( function() {
	  $( "#dialog_service" ).dialog({
	  	width: 500,
		title: "서비스 이용안내",
	  });
	} );
	
	function page_move(pageNo){  
		$("#pageIndex").val(pageNo);
		
		$("#page_form").attr("action", "/solution.do");
		$("#page_form").submit();
	};
	
	function search(){
		$("#searchWord").val($("#search_word").val());
		
		page_move(1);
	};
	
	function detail(key){
		$("#solution_key").val(key);

		$("#page_form").attr("action", "/solution_detail.do");
		$("#page_form").submit();
	}

</script>

<form id="page_form" method="POST">
	<input type="hidden" id="pageIndex" name="pageIndex" value="${params.pageIndex}"/>
	<input type="hidden" id="searchWord" name="search_word" value="${params.search_word}">
	
	<input type="hidden" id="solution_key" name="solution_key" value="${params.solution_key}">
</form>

<section>
	<div class="content_area" style="padding-bottom:267px;">
		<div class="title_area" >
			<span class="title">해설강의</span>
		</div>
		<div class="search_frame">
			<div class="search_area fr">
				<div class="input_area fl">
					<input type="text" id="search_word" value="${params.search_word}" title="검색바">
				</div>
				<span class="search fr" onclick="search()">검색</span>
			</div>
		</div>
		<div class="video_box_area"> 
			<c:choose>
				<c:when test="${!empty resultList}">
					<c:forEach items="${resultList}" var="result" varStatus="status">
						<div class="video_box" onclick="detail('${result.solution_key}')">
							<div class="img_area">
								<img style="width:190px; height: 120px;" src="/upload/solution/${result.solution_img_path}" />
							</div>
							<div class="video_txt">
								<span class="title_txt">${result.solution_title}</span>
								<span class="reg_data">${result.reg_date}</span>
							</div>
							<span class="view_counting">조회 ${result.solution_hit}</span>
						</div>
					</c:forEach>
				</c:when>
				<c:otherwise>
					<div class="video_box">
						<div class="video_txt">
							<span class="title_txt">게시물이 없습니다.</span>
						</div>
					</div>
				</c:otherwise>
			</c:choose>
		</div>
	
		<div class="com_paging mt40">
			<ul>
				<ui:pagination paginationInfo="${paginationInfo}" type="front" jsFunction="page_move"/>
			</ul>
		</div>
	
	</div>
</section>

<!-- <div id="dialog_service" title="서비스 이용안내" style="display: none!important;">
  <div class="dialog_area">
  	<span class="dialog_txt">본 서비스는 로그인 후 이용하실 수 있습니다.</span>
  	<a href="login.do">로그인</a>
  </div>
</div> -->