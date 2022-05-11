<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "KR_INVEST_11";

	$tblname	= "tbl_invest_anounce";
	$codeTbl	= "tbl_common_code";
	$FullDir	= "/upload/announce";
	$LangCode	= "KR";

	$word		= $fg->getValueT("w");
	$NowPage	= $fg->getPage("page");

	$mainCg		= $fg->getValueT("mg");
	$subCg		= $fg->getValueT("sg");

	$fd->connectDB();

	$whereCause = "(idx > 0) AND (cDelFlag = 'N') AND (cUse = 'Y') AND (sLang = '". $LangCode ."')";
	$categoryURL = "";

	if ($mainCg <> "") {
		$whereCause .= " AND (sMainCg = '". $mainCg ."')";
		if ($categoryURL <> "") $categoryURL .= "&";
		$categoryURL .= "mg=". $mainCg;
	}

	if ($subCg <> "") {
		$whereCause .= " AND (sSubCg = '". $subCg ."')";
		if ($categoryURL <> "") $categoryURL .= "&";
		$categoryURL .= "sg=". $subCg;
	}

	// 검색쿼리 설정
	if (strlen(trim($word)) > 0)
	{
		$whereCause .= " AND ((sTitle LIKE '%". $word ."%') OR (sFileName LIKE '%". $word ."%'))";
		if ($categoryURL <> "") $categoryURL .= "&";
		$categoryURL .= "word=". $fg->encodeURL($word);
	}
	else
	{
		$word = "";
	}

	$TotalCnt_Ecorbit	= $fd->getCount($codeTbl, "(cDelFlag = 'N') AND (cUse = 'Y') AND (sLang = '". $LangCode ."') AND (sCg = 'BussField') AND (sUpCode = 'ECORBIT')");
	$TotalCnt_Water		= $fd->getCount($codeTbl, "(cDelFlag = 'N') AND (cUse = 'Y') AND (sLang = '". $LangCode ."') AND (sCg = 'BussField') AND (sUpCode = 'WATER')");
	$TotalCnt_Energy	= $fd->getCount($codeTbl, "(cDelFlag = 'N') AND (cUse = 'Y') AND (sLang = '". $LangCode ."') AND (sCg = 'BussField') AND (sUpCode = 'ENERGY')");
	$TotalCnt_Green		= $fd->getCount($codeTbl, "(cDelFlag = 'N') AND (cUse = 'Y') AND (sLang = '". $LangCode ."') AND (sCg = 'BussField') AND (sUpCode = 'GREEN')");
	$TotalCnt_Future	= $fd->getCount($codeTbl, "(cDelFlag = 'N') AND (cUse = 'Y') AND (sLang = '". $LangCode ."') AND (sCg = 'BussField') AND (sUpCode = 'FUTURE')");

	$TotalCnt			= $fd->getCount($tblname, $whereCause);
	$TotalPage			= (int)(($TotalCnt - 1) / $fg->PAGE_QUOTA) + 1;
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

    <title>투자정보 | 공고</title>

	<!-- SCRIPT_INVEST [S] -->
	<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/script_invest.php"; ?>
	<!-- SCRIPT_INVEST [E] -->
</head>

