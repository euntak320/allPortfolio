<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "EN_ESG_41";
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

	<title>ESG Management | Sustainable Management Report</title>

	<!-- SCRIPT_ESG [S] -->
	<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/script_esg.php"; ?>
	<!-- SCRIPT_ESG [E] -->    
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
        <main class="esg report">
            <div class="keyvisual_area">
                <div class="keyvisual_txt">
                    <h1 class="en_mont">Sustainable<br><br class="mobile">Management Report</h1>
                    <h2>ECORBIT’s efforts for the next generation</h2>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>ESG MANAGEMENT</span>
                    <span>Sustainable Management Report</span>
                </div>
                <div class="keyvisual_scroll_down">
                    <span>SCROLL DOWN</span>
                </div>
            </div>
            <section class="content_area">
                <div class="report_con01">
                    <div class="w1360">
                        <ul>
                            <li>
                                <a href="">
                                    <span>2025</span>
                                    <strong>Sustainable<br>
                                        Management<br>
                                        Report</strong>
                                    <img src="/assets/images/esg/report_down_icon.png" alt="download_icon">
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>2024</span>
                                    <strong>Sustainable<br>
                                        Management<br>
                                        Report</strong>
                                    <img src="/assets/images/esg/report_down_icon.png" alt="download_icon">
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>2023</span>
                                    <strong>Sustainable<br>
                                        Management<br>
                                        Report</strong>
                                    <img src="/assets/images/esg/report_down_icon.png" alt="download_icon">
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>2022</span>
                                    <strong>Sustainable<br>
                                        Management<br>
                                        Report</strong>
                                    <img src="/assets/images/esg/report_down_icon.png" alt="download_icon">
                                </a>
                            </li>
                        </ul>
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