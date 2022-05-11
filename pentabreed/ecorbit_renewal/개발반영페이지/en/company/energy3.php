<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "EN_COMPANY_24";
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
                    <span class="prev"><img src="/assets/images/company/main_tab_prev.png" alt=""></span>
                    <span class="next"><img src="/assets/images/company/main_tab_next.png" alt=""></span>
                    <div class="scroll_wrap">
                        <ul class="sub_tab">
                            <li class="green "><a href="<?=$G_EN_FOLDER?>/company/energy">Medical Waste Incineration</a></li>
                            <li class="green"><a href="<?=$G_EN_FOLDER?>/company/energy1">Industrial Waste Incineration</a></li>
                            <!-- <li class="green "><a href="<?=$G_EN_FOLDER?>/company/energy2">New & Renewable Energy</a></li> -->
                            <li class="green on"><a href="<?=$G_EN_FOLDER?>/company/energy3">Waste to Energy</a></li>
                            <li class="green"><a href="<?=$G_EN_FOLDER?>/company/energy4">Waste Collection and Transport</a></li>
                            <li class="green"><a href="<?=$G_EN_FOLDER?>/company/energy5">Sterilization</a></li>
                        </ul>
                    </div>
                </div>
                <!-- 폐기물 에너지 [S] -->
                <div class="energy_title_area">
                    <div class="w1360">
                        <div class="company_title scroll_motion">
                            <p class="main_title black">Waste to Energy</p> 
                            <p class="desc">ECORBIT manufactures solid fuel with a high calorific value from combustible solid waste<br> by constructing and operating solid refuse fuel (SRF) facilities and provides high-quality,<br> low-cost energy to local customers by incinerating solid fuel.</p>
                        </div>
                    </div>
                    <div class="img_box scroll_motion">
                        <img src="/assets/images/company/renewable_img_02_en.png" alt="" class="pc_img">
                        <img src="/assets/images/company/renewable_img_02_en_mo.png" alt="" class="mo_img">
                    </div>
                    <div class="sub_tab_area three type02">
                        <p class="mo_ver">SRF(Solid Refuse Fuel)</p>
                        <ul>
                            <li class="on"><button type="button">SRF(Solid Refuse Fuel)</button></li>
                            <li><button type="button">Steam Supply/Power Generation</button></li>
                        </ul>
                    </div>
                </div>
                <div class="sub_cont_type02">
                    <!-- SRF [S] -->
                    <div class="on">
                        <div class="renewable_con02">
                            <div class="w1360">
                                <div class="renewable_title scroll_motion">
                                    <h4 class="en_mont">SRF<br class="mo_ver">(Solid Refuse Fuel)</h4>
                                    <p>Solid Refuse Fuel (SRF): Domestic waste, waste synthetic resin,<br> waste synthetic fibers, waste rubber, waste tires, etc.</p>
                                    <div class="img_box">
                                        <img src="/assets/images/company/renewable_img_03_en.png" alt="" class="pc_img">
                                        <img src="/assets/images/company/renewable_img_03_en_mo.png" alt="" class="mo_img">
                                    </div>
                                </div>
                                <div class="renewable_title scroll_motion">
                                    <h4 class="mt130 en_mont">Waste fuel conversion <br class="mo_ver">(SRF / ASR)</h4>
                                </div>
                                <ul class="energy_list grid2">
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_img03_01.jpg" alt="">
                                        <div class="txt_box">
                                            <h5>ECORBIT ENERGY Ulsan<br> Ulsan Plant 2</h5>
                                            <strong>Waste Solid Fuel Production</strong>
                                            <p class="type03"><span>Production Capacity</span><b>180 tons/day</b></p>
                                            <p class="type03"><span>Product Sold </span><b>Solid Fuel<br><br class="mobile"> (Pellet SRF, fluff SRF)</b></p>
                                        </div>
                                        <img class="pc_ver" src="/assets/images/company/renewable_img03_01.jpg" alt="">
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_img03_03.jpg" alt="">
                                        <div class="txt_box">
                                            <h5>ECORBIT ENERGY Ulsan Asan Office</h5>
                                            <strong>Waste Solid Fuel Production</strong>
                                            <p class="type03"><span>Production Capacity</span><b>150 tons/day</b></p>
                                            <p class="type03"><span>Product Sold </span><b>Solid Fuel<br><br class="mobile"> (Pellet SRF)</b></p>
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
                                    <h4 class="en_mont">Steam Supply | Power Generation</h4>
                                </div>
                                <ul class="steam_list">
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_steam_img01.jpg" alt="">
                                        <p>1. Combustion furnace<br> (SRF combustion)</p>
                                        <img class="pc_ver" src="/assets/images/company/renewable_steam_img01.jpg" alt="">
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_steam_img02.jpg" alt="">
                                        <p>2.Boiler <br class="mo_ver">(Steam production)</p>
                                        <img class="pc_ver" src="/assets/images/company/renewable_steam_img02.jpg" alt="">
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_steam_img03.jpg" alt="">
                                        <p>3. Prevention facility<br> (Air pollution purification)</p>
                                        <img class="pc_ver" src="/assets/images/company/renewable_steam_img03.jpg" alt="">
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="mo_ver" src="/assets/images/company/renewable_steam_img04.jpg" alt="">
                                        <p>4. Discharge</p>
                                        <img class="pc_ver" src="/assets/images/company/renewable_steam_img04.jpg" alt="">
                                    </li>
                                </ul>
                                <ul class="energy_list grid2 no_bottom">
                                    <li class="scroll_motion">
                                        <div class="txt_box">
                                            <h5>ECORBIT ENERGY Jeonju</h5>
                                            <strong>ASR Combustion and Steam Supply</strong>
                                            <p class="type03"><span>Facility Capacity</span><b>23 tons/hour (Steam)</b></p>
                                        </div>
                                    </li>
                                    <li class="scroll_motion">
                                        <div class="txt_box">
                                            <h5>ECORBIT ENERGY Ulsan</h5>
                                            <strong>SRF Combustion and<br> Steam/Electricity Production</strong>
                                            <p class="type03"><span>Facility Capacity</span><b>75 tons/hour (Steam),<br> 2MWh (Power generation)</b></p>
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