<body>
    <div id="wrap">
		<!-- HEADER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/header.php"; ?>
		<!-- HEADER [E] -->

		<!-- GNB [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/gnb.php"; ?>
		<!-- GNB [E] -->

        <!-- 클래스명 구분 폴더명 특정페이지에 대한 클래스 넣기 -->

        <!-- content [S] -->
        <main class="invest announce">
            <div class="keyvisual_area">
                <div class="keyvisual_txt">
                    <h1>공고</h1>
                    <h2></h2>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>투자정보</span>
                    <span>공고</span>
                </div>
                <div class="keyvisual_scroll_down">
                    <span>SCROLL DOWN</span>
                </div>
            </div>

            <section class="content_area">
                <div class="meun_list_wrap">
                    <div class="main_tab_area">
                        <div class="sub_tab_wrap">
                            <ul class="sub_tab">
                                <li class="green<? if ($mainCg == "ECORBIT" || $mainCg == "") echo " current on"; ?>">
									<a class="1depth_category" data-business-area="ecorbit" href="javascript:goScreen('ECORBIT', '');">에코비트</a>
									<?	if ($TotalCnt_Ecorbit > 0) { ?>
									<ul class="sub_meun_list">
										<?
											$query = "SELECT sCode, sValue FROM tbl_common_code WHERE (cDelFlag = 'N') AND (cUse = 'Y') AND (sLang = 'KR') AND (sCg = 'BussField') AND (sUpCode = 'ECORBIT') ORDER BY iOrder ASC";
											$result	= $fd->query($query);

											while ($list = $fd->fetchArray($result)) {
										?>
										<!--li><a class="2depth_category" href="javascript:void(0);"  data-subsidiary-company="<?=trim($list["sCode"])?>"><?=trim($list["sValue"])?></a></li-->
										<li><a class="2depth_category" href="javascript:goScreen('ECORBIT', '<?=trim($list["sCode"])?>');"><?=trim($list["sValue"])?></a></li>
										<?
											}
											$fd->freeResult($result);
											unset($list);
										?>
									</ul>
									<?	} ?>
								</li>

                                <li class="blue<? if ($mainCg == "WATER") echo " current on"; ?>">
									<a data-business-area="water" class="1depth_category" href="javascript:goScreen('WATER', '');">워터</a>
                                    <?	if ($TotalCnt_Water > 0) { ?>
									<ul class="sub_meun_list">
										<?
											$query = "SELECT sCode, sValue FROM tbl_common_code WHERE (cDelFlag = 'N') AND (cUse = 'Y') AND (sLang = 'KR') AND (sCg = 'BussField') AND (sUpCode = 'WATER') ORDER BY iOrder ASC";
											$result	= $fd->query($query);

											while ($list = $fd->fetchArray($result)) {
										?>
										<!--li><a class="2depth_category" href="javascript:void(0);" data-subsidiary-company="<?=trim($list["sCode"])?>"><?=trim($list["sValue"])?></a></li-->
										<li><a class="2depth_category" href="javascript:goScreen('WATER', '<?=trim($list["sCode"])?>');"><?=trim($list["sValue"])?></a></li>
										<?
											}
											$fd->freeResult($result);
											unset($list);
										?>
                                    </ul>
									<?	} ?>
                                </li>
                                <li class="orange<? if ($mainCg == "ENERGY") echo " current on"; ?>">
									<a data-business-area="energy" class="1depth_category" href="javascript:goScreen('ENERGY', '');">에너지</a>
                                    <?	if ($TotalCnt_Energy > 0) { ?>
									<ul class="sub_meun_list">
									<?
										$query = "SELECT sCode, sValue FROM tbl_common_code WHERE (cDelFlag = 'N') AND (cUse = 'Y') AND (sLang = 'KR') AND (sCg = 'BussField') AND (sUpCode = 'ENERGY') ORDER BY iOrder ASC";
										$result	= $fd->query($query);

										while ($list = $fd->fetchArray($result)) {
									?>
										<!-- li><a class="2depth_category" href="javascript:void(0);" data-subsidiary-company="<?=trim($list["sCode"])?>"><?=trim($list["sValue"])?></a></li -->
										<li><a class="2depth_category" href="javascript:goScreen('ENERGY', '<?=trim($list["sCode"])?>');"><?=trim($list["sValue"])?></a></li>
									<?
										}
										$fd->freeResult($result);
										unset($list);
									?>
                                    </ul>
									<?	} ?>
                                </li>
                                <li class="lightgreen<? if ($mainCg == "GREEN") echo " current on"; ?>">
									<a class="1depth_category" data-business-area="green" href="javascript:goScreen('GREEN', '');">그린</a>
                                    <?	if ($TotalCnt_Green > 0) { ?>
									<ul class="sub_meun_list">
									<?
										$query = "SELECT sCode, sValue FROM tbl_common_code WHERE (cDelFlag = 'N') AND (cUse = 'Y') AND (sLang = 'KR') AND (sCg = 'BussField') AND (sUpCode = 'GREEN') ORDER BY iOrder ASC";
										$result	= $fd->query($query);

										while ($list = $fd->fetchArray($result)) {
									?>
										<!-- li><a class="2depth_category" href="javascript:void(0);" data-subsidiary-company="<?=trim($list["sCode"])?>"><?=trim($list["sValue"])?></a></li -->
										<li><a class="2depth_category" href="javascript:goScreen('GREEN', '<?=trim($list["sCode"])?>');"><?=trim($list["sValue"])?></a></li>
									<?
										}
										$fd->freeResult($result);
										unset($list);
									?>
                                    </ul>
									<?	} ?>
                                </li>
                                <li class="purple<? if ($mainCg == "FUTURE") echo " current on"; ?>">
									<a class="1depth_category" data-business-area="future" href="javascript:goScreen('FUTURE', '');">미래사업</a>
                                    <?	if ($TotalCnt_Future > 0) { ?>
									<ul class="sub_meun_list">
									<?
										$query = "SELECT sCode, sValue FROM tbl_common_code WHERE (cDelFlag = 'N') AND (cUse = 'Y') AND (sLang = 'KR') AND (sCg = 'BussField') AND (sUpCode = 'FUTURE') ORDER BY iOrder ASC";
										$result	= $fd->query($query);

										while ($list = $fd->fetchArray($result)) {
									?>
										<!-- li><a class="2depth_category" href="javascript:void(0);" data-subsidiary-company="<?=trim($list["sCode"])?>"><?=trim($list["sValue"])?></a></li -->
										<li><a class="2depth_category" href="javascript:goScreen('FUTURE', '<?=trim($list["sCode"])?>');"><?=trim($list["sValue"])?></a></li>
									<?
										}
										$fd->freeResult($result);
										unset($list);
									?>
                                    </ul>
									<?	} ?>
                                </li>
                            </ul>
                        </div>
						<form name="form" method="post" action="/kr/invest/announce">
                        <div class="menu_search_bar">
                            <button class="button_open" type="button">검색</button>
                            <div class="search_input">
                                <input type="text" id="id_w" name="w" value="<?=$word?>" placeholder="검색어를 입력해주세요 " title="검색">
                                <button class="button_search" type="submit">검색</button>
                                <button class="button_close">닫기</button>
                            </div>
                        </div>
						</form>
                    </div>
                </div>
				<?	if ($TotalCnt > 0) { ?>
                <article class="download_item_area">
                    <div class="box_list_area w1440">
						<?
							$NowNo = $TotalCnt - (($NowPage - 1) * $fg->PAGE_QUOTA);

							$query = "SELECT idx, sPrtDT, sMainCg, sSubCg, sTitle, sPubDT, sFileName, sSaveName, iFileSize, sThumbFileName, sThumbSaveName, iThumbFileSize FROM ". $tblname ." WHERE ". $whereCause ." ORDER BY iOrderNo DESC";
							$result	= $fd->query($query);
							while ($list = $fd->fetchArray($result)) {

								switch(strtolower(trim($list["sMainCg"]))) {
									case "ecorbit"	: $areaColor = "green";			$area = "ecorbit";	break;
									case "green"	: $areaColor = "lightgreen";	$area = "green";	break;
									case "future"	: $areaColor = "purple";		$area = "future";	break;
									case "water"	: $areaColor = "blue";			$area = "water";	break;
									case "energy"	: $areaColor = "orange";		$area = "energy";	break;
									default			: $areaColor = "green";			$area = "ecorbit";	break;
								}
						?>
                        <div class="box_area <?=$areaColor?>" data-business-area="<?=$area?>">
                            <a href="/lib/Download?fd=<?=urlencode($FullDir)?>&sn=<?=urlencode(trim($list["sSaveName"]))?>&fn=<?=urlencode(trim($list["sFileName"]))?>" class="download">
                                <span class="number"><?=$NowNo?></span>
                                <span class="box_title"><?=stripslashes(trim($list["sTitle"]))?></span>
                                <span class="etc_text"><?=trim($list["sPubDT"])?></span>
                            </a>
                        </div>
						<?
								$NowNo--;
							}
							$fd->freeResult($result);
							unset($list);
						?>
                    </div>
                    <div class="com_btn_area invest_more"><button type="button" class="btn plus">더보기</button></div>
                </article>
				<?	} else { ?>
				<article class="download_item_area noResult_wrap">
					<div class="noResult w1440">
						<div class="noResult_img"><img src="/assets/images/common/exclamation_mark.png" alt="no_result"></div>
						<?	if ($word <> '') { ?>
						<p class="noResult_text">'<span class="noResult_keyword"><?=$word?></span>'에 대한 검색결과가 없습니다.</p>
						<?	} else { ?>
						<p class="noResult_text">등록정보가 없습니다.</p>
						<?	} ?>
					</div>
				</article>
				<?	} ?>
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
	<script type="text/javascript">
	function goScreen(mainCg, subCg) {
		document.location.href="announce?mg="+ mainCg +"&sg="+ subCg;
	}

	$(document).ready(function() {
		var range = $(".box_list_area").children(".box_area.<?=$areaColor?>");
		range.addClass("filtering_visible");
		$.item_hidden(range);
	});

	</script>
</body>

</html>