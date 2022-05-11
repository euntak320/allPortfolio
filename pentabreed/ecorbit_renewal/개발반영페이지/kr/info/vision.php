<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "KR_INFO_21";
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

	<title>회사소개 | 기업비전</title>

	<!-- SCRIPT_INFO [S] -->
	<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/script_info.php"; ?>
	<!-- SCRIPT_INFO [E] -->

	<!-- scroll magic -->
	<link rel="stylesheet" href="/assets/css/lib/animate.css">
	<script type="text/javascript" src="/assets/js/lib/gsap.min.js"></script>
	<script type="text/javascript" src="/assets/js/lib/ScrollMagic.js"></script>
	<script type="text/javascript" src="/assets/js/lib/animation.gsap.js"></script>
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
        <main class="info vision">
            <div class="keyvisual_area">
                <div class="keyvisual_txt">
                    <h1>Vision</h1>
                    <h2>지속가능한 내일을 만드는 종합환경기업</h2>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>회사소개</span>
                    <span>비전</span>
                </div>
                <div class="keyvisual_scroll_down">
                    <span>SCROLL DOWN</span>
                </div>
            </div>
            <section class="content_area">
                <div class="w1360 scroll_motion">
                    <p class="main_title en_mont">Wholesome Solution For Our Earth</p>
                </div>
                <div class="vision_area">
                    <div class="vision_explain_list">
                        <div class="explain_box scroll_motion">
                            <div class="img_area">
                                <img src="/assets/images/info/image_mission.jpg" alt="">
                            </div>
                            <div class="explain_text">
                                <span class="en_mont">MISSON</span>
                                <p>지속가능한 기술혁신과 최고의 솔루션을 제공하여,<br>건강하고 풍요로운 미래 사회를 위한 환경가치를 창조하고 선도한다.</p>
                            </div>
                        </div>
                        <div class="explain_box scroll_motion">
                            <div class="img_area">
                                <img src="/assets/images/info/image_vision.jpg" alt="">
                            </div>
                            <div class="explain_text">
                                <span class="en_mont">VISION</span>
                                <p><span class="bold">국내 선호도 1위 환경기업</span>2026년 기업가치 5조 &amp; 국내상장사</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="vision_goal_area">
                    <div class="goal_title_area scroll_motion">
                        <p class="en_mont">CORE VALUE</p>
                        <p>Mission / Vision달성을 위한<br class="mobile"> 의사결정 원칙 / 기준 / 가치</p>
                    </div>
                    <div class="detail_text_area">
                        <div class="procedure">
                            <div class="circle_title scroll_motion">
                                <p class="en_mont">SuFE</p>
                                <span>[숲에]</span>
                            </div>
                            <div class="line_area scroll_motion">                                
                                <svg width="356" height="73" viewBox="0 0 356 73" fill="none" xmlns="http://www.w3.org/2000/svg" class="left_line">
                                    <path d="M355.5 1C355.5 1 102 1 51.5 1C1 1 1 44 1 44C1 44 1 78.1667 1 71.5001" stroke="#A3A3A3"/>
                                </svg>                                    
                                <svg width="355" height="73" viewBox="0 0 355 73" fill="none" xmlns="http://www.w3.org/2000/svg" class="right_line">
                                    <path d="M0 1C0 1 253.5 1 304 1C354.5 1 354.5 44 354.5 44C354.5 44 354.5 78.1667 354.5 71.5001" stroke="#a3a3a3"/>
                                </svg>
                            </div>
                            <ul class="scroll_motion">
                                <li class="scroll_motion">
                                    <span class="number en_mont">1</span>
                                    <p class="normal_text en_mont"><span class="green">Su</span>stainability</p>
                                    <span class="normal_text">지속</span>
                                    <p class="text">자연자원의 유한성과 정화능력의 한계를 인식하는 것에서 출발</p>
                                </li>
                                <li class="scroll_motion">
                                    <span class="number en_mont">2</span>
                                    <p class="normal_text en_mont"><span class="green">F</span>airness</p>
                                    <span class="normal_text">공정</span>
                                    <p class="text">현세대와 미래세대,<br>도시와 지방의 환경 불균형 극복</p>
                                </li>
                                <li class="scroll_motion">
                                    <span class="number en_mont">3</span>
                                    <p class="normal_text en_mont"><span class="green">E</span>fficiency</p>
                                    <span class="normal_text">효율</span>
                                    <p class="text">단순 공급위주에서 탈피,<br>균형 잡힌 혁신적 해결방안을 제시</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="vision_goal_area heat scroll_motion">
                    <div class="goal_title_area">
                        <p class="en_mont mix_font">경영방침</p>
                        <p>직원 / 회사경영 / 사회에 관한 행동 원칙</p>
                    </div>
                    <div class="detail_text_area">
                        <div class="procedure">
                            <div class="circle_title scroll_motion">
                                <p class="en_mont">HEAT</p>
                                <span>[뜨겁게]</span>
                            </div>
                            <div class="line_area scroll_motion">                                
                                <svg width="631" height="164" viewBox="0 0 631 164" fill="none" xmlns="http://www.w3.org/2000/svg" class="left_line">
                                    <path d="M631 1C631 1 102 1 51.5 1C1 1 1 44 1 44C1 44 1 170.167 1 163.5" stroke="#a3a3a3"/>
                                </svg>
                                    
                                <svg width="631" height="164" viewBox="0 0 631 164" fill="none" xmlns="http://www.w3.org/2000/svg" class="right_line">
                                    <path d="M0 1C0 1 529 1 579.5 1C630 1 630 44 630 44C630 44 630 170.167 630 163.5" stroke="#a3a3a3"/>
                                </svg>
                            </div>
                            <ul class="scroll_motion">
                                <li class="scroll_motion">
                                    <div class="img_area">
                                        <img src="/assets/images/common/icon_cross.png" alt="">
                                    </div>
                                    <p class="normal_text en_mont"><span class="green">H</span>armony</p>
                                    <span class="normal_text">화합</span>
                                    <p class="text">구성원간 상호존중 및 신뢰,<br class="mobile"> 가치 창출을 중심으로 상호 협력</p>
                                </li>
                                <li class="scroll_motion">
                                    <div class="img_area">
                                        <img src="/assets/images/common/icon_role.png" alt="">
                                    </div>
                                    <p class="normal_text en_mont"><span class="green">E</span>thics</p>
                                    <span class="normal_text">준법</span>
                                    <p class="text">정직, 도덕성, 올바른 행동,<br class="mobile"> 원칙을 준수하는 태도 </p>
                                </li>
                                <li class="scroll_motion">
                                    <div class="img_area">
                                        <img src="/assets/images/common/icon_responsive.png" alt="">
                                    </div>
                                    <p class="normal_text en_mont"><span class="green">E</span>fficiency</p>
                                    <span class="normal_text">책임</span>
                                    <p class="text">역할/책임의 완수를 위한 의지,<br class="mobile"> 맡은 바 직무에 대한 집중</p>
                                </li>
                                <li class="scroll_motion">
                                    <div class="img_area">
                                        <img src="/assets/images/common/icon_each.png" alt="">
                                    </div>
                                    <p class="normal_text en_mont"><span class="green">T</span>ransformation</p>
                                    
                                    <span class="normal_text">혁신</span>
                                    <p class="text">보수성/경직성 탈피,<br class="mobile"> 지속적인 변화 및 개선을 추구</p>
                                </li>
                            </ul>
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