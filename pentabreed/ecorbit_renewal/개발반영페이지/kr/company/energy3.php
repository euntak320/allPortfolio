<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "KR_COMPANY_24";
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
                            <li class="green on"><a href="/kr/company/energy3">폐기물에너지</a></li>
                            <li class="green"><a href="/kr/company/energy4">폐기물 수집 운반</a></li>
                            <li class="green"><a href="/kr/company/energy5">멸균</a></li>
                        </ul>
                    </div>
                </div>
                <!-- 폐기물 에너지 [S] -->
                <div class="energy_title_area">
                    <div class="w1360">
                        <div class="company_title scroll_motion">
                            <span class="eng">Waste to Energy</span>
                            <p class="main_title black">폐기물에너지</p> 
                            <p class="desc">에코비트는 고형연료(SRF)시설의 시공<br class="mobile"> 및 운영을 통해 가연성 고형폐기물을<br class="mobile"> 원료로 하는 발열량이 우수한 고형연료를<br class="mobile"> 제조하고 있으며,<br> 고형연료의 소각을 통해<br class="mobile"> 인접 고객에게 고품질, 저비용의 에너지를<br class="mobile"> 공급하고 있습니다.</p>
                        </div>
                    </div>
                    <div class="img_box scroll_motion">
                        <img class="pc_img" src="/assets/images/company/renewable_img_02.png" alt="">
                        <img class="mo_img" src="/assets/images/company/renewable_img_02_mb.png" alt="">
                    </div>
                    <div class="sub_tab_area three type02">
                        <p class="mo_ver">SRF(Solid Refuse Fuel)</p>
                        <ul>
                            <li class="on"><button type="button">SRF(Solid Refuse Fuel)</button></li>
                            <li><button type="button">스팀 공급/발전</button></li>
                        </ul>
                    </div>
                </div>
                <div class="sub_cont_type02">
                    <!-- SRF [S] -->
                    <div class="on">
                        <div class="renewable_con02">
                            <div class="w1360">
                                <div class="renewable_title scroll_motion">
                                    <h4>SRF<br class="mobile">(Solid Refuse Fuel)</h4>
                                    <p>SRF(Solid Refuse Fuel):<br class="mobile"> 생활폐기물, 폐합성수지류, 폐합성섬유류,<br class="mobile"> 폐고무류, 폐타이어 등</p>
                                    <div class="img_box">
                                        <img class="pc_img" src="/assets/images/company/renewable_img_03.png" alt="">
                                        <img class="mo_img" src="/assets/images/company/renewable_img_03_mb.png" alt="">
                                    </div>
                                </div>
                                <div class="renewable_title scroll_motion">
                                    <h4 class="mt130">폐기물 연료화 <br class="mo_ver">(SRF / ASR)</h4>
                                </div>
                                <ul class="energy_list grid2">
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_img03_01.jpg" alt="">
                                        <div class="txt_box">
                                            <h5>에코비트 에너지 울산<br><br class="mobile"> 울산 2공장</h5>
                                            <strong>폐기물 고형연료 생산</strong>
                                            <p class="type02"><span>생산량</span><b>180 ton/일</b></p>
                                            <p class="type02"><span>판매품 </span><b>고형연료(SRF성형, 비성형)</b></p>
                                        </div>
                                        <img class="pc_ver" src="/assets/images/company/renewable_img03_01.jpg" alt="">
                                     </li>
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_img03_03.jpg" alt="">
                                        <div class="txt_box">
                                            <h5>에코비트 에너지 울산<br><br class="mobile">아산 사업소</h5>
                                            <strong>폐기물 고형연료 생산</strong>
                                            <p class="type02"><span>생산량</span><b>150 ton/일</b></p>
                                            <p class="type02"><span>판매품 </span><b>고형연료(SRF성형)</b></p>
                                        </div>
                                        <img class="pc_ver" src="/assets/images/company/renewable_img03_03.jpg" alt="">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- SRF [E] -->

                    <!-- 스팀 공급/발전 [S] -->
                    <div>
                        <div class="renewable_con02">
                            <div class="w1360">
                                <div class="renewable_title scroll_motion">
                                    <h4>스팀 공급/발전</h4>
                                </div>
                                <ul class="steam_list">
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_steam_img01.jpg" alt="">
                                        <p>1. 연소로(SRF연소)</p>
                                        <img class="pc_ver" src="/assets/images/company/renewable_steam_img01.jpg" alt="">
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_steam_img02.jpg" alt="">
                                        <p>2. 보일러(스팀생산)</p>
                                        <img class="pc_ver" src="/assets/images/company/renewable_steam_img02.jpg" alt="">
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_steam_img03.jpg" alt="">
                                        <p>3. 방지시설(대기오염정화)</p>
                                        <img class="pc_ver" src="/assets/images/company/renewable_steam_img03.jpg" alt="">
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_steam_img04.jpg" alt="">
                                        <p>4. 배출</p>
                                        <img class="pc_ver" src="/assets/images/company/renewable_steam_img04.jpg" alt="">
                                    </li>
                                </ul>
                                <ul class="energy_list grid2 no_bottom">
                                    <li class="scroll_motion">
                                        <div class="txt_box">
                                            <h5>에코비트 에너지 전주</h5>
                                            <strong>ASR 연소 및 스팀 공급</strong>
                                            <p class="type02"><span>시설용량</span><b>23 ton/시간 (스팀)</b></p>
                                        </div>
                                    </li>
                                    <li class="scroll_motion">
                                        <div class="txt_box">
                                            <h5>에코비트 에너지 울산</h5>
                                            <strong>SRF 연소 및 스팀/전력 생산</strong>
                                            <p class="type02"><span>시설용량</span><b>75 ton/시간 (스팀), 2MWh (발전)</b></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- 스팀 공급/발전 [E] -->
                </div>
                <!-- 폐기물 에너지 [E] -->
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