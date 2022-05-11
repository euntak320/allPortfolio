<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "EN_COMPANY_25";
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
                            <li class="green "><a href="<?=$G_EN_FOLDER?>/company/energy3">Waste to Energy</a></li>
                            <li class="green on"><a href="<?=$G_EN_FOLDER?>/company/energy4">Waste Collection and Transport</a></li>
                            <li class="green"><a href="<?=$G_EN_FOLDER?>/company/energy5">Sterilization</a></li>
                        </ul>
                    </div>
                </div>
                <div class="energy_title_area type02">
                    <div class="w1360">
                        <div class="company_title scroll_motion">
                            <p class="main_title black">Waste Collection and Transport</p> 
                            <p class="desc">Medical wastes from hospitals and general industrial wastes from<br> ECORBIT subsidiaries are transported to incinerators and landfills.</p>
                        </div>
                    </div>
                    <div class="img_box scroll_motion">
                        <img src="/assets/images/company/wastcollection_img_01_en.png" alt="" class="pc_img">
                        <img src="/assets/images/company/wastcollection_img_01_en_mo.png" alt="" class="mo_img">
                    </div>
                    <h3 class="energy_title main_title black en_mont">ECORBIT LOGIS</h3>
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
                                    <h4 class="sub_title_01 en_mont">Company Summary</h4>
                                    <dl>
                                        <dt>Company <br class="mo_ver">Name</dt>
                                        <dd>ECORBIT LOGIS</dd>
                                    </dl>
                                    <dl>
                                        <dt>Establishment Date</dt>
                                        <dd>2012. 9. 26</dd>
                                    </dl>
                                    <dl>
                                        <dt>Main Business</dt>
                                        <dd>Medical waste collection and transport business</dd>
                                    </dl>
                                    <dl>
                                        <dt>Capacity</dt>
                                        <dd>100 tons collected per trip<br> (10 5-ton trucks, 13 3.5-ton trucks, 7 1-ton truck)</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="location_con">
                            <div class="w1360 scroll_motion">
                                <div class="txt_box">
                                    <h4 class="sub_title_01">Directions</h4>
                                    <p>178-1, Duryu-gil, Angang-eup,<br class="mo_ver"> Gyeongju-si<br> (in Duryu Industrial Complex)</p>
                                </div>
                                <div class="img_box"><iframe title="178-1, Duryu-gil, Angang-eup, Gyeongju-si (in Duryu Industrial Complex)" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228.9324251413436!2d129.16273715102017!3d35.973077521420066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3566574c14a24feb%3A0xebfaf93c886b877!2z7J207JeQ7Iqk7KeA6rK97KO8!5e0!3m2!1sen!2skr!4v1650269866333!5m2!1sen!2skr" height="480" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                            </div>
                        </div>
                    </div>
                </div>
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