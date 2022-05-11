<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "EN_COMPANY_21";
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
                            <li class="green on"><a href="<?=$G_EN_FOLDER?>/company/energy">Medical Waste Incineration</a></li>
                            <li class="green"><a href="<?=$G_EN_FOLDER?>/company/energy1">Industrial Waste Incineration</a></li>
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
                            <p class="main_title black">Medical Waste Incineration</p>
                            <p class="desc">ECORBIT Energy incinerates waste generated from hospitals<br> in an eco-friendly manner that is harmless to humans.</p>
                        </div>
                    </div>
                    <div class="img_box scroll_motion">
                        <img src="/assets/images/company/energy_img_01_en.png" alt="" class="pc_img">
                        <img src="/assets/images/company/energy_img_01_en_mo.png" alt="" class="mo_img">
                    </div>
                    <div class="sub_tab_area">
                        <p class="mo_ver">ECORBIT Energy Gyeongju</p>
                        <ul class="four">
                            <li class="on"><button type="button">ECORBIT ENERGY Gyeongju</button></li>
                            <li><button type="button">ECORBIT ENERGY</button></li>
                            <li><button type="button">ECORBIT ENERGY Gwangju</button></li>
                            <li><button type="button">ECORBIT ENERGY Gyeongsan</button></li>
                        </ul>
                    </div>
                </div>
                <div class="sub_cont">
                    <!-- 에너지 경주 [S] -->
                    <div class="on">
                        <div class="sub_cont_title w1360 scroll_motion">
                            <h3 class="en_mont">ECORBIT ENERGY Gyeongju</h3>
                        </div>
                        <div class="overview_con">
                            <div class="w1360 scroll_motion">
                                <div class="img_box">
                                    <img class="pc_img" src="/assets/images/company/kju_overview.jpg" alt="">
                                    <img class="mo_img"src="/assets/images/company/kju_overview_mo.png" alt="">
                                </div>
                                <div class="txt_box">
                                    <h4 class="sub_title_01 en_mont">Company Summary</h4>
                                    <dl>
                                        <dt>Company<br class="mo_ver"> Name</dt>
                                        <dd>ECORBIT ENERGY Gyeongju</dd>
                                    </dl>
                                    <dl>
                                        <dt>Establishment Date</dt>
                                        <dd>2001. 4. 13</dd>
                                    </dl>
                                    <dl>
                                        <dt>Main Business</dt>
                                        <dd>Medical waste<br> treatment business</dd>
                                    </dl>
                                    <dl>
                                        <dt>Capacity</dt>
                                        <dd>96 tons/day<br> (2 incinerators in operation)</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="facility_con">
                            <div class="w1360">
                                <h4 class="sub_title_01 scroll_motion en_mont">Main Facilities</h4>
                                <ul>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/kju_facility_img01.jpg" alt="폐기물 투입 시설 이미지">
                                        <img class="mo_img" src="/assets/images/company/kju_facility_img01_mo.jpg" alt="폐기물 투입 시설 이미지">
                                        <p class="line2">Waste loading<br>
                                            facility</p>
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/kju_facility_img02.jpg" alt="소각시설 이미지">
                                        <img class="mo_img" src="/assets/images/company/kju_facility_img02_mo.jpg" alt="소각시설 이미지">
                                        <p class="line2">Incineration<br>
                                            Facility</p>
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/kju_facility_img03.jpg" alt="발전시설 이미지">
                                        <img class="mo_img" src="/assets/images/company/kju_facility_img03_mo.jpg" alt="발전시설 이미지">
                                        <p class="line2">Generator<br>
                                            Facility</p>
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/kju_facility_img04.jpg" alt="오염저감시설 이미지">
                                        <img class="mo_img" src="/assets/images/company/kju_facility_img04_mo.jpg" alt="오염저감시설 이미지">
                                        <p class="line2">Pollution reduction<br>
                                            facility</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="location_con">
                            <div class="w1360 scroll_motion">
                                <div class="txt_box">
                                    <h4 class="sub_title_01 en_mont">Directions</h4>
                                    <p>178-1 Duryu-gil, Angang-eup,<br> Gyeongju <br class="mo_ver">(in Duryu Plant)</p>
                                </div>
                                <div class="img_box">
                                    <iframe title="178-1 Duryu-gil, Angang-eup, Gyeongju (in Duryu Plant)" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228.9324251413436!2d129.16273715102017!3d35.973077521420066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3566574c14a24feb%3A0xebfaf93c886b877!2z7J207JeQ7Iqk7KeA6rK97KO8!5e0!3m2!1sen!2skr!4v1650269866333!5m2!1sen!2skr" height="480" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 에너지 경주 [E] -->

                    <!-- 에너지 [S] -->
                    <div>
                        <div class="sub_cont_title w1360 scroll_motion">
                            <h3 class="en_mont">ECORBIT ENERGY</h3>
                        </div>
                        <div class="overview_con">
                            <div class="w1360 scroll_motion">
                                <div class="img_box">
                                    <img class="pc_img" src="/assets/images/company/energy_overview.jpg" alt="">
                                    <img class="mo_img" src="/assets/images/company/energy_overview_mo.png" alt="">
                                </div>
                                <div class="txt_box">
                                    <h4 class="sub_title_01 en_mont">Company Summary</h4>
                                    <dl>
                                        <dt>Company<br class="mo_ver"> Name</dt>
                                        <dd>ECORBIT ENERGY</dd>
                                    </dl>
                                    <dl>
                                        <dt>Establishment Date</dt>
                                        <dd>1994. 9. 1</dd>
                                    </dl>
                                    <dl>
                                        <dt>Main Business</dt>
                                        <dd>Medical waste intermediate treatment business (incineration)</dd>
                                    </dl>
                                    <dl>
                                        <dt>Capacity</dt>
                                        <dd>76.8 tons/day</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="facility_con">
                            <div class="w1360">
                                <h4 class="sub_title_01 scroll_motion en_mont">Main Facilities</h4>
                                <ul>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/energy_facility_img01.jpg" alt="폐기물 투입 시설 이미지">
                                        <img class="mo_img" src="/assets/images/company/energy_facility_img01_mo.jpg" alt="폐기물 투입 시설 이미지">
                                        <p class="line2">Waste loading<br> facility</p>
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/energy_facility_img02.jpg" alt="소각시설 전경 이미지">
                                        <img class="mo_img" src="/assets/images/company/energy_facility_img02_mo.jpg" alt="소각시설 전경 이미지">
                                        <p class="line2">Panorama of<br> incineration facility</p>
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/energy_facility_img03.jpg" alt="오염저감시설 이미지">
                                        <img class="mo_img" src="/assets/images/company/energy_facility_img03_mo.jpg" alt="오염저감시설 이미지">
                                        <p class="line2">Pollution reduction<br> facility</p>
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/energy_facility_img04.jpg" alt="통합관제실 이미지">
                                        <img class="mo_img" src="/assets/images/company/energy_facility_img04_mo.jpg" alt="통합관제실 이미지">
                                        <p class="line2">Integrated<br> Control Room</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="location_con">
                            <div class="w1360 scroll_motion">
                                <div class="txt_box">
                                    <h4 class="sub_title_01 en_mont">Directions</h4>
                                    <p>7, Geumsa-ro, Jincheon-eup,<br> Jincheon-gun,<br> Chungcheongbuk-do</p>
                                </div>
                                <div class="img_box"><iframe title="7, Geumsa-ro, Jincheon-eup, Jincheon-gun, Chungcheongbuk-do" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.126472364485!2d127.37398995103807!3d36.8154891744398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3564d3e06b939f6d%3A0xd66d1c85c406b7ac!2zKOyjvCnsnbTsl5DsiqTsp4A!5e0!3m2!1sen!2skr!4v1650269964083!5m2!1sen!2skr" height="480" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                            </div>
                        </div>
                    </div>
                    <!-- 에너지 [E] -->

                    <!-- 에너지 광주 [S] -->
                    <div>
                        <div class="sub_cont_title w1360 scroll_motion">
                            <h3 class="en_mont">ECORBIT ENERGY Gwangju</h3>
                        </div>
                        <div class="overview_con">
                            <div class="w1360 scroll_motion">
                                <div class="img_box">
                                    <img class="pc_img" src="/assets/images/company/gwang_overview.jpg" alt="">
                                    <img class="mo_img" src="/assets/images/company/gwang_overview_mo.png" alt="">
                                </div>
                                <div class="txt_box">
                                    <h4 class="sub_title_01 en_mont">Company Summary</h4>
                                    <dl>
                                        <dt>Company<br class="mo_ver"> Name</dt>
                                        <dd>ECORBIT ENERGY Gwangju</dd>
                                    </dl>
                                    <dl>
                                        <dt>Establishment Date</dt>
                                        <dd>2011. 3. 4</dd>
                                    </dl>
                                    <dl>
                                        <dt>Main Business</dt>
                                        <dd>Medical waste intermediate treatment business (incineration)</dd>
                                    </dl>
                                    <dl>
                                        <dt>Capacity</dt>
                                        <dd>24 tons/day</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="facility_con">
                            <div class="w1360">
                                <h4 class="sub_title_01 scroll_motion en_mont">Main Facilities</h4>
                                <ul>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/gwang_facility_img01.jpg" alt="폐기물 투입 시설 이미지">
                                        <img class="mo_img" src="/assets/images/company/gwang_facility_img01_mo.jpg" alt="폐기물 투입 시설 이미지">
                                        <p class="line2">Waste loading<br> facility</p>
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/gwang_facility_img02.jpg" alt="소각시설 전경 이미지">
                                        <img class="mo_img" src="/assets/images/company/gwang_facility_img02_mo.jpg" alt="소각시설 전경 이미지">
                                        <p class="line2">Panorama of<br> incineration facility</p>
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/gwang_facility_img03.jpg" alt="오염저감시설 이미지">
                                        <img class="mo_img" src="/assets/images/company/gwang_facility_img03_mo.jpg" alt="오염저감시설 이미지">
                                        <p class="line2">Pollution reduction<br> facility</p>
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/gwang_facility_img04.jpg" alt="통합관제실 이미지">
                                        <img class="mo_img" src="/assets/images/company/gwang_facility_img04.jpg" alt="통합관제실 이미지">
                                        <p class="line2">Integrated<br> Control Room</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="location_con">
                            <div class="w1360 scroll_motion">
                                <div class="txt_box">
                                    <h4 class="sub_title_01 en_mont">Directions</h4>
                                    <p>690-14, Sannam-ro, Nam-gu,<br> Gwangju</p>
                                </div>
                                <div class="img_box"><iframe title="690-14, Sannam-ro, Nam-gu, Gwangju" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.1326566125226!2d126.8633614510017!3d35.07841807030554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3572275378e29b31%3A0x68f2376774131845!2z7J207JeQ7Iqk7KeA6rSR7KO8!5e0!3m2!1sen!2skr!4v1650270002067!5m2!1sen!2skr" height="480" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                            </div>
                        </div>
                    </div>
                    <!-- 에너지 광주 [E] -->

                    <!-- 에너지 경산 [S] -->
                    <div>
                        <div class="sub_cont_title w1360 scroll_motion">
                            <h3 class="en_mont">ECORBIT ENERGY Gyeongsan</h3>
                        </div>
                        <div class="overview_con">
                            <div class="w1360 scroll_motion">
                                <div class="img_box">
                                    <img class="pc_img" src="/assets/images/company/gyeong_overview.jpg" alt="">
                                    <img class="mo_img" src="/assets/images/company/gyeong_overview_mo.png" alt="">
                                </div>
                                <div class="txt_box">
                                    <h4 class="sub_title_01 en_mont">Company Summary</h4>
                                    <dl>
                                        <dt>Company<br class="mo_ver"> Name</dt>
                                        <dd>ECORBIT ENERGY Gyeongsan</dd>
                                    </dl>
                                    <dl>
                                        <dt>Establishment Date</dt>
                                        <dd>1996. 11. 11</dd>
                                    </dl>
                                    <dl>
                                        <dt>Main Business</dt>
                                        <dd>Medical waste<br> treatment business</dd>
                                    </dl>
                                    <dl>
                                        <dt>Capacity</dt>
                                        <dd>44.4 tons/day</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="facility_con">
                            <div class="w1360">
                                <h4 class="sub_title_01 scroll_motion en_mont">Main Facilities</h4> 
                                <ul>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/gyeong_facility_img01.jpg" alt="폐기물 투입 시설 이미지">
                                        <img class="mo_img" src="/assets/images/company/gyeong_facility_img01_mo.jpg" alt="폐기물 투입 시설 이미지">
                                        <p class="line2">Waste loading <br>facility</p>
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/gyeong_facility_img02.jpg" alt="소각시설 전경 이미지">
                                        <img class="mo_img" src="/assets/images/company/gyeong_facility_img02_mo.jpg" alt="소각시설 전경 이미지">
                                        <p class="line2">Panorama of<br> incineration facility</p>
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/gyeong_facility_img03.jpg" alt="오염저감시설 이미지">
                                        <img class="mo_img" src="/assets/images/company/gyeong_facility_img03_mo.jpg" alt="오염저감시설 이미지">
                                        <p class="line2">Pollution reduction<br> facility</p>
                                    </li>
                                    <li class="scroll_motion">
                                        <img class="pc_img" src="/assets/images/company/gyeong_facility_img04.jpg" alt="통합관제실 이미지">
                                        <img class="mo_img" src="/assets/images/company/gyeong_facility_img04_mo.jpg" alt="통합관제실 이미지">
                                        <p class="line2">Integrated<br> Control Room</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="location_con">
                            <div class="w1360 scroll_motion">
                                <div class="txt_box">
                                    <h4 class="sub_title_01 en_mont">Directions</h4>
                                    <p>355-26, Daegudae-ro Jillyang-eup, Gyeongsan-si, Gyeongsangbuk-do</p>
                                </div>
                                <div class="img_box"><iframe title="355-26, Daegudae-ro Jillyang-eup, Gyeongsan-si, Gyeongsangbuk-do" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.1912976960148!2d128.8557931510185!3d35.89333022581994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35666daa11d11ae3%3A0xb3dd45766b958462!2zKOyjvCnsnbTsl5DsiqTsp4Dqsr3sgrA!5e0!3m2!1sen!2skr!4v1650270028040!5m2!1sen!2skr" height="480" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                            </div>
                        </div>
                    </div>
                    <!-- 에너지 경산 [E] -->
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