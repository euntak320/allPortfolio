<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "KR_COMPANY_42";
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

	<title>사업소개 | 미래사업</title>

	<!-- SCRIPT_COMPANY [S] -->
	<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/script_company.php"; ?>
	<!-- SCRIPT_COMPANY [E] --> 
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
        <main class="company citymining">
            <div class="keyvisual_area">
                <div class="keyvisual_txt">
                    <h1>FUTURE BUSINESS</h1>
                    <h2>자원순환 서비스로 지속가능한<br class="mobile">환경가치를 제공합니다</h2>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>사업소개</span>
                    <span>미래사업</span>
                </div>
                <div class="keyvisual_scroll_down">
                    <span>SCROLL DOWN</span>
                </div>
            </div>
            <section class="content_area">
                <div class="main_tab_area">
                    <ul>
                        <li class="green"><a href="/kr/company/future">산업용수처리</a></li>
                        <li class="green on"><a href="/kr/company/future1">도시광산</a></li>
                        <li class="green"><a href="/kr/company/future2">토양정화</a></li>
                    </ul>
                </div>
                <div class="citymining_con01">
                    <div class="w1360">
                        <div class="company_title scroll_motion">
                            <span class="eng">Urban mining</span>
                            <p class="main_title black">도시 광산</p>
                            <p class="desc">에코비트는 산업활동과정에서 발생하는<br class="mobile">금속자원 회수 및 친환경 이차전지<br class="mobile">재활용 기술을 통해<br> 고객에게<br class="mobile">최적의 서비스를 제공하고 있습니다.</p>
                        </div>
                    </div>
                    <div class="img_box scroll_motion">
                        <div class="w1360">
                            <img class="pc_img" src="/assets/images/company/citymining_img01.png" alt="">
                            <img class="mo_img" src="/assets/images/company/citymining_img01_mb.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="citymining_con02 scroll_motion">
                    <div class="w1360">
                        <span class="sub_title_01 black">주요사업</span>
                        <div class="list_box">
                            <ul class="tab pc_ver">
                                <li class="on">이차전지</li>
                                <li>촉매</li>
                                <li>스크랩</li>
                                <li>태양광</li>
                                <li>슬러지</li>
                            </ul>
                            <div class="tab_cont">
                                <ul class="swiper-wrapper">
                                    <li class="swiper-slide">
                                        <div class="img_box"><img src="/assets/images/company/citymining_business_img01.jpg" alt="이차전지 이미지"></div>
                                        <div class="txt_box">
                                            <h5>이차전지</h5>
                                            <p>배터리 제조 공정 스크랩</p>
                                            <p>배터리 스크랩</p>
                                            <p>에너지저장장치(ESS)</p>
                                        </div>
                                    </li>
                                    <li class="swiper-slide">
                                        <div class="img_box"><img src="/assets/images/company/citymining_business_img02.jpg" alt="촉매 이미지"></div>
                                        <div class="txt_box">
                                            <h5>촉매</h5>
                                            <p>석유화학 폐촉매</p>
                                            <p>기타 화학(Bio) 폐촉매</p>
                                            <p>자동차 삼원 폐촉매</p>
                                        </div>
                                    </li>
                                    <li class="swiper-slide">
                                        <div class="img_box"><img src="/assets/images/company/citymining_business_img03.jpg" alt="스크랩 이미지"></div>
                                        <div class="txt_box">
                                            <h5>스크랩</h5>
                                            <p>반도체 Scrap, PCB, <br>리드프레임, 기타 E-Scrap</p>
                                            <p>폐전선, 통신Cable류</p>
                                            <p>기타 비철금속 Scrap</p>
                                        </div>
                                    </li>
                                    <li class="swiper-slide">
                                        <div class="img_box"><img src="/assets/images/company/citymining_business_img04.jpg" alt="태양광 이미지"></div>
                                        <div class="txt_box">
                                            <h5>태양광</h5>
                                            <p>태양광 모듈 제조 공정 스크랩</p>
                                            <p>폐모듈</p>
                                        </div>
                                    </li>
                                    <li class="swiper-slide">
                                        <div class="img_box"><img src="/assets/images/company/citymining_business_img05.jpg" alt="슬러지 이미지"></div>
                                        <div class="txt_box">
                                            <h5>슬러지</h5>
                                            <p>귀금속 및 비철금속 정/제련<br> 공정 무기성 Sludge</p>
                                            <p>공정비산 먼지 및 청소 집진 분류</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="mo_list_box">
                            <div class="sub_tab_area border_type">
                                <p class="mo_ver">이차전지</p>
                                <ul>
                                    <li class="on"><button type="button">이차전지</button></li>
                                    <li><button type="button">촉매</button></li>
                                    <li><button type="button">스크랩</button></li>
                                    <li><button type="button">태양광</button></li>
                                    <li><button type="button">슬러지</button></li>
                                </ul>
                            </div>
                            <div class="sub_tab_cont">
                                <!-- 이차전지 : S -->
                                <div class="on">
                                    <div class="txt_box">
                                        <h5>이차전지</h5>
                                        <p>배터리 제조 공정 스크랩</p>
                                        <p>배터리 스크랩</p>
                                        <p>에너지저장장치(ESS)</p>
                                    </div>
                                    <div class="img_box"><img src="/assets/images/company/citymining_business_img01.jpg" alt="이차전지 이미지"></div>
                                </div>
                                <!-- 이차전지 : E -->

                                <!-- 촉매 : S -->
                                <div>
                                    <div class="txt_box">
                                        <h5>촉매</h5>
                                        <p>석유화학 폐촉매</p>
                                        <p>기타 화학(Bio) 폐촉매</p>
                                        <p>자동차 삼원 폐촉매</p>
                                    </div>
                                    <div class="img_box"><img src="/assets/images/company/citymining_business_img02.jpg" alt="촉매 이미지"></div>
                                </div>
                                <!-- 촉매 : E -->

                                <!-- 스크랩 : S -->
                                <div>
                                    <div class="txt_box">
                                        <h5>스크랩</h5>
                                        <p>반도체 Scrap, PCB, <br>리드프레임, 기타 E-Scrap</p>
                                        <p>폐전선, 통신Cable류</p>
                                        <p>기타 비철금속 Scrap</p>
                                    </div>
                                    <div class="img_box"><img src="/assets/images/company/citymining_business_img03.jpg" alt="스크랩 이미지"></div>
                                </div>
                                <!-- 스크랩 : E -->

                                <!-- 태양광 : S -->
                                <div>
                                    <div class="txt_box">
                                        <h5>태양광</h5>
                                        <p>태양광 모듈 제조 공정 스크랩</p>
                                        <p>폐모듈</p>
                                    </div>
                                    <div class="img_box"><img src="/assets/images/company/citymining_business_img04.jpg" alt="태양광 이미지"></div>
                                </div>
                                <!-- 태양광 : E -->

                                <!-- 슬러지 : S -->
                                <div>
                                    <div class="txt_box">
                                        <h5>슬러지</h5>
                                        <p>귀금속 및 비철금속 정/제련<br> 공정 무기성 Sludge</p>
                                        <p>공정비산 먼지 및 청소 집진 분류</p>
                                    </div>
                                    <div class="img_box"><img src="/assets/images/company/citymining_business_img05.jpg" alt="슬러지 이미지"></div>
                                </div>
                                <!-- 슬러지 : E -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="citymining_con03">
                    <div class="w1360">
                        <span class="sub_title_01 black">이차전지 재활용</span>
                        <div class="graph_box">
                            <div class="title"><span>이차전지<br><br class="mobile">재활용</span></div>
                            <ul>
                                <li>
                                    <i class="num">01</i>
                                    <div class="txt_box">
                                        <p>수집/운반</p>
                                        <div class="icon_area">
                                            <div class="icon_box">
                                                <i class="icon01_1"></i>
                                                <span>폐 이차전지</span>
                                            </div>
                                            <div class="icon_box">
                                                <i class="icon01_2"></i>
                                                <span>운반</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i class="num">02</i>
                                    <div class="txt_box">
                                        <p>방전</p>
                                        <div class="icon_area">
                                            <div class="icon_box">
                                                <i class="icon02_1"></i>
                                                <span>염수방전</span>
                                            </div>
                                            <div class="icon_box">
                                                <i class="icon02_2"></i>
                                                <span>전기방전</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i class="num">03</i>
                                    <div class="txt_box">
                                        <p>해체분리</p>
                                        <div class="icon_area">
                                            <div class="icon_box">
                                                <i class="icon03_1"></i>
                                                <span>배터리 팩</span>
                                            </div>
                                            <div class="icon_box">
                                                <i class="icon03_2"></i>
                                                <span>해체 시설</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i class="num">04</i>
                                    <div class="txt_box">
                                        <p>유용자원 회수</p>
                                        <div class="icon_area">
                                            <div class="icon_box">
                                                <i class="icon04_1"></i>
                                                <span>Black<br><br class="mobile">powder</span>
                                            </div>
                                            <div class="icon_box">
                                                <i class="icon04_2"></i>
                                                <span>Cu Scrap</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i class="num">05</i>
                                    <div class="txt_box">
                                        <p>소재 공급</p>
                                        <div class="icon_area">
                                            <div class="icon_box">
                                                <i class="icon05_1"></i>
                                                <span class="w100">이차전지 소재업체 공급</span>
                                            </div>
                                            <div class="icon_box">
                                                <i class="icon05_2"></i>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="citymining_con04">
                    <div class="w1360">
                        <div class="list_box">
                            <dl class="scroll_motion">
                                <dt><p><i>01</i>수집/운반</p></dt>
                                <dd>
                                    <div class="txt_box">
                                        <p class="txt">10,000대 이상 보관 가능</p>
                                        <p class="txt">신속 회수 가능한 전용차량</p>
                                    </div>
                                    <ul>
                                        <li><img src="/assets/images/company/citymining_list_img01.jpg" alt="폐 이차전지"><span>폐 이차전지</span></li>
                                        <li><img src="/assets/images/company/citymining_list_img02.jpg" alt="운반"><span>운반</span></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl class="scroll_motion">
                                <dt><p><i>02</i>방전</p></dt>
                                <dd>
                                    <div class="txt_box">
                                        <p class="txt">화재/폭발에 대한 안전성 확보</p>
                                        <p class="txt">검증된 방전기술</p>
                                    </div>
                                    <p class="txt_small mo_ver">염수방전 완료된 폐배터리만 매입 (외부처리)</p>
                                    <ul>
                                        <li><img src="/assets/images/company/citymining_list_img03.jpg" alt="염수 방전"><span>염수 방전</span></li>
                                        <li><img src="/assets/images/company/citymining_list_img04.jpg" alt="전기 방전"><span>전기 방전</span></li>
                                    </ul>
                                    <p class="txt_small pc_ver">염수방전 완료된 폐배터리만 매입 (외부처리)</p>
                                </dd>
                            </dl>
                            <dl class="scroll_motion">
                                <dt><p><i>03</i>해체/분리</p></dt>
                                <dd>
                                    <div class="txt_box">
                                        <p class="txt">효율적인 해체/분리 기술력 보유</p>
                                        <p class="txt">국내 최초 사업화 대량 물량 처리</p>
                                    </div>
                                    <ul>
                                        <li><img src="/assets/images/company/citymining_list_img05.jpg" alt="배터리 팩"><span>배터리 팩</span></li>
                                        <li><img src="/assets/images/company/citymining_list_img06.jpg" alt="해체 시설"><span>해체 시설</span></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl class="scroll_motion">
                                <dt><p><i>04</i>유용자원 회수</p></dt>
                                <dd>
                                    <div class="txt_box">
                                        <p class="txt">단일설비 국내 최대 Capa.</p>
                                        <p class="txt">회수된 Black powder 품질우수 (불순물 함량↓)</p>
                                    </div>
                                    <p class="txt_small mo_ver">향후 부가가치 향상을 위한 설비 검토중</p>
                                    <ul>
                                        <li><img src="/assets/images/company/citymining_list_img07.jpg" alt="Black powder"><span>Black powder</span></li>
                                        <li><img src="/assets/images/company/citymining_list_img08.jpg" alt="Cu Scrap"><span>Cu Scrap</span></li>
                                    </ul>
                                    <p class="txt_small pc_ver">향후 부가가치 향상을 위한 설비 검토중</p>
                                </dd>
                            </dl>
                            <dl class="scroll_motion">
                                <dt><p><i>05</i>소재 공급</p></dt>
                                <dd>
                                    <div class="txt_box">
                                        <p class="txt">고객 맞춤형 제품 공급</p>
                                    </div>
                                    <ul>
                                        <li><img src="/assets/images/company/citymining_list_img09.jpg" alt="이차전지 소재업체 공급"><span class="w100 pc_ver">이차전지 소재업체 공급</span></li>
                                        <li><img src="/assets/images/company/citymining_list_img10.jpg" alt="이차전지 소재업체 공급"><span class="w100 mo_ver">이차전지 소재업체 공급</span></li>
                                    </ul>
                                </dd>
                            </dl>
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