<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=cb8f067f31338d9c7d5ffcabda366a0e&libraries=services,clusterer,drawing"></script>
<script type="text/javascript">
	$(document).ready(function() {
		$("#sel_sido").change(function() {
			change_sido("sel", $(this).val());
		});
	
		$("#txt_word").keydown(function(key) {
			if (key.keyCode == 13) {
				search_move();
			}
		});
	});
	
	function change_sido(clickType, sido){
		$.ajax({
			url: "/json/gungu.ajax",
			type: "POST",
			data: {
				search_sido: sido
			},
			dataType: "json",
			success: function(data) {
				var html = "<option value=''>시/구/군 선택</option>";
				
				$.each(data.result, function(idx, item) {
					html += "<option value='" +item.aca_gungu+ "'>" +item.aca_gungu+ "</option>";
				});
				
				$("#sel_gungu").html(html);
				
				if (clickType == "map") {
					$("#sel_sido option[value='" +sido+ "']").attr("selected","selected");
					search_move();
				}
			}
		});
	};
	
	function map_open(name, x, y){		
		$("#dialog_map").dialog({
			width: 520,
			title: name,
            open: function() {
            	var options = {
           			center: new daum.maps.LatLng(x,y),
           			level: 3
           		};           		
           		var map = new daum.maps.Map($("#map")[0], options);
           		
           		var markerPosition = new daum.maps.LatLng(x,y);
           		var marker = new daum.maps.Marker({
           			position: markerPosition
           		});
           		
           		marker.setMap(map);
            }
		});
	};
	
	function page_move(pageNo){
		$("#pageIndex").val(pageNo);
		
		$("#page_form").attr("action", "/academy.do");
		$("#page_form").submit();
	};
	
	function search_move() {
		$("#searchSido").val($("#sel_sido option:selected").val());
		$("#searchGungu").val($("#sel_gungu option:selected").val());
		$("#searchWord").val($("#txt_word").val());
		
		page_move(1);
	};
</script>


<form id="page_form" method="POST">
	<input type="hidden" id="pageIndex" name="pageIndex" value="${params.pageIndex}"/>
	<input type="hidden" id="searchSido" name="search_sido" value="${params.search_sido}">
	<input type="hidden" id="searchGungu" name="search_gungu" value="${params.search_gungu}">
	<input type="hidden" id="searchWord" name="search_word" value="${params.search_word}">
</form>

