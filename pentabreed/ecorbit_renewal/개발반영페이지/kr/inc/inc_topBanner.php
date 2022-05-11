<?
	$topBanner_whereCause = "(cDelFlag = 'N') AND (sLang = 'KR') AND (cUse = 'Y') AND (NOW() BETWEEN sSDate AND sEDate)";
	$topBanner_cnt	= $fd->getCount("tbl_top_banner", $topBanner_whereCause);

	if ($topBanner_cnt > 0) {

		$tbQuery	= "SELECT sEDate, sEDate, sTitle, sSubTitle, sLinkURL, sLInkTarget FROM tbl_top_banner WHERE ". $topBanner_whereCause ." ORDER BY iOrderNo DESC LIMIT 0, 1";
		$tbResult	= $fd->query($tbQuery);
		$tbInfo		= $fd->fetchArray($tbResult);
		
		$tbTitle		= stripslashes(trim($tbInfo["sTitle"]));
		$tbSubTitle		= stripslashes(trim($tbInfo["sSubTitle"]));
		$tbLinkURL		= stripslashes(trim($tbInfo["sLinkURL"]));
		$tbLinkTarget	= stripslashes(trim($tbInfo["sLInkTarget"]));

		if ($tbLinkURL <> "#none") {
			$tbTitle = "<a href=\"". $tbLinkURL ."\" target=\"". $tbLinkTarget ."\" style=\"color:#FFFFFF;\">". $tbTitle ."</a>";
		}

		$fd->freeResult($tbResult);
		unset($tbInfo);
?>

		<div class="top_banner">
            <div class="w1360">
                <div class="txt_box">
                    <p><?=$tbTitle?></p>
                    <span><?=$tbSubTitle?></span>
                </div>
            </div>
            <div class="btn_box mo_ver">
                <button type="button">다시 보지 않기 <img src="/assets/images/common/btn_topmenu_close_mo.png" alt=""></button>
            </div>
            <div class="btn_box pc_ver">
                <div class="check_custom"><input type="checkbox" id="topBannerCheck" name="topNotTodayPop"><label for="topBannerCheck"><i></i></label></div>
                <span class="notoday"><label for="topBannerCheck">오늘 다시 보지 않기</label></span>
                <span class="close_btn"><img src="/assets/images/common/btn_topmenu_close.png" alt="" onclick="closeTopPop()"></span>
            </div>
        </div>
<?
	}
?>