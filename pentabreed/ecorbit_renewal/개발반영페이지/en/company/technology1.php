<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "EN_COMPANY_52";
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

	<title>Business | TECHNOLOGY</title>

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
        <main class="company tech">
            <div class="keyvisual_area">
                <div class="keyvisual_txt">
                    <h1 class="en_mont">Technology</h1>
                    <h2>ECORBIT proposes the environmental<br class="mo_ver"> technologies of tomorrow</h2>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>BUSINESS</span>
                    <span>TECHNOLOGY</span>
                </div>
                <div class="keyvisual_scroll_down">
                    <span>SCROLL DOWN</span>
                </div>
            </div>
            <section class="content_area">
                <div class="main_tab_area">
                    <div class="scroll_wrap">
                        <ul class="sub_tab">
                            <li class="green"><a href="<?=$G_EN_FOLDER?>/company/technology">Specialty Business and R&amp;D</a></li>
                            <li class="green on"><a href="<?=$G_EN_FOLDER?>/company/technology1">Technical Support</a></li>
                            <li class="green"><a href="<?=$G_EN_FOLDER?>/company/technology2">Intellectual Property Rights</a></li>
                        </ul>
                    </div>
                </div>
                <div class="support_content_area">
                    <div class="service_area dev">
                        <div class="image_wrap">
                            <div class="text_area w1360 scroll_motion">
                                <p class="main_title black en_mont">Technical Support</p>
                                <p class="explain_text">Performs technology evaluation tasks according to project progress, such as <br>increasing the developer’s operating technology,<br> review of technology to resolve issues, technology training within the company,<br> technology transfer, and M&A.</p>
                            </div>
                        </div>
                        <div class="w1360">
                            <div class="support_list_box">
                                <div class="support_box scroll_motion">
                                    <span class="number">01</span>
                                    <span class="box_title">Technology<br> Support<br> for Each Business</span>
                                    <span class="text">Developer</span>
                                </div>
                                <div class="support_box scroll_motion">
                                    <span class="number">02</span>
                                    <span class="box_title">Technical<br> evaluation</span>
                                    <ul>
                                        <li>Performing technical evaluation tasks during the project of transferring technology, M&A, etc.</li>
                                        <li>Performing technical evaluation of joint venture</li>
                                    </ul>
                                </div>
                                <div class="support_box scroll_motion">
                                    <span class="number">03</span>
                                    <span class="box_title">In-house<br> technical training</span>
                                    <span class="text">Periodic technical trainin</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="service_area plan">
                        <div class="image_wrap">
                            <div class="text_area w1360 scroll_motion">
                                <p class="main_title black en_mont">Design support</p>
                                <p class="explain_text">Support basic design work and carry out working design work during projects such as<br> private investment projects</p>
                            </div>
                        </div>
                        <div class="w1360">
                            <div class="support_list_box">
                                <div class="support_box scroll_motion">
                                    <span class="number">01</span>
                                    <span class="box_title">Reviewing<br> bids</span>
                                    <span class="text type02">Reviewing the technical<br> part in the bid</span>
                                </div>
                                <div class="support_box scroll_motion">
                                    <span class="number">02</span>
                                    <span class="box_title">Basic Design<br> Support</span>
                                    <span class="text type02">Reviewing the contents of basic design and supporting</span>
                                </div>
                                <div class="support_box scroll_motion">
                                    <span class="number">03</span>
                                    <span class="box_title">Conducting a<br> working design</span>
                                    <span class="text type02">Conducting a working design</span>
                                    <ul class="type02">
                                        <li>Incineration facility</li>
                                        <li>SRF steam supply / power</li>
                                        <li>generation facility</li>
                                        <li>Sludge dying / incineration facility</li>
                                        <li>Food composting facility</li>
                                        <li>Landfill facility</li>
                                        <li>Anaerobic fire extinguishing facility</li>
                                    </ul>
                                </div>
                                <div class="support_box scroll_motion">
                                    <span class="number">04</span>
                                    <span class="box_title">Related to<br> construction</span>
                                    <span class="text type02">Evaluation of construction technology</span>
                                    <span class="text type02">Support for detailed design review related to construction</span>
                                </div>
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