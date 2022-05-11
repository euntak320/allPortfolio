<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "EN_COMPANY_22";
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
                            <li class="green on"><a href="<?=$G_EN_FOLDER?>/company/energy1">Industrial Waste Incineration</a></li>
                            <!-- <li class="green"><a href="<?=$G_EN_FOLDER?>/company/energy2">New & Renewable Energy</a></li> -->
                            <li class="green"><a href="<?=$G_EN_FOLDER?>/company/energy3">Waste to Energy</a></li>
                            <li class="green"><a href="<?=$G_EN_FOLDER?>/company/energy4">Waste Collection and Transport</a></li>
                            <li class="green"><a href="<?=$G_EN_FOLDER?>/company/energy5">Sterilization</a></li>
                        </ul>
                    </div>
                </div>
                <div class="energy_title_area">
                    <div class="w1360">
                        <div class="company_title scroll_motion">
                            <p class="main_title black">Industrial Waste Incineration</p> 
                            <p class="desc">ECORBIT Energy incinerates waste from industrial facilities in<br> an eco-friendly manner that is harmless to humans.</p>
                        </div>
                    </div>
                    <div class="img_box scroll_motion">
                        <img src="/assets/images/company/energy_industrial_img_01_en.png" alt="" class="pc_img">
                        <img src="/assets/images/company/energy_industrial_img_01_en_mo.png" alt="" class="mo_img">
                    </div>
                    <div class="sub_tab_area">
                        <p class="mo_ver">ECORBIT ENERGY Sejong</p>
                        <ul>
                            <li class="on"><button type="button">ECORBIT ENERGY Sejong</button></li>
                            <li><button type="button">ECORBIT ENERGY Jeongse</button></li>
                        </ul>
                    </div>
                </div>
                <div class="sub_cont">
                    <!-- 에너지 세종 [S] -->
                    <div class="on">
                        <div class="sub_cont_title w1360 scroll_motion">
                            <h3 class="en_mont">ECORBIT ENERGY Sejong</h3>
                        </div>
                        <div class="overview_con">
                            <div class="w1360 scroll_motion">
                                <div class="img_box">
                                    <img class="pc_img" src="/assets/images/company/sejong_overview.jpg" alt="">
                                    <img class="mo_img" src="/assets/images/company/sejong_overview_mo.jpg" alt="">
                                </div>
                                <div class="txt_box">
                                    <h4 class="sub_title_01 en_mont">Company Summary</h4>
                                    <dl>
                                        <dt>Company<br class="mo_ver"> Name</dt>
                                        <dd>ECORBIT ENERGY Sejong</dd>
                                    </dl>
                                    <dl>
                                        <dt>Establishment Date</dt>
                                        <dd>2012.4.1</dd>
                                    </dl>
                                    <dl>
                                        <dt>Main Business</dt>
                                        <dd>Waste intermediate treatment
                                            business (incineration and 
                                            mechanical treatment)</dd>
                                    </dl>
                                    <dl>
                                        <dt>Capacity</dt>
                                        <dd>78 tons/day</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="facility_con">
                            <div class="w1360">
                                <h4 class="sub_title_01 scroll_motion en_mont">Main Facilities</h4>
                                <ul>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/sejong_facility_img01.jpg" alt="소각시설 전경 이미지">
                                        <img class="mo_img" src="/assets/images/company/sejong_facility_img01_mo.jpg" alt="소각시설 전경 이미지">
                                        <p class="line2">Panorama of <br>incineration facility</p>
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/sejong_facility_img02.jpg" alt="오니 건조 시설 이미지">
                                        <img class="mo_img" src="/assets/images/company/sejong_facility_img02_mo.jpg" alt="오니 건조 시설 이미지">
                                        <p class="line2">Sludge drying<br> facility</p>
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/sejong_facility_img03.jpg" alt="중간처분시설 (기계식 처리) 이미지">
                                        <img class="mo_img" src="/assets/images/company/sejong_facility_img03_mo.jpg" alt="중간처분시설 (기계식 처리) 이미지">
                                        <p class="line3">Intermediate<br> treatment facility<br> (mechanical treatment)</p>
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/sejong_facility_img04.jpg" alt="건설폐기물 파쇄/분쇄 시설 이미지">
                                        <img class="mo_img" src="/assets/images/company/sejong_facility_img04_mo.jpg" alt="건설폐기물 파쇄/분쇄 시설 이미지">
                                        <p class="line2">Dry waste crushing<br><br class="mobile"> and grinding facility</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="location_con">
                            <div class="w1360 scroll_motion">
                                <div class="txt_box">
                                    <h4 class="sub_title_01 en_mont">Directions</h4>
                                    <p>341, Solti-ro, Jeondong-myeon,
                                        Sejong</p>
                                </div>
                                <div class="img_box"><iframe title="341, Solti-ro, Jeondong-myeon, Sejong" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.9407300445605!2d127.21516205103399!3d36.62781328498553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ad21b7bc2aa37%3A0x837c68c0404a579f!2z7J207JeQ7Iqk7KeA7IS47KKF!5e0!3m2!1sen!2skr!4v1650270616741!5m2!1sen!2skr" height="480" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                            </div>
                        </div>
                    </div>
                    <!-- 에너지 세종 [E] -->

                    <!-- 에너지 정세 [S] -->
                    <div>
                        <div class="sub_cont_title w1360 scroll_motion">
                            <h3 class="en_mont">ECORBIT ENERGY Jeongse</h3>
                        </div>
                        <div class="overview_con">
                            <div class="w1360 scroll_motion">
                                <div class="img_box">
                                    <img class="pc_img" src="/assets/images/company/jeong_overview.jpg" alt="">
                                    <img class="mo_img" src="/assets/images/company/jeong_overview_mo.jpg" alt="">
                                </div>
                                <div class="txt_box">
                                    <h4 class="sub_title_01 en_mont">Company Summary</h4>
                                    <dl>
                                        <dt>Company<br class="mo_ver"> Name</dt>
                                        <dd>ECORBIT ENERGY Jeongse</dd>
                                    </dl>
                                    <dl>
                                        <dt>Establishment Date</dt>
                                        <dd>2015.5.15</dd>
                                    </dl>
                                    <dl>
                                        <dt>Main Business</dt>
                                        <dd>Waster intermediate<br> treatment business</dd>
                                    </dl>
                                    <dl>
                                        <dt>Capacity</dt>
                                        <dd>91.2 tons/day</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="facility_con">
                            <div class="w1360">
                                <h4 class="sub_title_01 scroll_motion en_mont">Main Facilities</h4>
                                <ul>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/jeong_facility_img01.jpg" alt="소각시설 전경 이미지">
                                        <img class="mo_img" src="/assets/images/company/jeong_facility_img01_mo.jpg" alt="소각시설 전경 이미지">
                                        <p class="line2">Panorama of<br> incineration facility</p>
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/jeong_facility_img02.jpg" alt="오니 건조 시설 이미지">
                                        <img class="mo_img" src="/assets/images/company/jeong_facility_img02_mo.jpg" alt="오니 건조 시설 이미지">
                                        <p class="line2">Sludge drying<br> facility</p>
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/jeong_facility_img03.jpg" alt="오니 저장 시설 이미지">
                                        <img class="mo_img" src="/assets/images/company/jeong_facility_img03_mo.jpg" alt="오니 저장 시설 이미지">
                                        <p class="line2">Sludge Storage<br> Facility</p>
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/jeong_facility_img04.jpg" alt="발전시설 이미지">
                                        <img class="mo_img" src="/assets/images/company/jeong_facility_img04_mo.jpg" alt="발전시설 이미지">
                                        <p class="line2">Generator<br> facility</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="location_con">
                            <div class="w1360 scroll_motion">
                                <div class="txt_box">
                                    <h4 class="sub_title_01 en_mont">Directions</h4>
                                    <p>178-1, Duryu-gil, Angang-eup, Gyeongsangbuk-do</p>
                                </div>
                                <div class="img_box"><iframe title="178-1, Duryu-gil, Angang-eup, Gyeongsangbuk-do" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228.9324251413436!2d129.16273715102017!3d35.973077521420066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3566574c14a24feb%3A0xebfaf93c886b877!2z7J207JeQ7Iqk7KeA6rK97KO8!5e0!3m2!1sen!2skr!4v1650269866333!5m2!1sen!2skr" height="480" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                            </div>
                        </div>
                    </div>
                    <!-- 에너지 정세 [E] -->
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