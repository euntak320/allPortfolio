<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "EN_MEDIA_21";

	$tblname	= "tbl_media_promotion";
	$FullDir	= "/upload/promotion";
	$LangCode	= "EN";

	$isExist	= $fd->getCount($tblname, "(cDelFlag = 'N') AND (cUse = 'Y') AND (sLang = '". $LangCode ."') AND (cIsMain = 'Y')");

	if ($isExist > 0) {

		$query = "SELECT sTitle, sContent, sSaveMode, iHit, iDownload, sThumbFileName, sThumbSaveName, iThumbFileSize, sFileTitle1, sFileName1, sSaveName1, iFileSize1, sFileTitle2, sFileName2, sSaveName2, iFileSize2, sFileTitle3, sFileName3, sSaveName3, iFileSize3, sFileTitle4, sFileName4, sSaveName4, iFileSize4, sFileTitle5, sFileName5, sSaveName5, iFileSize5 FROM ". $tblname ." WHERE (cDelFlag = 'N') AND (cUse = 'Y') AND (sLang = '". $LangCode ."') AND (cIsMain = 'Y') ORDER BY iOrderNo DESC LIMIT 1";
		$result	= $fd->query($query);
		$view	= $fd->fetchArray($result);

		$m_title		= stripslashes(trim($view["sTitle"]));
		$m_content		= stripslashes(trim($view["sContent"]));
		$m_savemode		= stripslashes(trim($view["sSaveMode"]));
		$m_hit			= stripslashes(trim($view["iHit"]));
		$m_download		= stripslashes(trim($view["iDownload"]));
		$m_thumbName	= stripslashes(trim($view["sThumbFileName"]));
		$m_thumbSave	= stripslashes(trim($view["sThumbSaveName"]));
		$m_thumbSize	= stripslashes(trim($view["iThumbFileSize"]));
		$m_attachTitle1	= stripslashes(trim($view["sFileTitle1"]));
		$m_attachName1	= stripslashes(trim($view["sFileName1"]));
		$m_attachSave1	= stripslashes(trim($view["sSaveName1"]));
		$m_attachSize1	= stripslashes(trim($view["iFileSize1"]));
		$m_attachTitle2	= stripslashes(trim($view["sFileTitle2"]));
		$m_attachName2	= stripslashes(trim($view["sFileName2"]));
		$m_attachSave2	= stripslashes(trim($view["sSaveName2"]));
		$m_attachSize2	= stripslashes(trim($view["iFileSize2"]));
		$m_attachTitle3	= stripslashes(trim($view["sFileTitle3"]));
		$m_attachName3	= stripslashes(trim($view["sFileName3"]));
		$m_attachSave3	= stripslashes(trim($view["sSaveName3"]));
		$m_attachSize3	= stripslashes(trim($view["iFileSize3"]));
		$m_attachTitle4	= stripslashes(trim($view["sFileTitle4"]));
		$m_attachName4	= stripslashes(trim($view["sFileName4"]));
		$m_attachSave4	= stripslashes(trim($view["sSaveName4"]));
		$m_attachSize4	= stripslashes(trim($view["iFileSize4"]));
		$m_attachTitle5	= stripslashes(trim($view["sFileTitle5"]));
		$m_attachName5	= stripslashes(trim($view["sFileName5"]));
		$m_attachSave5	= stripslashes(trim($view["sSaveName5"]));
		$m_attachSize5	= stripslashes(trim($view["iFileSize5"]));
	}
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

	<title>Media Center | Promotional Materials</title>

	<!-- SCRIPT_MEDIA [S] -->
	<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/script_media.php"; ?>
	<!-- SCRIPT_MEDIA [E] -->

	<script type="text/javascript">
	function download(filename, filesave) {
		var downURL = "/lib/Download?fd=<?=urlencode($FullDir)?>&sn="+ filesave +"&fn="+ filename;

		execWin.location.replace(downURL);
	}
	</script>
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
        <main class="media promotion">
            <div class="keyvisual_area">
                <div class="keyvisual_txt">
                    <h1 class="en_mont">Promotional Materials</h1>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>MEDIA CENTER</span>
                    <span>PROMOTIONAL MATERIALS</span>
                </div>
                <div class="keyvisual_scroll_down">
                    <span>SCROLL DOWN</span>
                </div>
            </div>
            
            <section class="content_area">
                <p class="main_title black scroll_motion en_mont">Promotional Brochure</p>
				<?	if ($isExist > 0) { ?>
                <article class="promotion_area w1360">
                    <div class="promotion_img_wrap scroll_motion">
                        <img src="<?=$FullDir?>/<?=$m_thumbSave?>" alt="promotion_img"><span class="promotion_img_text">ECORBIT</span>
                    </div>
                    <div class="promotion_text_area scroll_motion">
                        <span class="sub_title_01 black"><?=$m_title?></span>
                        <p class="black"><?=$m_content?></p>
						<div class="com_btn_area">
							<?	if ($m_attachSize1 > 0) { ?><button type="button" onclick="download('<?=urlencode($m_attachName1)?>', '<?=urlencode($m_attachSave1)?>');" class="btn pdf"><?=$m_attachTitle1?> Download</button><?	} ?>
                            <?	if ($m_attachSize2 > 0) { ?><button type="button" onclick="download('<?=urlencode($m_attachName2)?>', '<?=urlencode($m_attachSave2)?>');" class="btn pdf"><?=$m_attachTitle2?> Download</button><?	} ?>
                            <?	if ($m_attachSize3 > 0) { ?><button type="button" onclick="download('<?=urlencode($m_attachName3)?>', '<?=urlencode($m_attachSave3)?>');" class="btn pdf"><?=$m_attachTitle3?> Download</button><?	} ?>
                            <?	if ($m_attachSize4 > 0) { ?><button type="button" onclick="download('<?=urlencode($m_attachName4)?>', '<?=urlencode($m_attachSave4)?>');" class="btn pdf"><?=$m_attachTitle4?> Download</button><?	} ?>
                            <?	if ($m_attachSize5 > 0) { ?><button type="button" onclick="download('<?=urlencode($m_attachName5)?>', '<?=urlencode($m_attachSave5)?>');" class="btn pdf"><?=$m_attachTitle5?> Download</button><?	} ?>
						</div>
                    </div>
                </article>
				<?	} else { ?>
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