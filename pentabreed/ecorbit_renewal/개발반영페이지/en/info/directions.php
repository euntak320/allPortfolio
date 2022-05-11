<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "EN_INFO_71";
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

	<title>ABOUT ECORBIT | LOCACTION</title>

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
        <main class="info loaction">
            <div class="keyvisual_area">
                <div class="keyvisual_txt">
                    <h1 class="en_mont">Location</h1>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>ABOUT ECORBIT</span>
                    <span>LOCACTION</span>
                </div>
                <div class="keyvisual_scroll_down">
                    <span>SCROLL DOWN</span>
                </div>
            </div>
            <section class="content_area eng">
                <div class="loaction_area w1360">
                    <div class="map_area seoul scroll_motion" >
                        <span class="sub_title_01 black en_mont">Seoul Office</span>
                        <div class="img_inforatmion">
                            <div class="text_info clrfix">
                                <div class="address">
                                    <span class="bold en_mont">ADDRESS</span>
                                    <span>8-10F, 155, Songpa-daero, Songpa-gu, Seoul, Republic of Korea</span>
                                </div>
                                <div class="tel">
                                    <span class="bold en_mont">TEL</span>
                                    <span><a href="tel:02-6901-8200">02-6901-8200</a></span>
                                </div>
                                <div class="fax">
                                    <span class="bold en_mont">FAX</span>
                                    <span><a href="tel:02-6901-8390">02-6901-8390 / 8391</a></span>
                                </div>
                                <div class="link_btn">
                                    <a href="" class="share"></a>
                                    <a href="" class="naver"></a>
                                    <a href="" class="facebook"></a>
                                    <a href="" class="twiter"></a>
                                </div>
                            </div>
                            <div class="img_area">
                                <iframe title="8-10F, 155, Songpa-daero, Songpa-gu, Seoul, Republic of Korea" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25323.934991799302!2d127.09275889796498!3d37.49631555050991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca59137d7af51%3A0xd1b3e878721afc41!2sSongpa-daero%2C%20Songpa-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1650271389133!5m2!1sen!2skr" height="490" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="map_area sihung scroll_motion" >
                        <span class="sub_title_01 black en_mont">Siheung<br>Head Office</span>
                        <div class="img_inforatmion">
                            <div class="text_info clrfix">
                                <div class="address">
                                    <span class="bold en_mont">ADDRESS</span>
                                    <span>16, Gongdan 1-daero 322beon-gil, Siheung-si, , Republic of Korea</span>
                                </div>
                                <div class="tel">
                                    <span class="bold en_mont">TEL</span>
                                    <span><a href="tel:031-489-9604">031-489-9604</a></span>
                                </div>
                                <div class="fax">
                                    <span class="bold en_mont">FAX</span>
                                    <span><a href="tel:031-499-7311">031-499-7311</a></span>
                                </div>
                                <div class="link_btn">
                                    <a href="" class="share"></a>
                                    <a href="" class="naver"></a>
                                    <a href="" class="facebook"></a>
                                    <a href="" class="twiter"></a>
                                </div>
                            </div>
                            <div class="img_area">
                                <iframe title="16, Gongdan 1-daero 322beon-gil, Siheung-si, , Republic of Korea" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6345.39933143932!2d126.72522969814516!3d37.32594125055417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7171b704f72f%3A0x8b48528e095a4f02!2sGongdan%201-daero%20322beon-gil%2C%20Siheung-si%2C%20Gyeonggi-do!5e0!3m2!1sen!2skr!4v1650271446083!5m2!1sen!2skr" height="490" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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