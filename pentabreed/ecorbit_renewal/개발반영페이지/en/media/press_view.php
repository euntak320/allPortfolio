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

	$idx		= $fg->getValueT("idx");
	$whereCause	= "(cDelFlag = 'N') AND (cUse = 'Y') AND (sLang = '". $LangCode ."')";

	$categoryURL		= "page=". $NowPage;

	if ($year <> "")	$categoryURL .= "&y=". $year;
	if ($month <> "")	$categoryURL .= "&m=". $month;
	if ($word <> "")	$categoryURL .= "&w=". $fg->encodeURL($word);
	if ($tag <> "") {
		$categoryURL .= "&tag=". $fg->encodeURL($tag);
	}

	if ($idx == "")	$fg->htmlBack("No Data.");

	$ResultSet = $fd->getOneRecord($tblname, "idx, sLang, cUse, sPrtDT, sHashTag, iOrderNo, cIsMain, sTitle, sContent, sSaveMode, sPubDT, iHit, iDownload, sFileName, sSaveName, iFileSize, sThumbFileName, sThumbSaveName, iThumbFileSize, sRegID, fnGetAdmName(sRegID) AS RegNM, fnGetAdmEmail(sRegID) AS RegEmail, DATE_FORMAT(dtRegDate, '%Y-%m-%d %H:%i:%s') AS RegDate, sRegIP, sModID, fnGetAdmName(sModID) AS ModNM, fnGetAdmEmail(sRegID) AS RegEmail, DATE_FORMAT(dtModDate, '%Y-%m-%d %H:%i:%s') AS ModDate, sModIP", $whereCause ." AND (idx = '". $idx ."')");

	if ($ResultSet == null)
	{
		$fg->htmlBack("Please check and re-enter.");
	}
	else
	{
		$m_idx			= stripslashes($ResultSet[0][0]);
		$m_lang			= stripslashes($ResultSet[0][1]);
		$m_isUse		= stripslashes($ResultSet[0][2]);
		$m_prtDT		= stripslashes($ResultSet[0][3]);
		$m_hashTag		= stripslashes($ResultSet[0][4]);
		$m_orderNo		= stripslashes($ResultSet[0][5]);
		$m_isMain		= stripslashes($ResultSet[0][6]);
		$m_title		= stripslashes($ResultSet[0][7]);
		$m_content		= stripslashes($ResultSet[0][8]);
		$m_savemode		= stripslashes($ResultSet[0][9]);
		$m_pubDT		= stripslashes($ResultSet[0][10]);
		$m_hit			= stripslashes($ResultSet[0][11]);
		$m_download		= stripslashes($ResultSet[0][12]);
		$m_attachName	= stripslashes($ResultSet[0][13]);
		$m_attachSave	= stripslashes($ResultSet[0][14]);
		$m_attachSize	= stripslashes($ResultSet[0][15]);
		$m_thumbName	= stripslashes($ResultSet[0][16]);
		$m_thumbSave	= stripslashes($ResultSet[0][17]);
		$m_thumbSize	= stripslashes($ResultSet[0][18]);
		$m_regID		= stripslashes($ResultSet[0][19]);
		$m_regNM		= stripslashes($ResultSet[0][20]);
		$m_regEmail		= stripslashes($ResultSet[0][21]);
		$m_regDT		= stripslashes($ResultSet[0][22]);
		$m_regIP		= stripslashes($ResultSet[0][23]);
		$m_modID		= stripslashes($ResultSet[0][24]);
		$m_modNM		= stripslashes($ResultSet[0][25]);
		$m_modEmail		= stripslashes($ResultSet[0][26]);
		$m_modDT		= stripslashes($ResultSet[0][27]);
		$m_modIP		= stripslashes($ResultSet[0][28]);
	}

	$tagList	= explode("|", $m_hashTag);
	$defaultTag	= trim($tagList[0]);

	$whereCause	 .= " AND (sHashTag LIKE '%". $defaultTag ."%')";
	$relayCount = $fd->getCount($tblname, $whereCause);
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
		<!-- HEADER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/header.php"; ?>
		<!-- HEADER [E] -->

		<!-- GNB [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/gnb.php"; ?>
		<!-- GNB [E] -->
        
        <!-- CONTENT [S] -->
        <main class="media news_detail">
            <div class="keyvisual_area">
                
            </div>
            
            <section class="content_area">
                <article class="news_detail_area w1360">
                    <div class="news_detail_header_area">
                        <div class="small_header"><span class="small_header_tag"><?=codeTonNameTag($m_hashTag, $LangCode)?></span><span class="small_header_date"><?=$m_pubDT?></span></div>
                        <span class="news_detail_header_title sub_title_01 black"><?=$m_title?></span>
                        <div class="news_detail_header_sns_wrap">
                            <button class="news_detail_header_sns">
                                <img src="/assets/images/common/icon_link.png" alt="link">
                            </button>
                            <button class="news_detail_header_sns">
                                <img src="/assets/images/common/icon_kakao.png" alt="kakao">
                            </button>
                            <button class="news_detail_header_sns">
                                <img src="/assets/images/common/icon_facebook.png" alt="facebook">
                            </button>
                        </div>
                    </div>

                    <div class="news_detail_contents">
                        <div class="news_detail_contents_img_wrap">
							<?	if ($m_thumbSize > 0) { ?>
							<img src="<?=$FullDir?>/<?=$m_thumbSave?>" alt="news_thumb">
							<?	} else { ?>
							<?	} ?>
                        </div>
                        <p class="news_detail_contents_text_wrap black">
                            <?=$m_content?>
                        </p>
                    </div>
                </article>

                <div class="com_btn_area news_detail_button">
                    <button type="button" class="btn" onclick="location='<?=$G_EN_FOLDER?>/media/press?page=<?=$NowPage?>'">List</button>
                </div>

				<?	if ($relayCount > 0) { ?>
                <article class="related_news_area">
                    <div class="related_news_wrap w1360">
                        <span class="related_news_header sub_title_02 black en_mont">Related News</span>
                        <ul class="related_news_list clrfix">
							<?
								$query	= "SELECT idx, cIsMain, sHashTag, sTitle, sPubDT, sThumbFileName, sThumbSaveName, iThumbFileSize FROM ". $tblname ." WHERE ". $whereCause ." ORDER BY RAND() DESC LIMIT 3";
								$result	= $fd->query($query);

								if ($categoryURL <> "")	$categoryURL .= "&";

								while ($list = $fd->fetchArray($result)) {
							?>
							<li class="related_news_list_item" data-src-tag="rnd mna">
								<a href="<?=$G_EN_FOLDER?>/media/press_view?<?=$categoryURL?>idx=<?=trim($list["idx"])?>&page=<?=$NowPage?>">
									<div class="related_news_list_item_thumb" data-src-thumb="">
										<?	if (trim($list["iThumbFileSize"]) > 0) { ?>
										<img src="<?=$FullDir?>/<?=trim($list["sThumbSaveName"])?>" alt="news_thumb">
										<?	} else { ?>
										<?	} ?>
									</div>
									<span class="related_news_list_date"><?=trim($list["sPubDT"])?></span>
									<h4 class="related_news_list_item_title sub_title_04 black"><?=stripslashes(trim($list["sTitle"]))?></h4>
								</a>
							</li>
							<?
								}
								$fd->freeResult($result);
								unset($list);
							?>
                        </ul>
                    </div>
                </article>
				<?	} ?>
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