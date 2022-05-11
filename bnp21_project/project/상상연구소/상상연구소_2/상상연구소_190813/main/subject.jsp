<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<script type="text/javascript">
	$(document).ready(function() {
		$(".select_area").hide();
		
		$(".choice_txt.click").click(function() {
			$(".select_area").show();
		});
		$(".close_btn").click(function() {
			$(".select_area").hide();
		});

		$(".selection > .choice_box").click(function() {
			var id = $(this).attr("id");

			if (id.indexOf("year") > -1) {
				$("#area_year .choice_box").removeClass("on");
			} else if (id.indexOf("grade") > -1) {
				$("#area_grade .choice_box").removeClass("on");
			} else if (id.indexOf("regi") > -1) {
				$("#area_regi .choice_box").removeClass("on");
			}

			$(this).addClass("on");
		});
	});

	function search_book() {
		var v_year = "", v_grade = "", v_regi = "";

		$.each($("#area_year .choice_box"), function(idx, item) {
			if ($(item).attr("class").indexOf("on") > -1) {
				v_year = $(item).attr("id");
			}
		});

		if (v_year == "") {
			alert("학년을 선택해주세요.");
			return false;
		} else {
			v_year = v_year.indexOf("year_n") > -1 ? "n" : "nn";
		}

		$.each($("#area_grade .choice_box"), function(idx, item) {
			if ($(item).attr("class").indexOf("on") > -1) {
				v_grade = $(item).attr("id");
			}
		});

		if (v_grade == "") {
			alert("등급을 선택해주세요.");
			return false;
		} else {
			if (v_grade == "grade_1") {
				v_grade = "1";
			} else if (v_grade == "grade_2") {
				v_grade = "2";
			} else if (v_grade == "grade_3") {
				v_grade = "3";
			}
		}

		$.each($("#area_regi .choice_box"), function(idx, item) {
			if ($(item).attr("class").indexOf("on") > -1) {
				v_regi = $(item).attr("id");
			}
		});

		if (v_regi == "") {
			alert("수강유무를 선택해주세요.");
			return false;
		} else {
			if (v_regi == "regi_y") {
				v_regi = "y";
			} else if (v_regi == "regi_n") {
				v_regi = "n";
			}
		}

		$(".select_area").hide();
		$(".box_explain").hide();

		if (v_regi == "y") {
			$("#book2").show();
			$("#book4").show();
			//$("#book5").show();
			//$("#book6").show();
			$("#book7").show();
			$("#book8").show();

			if (v_year == "n") {
				$("#book6").hide();

				if (v_grade != "3") {
					$("#book7").hide();
				}
			}
		} else {
			$("#book1").show();
			$("#book3").show();
			$("#book6").show();
			$("#book7").show();

			if (v_year == "n") {
				$("#book6").hide();
				$("#book7").hide();

				if (n_grade == "1") {
					$("#book8").show();
				}
			}
		}
	};

	function subject_search_clear() {
		$(".choice_box").removeClass("on");
		$.each($(".box_explain"), function(idx) {
			var id = idx + 1;
			$("#book" + id).show();
		});

		$(".select_area").hide();
	};
	
	function goAcademy() {
		location.href = "/academy.do";
	};
</script>

