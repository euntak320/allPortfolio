/**
 * 파일 다운로드 Loading Bar 생성 객체
 * @author sjhong12
 */
var dsn_download = {

  // 저장
  save : function(url, msg) {
	dsn_download.loadingBar(msg);
	$('body').append('<iframe id="file_download_iframe" width="0" height="0" src="' + url + '" style="display: none;"></iframe>');
  },
  
  // 첨부파일 다운로드
  download : function(url, msg) {
	dsn_download.loadingBar(msg);
    $('body').append('<iframe id="file_download_iframe" width="0" height="0" src="' + url + '" style="display: none;"></iframe>');
    document.getElementById('file_download_iframe').onreadystatechange = dsn_download.uniframe;
  },
  
  // 다운로드 iframe 제거
  uniframe : function() {
	if (/complete|interactive/.test(document.getElementById('file_download_iframe').window.document.readyState)) {
		$('#file_download_iframe').remove();
		dsn_download.unloadingBar();
	}
	  
  },
  // Loading Bar 생성
  loadingBar : function(msg) {
    if (typeof msg == 'undefined') msg = '다운로드중입니다...';

    // Loading Bar 이미지
    var loadingBarImg = '../../img/loading3.gif';
    var height = $(document).height();
    var width = $(document).width();
    $('body').append('<div id="loadbar_div" style="position: fixed; top: 0px; left: 0px; z-index: 9000; width: 100%; height: ' + height + 'px; vertical-align: middle; background-color: #eeeeee; margin: 0 auto; text-align: center;"></div>');
    $('body').append('<div id="loadbar_div_child" style="position: fixed; top:0px; left: 50%; border:3px solid #7FB8D5; border-radius:8px; padding: 20px; text-align: center; z-index: 10000; background-color: #ffffff; display: none;">' + msg + '<br/><img src="' + loadingBarImg + '" alt="로딩중..."/></div>');
    var cHeight = (height / 2) - ($('#loadbar_div_child').height() / 2);
    var cWidth =  -1 * ($('#loadbar_div_child').width() / 2);
//    if (cHeight > 300) cHeight = 800;
    $('#loadbar_div_child').css('top', cHeight);
    $('#loadbar_div_child').css('margin-left', cWidth);
    $('#loadbar_div').css('opacity', 0.5);
    $('#loadbar_div_child').show();
  },
  // Loading Bar 제거
  unloadingBar : function() {
    $('#loadbar_div').remove();
    $('#loadbar_div_child').remove();
  }
  
};






















