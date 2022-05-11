<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "EN_ESG_31";
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

	<title>ESG Management | Safety Management</title>

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
        <main class="esg safety">
            <div class="keyvisual_area">
                <div class="keyvisual_txt">
                    <h1 class="en_mont">Management - <br><br class="mobile">
                        Health and Safety</h1>
                    <h2>ECORBIT’s safety culture to fulfill <br class="mobile">its social responsibilities</h2>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>ESG MANAGEMENT</span>
                    <span>SAFETY MANAGEMENT</span>
                </div>
                <div class="keyvisual_scroll_down">
                    <span>SCROLL DOWN</span>
                </div>
            </div>
            <section class="content_area">
                <div class="safety_con01">
                    <div class="w1360">
                        <h3 class="esg_title scroll_motion en_mont">Health and Safety Management Policy</h3>
                        <dl>
                            <dt>
                                <i>01</i>
                                <p class="en_mont">Establish <br><br class="mobile"> independent <br>health <br class="mobile">and <br>safety</p>
                            </dt>
                            <dd>
                                <p>Establish health and safety policies and goals to establish a health and safety management system that respects human beings without any accidents, and conduct independent and ongoing safety prevention activities.</p>
                                <div class="img_box"><img src="/assets/images/esg/safety_img01.png" alt="safety_img"></div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <i>02</i>
                                <p class="en_mont">Customer <br><br class="mobile">satisfaction</p>
                            </dt>
                            <dd>
                                <p>We recognize customer satisfaction as the cornerstone of management, and we strive to provide better customer service through continuous improvement by accurately understanding the diverse needs of our customers and resolving them systematically.
                                    </p>
                                <div class="img_box"><img src="/assets/images/esg/safety_img03.png" alt="safety_img"></div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <i>03</i>
                                <p class="en_mont">Create <br><br class="mobile"> environmental <br><br class="mobile"> value for the next<br><br class="mobile">  generation</p>
                            </dt>
                            <dd>
                                <p>Mobilize the capabilities of all employees to try one’s best to improve the local
                                    environment, and establish and practice an optimized operation system in order to
                                    provide a safe environment and an abundant quality of life for future generations.
                                    </p>
                                <div class="img_box"><img src="/assets/images/esg/safety_img05.png" alt="safety_img"></div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <i>04</i>
                                <p class="en_mont">Principles</p>
                            </dt>
                            <dd>
                                <p>We operate our environmental facility management based on our principles and management manual to comply with laws and regulations in order to provide a satisfactory service for clients and stakeholders.</p>
                                <div class="img_box"><img src="/assets/images/esg/safety_img02.png" alt="safety_img"></div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <i>05</i>
                                <p class="en_mont">Roles and <br>Responsibilities
                                    </p>
                            </dt>
                            <dd>
                                <p>All organizations and staff members recognize their roles and responsibilities to fulfill the health and safety policies. Our independent safety culture provides a satisfactory service to our customers and stakeholders.
                                    </p>
                                <div class="img_box"><img src="/assets/images/esg/safety_img04.png" alt="safety_img"></div>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div class="safety_con02">
                    <div class="w1360">
                        <h3 class="en_mont">Management System Certification</h3>
                        <ul>
                            <li class="scroll_motion">
                                <p class="en_mont">Environmental<br><br class="mobile">
                                    Management</p>
                                <b>(ISO 14001)</b>
                                <a href="">PDF Download</a>
                            </li>
                            <li class="scroll_motion">
                                <p class="en_mont">Quality<br><br class="mobile">
                                    Management</p>
                                <b>(ISO 9001)</b>
                                <a href="">PDF Download</a>
                            </li>
                            <li class="scroll_motion">
                                <p class="en_mont">Safety and Health<br><br class="mobile">
                                    Management</p>
                                <b>(ISO 45001)</b>
                                <a href="">PDF Download</a>
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