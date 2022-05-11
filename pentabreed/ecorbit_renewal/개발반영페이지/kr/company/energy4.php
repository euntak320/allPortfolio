<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "KR_COMPANY_25";
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

	<title>사업소개 | 에너지</title>

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
        <main class="company energy">
            <div class="keyvisual_area">
                <div class="keyvisual_txt">
                    <h1>ENERGY</h1>
                    <h2>버려지는 폐기물을 에너지 자원으로<br class="mo_ver"> 바꾸어 지속가능한 내일을<br class="mo_ver"> 만들어 가고 있습니다</h2>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>사업소개</span>
                    <span>에너지</span>
                </div>
                <div class="keyvisual_scroll_down">
                    <span>SCROLL DOWN</span>
                </div>
            </div>

            <section class="content_area">
                <div class="main_tab_area scroll_box">
                    <i></i>
                    <div class="scroll_wrap">
                        <ul class="sub_tab">
                            <li class="green"><a href="/kr/company/energy">의료폐기물 소각</a></li>
                            <li class="green"><a href="/kr/company/energy1">산업폐기물 소각</a></li>
                            <!-- <li class="green"><a href="/kr/company/energy2">신재생에너지</a></li> -->
                            <li class="green"><a href="/kr/company/energy3">폐기물에너지</a></li>
                            <li class="green on"><a href="/kr/company/energy4">폐기물 수집 운반</a></li>
                            <li class="green"><a href="/kr/company/energy5">멸균</a></li>
                        </ul>
                    </div>
                </div>
                <div class="energy_title_area type02">
                    <div class="w1360">
                        <div class="company_title scroll_motion">
                            <span class="eng">Waste Collection and Transport</span>
                            <p class="main_title black">폐기물 수집 운반</p> 
                            <p class="desc">병원에서 발생하는 의료폐기물과 에코비트 계열사에서 발생하는 일반 산업폐기물을<br><br class="mobile"> 소각장 및 매립장으로 운반하고 있습니다.</p>
                        </div>
                    </div>
                    <div class="img_box scroll_motion">
                        <img class="pc_img" src="/assets/images/company/wastcollection_img_01.png" alt="">
                        <img class="mo_img" src="/assets/images/company/wastcollection_img_01_mb.png" alt="">
                    </div>
                    <h3 class="energy_title main_title black">에코비트 로지스</h3>
                </div>
                <div class="sub_cont">
                    <div class="on">
                        <div class="overview_con">
                            <div class="w1360 scroll_motion">
                                <div class="img_box">
                                    <img class="pc_img" src="/assets/images/company/logis_overview.jpg" alt="">
                                    <img class="mo_img" src="/assets/images/company/logis_overview_mo.png" alt="">
                                </div>
                                <div class="txt_box">
                                    <h4 class="sub_title_01">회사 개요</h4>
                                    <dl>
                                        <dt>기업명</dt>
                                        <dd>에코비트 로지스</dd>
                                    </dl>
                                    <dl>
                                        <dt>설립일</dt>
                                        <dd>2012년 9월 26일</dd>
                                    </dl>
                                    <dl>
                                        <dt>주요 업종</dt>
                                        <dd>의료폐기물 수집운반업</dd>
                                    </dl>
                                    <dl>
                                        <dt>Capacity</dt>
                                        <dd>1회 수거량 100 ton<br>(5 ton 10대, 3.5 ton 13대, 1 ton 7대)</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="location_con">
                            <div class="w1360 scroll_motion">
                                <div class="txt_box">
                                    <h4 class="sub_title_01">오시는길</h4>
                                    <p>경주시 안강읍 두류길 178-1 <br>(두류 공단 내)</p>
                                </div>
                                <div class="img_box"><img src="/assets/images/company/kju_location_img01.jpg" alt=""></div>
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