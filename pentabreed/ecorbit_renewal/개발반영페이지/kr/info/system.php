<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "KR_INFO_42";
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

	<title>회사소개 | 인재상</title>

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
        <main class="info talent">
            <div class="keyvisual_area">
                <div class="keyvisual_txt">
                    <h1>ECORBIT<br class="mobile"> People Model</h1>
                    <h2>에코비트와 함께 성장할<br><br class="mobile">미래의 환경리더</h2>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>회사소개</span>
                    <span>인재상</span>
                </div>
                <div class="keyvisual_scroll_down">
                    <span>SCROLL DOWN</span>
                </div>
            </div>
            <section class="content_area">
                <div class="main_tab_area">
                    <ul>
                        <li class="green"><a href="/kr/info/talent">인재상</a></li>
                        <li class="green on"><a href="/kr/info/system">인사제도</a></li>
                        <li class="green"><a href="/kr/info/model">복지제도</a></li>
                    </ul>
                </div>
                <div class="talent_area">
                    <p class="main_title scroll_motion">인사제도</p>
                    <div class="list_wrap recurit w1360">
                        <div class="list_area level" >
                            <div class="left_area scroll_motion">
                                <p class="sub_title black">연차별<br> 승진제도</p>
                            </div>
                            <div class="right_area scroll_motion">
                                <div class="circle_list">
                                    <div class="normal_text">
                                        <span class="green">직위</span>
                                        <span class="green">호칭</span>
                                    </div>
                                    <div class="circle green on">
                                        <span>Junior Manager</span>
                                        <span>&middot;</span>
                                        <span>Junior Specialist</span>
                                        <span class="small">사원<br><br class="mobile">(8년)</span>
                                    </div>
                                    <div class="circle">
                                        <span>Senior Manager</span>
                                        <span>&middot;</span>
                                        <span>Senior Specialist</span>
                                        <span class="small">선임사원<br><br class="mobile">(10년)</span>
                                    </div>
                                    <div class="circle green">
                                        <span>General Manager</span>
                                        <span>&middot;</span>
                                        <span>General Specialist</span>
                                        <span class="small">선임사원<br><br class="mobile">(4년)</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>※ Manager(본사), Specialist(사업소)</li>
                                    <li>※ 4년제 대졸 기준</li>
                                </ul>
                            </div>
                        </div>
                        <div class="list_area scroll_motion">
                            <div class="left_area">
                                <p class="sub_title black">능력중시<br> 인사</p>
                            </div>
                            <div class="right_area">
                                <div class="img_area">
                                     
                                    <img src="/assets/images/info/image-advility.jpg" alt="">
                                </div>
                                <div class="advility_text_list">
                                    <div class="text_box">
                                        <span class="green big">01</span>
                                        <p>직위, 연공서열 기준의<br><br class="mobile">인사에서 벗어나<br>능력,<br class="mobile"> 성과창출 위주의 인사관리</p>
                                        <ul>
                                            <li>특별승진제도, 발탁승진제도</li>
                                        </ul>
                                    </div>
                                    <div class="text_box">
                                        <span class="green big">02</span>
                                        <p>핵심인재의 확보 및 육성을<br class="mobile"> 통한<br>'최고전문가 그룹의<br class="mobile"> 양성'</p>
                                        <ul>
                                            <li>스펙이 아닌 직무능력기반 채용을 통한<br> 핵심인재의 확보</li>
                                            <li>직무순환제도, Job Posting 제도를 통한<br> 다양한 직무경험을 유도</li>
                                        </ul>
                                        <span class="tri green">분야별 최고의 전문가/경영가로 육성</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="list_area scroll_motion">
                            <div class="left_area">
                                <p class="sub_title black">성과이익<br><br class="mobile">보상제도</p>
                            </div>
                            <div class="right_area">
                                <div class="reword_area">
                                    <p>본부/팀/개인의 역량과 업적에<br class="mobile"> 따른 성과이익 보상제도 운영<br class="mobile">(Profit Sharing)</p>
                                    <span class="green tri top10">회사의 경영성과를 구성원들과 공유하여,<br class="mobile"> 개개인의 주인의식 함양</span>
                                </div>
                            </div>
                        </div>
                        <div class="list_area noborder scroll_motion">
                            <div class="right_area">
                                <div class="img_area scroll_motion">
                                    <div class="develop_area">
                                        <div class="develop_circle">
                                            <span>성과이익<br><br class="mobile">보장</span>
                                        </div>
                                        <div class="arrow">
                                            <svg width="147" height="128" viewBox="0 0 147 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path class="arrow_01" d="M1 0.999994C33.1667 10.1667 106.9 48.2 144.5 127" stroke="#a3a3a3" stroke-linecap="round" />
                                                <path class="arrow_02" d="M144.5 127L146.5 103.5" stroke="#a3a3a3"/>
                                            </svg>
                                        </div>
                                        <div class="develop_circle">
                                            <span>유수인력<br><br class="mobile">유입</span>
                                        </div>
                                        <div class="arrow">
                                            <svg width="128" height="147" viewBox="0 0 128 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path class="arrow_01" d="M127 1C117.833 33.1667 79.8 106.9 1 144.5" stroke="#a3a3a3" stroke-linecap="round"/>
                                                <path class="arrow_02" d="M1 144.5L24.5 146.5" stroke="#a3a3a3"/>
                                            </svg>
                                        </div>
                                        <div class="develop_circle">
                                            <span>기업경쟁력<br><br class="mobile">강화</span>
                                        </div>
                                        <div class="arrow">
                                            <svg width="147" height="128" viewBox="0 0 147 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path class="arrow_01" d="M146.5 127C114.333 117.833 40.6 79.8 2.99999 1" stroke="#a3a3a3" stroke-linecap="round"/>
                                                <path class="arrow_02" d="M3 1L0.999994 24.5" stroke="#a3a3a3"/>
                                            </svg>
                                        </div>
                                        <div class="develop_circle">
                                            <span>매출/수익<br><br class="mobile">증대</span>
                                        </div>
                                        <div class="arrow">
                                            <svg width="127" height="147" viewBox="0 0 127 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path class="arrow_01" d="M0.5 146.5C9.66667 114.333 47.7 40.6 126.5 3" stroke="#a3a3a3" stroke-linecap="round"/>
                                                <path class="arrow_02" d="M126.5 3L103 0.999994" stroke="#a3a3a3"/>
                                            </svg>
                                        </div>
                                        <div class="develop_circle center">
                                            <span>일자리<br class="mobile"> 창출</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="list_area scroll_motion">
                            <div class="left_area ">
                                <p class="sub_title black">에코비트<br><br class="mobile">포상제도</p>
                            </div>
                            <div class="right_area">
                                <div class="box_list">
                                    <div class="box scroll_motion">
                                        <div class="img_area">
                                            <img src="/assets/images/info/icon_reward.png" alt="">
                                        </div>
                                        <span class="reword_title">장기근속포상</span>
                                        <p>10년 ~ 30년 근속 임직원 대상<br class="mobile">(포상금, 포상휴가 지급)</p>
                                    </div>
                                    <div class="box scroll_motion">
                                        <div class="img_area">
                                            <img src="/assets/images/info/icon_medal.png" alt="">
                                        </div>
                                        <span class="reword_title green">우수사업소상 / 연 1회</span>
                                        <p>지도점검 우수사업소</p>
                                    </div>
                                    <div class="box scroll_motion">
                                        <div class="img_area">
                                            <img src="/assets/images/info/icon_ideal.png" alt="">
                                        </div>
                                        <span class="reword_title">우수아이디어상 / 연 1회</span>
                                        <p>개선사례 우수사업소</p>
                                    </div>
                                    <div class="box scroll_motion">
                                        <div class="img_area">
                                            <img src="/assets/images/info/icon_ideal.png" alt="">
                                        </div>
                                        <span class="reword_title green">자격증 및<br><br class="mobile">학위취득축하금 / 수시</span>
                                    </div>
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