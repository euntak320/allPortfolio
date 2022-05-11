<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "KR_INFO_71";
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

	<title>회사소개 | 오시는길</title>

	<!-- SCRIPT_INFO [S] -->
	<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/script_info.php"; ?>
	<!-- SCRIPT_INFO [E] -->
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
        <main class="info loaction">
            <div class="keyvisual_area">
                <div class="keyvisual_txt">
                    <h1>Location</h1>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>회사소개</span>
                    <span>오시는길</span>
                </div>
                <div class="keyvisual_scroll_down">
                    <span>SCROLL DOWN</span>
                </div>
            </div>
            <section class="content_area">
                <div class="loaction_area w1360">
                    <div class="map_area seoul scroll_motion">
                        <span class="sub_title_01 black">서울 사옥</span>
                        <div class="img_inforatmion">
                            <div class="text_info clrfix">
                                <div class="address">
                                    <span class="bold en_mont">ADDRESS</span>
                                    <span>서울특별시 송파구 송파대로 255 8-10층</span>
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
                                <img src="/assets/images/info/@temp_map_01.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="map_area sihung scroll_motion">
                        <span class="sub_title_01 black">시흥 본점</span>
                        <div class="img_inforatmion">
                            <div class="text_info clrfix">
                                <div class="address">
                                    <span class="bold en_mont">ADDRESS</span>
                                    <span>경기도 시흥시 공단 1대로 322번길 16</span>
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
                                <img src="/assets/images/info/@temp_map_02.jpg" alt="">
                            </div>
                        </div>
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