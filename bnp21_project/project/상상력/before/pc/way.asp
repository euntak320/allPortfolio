<!-- #include virtual="/pc/common/top.asp" -->
<%
wa = "way"
%>
<body>
	<div id="sub">
<!-- #include virtual="/pc/common/sub_header.asp" -->
		<div class="contents">
			<div class="location clearFix">
				<div class="text-form">
					<h2>
						<strong>오시는 길</strong>
						<span>서울특별시 종로구 청계천로 159<br />(장사동) 세운전자상가 5층</span>
					</h2>
			</div>
			<div class="text">
				<br/><br/>
<!-- * Daum 지도 - 지도퍼가기 -->
<!-- 1. 지도 노드 -->
<div id="daumRoughmapContainer1473438108431" class="root_daum_roughmap root_daum_roughmap_landing"></div>

				<!--
					2. 설치 스크립트
					* 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.
				-->
				<script charset="UTF-8" class="daum_roughmap_loader_script" src="http://dmaps.daum.net/map_js_init/roughmapLoader.js"></script>
				
				<!-- 3. 실행 스크립트 -->
				<script charset="UTF-8">
					new daum.roughmap.Lander({
						"timestamp" : "1473438108431",
						"key" : "cygx",
						"mapWidth" : "815",
						"mapHeight" : "378"
					}).render();
				</script>
				</div>
				<div class="info clearFix">
					<dl>
						<dt><strong>지하철</strong></dt>
						<dd>
							종로3가역<br />
							1, 3호선 12번출구 이용 (도보 3분)<br />
							을지로4가역<br />
							2호선 1번출구 이용(도보 8분)<br />
							5호선 3번출구 이용(도보 8분)<br />
							을지로3가역<br />
							2, 3호선 5, 6번 출구 이용(10분)
						</dd>
					</dl>
					<dl>
						<dt><strong>자가용</strong></dt>
						<dd>
							인근 주차장<br />
							종묘공영주차장(유료)<br />
							서울특별시 종로구 종로 157(훈정동 2)<br />
							운영시간: 평일, 일요일 00:00 ~ 24:00,<br />
							토요일 00:00~ 22:00<br /><br />
						</dd>
					</dl>
					<strong>*주말의 경우, 주차장 이용의 어려움이 있을 수 있으니 가급적 대중교통을 이용해주세요.</strong>
				</div>
			</div>
		</div>
	</div>
<!-- #include virtual="/pc/common/bottom.asp" -->
</body>
</html>