<section>
	<%@include file="/bannerLayer.jsp" %>
	
	<div class="content_area">
		<div class="find_area">
			<div class="search_area_sub fl">
				<span class="title">모의고사 시행학원 찾기</span>
				<div class="input_area">
					<span class="title">지역 : </span>
					<div class="input_frame fl">
						<div class="com_input">
							<select class="" name="" id="sel_sido">
								<option value="">도/시 선택</option>
								<c:forEach items="${sidoList}" var="result">
									<option value="${result.aca_sido}" <c:if test="${result.aca_sido eq param.search_sido}">selected</c:if>>${result.aca_sido}</option>
								</c:forEach>
							</select>
						</div>
					</div>
					<div class="input_frame fr">
						<div class="com_input">
							<select class="" name="" id="sel_gungu">
								<option value="">시/구/군 선택</option>
								<c:forEach items="${gunguList}" var="result">
									<option value="${result.aca_gungu}" <c:if test="${result.aca_gungu eq param.search_gungu}">selected</c:if>>${result.aca_gungu}</option>
								</c:forEach>
							</select>
						</div>
					</div>
					<div class="com_input_sub">
						<div class="input fl">
							<input type="text" name="" value="${param.search_word}" id="txt_word">
						</div>
						<span class="find_search fr" onclick="search_move()">검색</span>
					</div>
				</div>
			</div>
			<div class="search_area_sub map fr">
				<a href="javascript:;" class="point seoul" onclick="change_sido('map','서울')">
					<img src="/assets/main/images/seoul_normal.png" onmouseover="this.src='/assets/main/images/seoul.png'" onmouseout="this.src='/assets/main/images/seoul_normal.png'" />
				</a>
				<a href="javascript:;" class="point incheon" onclick="change_sido('map','인천')">
					<img src="/assets/main/images/incheon_normal.png" onmouseover="this.src='/assets/main/images/incheon.png'" onmouseout="this.src='/assets/main/images/incheon_normal.png'" />
				</a> 
				<a href="javascript:;" class="point gyeonggi" onclick="change_sido('map','경기')">
					<img src="/assets/main/images/gyeonggi_normal.png" onmouseover="this.src='/assets/main/images/gyeonggi.png'" onmouseout="this.src='/assets/main/images/gyeonggi_normal.png'" />
				</a>
				<a href="javascript:;" class="point gangwon" onclick="change_sido('map','강원')">
					<img src="/assets/main/images/gangwon_normal.png" onmouseover="this.src='/assets/main/images/gangwon.png'" onmouseout="this.src='/assets/main/images/gangwon_normal.png'" />
				</a>
				<a href="javascript:;" class="point chungbok" onclick="change_sido('map','충북')">
					<img src="/assets/main/images/chungbok_normal.png" onmouseover="this.src='/assets/main/images/chungbok.png'" onmouseout="this.src='/assets/main/images/chungbok_normal.png'" />
				</a>
				<a href="javascript:;" class="point chungnam" onclick="change_sido('map','충남')">
					<img src="/assets/main/images/chungnam_normal.png" onmouseover="this.src='/assets/main/images/chungnam.png'" onmouseout="this.src='/assets/main/images/chungnam_normal.png'" />
				</a>
				<a href="javascript:;" class="point daejeon" onclick="change_sido('map','대전')">
					<img src="/assets/main/images/daejeon_normal.png" onmouseover="this.src='/assets/main/images/daejeon.png'" onmouseout="this.src='/assets/main/images/daejeon_normal.png'" />
				</a>
				<a href="javascript:;" class="point gyeongbuk" onclick="change_sido('map','경북')">
					<img src="/assets/main/images/gyeongbok_normal.png" onmouseover="this.src='/assets/main/images/gyeongbok.png'" onmouseout="this.src='/assets/main/images/gyeongbok_normal.png'" />
				</a>
				<a href="javascript:;" class="point gyeongnam" onclick="change_sido('map','경남')">
					<img src="/assets/main/images/gyeongnam_normal.png" onmouseover="this.src='/assets/main/images/gyeongnam.png'" onmouseout="this.src='/assets/main/images/gyeongnam_normal.png'" />
				</a>
				<a href="javascript:;" class="point deagu" onclick="change_sido('map','대구')">
					<img src="/assets/main/images/deagu_normal.png" onmouseover="this.src='/assets/main/images/deagu.png'" onmouseout="this.src='/assets/main/images/deagu_normal.png'" />
				</a>
				<a href="javascript:;" class="point ulsan" onclick="change_sido('map','울산')">
					<img src="/assets/main/images/ulsan_normal.png" onmouseover="this.src='/assets/main/images/ulsan.png'" onmouseout="this.src='/assets/main/images/ulsan_normal.png'" />
				</a>
				<a href="javascript:;" class="point busan" onclick="change_sido('map','부산')">
					<img src="/assets/main/images/busan_normal.png" onmouseover="this.src='/assets/main/images/busan.png'" onmouseout="this.src='/assets/main/images/busan_normal.png'" />
				</a>
				<a href="javascript:;" class="point jeobuk" onclick="change_sido('map','전북')">
					<img src="/assets/main/images/jeobuk_normal.png" onmouseover="this.src='/assets/main/images/jeobuk.png'" onmouseout="this.src='/assets/main/images/jeobuk_normal.png'" />
				</a>
				<a href="javascript:;" class="point jeonam" onclick="change_sido('map','전남')">
					<img src="/assets/main/images/jeonam_normal.png" onmouseover="this.src='/assets/main/images/jeonam.png'" onmouseout="this.src='/assets/main/images/jeonam_normal.png'" />
				</a>
				<a href="javascript:;" class="point gwangju" onclick="change_sido('map','광주')">
					<img src="/assets/main/images/gwangju_normal.png" onmouseover="this.src='/assets/main/images/gwangju.png'" onmouseout="this.src='/assets/main/images/gwangju_normal.png'" />
				</a>
				<a href="javascript:;" class="point jeju" onclick="change_sido('map','제주')">
					<img src="/assets/main/images/jeju_normal.png" onmouseover="this.src='/assets/main/images/jeju.png'" onmouseout="this.src='/assets/main/images/jeju_normal.png'" />
				</a>
			</div>
		</div>
		<div class="com_table sub mt60">
			<table>
				<colgroup>
					<col style="width: 15%">
					<col style="width: 50%">
					<col style="width: 15%">
					<col style="width: 15%">
					<col style="width: 15%">
				</colgroup>
				<thead>
					<tr>
						<th>학원명</th>
						<th>주소</th>
						<th>전화번호</th>
						<th>담당 선생님</th>
						<th>지도보기</th>
					</tr>
				</thead>
				<tbody>
					<c:choose>
						<c:when test="${fn:length(resultList) > 0}">
							<c:forEach items="${resultList}" var="result">
								<tr>
									<td>${result.aca_name}</td>
									<td>${result.aca_addr}</td>
									<td>${result.aca_tel}</td>
									<td>${result.aca_teach}</td>
									<td><span class="look_map" onclick="map_open('${result.aca_name}',${result.aca_x}, ${result.aca_y})">지도보기</span></td>
								</tr>
							</c:forEach>
						</c:when>
						<c:otherwise>
							<tr><td colspan="5">등록된 학원이 없습니다.</td></tr>
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

<div id="dialog_map" style="display:none;">
	<div id="map" style="width:480px; height:420px;"></div>
</div>