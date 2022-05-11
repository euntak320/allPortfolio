function context(){
	var Dns;
	Dns = location.href;
	Dns = Dns.split("//");
	var context = Dns[1] + "";
	context = context.split("/");
	return "/" +context[1];
}

var context;
context = context();

/**
* \uc5d0\ub7ec \uc0c1\uc138\ub0b4\uc6a9
* data : 
*/
function exceptionMsg(data){
	
	if(data == null || data.ex_Message == undefined || data.ex_Message == ''){
		return true;
	}
	
    if(data.ex_Message.indexOf("not found in session") > 0){
    	frameDialogPopupClose();
    	
		alert("\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\ud574 \uc8fc\uc138\uc694.");
		
		$('#form').attr('action', '/cm/CMLogin.do').submit();
				
		return false;
	}else{
		$('#div_ExceptionMessage').remove();
	    $('body').append('<div id="div_ExceptionMessage" style="overflow:hidden;width:0px;height:0px;"><\/div>');
	    $('#div_ExceptionMessage').append('<form name="exForm" id="exForm" method="post"><textarea name="ex_Message"><\/textarea><\/form>');
	    $('#div_ExceptionMessage').find('textarea').val(data.ex_Message);
	
		$('#div_ExceptionMessage').popupWindow({
			windowURL : '',
		 	windowName : 'ExceptionMessagePop',
		 	width : 600,
		    height : 400
		}).click(function() {
		 	$('#exForm').attr('encoding', 'application/x-www-form-urlencoded');
		 	$('#exForm').attr('action', '/cm/CM_Exception.do');		 	
		 	$('#exForm').attr('target', 'ExceptionMessagePop');
		 	$('#exForm').submit();
		});
		
	    $('#div_ExceptionMessage').click();
	}
    
    return false;
}


/**
* \uc5d0\ub7ec \uc0c1\uc138\ub0b4\uc6a9
* data : 
*/
function exceptionAjaxMsg(data){

	var idx = data.indexOf("ex_Message");
	var messageIdx = idx + 13;
	var message = data.substring(messageIdx, data.length-2);
	var data = {"ex_Message":message};
	
	if(idx == -1 || data == null || data.ex_Message == undefined || data.ex_Message == ''){
		return true;
	}
	
	if(data.ex_Message.indexOf("not found in session") > 0){
		frameDialogPopupClose();
		
		alert("\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\ud574 \uc8fc\uc138\uc694.");
		
		$('#form').attr('action', '/cm/CMLogin.do').submit();
	}else{
		$('#div_ExceptionMessage').remove();
	    $('body').append('<div id="div_ExceptionMessage" style="overflow:hidden;width:0px;height:0px;"><\/div>');
	    $('#div_ExceptionMessage').append('<form name="exForm" id="exForm" method="post"><textarea name="ex_Message"><\/textarea><\/form>');
	    $('#div_ExceptionMessage').find('textarea').val(data.ex_Message);
	    
	    $('#div_ExceptionMessage').popupWindow({
			windowURL : '',
		 	windowName : 'ExceptionMessagePop',
		 	width : 600,
		    height : 400
		}).click(function() {
		 	$('#exForm').attr('encoding', 'application/x-www-form-urlencoded');
		 	$('#exForm').attr('action', '/cm/CM_Exception.do');	 	
		 	$('#exForm').attr('target', 'ExceptionMessagePop');
		 	$('#exForm').submit();
		});
		
	    $('#div_ExceptionMessage').click();
	}
	
    return false;
}


/**
* \ud31d\uc5c5\ucc3d\uc73c\ub85c \ub744\uc6e0\uc744\uacbd\uc6b0 \ub85c\uadf8\uc778 \ud398\uc774\uc9c0 \uc804\ud658\ucc98\ub9ac
*/
function goMain(uri){
	if(opener && !opener.closed) {
		window.close();
		opener.goMain(uri);
	} else {
		frameDialogPopupClose();
		alert("\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\ud574 \uc8fc\uc138\uc694.");
		location.href = uri;
	}
}

function bluring(){
	if(event.srcElement.tagName=="a"||event.srcElement.tagName=="img"||event.srcElement.tagName=="input") document.body.focus();
}
document.onfocusin=bluring;


/**
* frameDialog Close
*/
function frameDialogPopupClose(){

	var popupArray = new Array();
	
	popupArray.push('cnltcoCnltntPopup','centerPopup','certPopup','cnltcoStatPopup','cnltgCnltntApplyPopup','cnltgCnltntPrPopup');
	popupArray.push('cnltgCnltntSuggPopup','cnltgCommentPopup','cnltgDetailPopup','cnltgNotiPopup','cnltgStatPopup','cnltgVlutIspePopup');
	popupArray.push('cnltgVlutIspeTakPopup','cnltgVlutIspeTakReasonPopup','cnltntAwardPopup','cnltntConfirmPopup','cnltntDetailPopup');
	popupArray.push('cnltntHisPopup','cnltntLinPopup','cnltntStatPopup','cnltntTransPopup','excelUploadPopup','itemCodePopup');
	popupArray.push('kcpLogin','memberListPopup','procCodeListPopup');
	
	if(parent.document.getElementById("frameDialog")){
		for(var i=0; i<popupArray.length; i++){
			window.parent.$.frameDialog.close(popupArray[i]);
		}
	}
}


function fn_TextAreaInputLimit(textId,byteId,maxSize) {
	
	 //   var tempText = $("textarea[name='reportCn']");
		var tempText = $('#'+textId);	
			
	    var tempChar = "";                                        // TextArea의 문자를 한글자씩 담는다

	    var tempChar2 = "";                                        // 절삭된 문자들을 담기 위한 변수

	    var countChar = 0;                                        // 한글자씩 담긴 문자를 카운트 한다

	    var tempHangul = 0;                                        // 한글을 카운트 한다

	 // var maxSize = 300;                                        // 최대값

	    

	    // 글자수 바이트 체크를 위한 반복

	    for(var i = 0 ; i < tempText.val().length; i++) {

	        tempChar = tempText.val().charAt(i);



	        // 한글일 경우 2 추가, 영문일 경우 1 추가

	        if(escape(tempChar).length > 4) {

	            countChar += 2;

	            tempHangul++;

	        } else {

	            countChar++;

	        }

	    } 

	    // 카운트된 문자수가 MAX 값을 초과하게 되면 절삭 수치까지만 출력을 한다.(한글 입력 체크)

	    // 내용에 한글이 입력되어 있는 경우 한글에 해당하는 카운트 만큼을 전체 카운트에서 뺀 숫자가 maxSize보다 크면 수행

	    if((countChar-tempHangul) > maxSize) {
			
	    	
	    //	$("#"+byteId).css("color", "#646464");    
	    //	$("#"+byteId).html( "2000 / 2000bytes" );
	    	
	    	
	        alert("최대 글자수를 초과하였습니다.");

	        

	        tempChar2 = tempText.val().substr(0, maxSize-1);

	        tempText.val(tempChar2);

	    } else{
	    	
	    //	$("#"+byteId).css("color", "#646464");    
	    //	$("#"+byteId).html( tempText.val().length+" / 2000bytes" );
	    }
	    	

} 


