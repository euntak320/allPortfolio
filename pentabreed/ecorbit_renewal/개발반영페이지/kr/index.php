<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "KR_MAIN";
	$LangCode = "KR";
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 파비콘 -->
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    <title>에코비트</title>

    <!-- 공통영역 -->
    <link rel="stylesheet" href="/assets/css/lib/fonts.css">
    <link rel="stylesheet" href="/assets/css/lib/common.css">
    <script type="text/javascript" src="/assets/js/lib/jquery-3.6.0.min.js"></script>
    <script type="text/javascript" src="/assets/js/common.js"></script>

    <!-- 메인 스타일 -->
    <link rel="stylesheet" href="/assets/css/main.css">
    <link rel="stylesheet" href="/assets/css/lib/jquery.fullpage.min.css">
    <link rel="stylesheet" href="/assets/css/lib/swiper.min.css">
    
    <script src="/assets/js/lib/scrolloverflow.min.js.map"></script>
    <script src="/assets/js/lib/fullpage.dropEffect.min.js"></script>
    <script src="/assets/js/lib/fullpage.waterEffect.min.js"></script>
    <script src="/assets/js/lib/fullpage.extensions.min.js"></script>
    <script src="/assets/js/lib/swiper.min.js"></script>
    <script src="/assets/js/main.js"></script>

