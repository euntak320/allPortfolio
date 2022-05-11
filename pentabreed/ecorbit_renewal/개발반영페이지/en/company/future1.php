<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "EN_COMPANY_42";
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

	<title>Business | FUTURE BUSINESS BU</title>

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
        <main class="company citymining">
            <div class="keyvisual_area">
                <div class="keyvisual_txt">
                    <h1 class="en_mont">FUTURE <br class="mo_ver"> BUSINESS</h1>
                    <h2>ECORBIT provides a sustainable<br class="mo_ver"> environmental value with the resource<br class="mo_ver"> recirculation service</h2>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>BUSINESS</span>
                    <span>FUTURE BUSINESS</span>
                </div>
                <div class="keyvisual_scroll_down">
                    <span>SCROLL DOWN</span>
                </div>
            </div>
            <section class="content_area">
                <div class="main_tab_area">
                    <div class="scroll_wrap">
                        <ul class="sub_tab">
                            <li class="green"><a href="<?=$G_EN_FOLDER?>/company/future">Industrial Water Treatment System</a></li>
                            <li class="green on"><a href="<?=$G_EN_FOLDER?>/company/future1">Urban Mining</a></li>
                            <li class="green"><a href="<?=$G_EN_FOLDER?>/company/future2">Soil Remediation</a></li>
                        </ul>
                    </div>
                </div>
                <div class="citymining_con01">
                    <div class="w1360">
                        <div class="company_title">
                            <p class="main_title black">Urban Mining</p>
                            <p class="desc">ECORBIT provides optimal services for customers by collecting metal resources from industrial<br> activities and applying eco-friendly rechargeable battery recycling technology.</p>
                        </div>
                    </div>
                    <div class="img_box">
                        <div class="w1360">
                            <img src="/assets/images/company/citymining_img01_en.png" alt="" class="pc_img">
                            <img src="/assets/images/company/citymining_img01_en_mo.png" alt="" class="mo_img">
                        </div>
                    </div>
                </div>
                <div class="citymining_con02 scroll_motion">
                    <div class="w1360">
                        <span class="sub_title_01 black">Main Business</span>
                        <div class="list_box">
                            <ul class="tab pc_ver">
                                <li class="on">Rechargeable Batteries</li>
                                <li>Catalysts</li>
                                <li>Scrap</li>
                                <li>Solar Panels</li>
                                <li>Sludge</li>
                            </ul>
                            <div class="tab_cont">
                                <ul class="swiper-wrapper">
                                    <li class="swiper-slide">
                                        <div class="img_box"><img src="/assets/images/company/citymining_business_img01.jpg" alt="이차전지 이미지"></div>
                                        <div class="txt_box">
                                            <h5>Rechargeable Batteries</h5>
                                            <p>Battery production process scrap</p>
                                            <p>Battery scrap</p>
                                            <p>Energy Saver System (ESS)</p>
                                        </div>
                                    </li>
                                    <li class="swiper-slide">
                                        <div class="img_box"><img src="/assets/images/company/citymining_business_img02.jpg" alt="촉매 이미지"></div>
                                        <div class="txt_box">
                                            <h5>Catalysts</h5>
                                            <p>Waste petrochemical catalyst</p>
                                            <p>Waste miscellaneous chemical (bio) catalyst</p>
                                            <p>Waste vehicle three-way catalyst</p>
                                        </div>
                                    </li>
                                    <li class="swiper-slide">
                                        <div class="img_box"><img src="/assets/images/company/citymining_business_img03.jpg" alt="스크랩 이미지"></div>
                                        <div class="txt_box">
                                            <h5>Scrap</h5>
                                            <p>Semiconductor scrap, PCB, lead frame, miscellaneous e-scrap</p>
                                            <p>Waste electric wires and communication cables</p>
                                            <p>Miscellaneous nonferrous metal scrap</p>
                                        </div>
                                    </li>
                                    <li class="swiper-slide">
                                        <div class="img_box"><img src="/assets/images/company/citymining_business_img04.jpg" alt="태양광 이미지"></div>
                                        <div class="txt_box">
                                            <h5>Solar Panels</h5>
                                            <p>Solar panel module production process scrap</p>
                                            <p>Waste modules</p>
                                        </div>
                                    </li>
                                    <li class="swiper-slide">
                                        <div class="img_box"><img src="/assets/images/company/citymining_business_img05.jpg" alt="슬러지 이미지"></div>
                                        <div class="txt_box">
                                            <h5>Sludge</h5>
                                            <p>Inorganic sludge from precious metals and nonferrous metal refining and smelting processes</p>
                                            <p>Fly ash from production processes and collected dust</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="mo_list_box">
                            <div class="sub_tab_area border_type">
                                <p class="mo_ver">Rechargeable Batteries</p>
                                <ul>
                                    <li class="on"><button type="button">Rechargeable Batteries</button></li>
                                    <li><button type="button">Catalysts</button></li>
                                    <li><button type="button">Scrap</button></li>
                                    <li><button type="button">Solar Panels</button></li>
                                    <li><button type="button">Sludge </button></li>
                                </ul>
                            </div>
                            <div class="sub_tab_cont">
                                <!-- 이차전지 : S -->
                                <div class="on">
                                    <div class="txt_box">
                                        <h5>Rechargeable
                                            Batteries</h5>
                                        <p>Battery production process scrap</p>
                                        <p>Battery scrap</p>
                                        <p>Energy Saver System (ESS)</p>
                                    </div>
                                    <div class="img_box"><img src="/assets/images/company/citymining_business_img01.jpg" alt="이차전지 이미지"></div>
                                </div>
                                <!-- 이차전지 : E -->

                                <!-- 촉매 : S -->
                                <div>
                                    <div class="txt_box">
                                        <h5>Catalysts</h5>
                                        <p>Waste petrochemical catalyst</p>
                                        <p>Waste miscellaneous chemical (bio) catalyst</p>
                                        <p>Waste vehicle three-way catalyst</p>
                                    </div>
                                    <div class="img_box"><img src="/assets/images/company/citymining_business_img02.jpg" alt="촉매 이미지"></div>
                                </div>
                                <!-- 촉매 : E -->

                                <!-- 스크랩 : S -->
                                <div>
                                    <div class="txt_box">
                                        <h5>Scrap</h5>
                                        <p>Semiconductor scrap, PCB, lead frame, miscellaneous e-scrap</p>
                                        <p>Waste electric wires and communication cables</p>
                                        <p>Miscellaneous nonferrous metal scrap</p>
                                    </div>
                                    <div class="img_box"><img src="/assets/images/company/citymining_business_img03.jpg" alt="스크랩 이미지"></div>
                                </div>
                                <!-- 스크랩 : E -->

                                <!-- 태양광 : S -->
                                <div>
                                    <div class="txt_box">
                                        <h5>Solar Panels</h5>
                                        <p>Solar panel module production process scrap</p>
                                        <p>Waste modules</p>
                                    </div>
                                    <div class="img_box"><img src="/assets/images/company/citymining_business_img04.jpg" alt="태양광 이미지"></div>
                                </div>
                                <!-- 태양광 : E -->

                                <!-- 슬러지 : S -->
                                <div>
                                    <div class="txt_box">
                                        <h5>Sludge</h5>
                                        <p>Inorganic sludge from precious metals and nonferrous metal refining and smelting processes</p>
                                        <p>Fly ash from production processes and collected dust</p>
                                    </div>
                                    <div class="img_box"><img src="/assets/images/company/citymining_business_img05.jpg" alt="슬러지 이미지"></div>
                                </div>
                                <!-- 슬러지 : E -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="citymining_con03">
                    <div class="w1360">
                        <span class="sub_title_01 black">Battery<br> Recycling</span>
                        <div class="graph_box">
                            <div class="title"><span>Battery <br><br class="mobile">Recycling</span></div>
                            <ul>
                                <li>
                                    <i class="num">01</i>
                                    <div class="txt_box">
                                        <p>Collection/<br><br class="mobile">
                                            Transport</p>
                                        <div class="icon_area">
                                            <div class="icon_box">
                                                <i class="icon01_1"></i>
                                                <span>Waste batteries</span>
                                            </div>
                                            <div class="icon_box">
                                                <i class="icon01_2"></i>
                                                <span>Transport</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i class="num">02</i>
                                    <div class="txt_box">
                                        <p>Electric<br><br class="mobile"> Discharge</p>
                                        <div class="icon_area">
                                            <div class="icon_box">
                                                <i class="icon02_1"></i>
                                                <span>Brine discharge</span>
                                            </div>
                                            <div class="icon_box">
                                                <i class="icon02_2"></i>
                                                <span>Electric discharge</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i class="num">03</i>
                                    <div class="txt_box">
                                        <p>Dismantling/<br><br class="mobile"> Separation</p>
                                        <div class="icon_area">
                                            <div class="icon_box">
                                                <i class="icon03_1"></i>
                                                <span>Battery 
                                                    pack</span>
                                            </div>
                                            <div class="icon_box">
                                                <i class="icon03_2"></i>
                                                <span>Dismantling 
                                                    facility</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i class="num">04</i>
                                    <div class="txt_box">
                                        <p>Useful Material <br><br class="mobile">
                                            Collection</p>
                                        <div class="icon_area">
                                            <div class="icon_box">
                                                <i class="icon04_1"></i>
                                                <span>Black<br>powder</span>
                                            </div>
                                            <div class="icon_box">
                                                <i class="icon04_2"></i>
                                                <span>Cu Scrap</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i class="num">05</i>
                                    <div class="txt_box">
                                        <p>Supply <br><br class="mobile">
                                            Materials</p>
                                        <div class="icon_area">
                                            <div class="icon_box">
                                                <i class="icon05_1"></i>
                                                <span class="w100">Supply to battery material 
                                                    companies</span>
                                            </div>
                                            <div class="icon_box">
                                                <i class="icon05_2"></i>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="citymining_con04">
                    <div class="w1360">
                        <div class="list_box">
                            <dl class="scroll_motion">
                                <dt><p class="en_mont"><i class="en_mont">01</i>Collection/Transport</p></dt>
                                <dd>
                                    <div class="txt_box">
                                        <p class="txt">Over 10,000 trucks can be stored</p>
                                        <p class="txt">Exclusive vehicle that can quickly collect</p>
                                    </div>
                                    <ul>
                                        <li><img src="/assets/images/company/citymining_list_img01.jpg" alt="폐 이차전지"><span>Waste batteries</span></li>
                                        <li><img src="/assets/images/company/citymining_list_img02.jpg" alt="운반"><span>Transport</span></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl class="scroll_motion">
                                <dt><p class="en_mont"><i class="en_mont">02</i>Electric Discharge</p></dt>
                                <dd>
                                    <div class="txt_box">
                                        <p class="txt">Secured fire and explosion safety</p>
                                        <p class="txt">Verified discharge technology</p>
                                    </div>
                                    <p class="txt_small mo_ver">Only waste batteries completely discharged of brine<br> are purchased. (Treated externally)</p>
                                    <ul>
                                        <li><img src="/assets/images/company/citymining_list_img03.jpg" alt="염수 방전"><span>Brine discharge</span></li>
                                        <li><img src="/assets/images/company/citymining_list_img04.jpg" alt="전기 방전"><span>Electric discharge</span></li>
                                    </ul>
                                    <p class="txt_small pc_ver">Only waste batteries completely discharged of brine are purchased. (Treated externally)</p>
                                </dd>
                            </dl>
                            <dl class="scroll_motion">
                                <dt><p class="en_mont"><i class="en_mont">03</i>Dismantling/Separation</p></dt>
                                <dd>
                                    <div class="txt_box">
                                        <p class="txt">Effective dismantling/separation<br> technology held</p>
                                        <p class="txt">Treats large capacity of industrial materials for first time in Korea</p>
                                    </div>
                                    <ul>
                                        <li><img src="/assets/images/company/citymining_list_img05.jpg" alt="배터리 팩"><span>Battery pack</span></li>
                                        <li><img src="/assets/images/company/citymining_list_img06.jpg" alt="해체 시설"><span>Dismantling facility</span></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl class="scroll_motion">
                                <dt><p class="en_mont"><i class="en_mont">04</i>Useful Material Collection</p></dt>
                                <dd>
                                    <div class="txt_box">
                                        <p class="txt">Korea’s largest single facility capacity</p>
                                        <p class="txt">Collected high-quality black powder (Impure content ↓)</p>
                                    </div>
                                    <p class="txt_small mo_ver">Facility under review to improve future added value</p>
                                    <ul>
                                        <li><img src="/assets/images/company/citymining_list_img07.jpg" alt="Black powder"><span>Black powder</span></li>
                                        <li><img src="/assets/images/company/citymining_list_img08.jpg" alt="Cu Scrap"><span>Cu Scrap</span></li>
                                    </ul>
                                    <p class="txt_small pc_ver">Facility under review to improve future added value</p>
                                </dd>
                            </dl>
                            <dl class="scroll_motion">
                                <dt><p class="en_mont"><i class="en_mont">05</i>Supply Materials</p></dt>
                                <dd>
                                    <div class="txt_box">
                                        <p class="txt">Customized product supplied to the customer</p>
                                    </div>
                                    <ul>
                                        <li><img src="/assets/images/company/citymining_list_img09.jpg" alt="이차전지 소재업체 공급"><span class="w100 pc_ver">Supply to battery material companies</span></li>
                                        <li><img src="/assets/images/company/citymining_list_img10.jpg" alt="이차전지 소재업체 공급"><span class="w100 mo_ver">Supply to battery material companies</span></li>
                                    </ul>
                                </dd>
                            </dl>
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