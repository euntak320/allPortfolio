<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "EN_MEDIA_31";

	$tblname	= "tbl_media_youtube";
	$FullDir	= "/upload/youtube";
	$LangCode	= "EN";

	$whereCause = "(cDelFlag = 'N') AND (cUse = 'Y') AND (sLang = '". $LangCode ."') AND (cIsMain = 'N')";

	$TopCnt		= $fd->getCount($tblname, "(cDelFlag = 'N') AND (cUse = 'Y') AND (sLang = '". $LangCode ."') AND (cIsMain = 'Y')");
	$TotalCnt1	= $fd->getCount($tblname, $whereCause ." AND (sMainCg = 'YOUTUBE_01')");
	$TotalCnt2	= $fd->getCount($tblname, $whereCause ." AND (sMainCg = 'YOUTUBE_02')");
	$TotalCnt3	= $fd->getCount($tblname, $whereCause ." AND (sMainCg = 'YOUTUBE_03')");
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

	<title>Media Center | Youtube</title>

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
        
        <main class="youtube media">
            <div class="keyvisual_area">
                <!-- <div class="keyvisual_video_wrap">
                    <iframe class="keyvisual_video" width="100vw" height="100vh" src="https://www.youtube.com/embed/-Z26e3fMNrw" title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> -->

                <div class="keyvisual_txt">
                    <h1 class="en_mont">Youtube</h1>
                    <h2>Creating a healthy future<br><br class="mobile">from today’s values</h2>
                </div>
                <div class="keyvisual_navi">
                    <span>HOME</span>
                    <span>MEDIA CENTER</span>
                    <span>YOUTUBE</span>
                </div>
                <div class="keyvisual_scroll_down">
                    <span>SCROLL DOWN</span>
                </div>
            </div>

            <section class="content_area">
				<?
					if ($TopCnt > 0) {

						$query	= "SELECT sTitle, sYoutubeURL, sSaveMode, sContent FROM ". $tblname ." WHERE (cDelFlag = 'N') AND (cUse = 'Y') AND (sLang = '". $LangCode ."') AND (cIsMain = 'Y') ORDER BY iOrderNo DESC LIMIT 0, 1";
						$result	= $fd->query($query);

						while ($list = $fd->fetchArray($result))
						{
							$youtubeID = $fg->getYoutubID(trim($list["sYoutubeURL"]));
				?>
				<!-- youtube_main [S] -->
				<article class="youtube_main w1360">
					<p class="sub_title black scroll_motion en_mont"><?=stripslashes(trim($list["sTitle"]))?></p>
					<div class="youtube_main_area">
						<div class="youtube_main_video_wrap scroll_motion">
							<p>
								<iframe class="youtube_main_video" 
								src="https://www.youtube.com/embed/<?=$youtubeID ?>" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</p>
						</div>
						<div class="youtube_main_text_area scroll_motion">
							<div class="youtube_main_text_wrap">
								<?=stripslashes(trim($list["sContent"]))?>
							</div>
						</div>
					</div>
				</article>
				<!-- youtube_main [E] -->
				<?
						}
						$fd->freeResult($result);
						unset($list);
					}
				?>

                <!-- vlog [S] -->
                <article class="vlog w1360 youtube_category">
                    <div class="youtube_category_wrap">
                        <span class="sub_title_02 black en_mont">ECORBIT Staff Vlog</span>
						<ul class="youtube_list clrfix">
						<?	if ($TotalCnt1 == 0) { ?>
						<?
							}
							else {
								$query	= "SELECT sTitle, sYoutubeURL FROM ". $tblname ." WHERE ". $whereCause ." AND (sMainCg = 'YOUTUBE_01') ORDER BY iOrderNo DESC";
								$result	= $fd->query($query);

								while ($list = $fd->fetchArray($result))
								{
									$youtubeID = $fg->getYoutubID(trim($list["sYoutubeURL"]));
						?>
							<li class="youtube_list_item">
								<div class="youtube_list_item_thumb" data-src-video="https://www.youtube.com/embed/<?=$youtubeID?>">
									<img src="" alt="thumb">
								</div>
								<h4 class="youtube_list_item_title sub_title_04 black"><?=stripslashes(trim($list["sTitle"]))?></h4>
							</li>
						<?
								}
								$fd->freeResult($result);
								unset($list);
							}
						?>
						</ul>
						<div class="com_btn_area more youtube_more"><button type="button" class="btn plus">See More</button></div>
                    </div>
                </article>
                <!-- vlog [E] -->

                <!-- social [S] -->
                <article class="social w1360 youtube_category">
                    <div class="youtube_category_wrap">
                        <span class="sub_title_02 black en_mont">ECORBIT Social Contribution</span>
						<ul class="youtube_list clrfix">
						<?	if ($TotalCnt2 == 0) { ?>
						<?
							}
							else {
								$query	= "SELECT sTitle, sYoutubeURL FROM ". $tblname ." WHERE ". $whereCause ." AND (sMainCg = 'YOUTUBE_02') ORDER BY iOrderNo DESC";
								$result	= $fd->query($query);

								while ($list = $fd->fetchArray($result))
								{
									$youtubeID = $fg->getYoutubID(trim($list["sYoutubeURL"]));
						?>
							<li class="youtube_list_item">
								<div class="youtube_list_item_thumb" data-src-video="https://www.youtube.com/embed/<?=$youtubeID?>">
									<img src="" alt="thumb">
								</div>
								<h4 class="youtube_list_item_title sub_title_04 black"><?=stripslashes(trim($list["sTitle"]))?></h4>
							</li>
						<?
								}
								$fd->freeResult($result);
								unset($list);
							}
						?>
						</ul>
						<div class="com_btn_area more youtube_more"><button type="button" class="btn plus">See More</button></div>
                    </div>
                </article>
                <!-- social [E] -->

                <!-- vision [S] -->
                <article class="vision w1360 youtube_category">
                    <div class="youtube_category_wrap">
                        <span class="sub_title_02 black en_mont">ECORBIT Vision Announcement Ceremony</span>
						<ul class="youtube_list clrfix">
						<?	if ($TotalCnt3 == 0) { ?>
						<?
							}
							else {
								$query	= "SELECT sTitle, sYoutubeURL FROM ". $tblname ." WHERE ". $whereCause ." AND (sMainCg = 'YOUTUBE_03') ORDER BY iOrderNo DESC";
								$result	= $fd->query($query);

								while ($list = $fd->fetchArray($result))
								{
									$youtubeID = $fg->getYoutubID(trim($list["sYoutubeURL"]));
						?>
							<li class="youtube_list_item">
								<div class="youtube_list_item_thumb" data-src-video="https://www.youtube.com/embed/<?=$youtubeID?>">
									<img src="" alt="thumb">
								</div>
								<h4 class="youtube_list_item_title sub_title_04 black"<?=stripslashes(trim($list["sTitle"]))?></h4>
							</li>
						<?
								}
								$fd->freeResult($result);
								unset($list);
							}
						?>
						</ul>
						<div class="com_btn_area more youtube_more"><button type="button" class="btn plus">See More</button></div>
                    </div>
                </article>
                <!-- vision [E] -->
            </section>

			<div class="youtube_popup_wrap">
				<div class="youtube_popup">
					<button class="popup_close"><img src="/assets/images/common/icon_x_white.png" alt="close_btn"></button>
					<div class="youtube_popup_video_wrap">
						<iframe class="youtube_popup_video" width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				</div>
			</div>
        </main>

		<!-- FOOTER [S]  -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/footer.php"; ?>
		<!-- FOOTER [E]  -->

		<!-- FLOATING BANNER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/floating_banner.php"; ?>
		<!-- FLOATING BANNER [E] -->
	</div>
</body>
</html>