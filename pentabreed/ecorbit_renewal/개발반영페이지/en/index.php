<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "EN_MAIN";
	$LangCode = "EN";
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title>ECORBIT</title>

	<!-- favicon -->
	<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

	<!-- common area -->
	<link rel="stylesheet" href="/assets/css/lib/fonts.css">
	<link rel="stylesheet" href="/assets/css/lib/common.css">
	<script type="text/javascript" src="/assets/js/lib/jquery-3.6.0.min.js"></script>
	<script type="text/javascript" src="/assets/js/common.js"></script>

	<!-- for Main -->
	<link rel="stylesheet" href="/assets/css/main.css">
	<link rel="stylesheet" href="/assets/css/lib/jquery.fullpage.min.css">
	<link rel="stylesheet" href="/assets/css/lib/swiper.min.css">

	<script src="/assets/js/lib/scrolloverflow.min.js.map"></script>
	<script src="/assets/js/lib/fullpage.dropEffect.min.js"></script>
	<script src="/assets/js/lib/fullpage.waterEffect.min.js"></script>
	<script src="/assets/js/lib/fullpage.extensions.min.js"></script>
	<script src="/assets/js/lib/swiper.min.js"></script>
	<script src="/assets/js/main.js"></script>
</head>

<body>
    <!-- top_banner 가릴때 #wrap에 topbanner_show 클래스도 같이 사라짐. -->
    <div id="wrap" class="intro_play topbanner_show fullpage_01 transoff">

        <!-- TOP_BANNER [S] -->
        <div class="top_banner">
            <div class="w1360">
                <div class="txt_box">
                    <p>TSK Corporation – Eco Solution Group (ESG), signing on a merger contract</p>
                    <span>TSK Corporation (hereinafter TSK) and Eco Solution Group (hereinafter ESG) which are domestic environmental industry leaders announced that signed<br> on a merger contract for both companies on July 16th.</span>
                </div>
            </div>
            <div class="btn_box mo_ver">
                <button type="button">never see you again today <img src="/assets/images/common/btn_topmenu_close_mo.png" alt=""></button>
            </div>
            <div class="btn_box pc_ver">
                <div class="check_custom"><input type="checkbox" id="check"><label for="check"><i></i></label></div>
                <span class="notoday"><label for="check">never see you again today</label></span>
                <span class="close_btn"><img src="/assets/images/common/btn_topmenu_close.png" alt=""></span>
            </div>
        </div>
        <!-- TOP_BANNER [E] -->

        <!-- intro [S] -->
        <iframe id="intro_frame" src="<?=$G_EN_FOLDER?>/intro" frameborder="0" title="메인인트로"></iframe>
        <i class="intro_skip_btn en_mont">SKIP</i>
        <!-- intro [E] -->

		<!-- HEADER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/header.php"; ?>
		<!-- HEADER [E] -->

		<!-- GNB [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/gnb.php"; ?>
		<!-- GNB [E] -->

        <!-- CONTENT [S] -->
        <main class="main">
            <div class="content_area">
                <!-- main_visual [S] -->
                <section class="section main_visual" data-drop="down">
                    <div class="video_box">
                        <video autoplay="autoplay" loop="loop" data-autoplay="" muted="muted" id="visual_video" playsinline>
                            <source src="/assets/images/main/main_visual.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div class="w1360">
                        <div class="txt_box">
                            <h3 class="en_mont">Wholesome Solution<br><br class="mobile"> For Our Earth</h3>
                            <p>South Korea’s Top Comprehensive Environment Company, ECORBIT<br> ECORBIT will advance to become the top global firm<br> by providing a new perspective and value on the environment.</p>
                            <div class="play_btn">
                                <div class="bar"><i></i></div>
                                <span class="play en_mont">PLAY</span>
                                <span class="stop en_mont">STOP</span>
                            </div>
                        </div>
                    </div>
                    <div class="menu_list">
                        <div class="w1360">
                            <ul>
                                <li class="green_list">
                                    <span class="en_mont">GREEN</span>
                                    <div class="hover_box">
                                        <i class="mo_close_btn"></i>
                                        <a href="/en/company/green">
                                            <img src="/assets/images/main/visual_logo_03.png" alt="그린로고">
                                            <p class="title en_mont">GREEN</p>
                                            <p class="desc">Creating a clean and safe<br class="mo_ver"> environment with eco-friendly<br class="mo_ver"> methods of final waste disposal<br class="mo_ver"> treatment</p>
                                        </a>
                                    </div>
                                </li>
                                <li class="energy_list">
                                    <span class="en_mont">ENERGY</span>
                                    <div class="hover_box">
                                        <i class="mo_close_btn"></i>
                                        <a href="/en/company/energy">
                                            <img src="/assets/images/main/visual_logo_02.png" alt="에너지로고">
                                            <p class="title en_mont">ENERGY</p>
                                            <p class="desc">Creating a sustainable<br class="mo_ver"> tomorrow by converting waste<br class="mo_ver"> into energy</p>
                                        </a>
                                    </div>
                                </li>
                                <li class="water_list">
                                    <span class="en_mont">WATER</span>
                                    <div class="hover_box">
                                        <i class="mo_close_btn"></i>
                                        <a href="/en/company/water">
                                            <img src="/assets/images/main/visual_logo_01.png" alt="워터로고">
                                            <p class="title en_mont">WATER</p>
                                            <p class="desc">The beginning of clean and<br class="mo_ver"> healthy water purification<br class="mo_ver"> for the future</p>
                                        </a>
                                    </div>
                                </li>
                                <li class="future_list">
                                    <span class="en_mont">FUTURE</span>
                                    <div class="hover_box">
                                        <i class="mo_close_btn"></i>
                                        <a href="/en/company/future">
                                            <img src="/assets/images/main/visual_logo_04.png" alt="미래사업로고">
                                            <p class="title en_mont">FUTURE</p>
                                            <p class="desc">ECORBIT provides a sustainable<br class="mo_ver"> environmental value with the<br class="mo_ver"> resource recirculation service</p>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <!-- visual [E] -->

                <!-- main_count [S] -->
                <section class="section main_count" data-drop="all">
                    <div class="w1360">
                        <ul class="swiper-wrapper">
                            <li class="swiper-slide">
                                <div class="txt_box type01">
                                    <h4 class="text_up"><span class="mix_font">Patent technology<br> 201 Count</span></h4>
                                    <div class="right_text">
                                        <p class="desc text_up"><span class="en_mont">Patent technology</span></p>
                                        <p class="count en_mont"><strong class="counter_01 en_mont" data-counter="201">0</strong> Count</p>
                                        <p class="text text_up"><span>ECORBIT’s technology leads change and innovation</span></p>
                                    </div>
                                </div>
                            </li>
                            <li class="swiper-slide">
                                <div class="txt_box type02">
                                    <img src="../assets/images/main/main_count_bg.png" alt="">
                                    <h4 class="text_up"><span class="mix_font">Subsidiary Company <br>21 Count</span></h4>
                                    <div class="right_text">
                                        <p class="desc text_up"><span class="en_mont">Subsidiary Company</span></p>
                                        <p class="count en_mont"><strong class="counter_02 en_mont" data-counter="21">0</strong> Count</p>
                                        <p class="text text_up"><span>ECORBIT provides a total solution for environmental businesses<br> through its 21 subsidiary companies, and is advancing beyond<br> the domestic market to become a leading global company.</span></p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <!-- main_count [E] -->

                <!-- main_world [S] -->
                <section class="section main_world" data-drop="up">
                    <div class="w1360">
                        <h4><p class="en_mont">ECORBIT <br>the leader in <span class="en_mont">ESG</span></p></h4>
                        <p class="txt"><span>
                            ECORBIT is an ESG company that contributes to humanity.<br>
                            We form a sustainable virtuous cycle by creating environmental value<br>
                            and business management based on law and ethics.
                        </span></p>
                    </div>
                    <div class="img_box"><img src="/assets/images/main/world_bg.jpg" alt=""></div>
                </section>
                <!-- main_world [E] -->

                <section class="section">
                    <!-- main_cate [S] -->
                    <div class="main_cate">
                        <div class="w1360">
                            <ul>
                                <li>
                                    <div class="img_box"><img src="/assets/images/main/main_list_img01.jpg" alt="Environment"></div>
                                    <div class="txt_box">
                                        <p class="en_mont">ENVIRONMENT</p>
                                        <span>The global first-class comprehensive<br> environmental company that leads<br> the eco-friendly movement and circular economy</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="img_box"><img src="/assets/images/main/main_list_img02.jpg" alt="Social"></div>
                                    <div class="txt_box">
                                        <p class="en_mont">SOCIAL </p>
                                        <span>Preserves a clean natural environment and<br> keeps humanity healthy in accordance with<br> our values of coexistence and symbiosis</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="img_box"><img src="/assets/images/main/main_list_img03.jpg" alt="Governance"></div>
                                    <div class="txt_box">
                                        <p class="en_mont">GOVERNANCE</p>
                                        <span>Promotes mutual development through<br> honest and fair business practices<br> Pursues transparent ethical management<br> based on laws and principles</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- main_cate [E] -->

                    <!-- main_news [S] -->
					<?
						$NewsCnt = $fd->getCount("tbl_media_bodo", "(cDelFlag = 'N') AND (cUse = 'Y') AND (cIsMain = 'Y') AND (sLang = '". $LangCode ."')");

						if ($NewsCnt > 0) {
					?>
                    <div class="main_news">
                        <div class="w1360">
                            <h4 class="en_mont">ECORBIT<br><br class="mobile"><strong class="en_mont">News</strong></h4>
                            <div class="news_list">
                                <ul class="swiper-wrapper">
									<?
										$query	= "SELECT idx, sTitle, sPubDT, sHashTag, sThumbFileName, sThumbSaveName, iThumbFileSize FROM tbl_media_bodo WHERE (cDelFlag = 'N') AND (cUse = 'Y') AND (cIsMain = 'Y') AND (sLang = '". $LangCode ."') ORDER BY iOrderNo DESC LIMIT 0, 12";
										$result	= $fd->query($query);

										while ($list = $fd->fetchArray($result)) {
									?>
                                    <li class="swiper-slide" onclick="window.location='<?=$G_EN_FOLDER?>/media/press_view?idx=<?=trim($list["idx"])?>&ht=<?=trim($list["sHashTag"])?>&page=1';">
                                        <div class="date en_mont"><?=substr(str_replace("-", ".", trim($list["sPubDT"])), 2, 8)?></div>
                                        <div class="img_box"><img src="/upload/bodo/<?=trim($list["sThumbSaveName"])?>" alt="<?=stripslashes(trim($list["sTitle"]))?>"></div>
                                        <div class="title"><?=stripslashes(trim($list["sTitle"]))?></div>
                                    </li>
									<?
										}
										$fd->freeResult($result);
										unset($list);
									?>
                                </ul>
                                <span class="arrow prev"><img src="/assets/images/main/news_arrow_prev.png" alt="이전 슬라이드"></span>
                                <span class="arrow next"><img src="/assets/images/main/news_arrow_next.png" alt="다음 슬라이드"></span>
                            </div> 
                        </div>
                    </div>
                    <!-- main_news [E] -->
					<?	} ?>
                </section>

                <!-- main_info [S] -->
                <section class="section fp-auto-height">
                    <div class="main_info">
                        <div class="w1360">
                            <p>As South Korea’s top comprehensive environmental company,<br> ECORBIT resolves the environmental issues faced by society<br> and our customers to create a sustainable tomorrow.</p>
                            <div class="link_box">
                                <a href="javascript:alert('Sustainable management report will be published.');"><i><img src="/assets/images/main/main_info_icon01.png" alt="지속가능경영 보고서 다운로드"></i><span>Sustainable Management Report</span></a>
                                <a href="javascript:alert('The brochure will be published.');"><i><img src="/assets/images/main/main_info_icon02.png" alt="회사소개 브로슈어 다운로드"></i><span>Company Introduction Brochure</span></a>
                                <a href="/assets/file/[에코비트]사업보고서(2022.03.31).pdf" download><i><img src="/assets/images/main/main_info_icon03.png" alt="애뉴얼리포트 다운로드"></i><span>Annual Report</span></a>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- main_info [E] -->

                <section class="section fp-auto-height">
					<!-- FOOTER [S]  -->
					<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/footer.php"; ?>
					<!-- FOOTER [E]  -->
                </section>
            </div>
        </main>
        <!-- CONTENT [E] -->

		<!-- FLOATING BANNER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/floating_banner.php"; ?>
		<!-- FLOATING BANNER [E] -->
	</div>
</body>
</html>