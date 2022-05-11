<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<section>
	<%@include file="/bannerLayer.jsp" %>
	
	<div class="content_area">
		<!-- <div class="title_area" id="lineup">
			<span class="title">상상 Line up</span>
			<div class="over_frame">
				<span class="line_up_img">상상라인업이미지</span>
				<span class="icon"></span>
			</div>
		</div> -->
		<div class="title_area" id="textbook">
			<span class="title">교재별 특징</span>
		</div>
		<div class="over_frame">
			<div class="com_table sub w1200">
				<table>
					<colgroup>
						<col style="width: 9%">
						<col style="width: 9%">
						<col style="width: 9%">
						<col style="width: 9%">
						<col style="width: 9%">
						<col style="width: 9%">
						<col style="width: 9%">
						<col style="width: 9%">
						<col style="width: 9%">
					</colgroup>
					<thead>
						<tr>
							<th>프로그램</th>
							<th>상품</th>
							<th>가격</th>
							<th>판매기간</th>
							<th>판매처</th>
							<th>EBS연계</th>
							<th>출처</th>
							<th>문제수</th>
							<th>회차</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowspan="2">실전 모의고사</td>
							<td>상상국어모의고사</td>
							<td>140,000원</td>
							<td>1~10월</td>
							<td>대성마이맥</td>
							<td>O</td>
							<td>신규</td>
							<td>각 45문항</td>
							<td>12회</td>
						</tr>
						<tr>
							<td>상상국어모의고사<br>(학원용)</td>
							<td></td>
							<td>5월/파이널</td>
							<td>학원용</td>
							<td>O</td>
							<td>신규</td>
							<td>각 45문항</td>
							<td>15회</td>
						</tr>
						<tr>
							<td>주간 학습</td>
							<td>상상력</td>
							<td></td>
							<td>1~10월</td>
							<td>학원용</td>
							<td>O (70%)</td>
							<td>상상re + 기출</td>
							<td>각 70문항 내외</td>
							<td>38회</td>
						</tr>
						<tr>
							<td rowspan="2">취약점 보완</td>
							<td>출제자의 눈</td>
							<td>비매품</td>
							<td>1월, 7월, 9월</td>
							<td>모의고사 특별 부록</td>
							<td>O (70%)</td>
							<td>상상re + 기출</td>
							<td>각 200문항 내외</td>
							<td>3회</td>
						</tr>
						<tr>
							<td>상상국어 N제</td>
							<td>70,000원(4권)</td>
							<td>1월 ~</td>
							<td>대성마이맥</td>
							<td></td>
							<td>상상re</td>
							<td>1,300제</td>
							<td>총 4권</td>
						</tr>
						<tr>
							<td>개인화 시스템</td>
							<td>상상알파국어</td>
							<td>4,900/월</td>
							<td>연중</td>
							<td>사이트결제</td>
							<td>큐레이션</td>
							<td>상상re+기출</td>
							<td>20,000제</td>
							<td></td>
						</tr>
					</tbody>
				</table>
				<span class="icon"></span>
			</div>
		</div>
		<div class="title_area mt40" id="schedule">
			<span class="title">일정표</span>
		</div>
		<div class="over_frame">
			<div class="com_table sub w1200">
				<table>
					<colgroup>
						<col style="width: 10%">
						<col style="width: 15%">
						<col style="width: 15%">
						<col style="width: 10%">
						<col style="width: 20%">
						<col style="width: 20%">
					</colgroup>
					<thead>
						<tr>
							<th></th>
							<th>상상국어모의고사<br>연간패키지</th>
							<th>상상국어모의고사 <br>(학원 현장강의용)</th>
							<th>상상국어N제</th>
							<th>상상력<br>(학원 현장강의용)</th>
							<th>상상알파국어</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1월</td>
							<td>1회+출제자의눈</td>
							<td></td>
							<td>출간</td>
							<td rowspan="2"><span class="season">시즌 1</span>수능 기초 개념 유형 접수하기(10주)</td>
							<td>버전 2.0 론칭</td>
						</tr>
						<tr>
							<td>2월</td>
							<td></td>
							<td></td>
							<td></td>
							<td>단계별 학습 매일 기출</td>
						</tr>
						<tr>
							<td>3월</td>
							<td>2회, 3회</td>
							<td></td>
							<td></td>
							<td><span class="season">시즌 2</span> EBS 수특 연계(6주)</td>
							<td rowspan="2">EBS 수능완성고난도 큐레이션</td>
						</tr>
						<tr>
							<td>4월</td>
							<td></td>
							<td></td>
							<td></td>
							<td class="border-right"></td>
						</tr>
						<tr>
							<td>5월</td>
							<td>4회, 5회</td>
							<td>6모 대비(4회)</td>
							<td></td>
							<td><span class="season">시즌 3</span>  6모 대비(4주)</td>
							<td>6모 대비 큐레이션</td>
						</tr>
						<tr>
							<td>6월</td>
							<td></td>
							<td></td>
							<td class="border-right"></td>
							<td></td>
							<td rowspan="3">파이널 전 총정리(7주)</td>
						</tr>
						<tr>
							<td>7월</td>
							<td>6회 + 출제자의 눈</td>
							<td></td>
							<td></td>
							<td rowspan="2" class="border-right"><span class="season ">시즌 4</span> 파이널 전 총정리(7주)</td>
						</tr>
						<tr>
							<td>8월</td>
							<td>7회, 8회</td>
							<td>1~2회</td>
							<td class="border-right"></td>
						</tr>
						<tr>
							<td>9월</td>
							<td>9, 10회  + 출제자의 눈</td>
							<td>3~6회</td>
							<td></td>
							<td rowspan="3">
							<span class="season">시즌 5</span> 수능 대비 파이널(11주)</td>
							<td rowspan="3">수능 대비 주간 모의고사</td>
						</tr>
						<tr>
							<td>10월</td>
							<td>11, 12회</td>
							<td>7~10회</td>
							<td class="border-right"></td>
						</tr>
						<tr>
							<td>11월</td>
							<td></td>
							<td>11회</td>
							<td class="border-right"></td>
						</tr>
					</tbody>
				</table>
				<span class="icon"></span>
			</div>
		</div>
	</div>
</section>