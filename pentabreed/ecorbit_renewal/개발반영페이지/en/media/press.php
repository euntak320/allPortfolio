<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "EN_MEDIA_11";

	$tblname	= "tbl_media_bodo";
	$codeTbl	= "tbl_common_code";
	$FullDir	= "/upload/bodo";
	$LangCode	= "EN";

	$tag		= $fg->getValueT("tag");
	$year		= $fg->getValueT("y");
	$month		= $fg->getValueT("m");
	$word		= $fg->getValueT("w");
	$NowPage	= $fg->getPage("page");

	$fd->connectDB();

	$whereCause = "(idx > 0) AND (cDelFlag = 'N') AND (cUse = 'Y') AND (sLang = '". $LangCode ."')";
	$categoryURL = "";

	if ($year <> "") {
		$whereCause .= " AND (LEFT(sPubDT, 4) = '". $year ."')";
		if ($categoryURL <> "") $categoryURL .= "&";
		$categoryURL .= "y=". $year;
	}

	if ($month <> "") {
		$whereCause .= " AND (SUBSTR(sPubDT, 6, 2) = '". $fg->strFill($month, "0", 2) ."')";
		if ($categoryURL <> "") $categoryURL .= "&";
		$categoryURL .= "m=". $month;
	}

	if ($tag <> "") {
		if ($tag <> "") $tag .= "&";
		$tag .= "tag=". $tag;
	}

	// 검색쿼리 설정
	if (strlen(trim($word)) > 0)
	{
		$whereCause .= " AND ((sTitle LIKE '%". $word ."%') OR (sContent LIKE '%". $word ."%') OR (sFileName LIKE '%". $word ."%'))";
		$categoryURL .= "w=". $fg->encodeURL($word);
	}
	else
	{
		$categoryURL = "";
		$word = "";
	}

	$TotalCnt			= $fd->getCount($tblname, $whereCause);
	$TotalPage			= (int)(($TotalCnt - 1) / $fg->PAGE_QUOTA) + 1;
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

	<title>Media Center | ECORBIT News</title>

	<!-- SCRIPT_MEDIA [S] -->
	<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/script_media.php"; ?>
	<!-- SCRIPT_MEDIA [E] -->
</head>

