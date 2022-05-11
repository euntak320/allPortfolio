<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "KR_INFO_11";
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

	<title>회사소개 | 인사말</title>

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
         <main class="info ceo">
            <div class="keyvisual_area">
                <div class="keyvisual_txt">
                    <h1>CEO<br class="mobile"> Message</h1>
                    <h2>대한민국을 대표하는<br><br class="mobile"> 종합환경기업 에코비트</h2>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>회사소개</span>
                    <span>인사말</span>
                </div>
                <div class="keyvisual_scroll_down">
                    <span>SCROLL DOWN</span>
                </div>
            </div>
            <section class="content_area">
                <div class="w1360 scroll_motion">
                    <p class="main_title en_mont">CEO MESSAGE</p>
                </div>
                <div class="expression one">
                    
                    
                    
                    <div class="img_area scroll_motion">
                        <img class="pc_img" src="/assets/images/info/ceo_visual_01.jpg" alt="">
                        <img class="mo_img" src="/assets/images/info/ceo_visual_01_mo.jpg" alt="">
                    </div>
                    <div class="w1360">
                        <p class="greeting_ment scroll_motion">안녕하세요<br><br class="mobile">국내 최대, <br class="mobile">최고의 종합환경기업<br><br class="mobile"> 에코비트의 대표이사 <br class="mobile">최인호입니다.</p>
                        <div class="paragraph scroll_motion">
                            <p>환경오염과 기후변화가 점점 심각해지면서 환경산업에 대한<br>관심이 날로 커지고 있습니다. <br>에코비트는 대한민국을 대표하는 종합환경기업으로 대한민국의 <br>ESG 산업을 이끌어 나가고 있습니다.
                            </p>
                            <p>에코비트는 2004년 공공 수처리 전문회사로 시작되어 산업용<br>수처리 기업, 폐기물 처리기업 등 다양한 환경관련 회사를 인수<br>합병해 오늘날 21여개 자회사 690여개 사업소 체제를 갖추며<br>명실상부한 국내 최대의 종합환경기업으로 거듭났습니다.</p>
                        </div>
                    </div>
                </div>
                <div class="expression two">
                    <div class="img_area scroll_motion">
                        <img class="pc_img" src="/assets/images/info/ceo_visual_02.jpg" alt="">
                        <img class="mo_img" src="/assets/images/info/ceo_visual_02_mo.png" alt="">
                    </div>
                    <div class="w1360 ">
                        <div class="paragraph scroll_motion">
                            <p>또한, 그동안 쌓아온 기술력과 노하우, 네트워크를 바탕으로 기술<br> 집약형 물 관리 및 자원순환형 폐기물 관리 등 200여건의 특허를<br> 획득하고 사업에 적용하며 최고의 기술수준을 보유하고 있습니다.</p>
                            <p>그 결과 에코비트는 수처리, 폐기물 중간처리(소각), 폐기물 최종<br> 처리(매립)이라는 환경산업의 3대 밸류체인을 견고히 구축하며<br> 오늘에 이르렀습니다.</p>
                        </div>
                        <div class="sub_image scroll_motion">
                            <img src="/assets/images/info/ceo_visual_02_01.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="ceo_expression">
                    <div class="sub_image scroll_motion">
                        <img src="/assets/images/info/ceo_visual_03.jpg" alt="">
                    </div>
                    <div class="w1360 clrfix">
                        <div class="paragraph scroll_motion">
                            <p>에코비트의 임직원들은 현 세대는 물론 미래 세대에게 안전한 환경과 풍요로운 삶의 질을 제공하기 위해 한마음으로 노력하고 있습니다. 앞으로도 전 인류가 깨끗하고 희망찬 내일을 누릴 수 있도록 끊임없이 혁신해 나갈 것을 약속드립니다.
                            </p>
                            <p>대한민국 환경산업의 미래를 개척하고, 기업의 사회적 역할을 실천하는 에코비트에 많은 관심과 성원 부탁드립니다.<br>감사합니다.</p>
                            <div class="signature_area">
                                <span class="bold">대표이사 최인호</span>
                                <img src="/assets/images/info/ceo_signature.jpg" alt="CEO 싸인">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <!-- 팝업 -->
        <div class="popup_ui type_modal pop_mobal_banner">
            <div class="dim_full"></div>
            <div class="pop_container">
                <div class="pop_layer">
                    <div class="pop_body">
                        <div class="">
                            <img src="/assets/images/common/popup_temp.png" alt="">
                        </div>
                        <span class="btn_not_today">
                            <input type="checkbox" id="mainNotToday">
                            <label for="mainNotToday">오늘 다시보지 않기</label>
                        </span>
                        <button class="btn_pop_close" type="button" id=""><span class="hidden">레이어 닫기</span></button>
                    </div>
                </div>
            </div>
        </div>

        <!-- 팝업 -->

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