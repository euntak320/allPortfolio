<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "KR_COMPANY_52";
?>
<!DOCTYPE html>
<html lang="ko">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- META [S] -->
	<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/meta.php"; ?>
	<!-- META [E] -->

	<title>사업소개 | 기술분야</title>

	<!-- SCRIPT_COMPANY [S] -->
	<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/script_company.php"; ?>
	<!-- SCRIPT_COMPANY [E] -->
</head>

<body>
    <div id="wrap">
		<!-- HEADER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/header.php"; ?>
		<!-- HEADER [E] -->

		<!-- GNB [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/gnb.php"; ?>
		<!-- GNB [E] -->
    
        <!-- content [S] -->
        <main class="company tech">
            <div class="keyvisual_area">
                <div class="keyvisual_txt">
                    <h1>Technology</h1>
                    <h2>내일의 환경기술을 제시하는 에코비트</h2>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>사업소개</span>
                    <span>기술지원</span>
                </div>
                <div class="keyvisual_scroll_down">
                    <span>SCROLL DOWN</span>
                </div>
            </div>
            <section class="content_area">
                <div class="main_tab_area">
                    <ul>
                        <li class="green"><a href="/kr/company/technology">R&amp;D</a></li>
                        <li class="green on"><a href="/kr/company/technology1">기술지원</a></li>
                        <li class="green"><a href="/kr/company/technology2">지식재산권</a></li>
                    </ul>
                </div>
                <div class="support_content_area">
                    <div class="service_area dev">
                        <div class="image_wrap">
                            <div class="text_area w1360 scroll_motion">
                                <p class="main_title black" >기술지원</p>
                                <p class="explain_text" >시행사의 운영 기술 증대, 발생 문제 해결을 위한 기술 검토, 사내 기술교육, 기술이전, M&A 등<br>사업 진행에 따른 기술평가 업무 수행</p>
                            </div>
                        </div>
                        <div class="w1360">
                            <div class="support_list_box">
                                <div class="support_box scroll_motion">
                                    <span class="number">01</span>
                                    <span class="box_title">사업별 기술지원</span>
                                    <span class="text">&middot; 시행사</span>
                                </div>
                                <div class="support_box scroll_motion">
                                    <span class="number">02</span>
                                    <span class="box_title">기술 평가</span>
                                    <ul>
                                        <li>· 기술이전, M&A 등의 사업진행 중 기술 평가 업무 수행</li>
                                        <li>· J/V 기술평가 수행</li>
                                    </ul>
                                </div>
                                <div class="support_box scroll_motion">
                                    <span class="number">03</span>
                                    <span class="box_title">사업별 기술지원</span>
                                    <span class="text">&middot; 주기적인 기술 교육 진행</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="service_area plan">
                        <div class="image_wrap">
                            <div class="text_area w1360 scroll_motion">
                                <p class="main_title black" >설계지원</p>
                                <p class="explain_text" >민간투자사업 등의 사업 진행 중<br class="mobile"> 기본설계 업무 지원 및 실시설계 업무 수행</p>
                            </div>
                        </div>
                        <div class="w1360">
                            <div class="support_list_box">
                                <div class="support_box scroll_motion">
                                    <span class="number">01</span>
                                    <span class="box_title">입찰서 검토</span>
                                    <span class="text">&middot; 입찰서 내 기술 Part 검토</span>
                                </div>
                                <div class="support_box scroll_motion">
                                    <span class="number">02</span>
                                    <span class="box_title">기본설계 지원</span>
                                    <span class="text">&middot; 기본설계 내용검토 및 업무 지원</span>
                                </div>
                                <div class="support_box scroll_motion">
                                    <span class="number">03</span>
                                    <span class="box_title">사업별 기술지원</span>
                                    <span class="text">&middot; 실시설계 수행</span>
                                    <ul>
                                        <li>소각시설</li>
                                        <li>SRF 스팀공급/발전시설</li>
                                        <li>슬러지 건조/소각시설</li>
                                        <li>음식물 퇴비화시설</li>
                                        <li>폐기물 최종처리시설</li>
                                        <li>혐기성소화시설</li>
                                    </ul>
                                </div>
                                <div class="support_box scroll_motion">
                                    <span class="number">04</span>
                                    <span class="box_title">공사관련</span>
                                    <span class="text">&middot; 공사관련 기술평가 (TBE)</span>
                                    <span class="text">&middot; 공사관련 상세설계 검토 지원</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <!-- content [E] -->

		<!-- FOOTER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/footer.php"; ?>
		<!-- FOOTER [E] -->

		<!-- FLOATING BANNER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/floating_banner.php"; ?>
		<!-- FLOATING BANNER [E] -->
    </div>
</body>
</html>