<section>
	<%@include file="/bannerLayer.jsp" %>
	
	<div class="content_area">
		<!-- <div class="choice_area">
			<span class="choice_txt on fl">전체보기</span> 
			<span class="choice_txt click fl">내게 맞는 교재 찾기</span>
		</div> -->
		<div class="book_list_area">
			<div class="box_explain" id="book1">
				<span class="box_img one fl">책이미지</span>
				<div class="txt_list fr">
					<div class="info_title_area">
						<span class="title fl">상상국어모의고사 연간패키지
							<span class="small_txt">(온라인 판매용)</span>
						</span> 
						<a href="http://www.mimacstudy.com/ex/ipsi/sangsang/2018/1218/147258_indexfull.ds#evtPack" target="_blank" class="deatil_view fr">상세보기</a>
					</div>
					<span class="sub_title">대치동 퀄리티, 집에서 풀자!<br> <strong>수능출제자가 만든 국내 유일 모의고사</strong></span>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>특징</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 수능 8회 출제자 강상희 박사와 서울대, 연·고대 박사급 출제진이 만든 최고의 모의고사</span> 
								<span class="indent">· 2020학년도 EBS 수특·수완, 6모·9모 출제 경향 반영</span> 
								<span class="indent">· 수능 유형의 개념 정립부터 고난도 문제까지</span> 
								<span class="indent">· 변화하는 수능 국어에 완벽 대응</span>
								<span class="indent">· 대성마이맥 김민경 강사 해설 강의 수록</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>추천</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 대치동 현강 수강이 어려운 학생(현강용과 같은 퀄리티, 난이도)</span> 
								<span class="indent">· 1월부터 수능직전까지 수능 국어 문제를 꾸준히 풀고 싶은 학생</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>상품구성</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 상상국어 모의고사 12회분(연 7회 배송)</span> 
								<span class="indent">· &lt;수능 국어의 정석&gt; : 수능 국어 개념서(단행본)</span> 
								<span class="indent">· &lt;출제자의 눈&gt; : 연 3회, 120페이지 분량, 독서/문학 중심으로 편성</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<span class="txt blue_bold bold"> &lt;상상국어 모의고사&gt; 온라인	판매용과 현장강의용 문제는 중복되지 않습니다. <br> 온라인 판매용과 현장강의용 모두 동일한 출제시스템으로
							개발되었으며, 퀄리티 또한 동일합니다.
						</span>
					</div>
				</div>
			</div>
			<div class="box_explain" id="book2">
				<span class="box_img two fl">책이미지</span>
				<div class="txt_list fr">
					<div class="info_title_area">
						<span class="title fl">상상국어 모의고사
							<span class="small_txt">(학원 현장강의용)</span>
						</span>
						<span class="deatil_view fr search" onclick="goAcademy();">학원찾기</span>
					</div>
					<span class="sub_title">수능 국어 1등급, 상상하면 반드시 오른다!<br> <strong>최고의 강사가 해설하는 최고의 모의고사</strong></span>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>특징</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 수능 국어 현장 강의용 &lt;상상국어 모의고사&gt;</span> 
								<span class="indent">· 고퀄리티 문제로 평가원 시험 대비</span> 
								<span class="indent">· 2020학년도 EBS 수특·수완, 6모·9모 츨제 경향 반영</span> 
								<span class="indent">· 1등급을 위한 고난도 지문 완벽 대비</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>추천</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 학원에서 체계적으로 공부하는 학생</span> 
								<span class="indent">· 고퀄리티의 문제와 강의를 통해 수능 국어 1등급을 목표로 하는 학생</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>상품구성</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 평가원 6모 대비 5월 모의고사 4회분 : 2019년 5월 4일 (토) OPEN</span> 
								<span class="indent">· 수능 대비 파이널 모의고사  11회분 : 2019년 8월 24일(토) OPEN</span>
								<span class="indent">· 주간 &lt;상상력&gt; : 각 회차별 모의고사 연계 교재/별매품</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<span class="txt blue_bold bold"> &lt;상상국어 모의고사&gt; 온라인 판매용과 현장강의용 문제는 중복되지 않습니다.<br /> 온라인 판매용과 현장강의용 모두 동일한 출제시스템으로 개발되었으며, 퀄리티 또한 동일합니다.
						</span>
					</div>
				</div>
			</div>
			<div class="box_explain" id="book3">
				<span class="box_img three fl">책이미지</span>
				<div class="txt_list fr">
					<div class="info_title_area">
						<span class="title fl">상상국어 N제</span> 
						<a href="http://www.mimacstudy.com/ex/ipsi/sangsang/2019/0125/470029_indexfull.ds" target="_blank" class="deatil_view fr">상세보기</a>
					</div>
					<span class="sub_title">이제 어느 영역도 만만치 않다.<br> <strong>취약점 집중 보완 포커스 트레이닝</strong></span>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>특징</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 영역별 취약점을 단기간 집중 보완하는 포커스 트레이닝 프로그램</span>
								<span class="indent">· &lt;상상국어 모의고사&gt;의 기출문제 중 최신 트렌드에 맞는 필수 문제 1,300제</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>추천</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 영역별 취약점을 단기간 보완하고 싶은 학생</span> 
								<span class="indent">· 고퀄리티의 많은 문항을 지속적으로 풀어보고 싶은 학생</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>상품구성</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 화작,문법,독서,문학 총 4권</span>
								<span class="indent">· 4권 세트 및 영역별 낱권 구매 가능</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<span class="txt blue_bold bold"> &lt;상상국어 N제&gt; 와 주간 &lt;상상력&gt;의 문제는 중복되는 문제가 있습니다. 자신의 커리큘럼에 따라 상품을 선택하세요. </span>
					</div>
				</div>
			</div>
			<div class="box_explain" id="book4">
				<span class="box_img four fl">책이미지</span>
				<div class="txt_list fr">
					<div class="info_title_area">
						<span class="title fl">상상력
							<span class="small_txt">(학원 현장강의용)</span>
						</span>
						<span class="deatil_view fr search moblie" onclick="goAcademy();">학원찾기</span> 
						<!-- <span class="deatil_view fr cal">일정보기</span> -->
					</div>
					<span class="sub_title">수능 국어의 A to Z<br> <strong>상상국어가 제안하는 수능 국어 1등급 커리큘럼</strong></span>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>특징</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 수능 국어를 완벽 대비하는 38주 주간 학습 프로그램</span> 
								<span class="indent">· EBS 수특·수완, 6모·9모, &lt;상상국어모의고사&gt;완벽 연계</span> 
								<span class="indent">· 모의고사의 학습 효과를 배가시킬 수 있는 확장, 심화 학습용 문항 제공(주 70 ~ 80문제)</span> 
								<span class="indent">· &lt;상상국어 모의고사 (학원 현장강의용)&gt;와 함께 공부하는 최고의 교재</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>추천</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· &lt;상상국어 모의고사 (학원 현장강의용)&gt;를 수강하는 학생</span> 
								<span class="indent">· 고퀄리티의 문제로 수능감을 유지하고, 취약점 보완 및 고난도 문제를 풀어보고 싶은 학생</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>상품구성</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 38회분. 주1회 70+α 문항</span>
								<span class="indent">· 총 5시즌으로 구성, 시즌별 구매 가능</span>
								<span class="indent sub">(시즌별 세부 내용은 '프로그램 → 일정표' 참조)</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<span class="txt blue_bold bold">&lt;상상국어 N제&gt; 와 주간&lt;상상력&gt;의 문제는 중복되는 문제가 있습니다. 자신의 커리큘럼에 따라 상품을 선택하세요. </span>
					</div>
				</div>
			</div>
			<!-- <div class="box_explain" id="book5">
				<span class="box_img fl">책이미지</span>
				<div class="txt_list fr">
					<div class="info_title_area">
						<span class="title fl">상상매미 <span class="small_txt">(학원전용상품)</span>
						</span> <span class="deatil_view fr">상세보기</span>
					</div>
					<span class="sub_title">매일 아침 30분,<br> <strong>국어
							점수가 오르는 진짜 국어 공부</strong></span>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>특징</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 매일 30분, 고퀄리티 10문항의 문제로 수능 국어를 정복</span> <span
									class="indent">· 단기간에 습득할 수 없는 독해력을 매일 훈련하는 시스템</span> <span
									class="indent">· 수능과 유사한 시험지 형태로 제공</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>추천</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 수능 국어의 기본부터 고난도 문제까지 꾸준히 연습하고 싶은
									학생</span> <span class="indent">· 독해력을 체계적으로 체회하고 싶은 학생</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>상품구성</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 주 5회(하루 1회분)연간 제공</span> <span
									class="indent">· 독서/문학 중심의 문제 구성 + 문법/화작 트레이닝</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<span class="txt blue_bold bold"> <상상국어 N제> <상상력>
							<상상매미>의 문제는 중복됩니다, 자신의 커리큘럽에 따라 상품을 선택하세요. </span>
					</div>
				</div>
			</div>
			<div class="box_explain" id="book6">
				<span class="box_img fl">책이미지</span>
				<div class="txt_list fr">
					<div class="info_title_area">
						<span class="title fl">상상 EBS 연계문제집</span> <span
							class="deatil_view fr">상세보기</span>
					</div>
					<span class="sub_title">EBS를 정복하는 가장 효율적인 방법<br> <strong>상상의
							고퀄리티 문제로 내신과 수능을 동시에 대비하다</strong></span>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>특징</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· EBS 수특 연계 문제집 중 단연 최고 퀄리티의 문제 제공></span>
								<span class="indent">· 모의고사 출제 노하우가 담긴 EBS 연계 문제 제공</span> <span
									class="indent">· 수능과 내신을 동시에 대비</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>추천</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 내신과 수능을 동시에 대비해야 하는 학생</span> <span
									class="indent">· EBS 지문에서 나올 수 있는 다량의 수능형 문제를 풀고 싶은 학생</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>상품구성</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 독서 1권, 문학 2권(상,하)</span> <span
									class="indent">· EBS 수능특강 전 지문 탑재</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<span class="txt blue_bold bold"> &lt;상상국어 모의고사&gt; 온라인
							판매용과 현장강의용 문제는 중복되지 않습니다. 온라인 판매용과 현장강의용 모두 동일한 출제시스템으로 개발되었으며,
							퀄리티 또한 동일합니다. </span>
					</div>
				</div>
			</div> -->
			<div class="box_explain" id="book7">
				<span class="box_img five fl">책이미지</span>
				<div class="txt_list fr">
					<div class="info_title_area">
						<span class="title fl">상상국어 수능기출문제집</span>
						<a href="http://www.yes24.com/Product/goods/67369955?scode=032&OzSrank=3" class="deatil_view fr" target="_blank">상세보기</a>
					</div>
					<span class="sub_title">상상이 만들면 다르다.<br> <strong>수능
							출제자의 시각으로 만든 국내 유일 기출문제집</strong></span>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>특징</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 변화하는 수능에 맞춰진 최적의 기출 공부법 제공</span> 
								<span class="indent">· 평가원의 시각으로 만든 최고의 해설 탑재</span> 
								<span class="indent">· 천재교육과 협업을 통한 최적의 편집 구성</span> 
								<span class="indent">· 영역별 심화문제 제공</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>추천</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 기출문제를 완독해야 하는 모든 수험생</span> 
								<span class="indent">· 최신 경향에 맞는 기출문제로 단기간 기출을 정복하고 싶은 학생</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>상품구성</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 독서/문학/화작문 총 3권</span> 
								<span class="indent">· 평가원 기출문제 + 영역별 상상국어 심화문제</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="box_explain" id="book8">
				<span class="box_img notebook fl">책이미지</span>
				<div class="txt_list fr">
					<div class="info_title_area">
						<span class="title fl">상상알파국어</span>
						<a href="http://www.sangsangalpha.com" target="_blank" class="deatil_view fr" >상세보기</a>
					</div>
					<span class="sub_title">수능 국어를 위한 모든 콘텐츠를 담다.<br> <strong>수능 국어 습관을 만드는 개인 맞춤형 온라인 문제은행</strong></span>
					<div class="sub_area">
						<div class="blue_btn fl"> 
							<span>특징</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 10개년 평가원, 교육청 학력평가 문제 모두 탑재</span> 
								<span class="indent">· &lt;상상국어 모의고사&gt; 기출문제 탑재(일부 문제는 내부 정책에 따라 제공되지 않습니다.)</span> 
								<span class="indent">· 리트 문제 탑재</span> 
								<span class="indent">· 단계별 학습, EBS 연계문제, 미니모의고사, 개인 맞춤형 문제</span> 
								<span class="indent">· 모든 문제 출력 서비스</span> 
								<span class="indent">· 학습 진도 관리</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>추천</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 예비 고 1학년부터 N수생까지 수능 콘텐츠가 필요한 모든 학생</span>
								<span class="indent">· 자신에게 맞는 수능 기출문제를 추천받고 싶은 학생</span>
							</p>
						</div>
					</div>
					<div class="sub_area">
						<div class="blue_btn fl">
							<span>상품구성</span>
						</div>
						<div class="box_list_area fr">
							<p>
								<span class="indent">· 온라인 사이트</span> 
								<span class="indent">· 수능 국어 학습 문제 20,000제 탑재</span> 
								<span class="indent">· 월 4,900원 / 연 24,500원</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- <div class="select_area">
	<div class="top_area">
		<span>찾고 싶은 교재의 조건을 설정해주세요</span>
		<span class="close_btn">팝업닫기</span>
	</div>
	<div class="content_area layer">
		<div class="select_content">
			<span class="select_title fl">학년</span>
			<div class="selection fr" id="area_year">
				<span class="choice_box fl" id="year_m3">중3</span>
				<span class="choice_box fl" id="year_h1">고1</span>
				<span class="choice_box fl" id="year_h2">고2</span>
				<span class="choice_box fl" id="year_h3">고3</span>
				<span class="choice_box fl" id="year_n">N수</span>
			</div>
		</div>
		<div class="select_content">
			<span class="select_title fl">등급</span>
			<div class="selection fr" id="area_grade">
				<span class="choice_box fl" id="grade_1">1-2 등급</span>
				<span class="choice_box fl" id="grade_2">3-5 등급</span>
				<span class="choice_box fl" id="grade_3">6-9 등급</span>
			</div>
		</div>
		<div class="select_content">
			<span class="select_title fl">수강유무</span>
			<div class="selection fr" id="area_regi">
				<span class="choice_box fl" id="regi_y">유</span>
				<span class="choice_box fl" id="regi_n">무</span>
			</div>
		</div>
		<div class="btm-frame">
			<div class="btm-area" onclick="search_book()">
				<span>검색하기</span>
			</div>
			<div class="btm-area refrash" onclick="subject_search_clear()">
				<span>초기화</span>
			</div>
		</div>
	</div>
</div> -->