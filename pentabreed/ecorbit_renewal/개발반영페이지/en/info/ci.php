<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "EN_INFO_31";
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

	<title>ABOUT ECORBIT | CI</title>

	<!-- SCRIPT_INFO [S] -->
	<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/script_info.php"; ?>
	<!-- SCRIPT_INFO [E] -->
</head>

<body>
    <div id="wrap">
		<!-- HEADER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/header.php"; ?>
		<!-- HEADER [E] -->

		<!-- GNB [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/gnb.php"; ?>
		<!-- GNB [E] -->

        <!-- content [S] -->
        <main class="info ci">
            <div class="keyvisual_area">
                <div class="keyvisual_txt">
                    <h1 class="en_mont">CI</h1>
                    <h2>Eco + Orbit</h2>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>ABOUT ECORBIT</span>
                    <span>CI</span>
                </div>
                <div class="keyvisual_scroll_down">
                    <span>SCROLL DOWN</span>
                </div>
            </div>
            <section class="content_area eng">
                <div class="ci_explain_area scroll_motion" >
                    <span class="main_title en_mont scroll_motion">CI</span>
                    <p class="scroll_motion">ECORBIT believes that understanding <br> the environment is the wisest way to look into the future.<br><br class="mobile">ECORBIT has formed its management policy by realizing<br>the value of resources and practicing ESG management<br>for regional coexistence.</p>
                    <div class="img_area scroll_motion">
                        <img src="/assets/images/info/ci_visual.jpg" alt="">
                    </div>
                </div>
                <div class="ci_image_area w1360">
                    <div class="ci_area normal scroll_motion" >
                        <div class="left_area" >
                            <span class="title en_mont">Basic Logo</span>
                            <p>The logo expresses ECORBIT’s way of<br> <br class="mobile">managing an active business<br><br class="mobile">with the leaf pattern.</p>
                        </div>
                        <div class="right_area" >
                            <div class="top_area">
                                <span class="small_title en_mont">Basic Logo</span>
                                <div class="img_area">
                                    <img src="/assets/images/info/ci_image_standard.jpg" alt="">
                                </div>
                            </div>
                            <div class="com_btn_area">
                                <a href="/assets/file/guidelines_CI.zip" class="btn pdf">AI Download</a>
                                <a href="/assets/file/guidelines_CI.pdf" target="blank" class="btn pdf">PDF Download</a>
                            </div>
                            <div class="bottom_area">
                                <div class="left_area">
                                    <span class="small_title">Minimum Space Rule</span>
                                    <div class="img_area">
                                        <img src="/assets/images/info/ci_image_limit.jpg" alt="">
                                    </div>
                                </div>
                                <div class="right_area">
                                    <span class="small_title ">Grid System</span>
                                    <div class="img_area">
                                        <img src="/assets/images/info/ci_image_grid.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ci_area subsidiaries scroll_motion" >
                        <div class="left_area">
                            <span class="title en_mont">Basic Subsidiary <br class="mobile">Logo</span>
                            <p>The logo for subsidiary companies combines with the basic company logo  to express<br> ECORBIT’s benefit to society and nature.</p>
                        </div>
                        <div class="right_area">
                            <div class="img_area">
                                <img src="/assets/images/info/ci_image_subsidiaries.jpg" alt="">
                            </div>
                            <div class="com_btn_area">
                                <a href="/assets/file/subsidiary_CI.zip" class="btn pdf">AI Download</a>
                            </div>
                        </div>
                    </div>
                    <div class="ci_area color scroll_motion" >
                        <div class="left_area">
                            <span class="title en_mont">Exclusive Colors</span>
                        </div>
                        <div class="right_area">
                            <div class="color_area">
                                <span class="small_title en_mont">Primary Color</span>
                                <div class="img_area pc">
                                    <img src="/assets/images/info/ci_color_01.jpg" alt="">
                                </div>
                                <div class="img_area mb">
                                    <img src="/assets/images/info/mo_ci_color_01.jpg" alt="">
                                </div>
                            </div>
                            <div class="color_area">
                                <span class="small_title en_mont">Secondary Color</span>
                                <div class="img_area pc">
                                    <img src="/assets/images/info/ci_color_02.jpg" alt="">
                                </div>
                                <div class="img_area mb">
                                    <img src="/assets/images/info/mo_ci_color_02.jpg" alt="">
                                </div>
                                <div class="img_area pc">
                                    <img src="/assets/images/info/ci_color_03.jpg" alt="">
                                </div>
                                <div class="img_area mb">
                                    <img src="/assets/images/info/mo_ci_color_03.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <!-- content [E] -->

		<!-- FOOTER [S]  -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/footer.php"; ?>
		<!-- FOOTER [E]  -->

		<!-- FLOATING BANNER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/floating_banner.php"; ?>
		<!-- FLOATING BANNER [E] -->
    </div>
</body>
</html>