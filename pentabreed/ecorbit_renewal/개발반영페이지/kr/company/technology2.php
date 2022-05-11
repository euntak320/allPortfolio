<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "KR_COMPANY_53";

	$tblname	= "tbl_bussiness_intel";
	$FullDir	= "/upload/intel";
	$LangCode	= "KR";

	$action		= $fg->getValueT("action");
	$word		= $fg->getValueT("w");
	$NowPage	= $fg->getPage("page");

	$fd->connectDB();

	$whereCause = "(idx > 0) AND (cDelFlag = 'N') AND (cUse = 'Y') AND (sLang = '". $LangCode ."')";
	$categoryURL = "";

	// 검색쿼리 설정
	if (strlen(trim($word)) > 0)
	{
		$whereCause .= " AND ((sTitle LIKE '%". $word ."%') OR (sPublisher LIKE '%". $word ."%') OR (sPublishNo LIKE '%". $word ."%'))";
		$categoryURL .= "word=". $fg->encodeURL($word);
	}
	else
	{
		$categoryURL = "";
		$word = "";
	}

	$TotalCnt	= $fd->getCount($tblname, $whereCause);
	$TotalPage	= (int)(($TotalCnt - 1) / $fg->PAGE_QUOTA) + 1;
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

	<title>사업소개 | 기술분야</title>

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
        <main class="company tech">
            <div class="keyvisual_area">
                <div class="keyvisual_txt">
                    <h1>Technology</h1>
                    <h2>내일의 환경기술을 제시하는 에코비트</h2>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>사업소개</span>
                    <span>기술지원</span>
                </div>
                <div class="keyvisual_scroll_down">
                    <span>SCROLL DOWN</span>
                </div>
            </div>
            <section class="content_area">
                <div class="main_tab_area">
                    <div class="sub_tab_wrap">
                        <ul class="sub_tab">
                            <li class="green"><a href="/kr/company/technology">R&amp;D</a></li>
                            <li class="green"><a href="/kr/company/technology1">기술지원</a></li>
                            <li class="green on"><a href="/kr/company/technology2">지식재산권</a></li>
                        </ul>
                    </div>
					<form name="form" method="post" action="/kr/company/technology2">
                    <div class="menu_search_bar">
                        <button class="button_open" type="button">검색</button>
                        <div class="search_input">
                            <input type="text" id="id_w" name="w" value="<?=$word?>" placeholder="검색어를 입력해주세요 " title="검색어를 입력해주세요">
                            <button class="button_search" type="submit">검색</button>
                            <button class="button_close">닫기</button>
                        </div>
                    </div>
					</form>
                </div>
                <div class="knowledge_area">
                    
                    <div class="table_area w1360">
                        <ul class="table_body">
                            <li class="table_head" role="columnheader">
                                <h4 class="w10" role="cell">
                                    <span>번호</span>
                                </h4>
                                <h4 class="calc30" role="cell">
                                    <span>분류 및 명칭</span>
                                </h4>
                                <h4 class="w10_v2" role="cell">
                                    <span>발행처</span>
                                </h4>
                                <h4 class="w10" role="cell">
                                    <span>발행번호</span>
                                </h4>
                            </li>
                            <!-- 반복 영역 : S -->
							<?
								if ($TotalCnt <= 0)
								{
									if ($word <> "")
										$prtMsg = "<font style=\"color:red\">$word</font>의 검색어로 검색된 지식재산권 게시물이 존재하지 않습니다.";
									else
										$prtMsg = "지식재산권 게시물이 존재하지 않습니다."
							?>
                            <li class="table_repeat_body">
                                <dl style="display:block; width:100%; text-align:center;">
                                    <dd>
                                        <span><?=$prtMsg?></span>
                                    </dd>
                                </dl>
                            </li>
							<?
								}
								else
								{
									$NowNo = $TotalCnt - (($NowPage - 1) * $fg->PAGE_QUOTA);

									$query = "SELECT idx, cUse, sPrtDT, sHashTag, iOrderNo, sMainCg, sTitle, sPublisher, sPublishNo FROM $tblname WHERE $whereCause ORDER BY iOrderNo DESC LIMIT ". ($NowPage - 1) * $fg->PAGE_QUOTA .", ". $fg->PAGE_QUOTA;
									$result = $fd->query($query);

									while ($list = $fd->fetchArray($result))
									{
							?>
                            <li class="table_repeat_body">
                                <dl>
                                    <dd class="counting w10" data-title="번호">
                                        <span><?=$NowNo?></span>
                                    </dd>
                                    <dt class="title calc30" data-title="분류 및 명칭">
                                        <div class="title_area">
											<?	if (trim($list["sMainCg"]) <> "") { ?>
                                            <span>[<?=trim($list["sMainCg"])?>]</span>
											<?	} ?>
                                            <p><?=stripslashes(trim($list["sTitle"]))?></p>
                                        </div>
                                    </dd>
                                    <dd class="publshing w10" data-title="발행처">
                                        <span><?=trim($list["sPublisher"])?></span>
                                    </dd>
                                    <dd class="number w13" data-title="발행번호">
                                        <span><?=trim($list["sPublishNo"])?></span>
                                    </dd>
                                </dl>
                            </li>
							<?
										$NowNo--;
									}

									$fd->freeResult($result);
									unset($list);
								}

								$fd->closeDB();
							?>
                            <!-- 반복 영역 : E -->
                        </ul>
                    </div>
                    
                    <!-- 페이징 : [S] -->
					<?=$fg->fastGo($TotalCnt, "technology2", $NowPage, $categoryURL, $fg->PAGE_QUOTA, $fg->BOARD_QUOTA, "page", "SITE")?>
                    <!-- 페이징 : [E] -->
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