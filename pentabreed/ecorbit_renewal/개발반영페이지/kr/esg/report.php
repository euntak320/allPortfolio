<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "KR_ESG_51";
?>
<!DOCTYPE html>
<html lang="ko">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- META [S] -->
	<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/meta.php"; ?>
	<!-- META [E] -->

	<title>ESG경영 | 지속가능경영보고서</title>

	<!-- SCRIPT_ESG [S] -->
	<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/script_esg.php"; ?>
	<!-- SCRIPT_ESG [E] -->
</head>

<body>
    <div id="wrap">
 		<!-- HEADER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/header.php"; ?>
		<!-- HEADER [E] -->

		<!-- GNB [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/gnb.php"; ?>
		<!-- GNB [E] -->
        
        <!-- content [S] -->
        <main class="esg report">
            <div class="keyvisual_area">
                <div class="keyvisual_txt">
                    <h1>지속가능<br class="mobile">경영보고서</h1>
                    <h2>다음 세대를 위한 <br class="mobile">에코비트의 활동</h2>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>ESG경영</span>
                    <span>지속가능경영보고서 </span>
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
                                    <strong>지속가능경영보고서</strong>
                                    <img src="/assets/images/esg/report_down_icon.png" alt="download_icon">
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>2024</span>
                                    <strong>지속가능경영보고서</strong>
                                    <img src="/assets/images/esg/report_down_icon.png" alt="download_icon">
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>2023</span>
                                    <strong>지속가능경영보고서</strong>
                                    <img src="/assets/images/esg/report_down_icon.png" alt="download_icon">
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>2022</span>
                                    <strong>지속가능경영보고서</strong>
                                    <img src="/assets/images/esg/report_down_icon.png" alt="download_icon">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
        <!-- content [E] -->

		<!-- FOOTER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/footer.php"; ?>
		<!-- FOOTER [E] -->

		<!-- FLOATING BANNER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/floating_banner.php"; ?>
		<!-- FLOATING BANNER [E] -->
    </div>
</body>
</html>