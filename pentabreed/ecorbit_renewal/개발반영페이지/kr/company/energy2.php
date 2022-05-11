<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "KR_COMPANY_23";
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
                            <!-- <li class="green on"><a href="/kr/company/energy2">신재생에너지</a></li> -->
                            <li class="green"><a href="/kr/company/energy3">폐기물에너지</a></li>
                            <li class="green"><a href="/kr/company/energy4">폐기물 수집 운반</a></li>
                            <li class="green"><a href="/kr/company/energy5">멸균</a></li>
                        </ul>
                    </div>
                </div>
                <!-- 신재생 에너지 [S] -->
                <div class="energy_title_area">
                    <div class="w1360">
                        <div class="company_title scroll_motion">
                            <span class="eng">New & Renewable Energy</span>
                            <p class="main_title black">신재생에너지</p> 
                            <p class="desc">에코비트는 무한한 무공해의 천연에너지인<br class="mobile"> 태양광, 소각 시설에서 발생하는 여열 등<br><br class="mobile">  더 나은 미래로 가기 위해 꼭 필요한<br class="mobile">  신재생에너지 개발에 힘쓰고 있습니다.</p>
                        </div>
                    </div>
                    <div class="img_box scroll_motion">
                        <img class="pc_img" src="/assets/images/company/renewable_img_01.png" alt="">
                        <img class="mo_img" src="/assets/images/company/renewable_img_01_mb.png" alt="">
                    </div>
                    <div class="sub_tab_area">
                        <p class="mo_ver">소각여열회수</p>
                        <ul>
                            <li class="on"><button type="button">소각여열회수</button></li>
                            <li><button type="button">태양광발전</button></li>
                            <li><button type="button">BGP(Bio Gas Plant)</button></li>
                        </ul>
                    </div>
                </div>
                <div class="sub_cont">
                    <!-- 소각여열회수 [S] -->
                    <div class="on">
                        <div class="renewable_con01">
                            <div class="w1360">
                                <div class="renewable_title scroll_motion">
                                    <h4>소각여열회수</h4>
                                    <p>생활폐기물, 산업폐기물 소각시설에서<br class="mobile"> 발생하는 폐열 및 산업공정에서 발생하는<br class="mobile"> 여열을 이용하여<br> 스팀 및 전기를<br class="mobile"> 생산/공급하는 소각여열회수 사업을 통해<br class="mobile"> 고객에게 고품질, 저비용의 에너지를<br class="mobile"> 공급하고 있습니다.</p>
                                </div>
                                <ul class="energy_list grid2">
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_img01_01.jpg" alt="">
                                        <div class="txt_box">
                                            <h5>남양주 별내클린센터</h5>
                                            <p><span>용량 소각설비</span><b>52㎥/일</b></p>
                                            <p><span>폐열보일러</span><b>13.3㎥/시간</b></p>
                                        </div>
                                        <img class="pc_ver" src="/assets/images/company/renewable_img01_01.jpg" alt="">
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_img01_02.jpg" alt="">
                                        <div class="txt_box">
                                            <h5>김천 소각 폐열스팀 공급시설</h5>
                                            <p><span>용량 소각설비</span><b>48㎥/일</b></p>
                                            <p><span>폐열보일러</span><b>8㎥/시간</b></p>
                                        </div>
                                        <img class="pc_ver" src="/assets/images/company/renewable_img01_02.jpg" alt="">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                    <!-- 소각여열회수 [E] -->

                    <!-- 태양광발전 [S] -->
                    <div>
                        <div class="renewable_con01">
                            <div class="w1360">
                                <div class="renewable_title scroll_motion">
                                    <h4>태양광발전</h4>
                                    <p>무한정, 무공해 에너지인 태양광 발전<br class="mobile"> 사업을 통하여 국내 친환경에너지 산업에<br class="mobile"> 앞장서고 있으며,<br> 환경기초시설 내<br class="mobile"> 부지, 유휴부지를 활용한 시설 면적 확보와<br class="mobile"> 지역사회의 에너지 자립화 및<br> 환경기초시설의<br class="mobile"> 운영 효율화 등 시너지를 발휘하고 있습니다.</p>
                                </div>
                                <ul class="energy_list grid2">
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_img02_01.jpg" alt="">
                                        <div class="txt_box">
                                            <h5>김천 공공하수처리장 <br><br class="mobile">태양광발전 시설</h5>
                                            <strong>전력생산</strong>
                                            <p class="type02"><span>발전량</span><b>2.5MWh</b></p>
                                            <p class="type02"><span>면적</span><b>17,900㎡</b></p>
                                        </div>
                                        <img class="pc_ver" src="/assets/images/company/renewable_img02_01.jpg" alt="">
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_img02_02.jpg" alt="">
                                        <div class="txt_box">
                                            <h5>아산 자전거도로<br><br class="mobile"> 태양광발전 시설</h5>
                                            <strong>전력생산</strong>
                                            <p class="type02"><span>발전량</span><b>6.5MWh</b></p>
                                            <p class="type02"><span>연장</span><b>약 15km (아산시 방축동 ~ 도고면)</b></p>
                                        </div>
                                        <img class="pc_ver" src="/assets/images/company/renewable_img02_02.jpg" alt="">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                    <!-- 태양광발전 [E] -->
                    <!-- BGP [S] -->
                    <div>
                        <div class="renewable_con02">
                            <div class="w1360">
                                <div class="renewable_title scroll_motion">
                                    <h4>BGP<br class="mobile">(Bio Gas Plant)</h4>
                                    <p>에코비트는 Bio Gas Plant(BGP)를<br class="mobile"> 시공 및 운영하여 음식물류 폐기물,<br class="mobile"> 가축분뇨 등의<br> 유기성폐기물 처리과정에서<br class="mobile"> 발생하는 바이오가스를 이용한 발전 및 연료<br class="mobile"> 공급사업을 수행하고 있습니다.</p>
                                    <div class="img_box">
                                        <img class="pc_img" src="/assets/images/company/renewable_img_05.png" alt="">
                                        <img class="mo_img" src="/assets/images/company/renewable_img_05_mb.png" alt="">
                                    </div>
                                </div>
                                <ul class="energy_list grid2">
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_img05_01.jpg" alt="">
                                        <div class="txt_box">
                                            <h5>영천 BGP</h5>
                                            <p class="type02"><span>용량</span><b>260 ton/일<br><i>(가축분뇨 150 ton/일, <br>음식물 30 ton/일, <br>음폐수 80 ton/일)</i></b></p>
                                        </div>
                                        <img class="pc_ver" src="/assets/images/company/renewable_img05_01.jpg" alt="">
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_img05_02.jpg" alt="">
                                        <div class="txt_box">
                                            <h5>포천 BGP</h5>
                                            <p class="type02"><span>용량</span><b>30 ton/시간<br><i>(가축분뇨 150 ton/일, <br>음폐수 150 ton/일)<br>　</i></b></p>
                                        </div>
                                        <img class="pc_ver" src="/assets/images/company/renewable_img05_02.jpg" alt="">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- BGP [E] -->
                </div>
                <!-- 신재생 에너지 [E] -->
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