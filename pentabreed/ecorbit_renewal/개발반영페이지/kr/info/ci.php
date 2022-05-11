<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "KR_INFO_31";
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

	<title>회사소개 | CI</title>

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
        <main class="info ci">
            <div class="keyvisual_area">
                <div class="keyvisual_txt">
                    <h1>CI</h1>
                    <h2>Eco (환경) + Orbit (궤도)</h2>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>회사소개</span>
                    <span>CI</span>
                </div>
                <div class="keyvisual_scroll_down">
                    <span>SCROLL DOWN</span>
                </div>
            </div>
            <section class="content_area">
                <div class="ci_explain_area scroll_motion">
                    
                    <span class="main_title en_mont scroll_motion">CI</span>
                    <p class="scroll_motion">에코비트는 환경에 대해 이해하는 것이<br class="mobile"> 미래를 보는<br>가장 현명한 방법이라 믿습니다.<br><br class="mobile">자원의 가치를 구현하고 지역과 상생하는<br class="mobile"> ESG 경영을<br>실천하는 에코비트의 경영이념을<br class="mobile"> 담았습니다.</p>
                    <div class="img_area scroll_motion">
                        <img class="pc_img" src="/assets/images/info/ci_visual.jpg" alt="">
                        <img class="mo_img"src="/assets/images/info/ci_visual_mo.jpg" alt="">
                    </div>
                </div>
                <div class="ci_image_area w1360">
                    <div class="ci_area normal" >
                        <div class="left_area scroll_motion">
                            <span class="title">기본형</span>
                            <p>나뭇잎 패턴으로 활발한 사업을 영위하는<br class="mobile"> 에코비트의 모습을 표현하였습니다.</p>
                        </div>
                        <div class="right_area scroll_motion">
                            <div class="top_area">
                                <span class="small_title">기본 규정</span>
                                <div class="img_area">
                                    <img src="/assets/images/info/ci_image_standard.jpg" alt="">
                                </div>
                            </div>
                            <div class="com_btn_area">
                                <a href="/assets/file/guidelines_CI.zip" class="btn pdf">AI 다운로드</a>
                                <a href="/assets/file/guidelines_CI.pdf" target="_blank" class="btn pdf">PDF 다운로드</a>
                            </div>
                            <div class="bottom_area">
                                <div class="left_area">
                                    <span class="small_title">최소 공간 규정</span>
                                    <div class="img_area">
                                        <img src="/assets/images/info/ci_image_limit.jpg" alt="">
                                    </div>
                                </div>
                                <div class="right_area">
                                    <span class="small_title">그리드 시스템</span>
                                    <div class="img_area">
                                        <img src="/assets/images/info/ci_image_grid.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ci_area subsidiaries scroll_motion" >
                        <div class="left_area">
                            <span class="title">자회사 기본형</span>
                            <p>시그니처 자회사명 조합에 사용되는<br class="mobile">그래픽 요소를 활용하여 사회와 자연에 이로운<br class="mobile"> 에코비트의 모습을 표현하였습니다.</p>
                        </div>
                        <div class="right_area">
                            <div class="img_area">
                                <img src="/assets/images/info/ci_image_subsidiaries.jpg" alt="">
                            </div>
                            <div class="com_btn_area">
                                <a href="/assets/file/subsidiary_CI.zip" class="btn pdf">AI 다운로드</a>
                            </div>
                        </div>
                    </div>
                    <div class="ci_area color scroll_motion">
                        <div class="left_area">
                            <span class="title">전용 색상</span>
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

		<!-- FOOTER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/footer.php"; ?>
		<!-- FOOTER [E] -->

		<!-- FLOATING BANNER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/floating_banner.php"; ?>
		<!-- FLOATING BANNER [E] -->
    </div>
</body>
</html>