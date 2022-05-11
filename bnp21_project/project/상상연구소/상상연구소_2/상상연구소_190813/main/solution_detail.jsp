<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<script type="text/javascript">
	
	function page_move_detail(key){
		$("#solution_key").val(key);
		
		$("#actionForm").attr("action", "/solution_detail.do");
		$("#actionForm").submit();
	};
	
	function listPage_move(){
		$("#actionForm").attr("action", "/solution.do");
		$("#actionForm").submit();
	};
	
	function file_download(filename, orgfilename) {
		$("#file_name").val(filename);
		$("#file_name_org").val(orgfilename);
		$("#file_path").val("solution");
		$("#download").submit();
	};
</script>

<form id="actionForm" method="POST">
	<input type="hidden" id="pageIndex" name="pageIndex" value="${params.pageIndex}"/>
	<input type="hidden" id="search_word" name="search_word" value="${params.search_word}"/>
	<input type="hidden" id="solution_key" name="solution_key" value="${params.solution_key}"/>
</form>

<form name="download" id="download" action="/down/file.do" method="POST">
	<input type="hidden" id="file_name" name="file_name" value="" />
	<input type="hidden" id="file_name_org" name="file_name_org" value="" />
	<input type="hidden" id="file_path" name="file_path" value="" />
</form>

<section>
	<div class="content_area">
		<div class="title_area">
			<span class="title">해설강의</span>
		</div>
		<div class="com_table">
			<div class="ask_area">
				<div class="title_area">
					<span class="ask_title fl">${detail.solution_title}</span>
					<div class="ask_detail fr">
						<span class="txt">${detail.reg_name}</span> <span class="txt">${detail.reg_date}</span> 
						<span class="txt">조회수 ${detail.solution_hit}</span>
					</div>
				</div>
				<div class="down_area">
					<c:if test="${!empty fileList}">	
						<c:forEach items="${fileList}" var="result" varStatus="status">
							<a href="javascript:;" onclick="file_download('${result.bbs_file}','${result.bbs_file_org}')">
								<span class="file_name">${result.bbs_file_org}</span>
							</a>
						</c:forEach>
					</c:if>	
				</div>
				<div class="ask_content_area">
					<div class="video_frame" style="width:50%; margin: 0 auto;">
						<video width="640" height="360" src="/upload/solution/${detail.solution_video_path}" controls="controls">이 브라우저는 동영상을 지원하지 않습니다.</video>
					</div>
				</div>
			</div>
			<div class="select_list">
				
				<c:choose>
					<c:when test="${prev eq null}">
						<div class="list_area">
							<span class="list_title bef">이전글</span> 
							<span class="txt">이전글이 존재하지 않습니다.</span>
						</div>
					</c:when>
					<c:otherwise>
						<div class="list_area" onclick="page_move_detail(${prev.solution_key});">
							<span class="list_title bef">이전글</span> 
							<span class="txt">${prev.solution_title}</span>
						</div>
					</c:otherwise>
				</c:choose>

				<c:choose>
					<c:when test="${next eq null}">
						<div class="list_area">
							<span class="list_title aft">다음글</span>  
							<span class="txt">다음글이 존재하지 않습니다.</span>
						</div>
					</c:when>
					<c:otherwise>
						<div class="list_area" onclick="page_move_detail(${next.solution_key});">
							<span class="list_title aft">다음글</span> 
							<span class="txt">${next.solution_title}</span>
						</div>
					</c:otherwise>
				</c:choose>
				
			</div>
		</div>
		<div class="list_btn">
			<span class="btn list fr" onclick="listPage_move()">목록</span>
		</div>
	</div>
</section>