</head>
<body>
    <!-- top_banner 가릴때 #wrap에 topbanner_show 클래스도 같이 사라짐. -->
    <div id="wrap" class="intro_play topbanner_show fullpage_01 transoff">

        <!-- top_banner [S] -->
        <?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/inc_topBanner.php"; ?>
        <!-- top_banner [E] -->

        <!-- intro [S] -->
        <iframe id="intro_frame" src="./intro" frameborder="0" title="메인인트로"></iframe>
        <i class="intro_skip_btn en_mont">SKIP</i>
        <!-- intro [E] -->

		<!-- 팝업 -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/inc_mainBanner.php"; ?>
        <!-- 팝업 -->

 		<!-- HEADER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/header.php"; ?>
		<!-- HEADER [E] -->

		<!-- GNB [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/gnb.php"; ?>
		<!-- GNB [E] -->

        <!-- content [S] -->
        <main class="main">
            <div class="content_area">
                <!-- main_visual [S] -->
                <section class="section main_visual" data-drop="down">
                    <div class="video_box">
                        <video autoplay="autoplay" loop="loop" data-autoplay="" muted="muted" id="visual_video" playsinline>
                            <source src="/assets/images/main/main_visual.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div class="w1360">
                        <div class="txt_box">
                            <h3 class="en_mont">Wholesome Solution<br><br class="mobile"> For Our Earth</h3>
                            <p>국내 최고 종합환경기업 ECORBIT<br><br class="mobile"> 환경에 대한 새로운 관점과 가치를 제공하여<br class="mobile"> 글로벌 No.1을 향해 도약합니다.</p>
                            <div class="play_btn">
                                <div class="bar"><i></i></div>
                                <span class="play en_mont">PLAY</span>
                                <span class="stop en_mont">STOP</span>
                            </div>
                        </div>
                    </div>
                    <div class="menu_list">
                        <div class="w1360">
                            <ul>
                                <li class="green_list">
                                    <span>그린</span>
                                    <div class="hover_box" >
                                        <i class="mo_close_btn"></i>
                                        <a href="/kr/company/green">
                                            <img src="/assets/images/main/visual_logo_03.png" alt="그린로고">
                                            <p class="title">그린</p>
                                            <p class="desc">폐기물을 친환경적으로 최종<br class="mo_ver"> 처분하여 안전하고 깨끗한 환경을<br class="mo_ver"> 만들어 갑니다</p>
                                        </a>
                                    </div>
                                </li>
                                <li class="energy_list">
                                    <span>에너지</span>
                                    <div class="hover_box">
                                        <i class="mo_close_btn"></i>
                                        <a href="/kr/company/energy">
                                            <img src="/assets/images/main/visual_logo_02.png" alt="에너지로고">
                                            <p class="title">에너지</p>
                                            <p class="desc">버려지는 폐기물을 에너지 자원<br class="mo_ver"> 으로 바꾸어 지속가능한 내일을<br class="mo_ver"> 만들어 가고 있습니다</p>
                                        </a>
                                    </div>
                                </li>
                                <li class="water_list">
                                    <span>워터</span>
                                    <div class="hover_box">
                                        <i class="mo_close_btn"></i>
                                        <a href="/kr/company/water">
                                            <img src="/assets/images/main/visual_logo_01.png" alt="워터로고">
                                            <p class="title">워터</p>
                                            <p class="desc">미래를 위한 깨끗하고 건강한<br class="mo_ver"> 물순환을 시작합니다</p>
                                        </a>
                                    </div>
                                </li>
                                <li class="future_list">
                                    <span>미래사업</span>
                                    <div class="hover_box">
                                        <i class="mo_close_btn"></i>
                                        <a href="/kr/company/future">
                                            <img src="/assets/images/main/visual_logo_04.png" alt="미래사업로고">
                                            <p class="title">미래사업</p>
                                            <p class="desc">자원순환 서비스로 지속가능한<br class="mo_ver"> 환경가치를 제공합니다</p>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <!-- visual [E] -->

                <!-- main_count [S] -->
                <section class="section main_count" data-drop="all">
                    <div class="w1360">
                        <ul class="swiper-wrapper">
                            <li class="swiper-slide">
                                <div class="txt_box type01">
                                    <h4 class="text_up"><span class="mix_font">201개의 특허기술<br> 지적재산권</span></h4>
                                    <div class="right_text">
                                        <p class="desc text_up"><span class="en_mont">Patent technology</span></p>
                                        <p class="count en_mont"><strong class="counter_01 en_mont" data-counter="201">0</strong> Count</p>
                                        <p class="text text_up"><span>변화와 혁신을 주도하는 에코비트의 기술력</span></p>
                                    </div>
                                </div>
                            </li>
                            <li class="swiper-slide">
                                <div class="txt_box type02">
                                    <img src="/assets/images/main/main_count_bg.png" alt="">
                                    <h4 class="text_up"><span>전국 21개의<br> 자회사</span></h4>
                                    <div class="right_text">
                                        <p class="desc text_up"><span class="en_mont">Subsidiary Company</span></p>
                                        <p class="count en_mont"><strong class="counter_02 en_mont" data-counter="21">0</strong> Count</p>
                                        <p class="text text_up"><span>21개의 자회사를 통해 환경사업의 Total Solution을 제공하며, 국내 시장을 넘어 Global 선도기업으로 도약하고 있습니다.</span></p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <!-- main_count [E] -->

                <!-- main_world [S] -->
                <section class="section main_world" data-drop="up">
                    <div class="w1360">
                        <h4><p><span class="en_mont">ESG</span> 선도기업 에코비트</p></h4>
                        <p class="txt"><span>
                            에코비트는 인류에 기여하는 ESG 기업으로서 역할을  다하기 위해<br>
                            환경가치를 창출하는 것은 물론, 법과 윤리에 입각한 경영으로 기업의<br>
                            사회적 책임을 실현하는 지속성장 선순환체계를 만들고 있습니다. 
                        </span></p>
                    </div>
                    <div class="img_box"><img src="/assets/images/main/world_bg.jpg" alt=""></div>
                </section>
                <!-- main_world [E] -->

                <section class="section">
                    <!-- main_cate [S] -->
                    <div class="main_cate">
                        <div class="w1360">
                            <ul>
                                <li>
                                    <div class="img_box"><img src="/assets/images/main/main_list_img01.jpg" alt="Environment"></div>
                                    <div class="txt_box">
                                        <p class="en_mont">ENVIRONMENT</p>
                                        <span>친환경 및 자원순환 경제를 선도하는<br> 글로벌 초일류 종합 환경기업</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="img_box"><img src="/assets/images/main/main_list_img02.jpg" alt="Social"></div>
                                    <div class="txt_box type02">
                                        <p class="en_mont">SOCIAL </p>
                                        <span>공존과 공생의 가치를 추구하는 것은 물론<br> 인류의 건강과 미래의 깨끗한 자연환경을 보존</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="img_box"><img src="/assets/images/main/main_list_img03.jpg" alt="Governance"></div>
                                    <div class="txt_box">
                                        <p class="en_mont">GOVERNANCE</p>
                                        <span>정직하고 공정한 사업 추진을 통한 상호 발전을 도모<br> 투명하고 법과 원칙에 입각한 윤리경영을 추구</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- main_cate [E] -->

                    <!-- main_news [S] -->
					<?
						$NewsCnt = $fd->getCount("tbl_media_bodo", "(cDelFlag = 'N') AND (cUse = 'Y') AND (cIsMain = 'Y') AND (sLang = '". $LangCode ."')");

						if ($NewsCnt > 0) {
					?>
                    <div class="main_news">
                        <div class="w1360">
                            <h4 class="en_mont">ECORBIT<br><br class="mobile"><strong class="en_mont">News</strong></h4>
                            <div class="news_list">
                                <ul class="swiper-wrapper">
									<?
										$query	= "SELECT idx, sTitle, sPubDT, sHashTag, sThumbFileName, sThumbSaveName, iThumbFileSize FROM tbl_media_bodo WHERE (cDelFlag = 'N') AND (cUse = 'Y') AND (cIsMain = 'Y') AND (sLang = '". $LangCode ."') ORDER BY iOrderNo DESC LIMIT 0, 12";
										$result	= $fd->query($query);

										while ($list = $fd->fetchArray($result)) {
									?>
                                    <li class="swiper-slide" onclick="window.location='<?=$G_KO_FOLDER?>/media/press_view?idx=<?=trim($list["idx"])?>&ht=<?=trim($list["sHashTag"])?>&page=1';">
                                        <div class="date en_mont"><?=substr(str_replace("-", ".", trim($list["sPubDT"])), 2, 8)?></div>
                                        <div class="img_box"><img src="/upload/bodo/<?=trim($list["sThumbSaveName"])?>" alt="<?=stripslashes(trim($list["sTitle"]))?>"></div>
                                        <div class="title"><?=stripslashes(trim($list["sTitle"]))?></div>
                                    </li>
									<?
										}
										$fd->freeResult($result);
										unset($list);
									?>
                                </ul>
                                <span class="arrow prev"><img src="/assets/images/main/news_arrow_prev.png" alt="이전 슬라이드"></span>
                                <span class="arrow next"><img src="/assets/images/main/news_arrow_next.png" alt="다음 슬라이드"></span>
                            </div> 
                        </div>
                    </div>
                    <!-- main_news [E] -->
					<?	} ?>
                </section>

                <!-- main_info [S] -->
                <section class="section fp-auto-height">
                    <div class="main_info">
                        <div class="w1360">
                            <p>국내 최고 종합 환경기업 에코비트는 사회와 고객이 직면하고  있는<br> 환경문제를 해결하여 지속가능한 내일을 만들어 가고 있습니다.</p>
                            <div class="link_box">
                                <a href="javascript:alert('지속가능경영보고서 발간 예정입니다.');"><i><img src="/assets/images/main/main_info_icon01.png" alt="지속가능경영 보고서 다운로드"></i><span>지속가능경영 보고서</span></a>
                                <a href="javascript:alert('브로슈어 발간 예정입니다.');"><i><img src="/assets/images/main/main_info_icon02.png" alt="회사소개 브로슈어 다운로드"></i><span>회사소개 브로슈어</span></a>
                                <a href="/assets/file/[에코비트]사업보고서(2022.03.31).pdf" download><i><img src="/assets/images/main/main_info_icon03.png" alt="애뉴얼리포트 다운로드"></i><span>애뉴얼리포트</span></a>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- main_info [E] -->

                <section class="section fp-auto-height">
					<!-- FOOTER [S] -->
					<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/footer.php"; ?>
					<!-- FOOTER [E] -->
                </section>
            </div>
        </main>
        <!-- content [E] -->

		<!-- FLOATING BANNER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/floating_banner.php"; ?>
		<!-- FLOATING BANNER [E] -->
    </div>

	<script type="text/javascript">
	var getCookie = function (cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
		}
		return "";
	}

	var setCookie = function (cname, cvalue, exdays) {
		var todayDate = new Date();
		todayDate.setTime(todayDate.getTime() + (exdays*24*60*60*1000));    
		var expires = "expires=" + todayDate.toUTCString(); // UTC기준의 시간에 exdays인자로 받은 값에 의해서 cookie가 설정 됩니다.
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}

	function closeTopPop() {
		if ($("input[name='topNotTodayPop']").is(":checked") == true) {
			setCookie("topClose", "Y", "1");
		}
	}

	function closeMainPop() {
		if ($("input[name='mainNotTodayPop']").is(":checked") == true) {
			setCookie("popClose", "Y", "1");
		}
	}

	$('#wrap').removeClass('topbanner_show');
	</script>
</body>
</html>