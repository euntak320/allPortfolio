var nowZoom = 100;
var maxZoom = 120;
var minZoom = 90;

//\ud30c\uc77c\uc758 \ud655\uc7a5\uc790\ub97c \uac00\uc838\uc62e
	function getFileExtension(filePath){
		var lastIndex = -1;
		lastIndex = filePath.lastIndexOf('.');
		var extension = "";
		
		if ( lastIndex != -1 ){
			extension = filePath.substring( lastIndex+1, filePath.len );
		} else {
			extension = "";
		}
		return extension;
	}
	
	//\ud5c8\uc6a9\ub41c \ud655\uc7a5\uc790\uc778\uc9c0 \uccb4\ud06c
	function chkExtention(filePath) {
		return true;
	}
	
	
	// \uae00\uc790\uc218 \uc81c\ud55c
	function cal_pre(length, Obj){
		var vLength = parseInt(length);
	
		if(getLength(Obj.value) > vLength){
			alert("\ucd5c\ub300 \uc785\ub825\ubc94\uc704\ub97c \ucd08\uacfc\ud558\uc600\uc2b5\ub2c8\ub2e4.");
			Obj.value = input_cut_text(Obj, length);
		}
	}
	
	//\uc9c0\uc815\ub41c \uae00\uc790\uc218\ub9cc\ud07c\ub9cc \uc798\ub77c\uc11c \ucd9c\ub825
	function input_cut_text(message, maximum){
		var inc = 0;
		var nbytes = 0;
		var msg = "";
		var msgstr = new String(message.value);
		var msglen = msgstr.length;
	
		for(i=0; i<msglen; i++){
			var ch = msgstr.charAt(i);
		
			if(escape(ch).length > 4){
				inc = 2;
			}else if(ch == '\n'){
				if(msgstr.charAt(i-1) != '\r'){
					inc = 1;
				}
			}else{
				inc = 1;
			}
			if((nbytes + inc) > maximum){
				break;
			}
			nbytes += inc;
			msg += ch;
		}
		
		return msg;
	}
	
	//\uae00\uc790\uc218 \uac00\uc838\uc634
	function getLength(str){
		return(str.length+(escape(str)+"%u").match(/%u/g).length-1);
	}
	
	// \uc8fc\ubbfc\ubc88\ud638 \uc720\ud6a8\uc131\uccb4\ud06c
	function IsResId(id1, id2){
		a = Array(6);
		b = Array(7);
	
		for (var i=0; i<6; i++)
			a[i] = parseInt(id1.charAt(i));
	
		for (var j=0; j<7; j++)
			b[j] = parseInt(id2.charAt(j));
	
		ssntot = (a[0]*2)+(a[1]*3)+(a[2]*4)+(a[3]*5)+(a[4]*6)+(a[5]*7) + (b[0]*8)+(b[1]*9)+(b[2]*2)+(b[3]*3)+(b[4]*4)+(b[5]*5);
		ssnave = 11 - (ssntot%11);
	
		if (ssnave == 11) ssnave = 1;
		else if(ssnave == 10) ssnave = 0;
	
		if (b[6] == ssnave) return true;
		else return false;
	}
	
	//\ub2e4\uc74c \uc785\ub825\ucc3d\uc73c\ub85c \ud3ec\ucee4\uc2a4 \uc790\ub3d9\uc774\ub3d9
	function movefocus(fid,len,daum){
	    if(fid.value.length==len){
	        daum.focus();
	    }
	}
	
	//\uc22b\uc790\uccb4\ud06c
	function ValidateNumber() { 
		var e1 = event.srcElement;
		var num="0123456789";
		event.returnValue = true;
		
		for (var i=0;i<e1.value.length;i++)
			if (-1 == num.indexOf(e1.value.charAt(i))) { event.returnValue = false;}
			if (!event.returnValue) {
				alert('\uc22b\uc790\ub9cc \uc785\ub825 \uac00\ub2a5\ud558\uc2ed\ub2c8\ub2e4.');
				e1.value = "";
			}
			else {event.returnValue=true;}
	}
	//\uc22b\uc790\uccb4\ud06c( - \ub9c8\uc774\ub108\uc2a4 \ud3ec\ud568)
	function ValidateNumber2() { 
		var e1 = event.srcElement;
		var num="-0123456789";
		event.returnValue = true;
		
		for (var i=0;i<e1.value.length;i++)
			if (-1 == num.indexOf(e1.value.charAt(i))) { event.returnValue = false;}
		if (!event.returnValue) {
			alert('\uc22b\uc790\ub9cc \uc785\ub825 \uac00\ub2a5\ud558\uc2ed\ub2c8\ub2e4.');
			e1.value = "";
		}
		else {event.returnValue=true;}
	}
	
	//\ud14d\uc2a4\ud2b8\ubc15\uc2a4\ub85c \ub144\ub3c4 \uc785\ub825\ud558\ub294 \uacbd\uc6b0 \uc720\ud6a8\uc131 \uccb4\ud06c
	//ex) ValidateDate(\uc624\ube0c\uc81d\ud2b8\uba85, ('year' or 'month' or 'day'))
	function ValidateDate(obj, dateFlag) { 
		if(dateFlag == "year") {
			if(obj.value.length == 4) {
				if(obj.value.substring(0,1) == "1" || obj.value.substring(0,1) == "2") {
					if(obj.value.substring(0,2) != "19" && obj.value.substring(0,2) != "20") {
						alert("\ub144\ub3c4 \uc785\ub825\uc774 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc2ed\uc2dc\uc624");
						obj.value = "";
						obj.focus();
						return;
					}
				}else{
					alert("\ub144\ub3c4 \uc785\ub825\uc774 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc2ed\uc2dc\uc624");
					obj.value = "";
					obj.focus();
					return;
				}
			}else{
				alert("\ub144\ub3c4\ub294 4\uc790\ub9ac\ub85c \uc785\ub825\ud558\uc5ec \uc8fc\uc2ed\uc2dc\uc624.");
				obj.value = "";
				obj.focus();
				return;
			}
		}else if(dateFlag == "month") {
			if(obj.value.length == 2) {
				if(obj.value.substring(0,1) != "0" && obj.value.substring(0,1) != "1") {
					alert("\uc6d4 \uc785\ub825\uc774 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc2ed\uc2dc\uc624");
					obj.value = "";
					obj.focus();
					return;
				}else if(obj.value.substring(0,2) > 12 || obj.value.substring(0,2) == "00"){
					alert("\uc6d4 \uc785\ub825\uc774 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc2ed\uc2dc\uc624");
					obj.value = "";
					obj.focus();
					return;
				}
			}else{
				alert("\uc6d4\uc740 2\uc790\ub9ac\ub85c \uc785\ub825\ud558\uc5ec \uc8fc\uc2ed\uc2dc\uc624.");
				obj.value = "";
				obj.focus();
				return;
			}
		}else if(dateFlag == "day") {
			if(obj.value.length == 2) {
				if(obj.value.substring(0,1) > 3) {
					alert("\uc77c\uc790 \uc785\ub825\uc774 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc2ed\uc2dc\uc624");
					obj.value = "";
					obj.focus();
					return;
				}else if(obj.value.substring(0,2) > 31 || obj.value.substring(0,2) == "00"){
					alert("\uc77c\uc790 \uc785\ub825\uc774 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc2ed\uc2dc\uc624");
					obj.value = "";
					obj.focus();
					return;
				}
			}else{
				alert("\uc77c\uc740 2\uc790\ub9ac\ub85c \uc785\ub825\ud558\uc5ec \uc8fc\uc2ed\uc2dc\uc624.");
				obj.value = "";
				obj.focus();
				return;
			}
		}
	}
	
	//\ud14d\uc2a4\ud2b8\ubc15\uc2a4\ub85c \ub144\ub3c4 \uc785\ub825\ud558\ub294 \uacbd\uc6b0 \uc720\ud6a8\uc131 \uccb4\ud06c
	//ex) ValidateDate(\ud574\ub2f9 value, ('year' or 'month' or 'day'))
	function ValidateDate2(val, dateFlag) { 
		if(dateFlag == "year") {
			if(val.length == 4) {
				if(val.substring(0,1) == "1" || val.substring(0,1) == "2") {
					if(val.substring(0,2) != "19" && val.substring(0,2) != "20") {
						alert("\ub144\ub3c4 \uc785\ub825\uc774 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc2ed\uc2dc\uc624");
						val = "";
						return -1;
					}
				}else{
					alert("\ub144\ub3c4 \uc785\ub825\uc774 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc2ed\uc2dc\uc624");
					val = "";
					return -1;
				}
			}else{
				alert("\ub144\ub3c4\ub294 4\uc790\ub9ac\ub85c \uc785\ub825\ud558\uc5ec \uc8fc\uc2ed\uc2dc\uc624.");
				val = "";
				return -1;
			}
		}else if(dateFlag == "month") {
			if(val.length == 2) {
				if(val.substring(0,1) != "0" && val.substring(0,1) != "1") {
					alert("\uc6d4 \uc785\ub825\uc774 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc2ed\uc2dc\uc624");
					val = "";
					return -1;
				}else if(val.substring(0,2) > 12 || val.substring(0,2) == "00"){
					alert("\uc6d4 \uc785\ub825\uc774 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc2ed\uc2dc\uc624");
					val = "";
					return -1;
				}
			}else{
				alert("\uc6d4\uc740 2\uc790\ub9ac\ub85c \uc785\ub825\ud558\uc5ec \uc8fc\uc2ed\uc2dc\uc624.");
				val = "";
				return -1;
			}
		}else if(dateFlag == "day") {
			if(val.length == 2) {
				if(val.substring(0,1) > 3) {
					alert("\uc77c\uc790 \uc785\ub825\uc774 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc2ed\uc2dc\uc624");
					val = "";
					return -1;
				}else if(val.substring(0,2) > 31 || val.substring(0,2) == "00"){
					alert("\uc77c\uc790 \uc785\ub825\uc774 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc2ed\uc2dc\uc624");
					val = "";
					return -1;
				}
			}else{
				alert("\uc77c\uc740 2\uc790\ub9ac\ub85c \uc785\ub825\ud558\uc5ec \uc8fc\uc2ed\uc2dc\uc624.");
				val = "";
				return -1;
			}
		}
	}
		
	//\ucee8\uc124\ud305\ub4f1\ub85d\uc2dc \uc774\uc804\uc5d0 \ub4f1\ub85d\ub41c \uac1c\uc778\uc815\ubcf4\ub4e4\uc744 \uac00\uc838\uc634
	function idsearch(sType){
		var id1=document.regForm.perid1.value;
		var id2=document.regForm.perid2.value;
		var id=id1+id2;
		var urls="IdSearch.jsp?perid="+id+"&sType="+sType ;
		ifrmS.location.href =urls;
	}
	
	//\ucee8\uc124\ud305\ub4f1\ub85d\uc2dc \uc774\uc804\uc5d0 \ub4f1\ub85d\ub41c \uac1c\uc778\uc815\ubcf4\ub4e4\uc744 \uac00\uc838\uc634
	function idsearch2(sType){
		var id1=document.regForm.perid1.value;
		var id2=document.regForm.perid2.value;
		var id=id1+id2;
		var urls="IdSearch2.jsp?perid="+id+"&sType="+sType ;
		ifrmS.location.href =urls;
	}
	
	//\ucee8\uc124\ud305\ub4f1\ub85d\uc2dc \uc774\uc804\uc5d0 \ub4f1\ub85d\ub41c \uac1c\uc778\uc815\ubcf4\ub4e4\uc744 \uac00\uc838\uc634
	function bizno_Search(){
		var bizno1 = document.Reg.bizno1.value;
		var bizno2 = document.Reg.bizno2.value;
		var bizno3 = document.Reg.bizno3.value;
		var bizno = bizno1 + "-" + bizno2 + "-" + bizno3;
		var urls="bizno_Search.jsp?bizno="+bizno;
		ifrmS.location.href =urls;
	}
	
	//\uc785\ub825 \uccb4\ud06c
	function isBlank(obj) {
		if (obj.value.replace(/ /g, '') == '') 
			return true;
		else 
			return false;
	}
	
	//\uacbd\uace0\ucc3d
	function alertMsg(str, obj) {
		alert(str+'\uc744(\ub97c) \uc785\ub825\ud574 \uc8fc\uc138\uc694.');
		obj.focus();
		return;
	}
	
	/////////////////////////////////////////////////////////////////////////////////////
	// \uc22b\uc790\ub9cc \uc785\ub825 \uac00\ub2a5\ud558\ub3c4\ub85d
	// \uc0ac\uc6a9\ubc29\ubc95 : onlyNum();
	// \uc0ac\uc6a9 \uc608 : <input type="text" name="txt_number" onKeyPress="onlyNum();">
	
	function onlyNum() {	
		if(event.keyCode<26||event.keyCode<45||event.keyCode>57) event.returnValue=false;
	}
	/////////////////////////////////////////////////////////////////////////////////////
	
	
	/////////////////////////////////////////////////////////////////////////////////////
	// \uc815\ud574\uc9c4 \uae38\uc774 \ub9cc\ud07c \uc785\ub825 \ud6c4 \ub2e4\uc74c \uc785\ub825 \uac1c\uccb4\ub85c \uc774\ub3d9
	// \uc0ac\uc6a9\ubc29\ubc95 : nextObj(\ud604\uc7ac\uac1c\uccb4, \uc785\ub825\uae38\uc774, \ub2e4\uc74c\uac1c\uccb4);
	// \uc0ac\uc6a9 \uc608 : <input type="text" name="jumin1" onKeyUp="nextObj(this, 6, form.jumin2);">
	
	function nextObj(thisObj, maxLen, nextObj) {		
		if (thisObj.value.length >= maxLen) {
			nextObj.focus();
			return;
		}
	}
	/////////////////////////////////////////////////////////////////////////////////////
	
	
	/////////////////////////////////////////////////////////////////////////////////////
	// \uae00\uc790\uc218 \uc81c\ud55c
	// \uc0ac\uc6a9\ubc29\ubc84 : cal_pre(\ucd5c\ub300\uae38\uc774, \ud604\uc7ac \uac1c\uccb4)
	// \uc0ac\uc6a9 \uc608 : <textarea onKeyPress="cal_pre(5000, this);"><textarea>
	function cal_pre(length, thisObj){
		var vLength = parseInt(length);
	
		if(getLength(thisObj.value) > vLength){
			alert("\ucd5c\ub300 \uc785\ub825\ubc94\uc704\ub97c \ucd08\uacfc\ud558\uc600\uc2b5\ub2c8\ub2e4.");
			thisObj.value = input_cut_text(thisObj, length);
		}
	}
	//\uc9c0\uc815\ub41c \uae00\uc790\uc218\ub9cc\ud07c\ub9cc \uc798\ub77c\uc11c \ucd9c\ub825
	function input_cut_text(message, maximum){
		var inc = 0;
		var nbytes = 0;
		var msg = "";
		var msgstr = new String(message.value);
		var msglen = msgstr.length;
	
		for(i=0; i<msglen; i++){
			var ch = msgstr.charAt(i);
		
			if(escape(ch).length > 4){
				inc = 2;
			}else if(ch == '\n'){
				if(msgstr.charAt(i-1) != '\r'){
					inc = 1;
				}
			}else{
				inc = 1;
			}
			if((nbytes + inc) > maximum){
				break;
			}
			nbytes += inc;
			msg += ch;
		}
		
		return msg;
	}
	//\uae00\uc790\uc218 \uac00\uc838\uc634
	function getLength(str){
		return(str.length+(escape(str)+"%u").match(/%u/g).length-1);
	}
	/////////////////////////////////////////////////////////////////////////////////////
		
	
	/////////////////////////////////////////////////////////////////////////////////////	
	// \uc8fc\ubbfc\ubc88\ud638 \uc720\ud6a8\uc131\uccb4\ud06c
	// \uc0ac\uc6a9\ubc29\ubc95 : isValidJumin(\uc8fc\ubbfc\ubc88\ud638\uc55e\uc790\ub9ac \uac1c\uccb4, \uc8fc\ubbfc\ubc88\ud638\ub4b7\uc790\ub9ac \uac1c\uccb4);
	// \uc0ac\uc6a9 \uc608 : if (isValidJumin(form.jumin1, form.jumin2)) {}
	function isValidJumin(id1, id2){
		a = Array(6);
		b = Array(7);
	
		for (var i=0; i<6; i++)
			a[i] = parseInt(id1.charAt(i));
	
		for (var j=0; j<7; j++)
			b[j] = parseInt(id2.charAt(j));
	
		ssntot = (a[0]*2)+(a[1]*3)+(a[2]*4)+(a[3]*5)+(a[4]*6)+(a[5]*7) + (b[0]*8)+(b[1]*9)+(b[2]*2)+(b[3]*3)+(b[4]*4)+(b[5]*5);
		ssnave = 11 - (ssntot%11);
	
		if (ssnave == 11) ssnave = 1;
		else if(ssnave == 10) ssnave = 0;
	
		if (b[6] == ssnave) return true;
		else return false;
	}
	/////////////////////////////////////////////////////////////////////////////////////
	
	 
	/////////////////////////////////////////////////////////////////////////////////////
	// \uc2e4\uba85\uc778\uc99d (\uc2e4\uba85\uc778\uc99d \ubc84\ud2bc \ud074\ub9ad\uc2dc \ud638\ucd9c\ub418\uba70 iframe\uc774 \uc874\uc7ac\ud574\uc57c \ud568)
	// \uc0ac\uc6a9\ubc29\ubc95 : isRealName(iframe\uac1c\uccb4, form\uac1c\uccb4, \uc8fc\ubbfc\ubc88\ud6381\uac1c\uccb4, \uc8fc\ubbfc\ubc88\ud6382\uac1c\uccb4, \uc131\uba85\uac1c\uccb4);
	// \uc0ac\uc6a9\uc608 : <input type="button" onclick="isRealName(ifrmJumin, regForm, regForm.jumin1, regForm.jumin2, regForm.name)" value="\uc2e4\uba85\uc778\uc99d">
	var isCheckedJumin = false;
		
	function isRealName(objIFrame, objForm, objJumin1, objJumin2, objName){
		var win = objIFrame;
		var f = objForm;
	
		if (objJumin1.value.replace(/ /g, '') == '' || objJumin2.value.replace(/ /g, '') == '') {
			alert('\uc8fc\ubbfc\ub4f1\ub85d\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694');
			objJumin1.focus();
			return;		
		} else {
			if (isValidJumin(objJumin1.value, objJumin2.value)) {
				if (objName.value.replace(/ /g, '') == '') {
					alert("\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694");
					objName.focus();
					return;
				} else {	
					win.frmJumin.name.value = objName.value;
					win.frmJumin.jumin1.value = objJumin1.value;
					win.frmJumin.jumin2.value = objJumin2.value;
			
					objJumin1.readonly = true;
					
					win.frmJumin.action = "/home/include/chk_jumin.jsp";
					win.frmJumin.submit();
				}
			} else {
				alert("\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uc8fc\ubbfc\ub4f1\ub85d\ubc88\ud638\uc785\ub2c8\ub2e4");
				objJumin1.value = "";
				objJumin2.value = "";
				return;	
			}
		}
	}
	/////////////////////////////////////////////////////////////////////////////////////
	
	
	/////////////////////////////////////////////////////////////////////////////////////
	// \uc2e4\uba85\uc778\uc99d\uccb4\ud06c \ucd08\uae30\ud654
	// \uc0ac\uc6a9\ubc29\ubc95 : initJumin(); \ud638\ucd9c
	// \uc0ac\uc6a9\uc608 : <input type="text" name="jumin1" onChange="initJumin();">
	
	function initJumin() {
		isCheckedJumin = false;
	}
	/////////////////////////////////////////////////////////////////////////////////////
	
	/////////////////////////////////////////////////////////////////////////////////////
	// \ubc84\ud2bc \ube44\ud65c\uc131\ud654(\ud55c\ubc88 \ud074\ub9ad\ud6c4)
	// \uc0ac\uc6a9\ubc29\ubc95 : submit \ud558\uae30\uc804 goDisabled \uc2e4\ud589
	// \uc0ac\uc6a9\uc608 : f.action = "press_action.asp";
	//				 goDisabled(document.frmbtn.btn_del)
	//				 f.submit();
	function goDisabled() {
		var obj = goDisabled.arguments;
		for (var i=0; i<obj.length; i++) {
			obj[i].disabled = true;
		}
	}
	
	// \uc22b\uc790 \uccb4\ud06c
    function isNumber(str){
		var chars = "0123456789";
	   	var vals;
	    
	    if(str.value == null){
	    	vals = str;
	    }else{
	    	vals = str.value;
	    }
	    
	    for(var i=0; i<vals.length; i++){
	    	if(chars.indexOf(vals.charAt(i)) == -1){
	    	
	    		return false;
	    	}
		}
		
	    return true;
	}
	
    // \uc22b\uc790 \uccb4\ud06c
    function checkNum(obj, value){
		if(!isNumber(value)){
    		alert("\uc22b\uc790\ub9cc \uc785\ub825\ud558\uc138\uc694.");
    		$(obj).val("");
    		$(obj).focus();
    		return false;
    	}
	}
	
	// \uae08\uc561 \uccb4\ud06c
    function isAmt(str){
		var chars = "0123456789,-";
	   	var vals;
	    
	    if(str.value == null){
	    	vals = str;
	    }else{
	    	vals = str.value;
	    }
	    
	    for(var i=0; i<vals.length; i++){
	    	if(chars.indexOf(vals.charAt(i)) == -1){
	    	
	    		return false;
	    	}
		}
		
	    return true;
	}
	
	// \uae08\uc561 \ucd08\uae30\ud654
    function initAmt(value) {
        if(value == null || value.trim() == '' || value.trim() == '-') {
            return 0;
        } else {
            return Number(value.replace(/(\$|\,)/g, ""));
        }
    }
    
	// \uae08\uc561 \uccb4\ud06c
	function checkAmt(obj, value) {
    	var tmpLen =  String($(obj).val()).length;
    	
    	if(!isAmt(value)){
    		alert("\uae08\uc561\uc744 \uc785\ub825\ud558\uc138\uc694.");
    		$(obj).val("");
    		$(obj).focus();
    		return false;
    	}
    	
        if(tmpLen > 1 && $(obj).val().substring(0, 1) == '0'){
        	alert("\uccab\uc9f8\uc790\ub9ac\ub294 0 \uc774\uc678\uc758 \uc22b\uc790\ub9cc \uc785\ub825\ud558\uc138\uc694.");
        	$(obj).val("");
    		$(obj).focus();
        	 return false;
		}
		
        $(obj).val(String(value.replace(/(\$|\,)/g, "")).addComma());
    }
    
    // \uae08\uc561 \uccb4\ud06c
	function checkAmtOnlyNumber(obj, value) {
    	var tmpLen =  String($(obj).val()).length;
    	
    	if(!isAmt(value)){
    		alert("\uae08\uc561\uc744 \uc785\ub825\ud558\uc138\uc694.");
    		$(obj).val("");
    		$(obj).focus();
    		return false;
    	}
    	
        if(tmpLen > 1 && $(obj).val().substring(0, 1) == '0'){
        	alert("\uccab\uc9f8\uc790\ub9ac\ub294 0 \uc774\uc678\uc758 \uc22b\uc790\ub9cc \uc785\ub825\ud558\uc138\uc694.");
        	$(obj).val("");
    		$(obj).focus();
        	 return false;
		}
		
		// \uc22b\uc790\ub9cc \uc785\ub825 \ud560 \uc218 \uc788\ub3c4\ub85d \uccb4\ud06c
		if(!chkChar(obj).val(),'1234567890','\uc22b\uc790\ub9cc \ub123\uc73c\uc138\uc694..'){
        	return;
    	}
        
        $(obj).val(String(value.replace(/(\$|\,)/g, "")).addComma());
    }
    
    // \uc21c\uc218\uc775 \uccb4\ud06c
	function checkProfit(obj, value) {
    	var tmpLen =  String($(obj).val()).length;
    	
        if(!isAmt(value)){
    		alert("\uae08\uc561\uc744 \uc785\ub825\ud558\uc138\uc694.");
    		$(obj).val("");
    		$(obj).focus();
    		return false;
    	}
    	
        if(tmpLen > 1 && $(obj).val().substring(0, 1) == '0'){
        	alert("\uccab\uc9f8\uc790\ub9ac\ub294 0 \uc774\uc678\uc758 \uc22b\uc790\ub9cc \uc785\ub825\ud558\uc138\uc694.");
        	$(obj).val("");
    		$(obj).focus();
        	 return false;
		}
        
    	
    	$(obj).val(String(value.replace(/(\$|\,)/g, "")).addComma());
    	
    }
	
	function zoomInOut(how) {
		var browser = navigator.userAgent;
		//alert(browser);
		if(browser.indexOf('MSIE') < 0 && browser.indexOf('Safari') < 0 && browser.indexOf('Chrome') < 0 && browser.indexOf('Firefox') < 0){
			alert('Zoom \uae30\ub2a5\uc774 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294 \ube0c\ub77c\uc6b0\uc800\uc785\ub2c8\ub2e4. \nCtrl\ud0a4\ub97c \ub204\ub978 \uc0c1\ud0dc\uc5d0\uc11c +/-\ud0a4\ub97c \ub204\ub974\uc138\uc694.');
			return false;
		}
		
		if (how == 'in' && nowZoom < maxZoom) {
			nowZoom += 5;
		} else if (how == 'out' && nowZoom > minZoom) {
			nowZoom -= 5;
		} else if (how == 'init') {
			nowZoom = 100;
		}else {
			return false;
		}

		document.body.style.zoom = nowZoom + "%";
		if(browser.indexOf('MSIE 7.0') > 0 ){
			document.body.style.position = "absolute";
		}else if(browser.indexOf('MSIE 8.0') > 0){
			document.body.style.width = "100%";
			document.body.style.position = "absolute";
		}else if(browser.indexOf('Firefox') > 0){
			tmpZoom = nowZoom/100;
			document.getElementById('container').style.MozTransform = "scale("+ tmpZoom +")";
			document.getElementById('container').style.MozTransformOrigin = "0 0";
		}
		return false;
	}
	
	// \ucca8\ubd80\ud30c\uc77c \uccb4\ud06c
	function checkAttachFile(obj, id, type) {
		var fileObj = $('#'+id).clone(true);
	    var fileName = obj.value;
		fileName = fileName.substring(fileName.lastIndexOf('\\') + 1, fileName.length);
		
	    // file ext check
	    if(fileName == '') { return false; }
	    if(!attachFileExtChk(fileName, type)){
	        alert("\ucca8\ubd80\ud30c\uc77c\uc774 \uc62c\ubc14\ub978 \ud615\uc2dd\uc774 \uc544\ub2d9\ub2c8\ub2e4.");
	        $('#'+id).replaceWith(fileObj);
	        fileObj = $('#'+id).clone(true);
	        return false;
	    }
	}
	
	// \ucca8\ubd80 \ud30c\uc77c \ud655\uc7a5\uc790 \uc720\ud6a8\uc131 \uac80\uc0ac
	function attachFileExtChk(fileName, type) {
	    if(fileName.lastIndexOf('.') == -1) { return false; }
	    var ext = fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).toLowerCase();
	    var extArray;
	    
	    if(type == '1'){
	    	extArray = ['jpg', 'jpeg', 'gif', 'bmp', 'png'];
	    }else if(type == '2'){
	    	extArray = ['xls', 'xlsx'];
	    }
	    
	    var extArrayLength = extArray.length;
	    
	    for(var i=0; i<extArrayLength; i++){
	        if(extArray[i] == ext){
	            return true;
	        }
	    }
	    
	    return false;
	}
	
	// \uc785\ub825 \ubb38\uc790\uc5f4 \uccb4\ud06c
	function chkChar(obj, charSet, msg) {
    	for (i=0; i<obj.value.length; i++) {
        	if(charSet.indexOf(obj.value.charAt(i)) == -1) {
           		alert(msg);
           		obj.focus();
           		return false;
        	}
    	}
    	return true;
	}	