<body>
    <div id="wrap">
        <!-- header [S] -->
		<!-- HEADER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/header.php"; ?>
		<!-- HEADER [E] -->
        <!-- header [E] -->

		<!-- GNB [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/gnb.php"; ?>
		<!-- GNB [E] -->

        <!-- CONTENT [S] -->
        <main class="media news">
            <div class="keyvisual_area">
                <div class="keyvisual_txt">
                    <h1 class="en_mont">ECOBRIT<br class="mo_ver"> News</h1>
                    <h2>Resolving tomorrow’s<br class="mo_ver"> environmental problems today</h2>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>MEDIA CENTER</span>
                    <span>ECORBIT NEWS</span>
                </div>
                <div class="keyvisual_scroll_down">
                    <span>SCROLL DOWN</span>
                </div>
            </div>

            <section class="content_area">
				<form name="search" method="get" action="press">
				<input type="hidden" id="id_tag" name="tag" />
                <div class="news_hashtag_area hashtag_area">
                    <ul>
                        <li<? if ($tag == "") echo " class=\"on\""; ?>><button type="button" class="button_tag" data-src-tag="all">#All</button></li>
                        <li<? if ($tag == "hashTag01") echo " class=\"on\""; ?>><button type="button" class="button_tag" data-src-tag="hashTag01">#Sustainable Management</button></li>
                        <li<? if ($tag == "hashTag02") echo " class=\"on\""; ?>><button type="button" class="button_tag" data-src-tag="hashTag02">#Social Contribution</button></li>
                        <li<? if ($tag == "hashTag03") echo " class=\"on\""; ?>><button type="button" class="button_tag" data-src-tag="hashTag03">#R&amp;D</button></li>
                        <li<? if ($tag == "hashTag04") echo " class=\"on\""; ?>><button type="button" class="button_tag" data-src-tag="hashTag04">#M&amp;A</button></li>
                        <li<? if ($tag == "hashTag05") echo " class=\"on\""; ?>><button type="button" class="button_tag" data-src-tag="hashTag05">#Communication</button></li>
                    </ul>
                </div>
                <div class="news_search_wrap all_search_bar">
                    <div class="year_area">
                        <select name="y" id="id_y" title="Year">
                            <option value=""<? if ($year == "") echo " selected"; ?>>Year</option>
							<?	for ($i = Date("Y"); $i >= 2019; $i--) { ?>
                            <option value="<?=$i?>"<? if ($i == $year) echo " selected"; ?>><?=$i?></option>
							<?	} ?>
                        </select>
                    </div>
                    <div class="month_area">
                        <select name="m" id="id_m" size="1" title="Month">
                            <option value=""<? if ($month == "") echo " selected"; ?>>Month</option>
                            <option value="01"<? if ($month == "01") echo " selected"; ?>>January</option>
                            <option value="02"<? if ($month == "02") echo " selected"; ?>>February</option>
                            <option value="03"<? if ($month == "03") echo " selected"; ?>>March</option>
                            <option value="04"<? if ($month == "04") echo " selected"; ?>>April</option>
                            <option value="05"<? if ($month == "05") echo " selected"; ?>>May</option>
                            <option value="06"<? if ($month == "06") echo " selected"; ?>>June</option>
                            <option value="07"<? if ($month == "07") echo " selected"; ?>>July</option>
                            <option value="08"<? if ($month == "08") echo " selected"; ?>>Auguest</option>
                            <option value="09"<? if ($month == "09") echo " selected"; ?>>September</option>
                            <option value="10"<? if ($month == "10") echo " selected"; ?>>October</option>
                            <option value="11"<? if ($month == "11") echo " selected"; ?>>November</option>
                            <option value="12"<? if ($month == "12") echo " selected"; ?>>December</option>
                        </select>
                    </div>
                    <div class="search_bar">
                        <input type="text" title="Search" name="w" id="id_w" value="<?=$word?>" placeholder="Search">
                        <button type="submit" class="search_icon">Search</button>
                    </div>
                </div>
				</form>

                <article class="news_area w1360">
                    <div class="news_head">Total of <span class="news_total"><?=number_format($TotalCnt, 0)?></span> <span class="news_type">press releases</span> available. </div>
                    <ul class="news_list clrfix">
						<?
							$query	= "SELECT idx, cIsMain, sHashTag, sTitle, sPubDT, sThumbFileName, sThumbSaveName, iThumbFileSize FROM ". $tblname ." WHERE ". $whereCause ." ORDER BY iOrderNo DESC";
							$result	= $fd->query($query);

							while ($list = $fd->fetchArray($result)) {

								if ($categoryURL <> "")	$categoryURL .= "&";
						?>
						<li class="news_list_item" data-src-tag="<?=str_replace("|", " ", trim($list["sHashTag"]))?>">
							<a href="<?=$G_EN_FOLDER?>/media/press_view?<?=$categoryURL?>idx=<?=trim($list["idx"])?>&page=<?=$NowPage?>">
								<div class="news_list_item_thumb" data-src-thumb="">
									<?	if (trim($list["iThumbFileSize"]) > 0) { ?>
	                                <img src="<?=$FullDir?>/<?=trim($list["sThumbSaveName"])?>" alt="news_thumb">
									<?	} else { ?>
									<?	} ?>
								</div>
								<span class="news_list_date"><?=trim($list["sPubDT"])?></span>
								<h4 class="news_list_item_title sub_title_04 black"><?=stripslashes(trim($list["sTitle"]))?></h4>
							</a>
						</li>
						<?
							}
							$fd->freeResult($result);
							unset($list);
						?>
                    </ul>
                    <div class="com_btn_area more news_more"><button type="button" class="btn plus">See More</button></div> 
                </article>
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