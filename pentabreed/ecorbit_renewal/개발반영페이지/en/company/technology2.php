<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "EN_COMPANY_53";

	$tblname	= "tbl_bussiness_intel";
	$FullDir	= "/upload/intel";
	$LangCode	= "EN";

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
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- META [S] -->
	<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/meta.php"; ?>
	<!-- META [E] -->

	<title>Business | TECHNOLOGY</title>

	<!-- SCRIPT_COMPANY [S] -->
	<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/script_company.php"; ?>
	<!-- SCRIPT_COMPANY [E] -->
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
        <main class="company tech">
            <div class="keyvisual_area">
                <div class="keyvisual_txt">
                    <h1 class="en_mont">Technology</h1>
                    <h2>ECORBIT proposes the environmental<br class="mo_ver"> technologies of tomorrow</h2>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>BUSINESS</span>
                    <span>TECHNOLOGY</span>
                </div>
                <div class="keyvisual_scroll_down">
                    <span>SCROLL DOWN</span>
                </div>
            </div>
            <section class="content_area">
                <div class="main_tab_area">
                    <div class="sub_tab_wrap">
                        <div class="scroll_wrap">
                            <ul class="sub_tab">
                                <li class="green"><a href="<?=$G_EN_FOLDER?>/company/technology">Specialty Business and R&amp;D</a></li>
                                <li class="green"><a href="<?=$G_EN_FOLDER?>/company/technology1">Technical Support</a></li>
                                <li class="green on"><a href="<?=$G_EN_FOLDER?>/company/technology2">Intellectual Property Rights</a></li>
                            </ul>
                        </div>
                    </div>
					<form name="form" method="post" action="/en/company/technology2">
                    <div class="menu_search_bar">
                        <button class="button_open" type="button">검색</button>
                        <div class="search_input">
                            <input type="text" id="id_w" name="w" value="<?=$word?>" placeholder="Enter a search term" title="Enter a search term">
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
                                    <span>Number</span>
                                </h4>
                                <h4 class="w70" role="cell">
                                    <span>Field and Title</span>
                                </h4>
                                <h4 class="w30" role="cell">
                                    <span>Issuing Organization</span>
                                </h4>
                                <h4 class="w30" role="cell">
                                    <span>Issue Number</span>
                                </h4>
                            </li>
                            <!-- 반복 영역 : S -->
                            <!-- 반복 영역 : S -->
							<?
								if ($TotalCnt <= 0)
								{
									if ($word <> "")
										$prtMsg = "No posts found with \"<font style=\"color:red\">$word</font>\" search term.";
									else
										$prtMsg = "The post does not exist."
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
                                    <dd class="counting w10" data-title="Number">
                                        <span><?=$NowNo?></span>
                                    </dd>
                                    <dt class="title w50" data-title="Field and Title">
                                        <div class="title_area">
											<?	if (trim($list["sMainCg"]) <> "") { ?>
                                            <span>[<?=trim($list["sMainCg"])?>]</span>
											<?	} ?>
                                            <p><?=stripslashes(trim($list["sTitle"]))?></p>
                                        </div>
                                    </dd>
                                    <dd class="publshing w30" data-title="Issuing Organization">
                                        <span><?=trim($list["sPublisher"])?></span>
                                    </dd>
                                    <dd class="number w20" data-title="Issue Number">
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