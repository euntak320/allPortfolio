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
	document.onfocusin=bluring;
}



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

function isEmpty(val) {
	return (val == '' || val == null || typeof(val) == undefined || val == 'undefined') ? true : false;
}

