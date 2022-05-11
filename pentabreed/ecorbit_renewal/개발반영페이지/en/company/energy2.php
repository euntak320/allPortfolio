<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "EN_COMPANY_23";
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- META [S] -->
	<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/meta.php"; ?>
	<!-- META [E] -->

	<title>Business | ENERGY BU</title>

	<!-- SCRIPT_COMPANY [S] -->
	<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/script_company.php"; ?>
	<!-- SCRIPT_COMPANY [E] -->
</head>

<body>
    <div id="wrap">
		<!-- HEADER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/header.php"; ?>
		<!-- HEADER [E] -->
            
		<!-- GNB [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/gnb.php"; ?>
		<!-- GNB [E] -->

        <!-- CONTENT [S] -->
        <main class="company energy">
            <div class="keyvisual_area">
                <div class="keyvisual_txt">
                    <h1 class="en_mont">ENERGY</h1>
                    <h2>Creating a sustainable tomorrow by<br class="mo_ver"> converting waste into energy</h2>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>BUSINESS</span>
                    <span>ENERGY</span>
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
                            <li class="green "><a href="<?=$G_EN_FOLDER?>/company/energy">Medical Waste Incineration</a></li>
                            <li class="green"><a href="<?=$G_EN_FOLDER?>/company/energy1">Industrial Waste Incineration</a></li>
                            <!-- <li class="green on"><a href="<?=$G_EN_FOLDER?>/company/energy2">New & Renewable Energy</a></li> -->
                            <li class="green"><a href="<?=$G_EN_FOLDER?>/company/energy3">Waste to Energy</a></li>
                            <li class="green"><a href="<?=$G_EN_FOLDER?>/company/energy4">Waste Collection and Transport</a></li>
                            <li class="green"><a href="<?=$G_EN_FOLDER?>/company/energy5">Sterilization</a></li>
                        </ul>
                    </div>
                </div>
                <!-- 신재생 에너지 [S] -->
                <div class="energy_title_area">
                    <div class="w1360">
                        <div class="company_title scroll_motion">
                            <p class="main_title black">New & Renewable Energy</p> 
                            <p class="desc">ECORBIT is striving to develop new and renewable energy using natural, limitless, nonpolluting<br>  solar energy and waste heat from incineration facilities to create a better tomorrow.</p>
                        </div>
                    </div>
                    <div class="img_box scroll_motion">
                        <img src="/assets/images/company/renewable_img_01_en.png" alt="" class="pc_img">
                        <img src="/assets/images/company/renewable_img_01_en_mo.png" alt="" class="mo_img">
                    </div>
                    <div class="sub_tab_area">
                        <p class="mo_ver">Waste Heat Recovery</p>
                        <ul>
                            <li class="on"><button type="button">Waste Heat Recovery</button></li>
                            <li><button type="button">Solar Energy Generation</button></li>
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
                                    <h4 class="en_mont">Waste Heat Recovery</h4>
                                    <p>Waste heat from household waste, industrial waste incineration, and residual heat from<br> industrial processes are used in the incineration residual heat recovery business to produce<br> and supply steam and electricity to provide high-quality, low-cost energy to our customers.</p>
                                </div>
                                <ul class="energy_list grid2">
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_img01_01.jpg" alt="">
                                        <div class="txt_box">
                                            <h5>Namyangju Byeollae Clean Center</h5>
                                            <p><span>Incineration<br> Facility Capacity</span><b>52㎥/day</b></p>
                                            <p><span>Waste Heat Boiler</span><b>13.3㎥/hour</b></p>
                                        </div>
                                        <img class="pc_ver" src="/assets/images/company/renewable_img01_01.jpg" alt="">
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_img01_02.jpg" alt="">
                                        <div class="txt_box">
                                            <h5>Gimcheon Waste Heat Steam Supply Facility</h5>
                                            <p><span>Incineration<br> Facility Capacity</span><b>48㎥/day</b></p>
                                            <p><span>Waste Heat Boiler</span><b>8㎥/hour</b></p>
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
                                    <h4 class="en_mont">Solar Energy Generation</h4>
                                    <p>ECORBIT leads in the domestic eco-friendly energy industry using unlimited, nonpolluting solar energy<br> and creates a synergetic effect by securing floor space within the basic environmental treatment facility<br> and idle sites to bring energy independence to local regions and optimize operation. </p>
                                </div>
                                <ul class="energy_list grid2">
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_img02_01.jpg" alt="">
                                        <div class="txt_box height_type">
                                            <h5>Gimcheon Public Sewage Treatment Facility Solar Energy Plant</h5>
                                            <strong>Power Production</strong>
                                            <p><span>Power Produced</span><b>2.5MWh</b></p>
                                            <p><span>Area</span><b>17,900㎡</b></p>
                                        </div>
                                        <img class="pc_ver" src="/assets/images/company/renewable_img02_01.jpg" alt="">
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_img02_02.jpg" alt="">
                                        <div class="txt_box height_type">
                                            <h5>Asan Bicycle Path Solar Energy Facility<br>　</h5>
                                            <strong>Power Production</strong>
                                            <p><span>Power Produced</span><b>6.5MWh</b></p>
                                            <p><span>Extended for</span><b>about 15 km (Bangchuk-dong - Godo-myeon, Asan)</b></p>
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
                                    <h4 class="en_mont">BGP<br class="mobile">(Bio Gas Plant)</h4>
                                    <p>ECORBIT has constructed and is operating the Bio Gas Plant (BGP) using biogas generated from<br> treating organic wastes, including food waste and livestock excretion, to generate and supply fuel.</p>
                                    <div class="img_box"><img src="/assets/images/company/renewable_img_05_en.png" alt=""></div>
                                </div>
                                <ul class="energy_list grid2">
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_img05_01.jpg" alt="">
                                        <div class="txt_box">
                                            <h5>Yeongcheon BGP</h5>
                                            <p class="type02"><span>Capacity </span><b>260 tons/day<br><i>(Livestock excretion 150 tons/day, food waste 30 tons/day,<br> leachate 80 tons/day)</i></b></p>
                                        </div>
                                        <img class="pc_ver" src="/assets/images/company/renewable_img05_01.jpg" alt="">
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_img05_02.jpg" alt="">
                                        <div class="txt_box">
                                            <h5>Pocheon BGP</h5>
                                            <p class="type02"><span>Capacity </span><b>300 tons/day<br><i>(Livestock excretion 150 tons/day, leachate 150 tons/day)<br>　</i></b></p>
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
        <!-- CONTENT [E] -->

		<!-- FOOTER [S]  -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/footer.php"; ?>
		<!-- FOOTER [E]  -->

		<!-- FLOATING BANNER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/floating_banner.php"; ?>
		<!-- FLOATING BANNER [E] -->
    </div>
</body>
</html>