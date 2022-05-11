var nowZoom = 100;
var maxZoom = 120;
var minZoom = 90;

//파일의 확장자를 가져옮
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
	
	//허용된 확장자인지 체크
	function chkExtention(filePath) {
		return true;
	}
	
	
	// 글자수 제한
	function cal_pre(length, Obj){
		var vLength = parseInt(length);
	
		if(getLength(Obj.value) > vLength){
			alert("최대 입력범위를 초과하였습니다.");
			Obj.value = input_cut_text(Obj, length);
		}
	}
	
	//지정된 글자수만큼만 잘라서 출력
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
	
	//글자수 가져옴
	function getLength(str){
		return(str.length+(escape(str)+"%u").match(/%u/g).length-1);
	}
	
	// 주민번호 유효성체크
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
	
	//다음 입력창으로 포커스 자동이동
	function movefocus(fid,len,daum){
	    if(fid.value.length==len){
	        daum.focus();
	    }
	}
	
	//숫자체크
	function ValidateNumber() { 
		var e1 = event.srcElement;
		var num="0123456789";
		event.returnValue = true;
		
		for (var i=0;i<e1.value.length;i++)
			if (-1 == num.indexOf(e1.value.charAt(i))) { event.returnValue = false;}
			if (!event.returnValue) {
				alert('숫자만 입력 가능하십니다.');
				e1.value = "";
			}
			else {event.returnValue=true;}
	}
	//숫자체크( - 마이너스 포함)
	function ValidateNumber2() { 
		var e1 = event.srcElement;
		var num="-0123456789";
		event.returnValue = true;
		
		for (var i=0;i<e1.value.length;i++)
			if (-1 == num.indexOf(e1.value.charAt(i))) { event.returnValue = false;}
		if (!event.returnValue) {
			alert('숫자만 입력 가능하십니다.');
			e1.value = "";
		}
		else {event.returnValue=true;}
	}
	
	//텍스트박스로 년도 입력하는 경우 유효성 체크
	//ex) ValidateDate(오브젝트명, ('year' or 'month' or 'day'))
	function ValidateDate(obj, dateFlag) { 
		if(dateFlag == "year") {
			if(obj.value.length == 4) {
				if(obj.value.substring(0,1) == "1" || obj.value.substring(0,1) == "2") {
					if(obj.value.substring(0,2) != "19" && obj.value.substring(0,2) != "20") {
						alert("년도 입력이 잘못되었습니다. 다시 입력해주십시오");
						obj.value = "";
						obj.focus();
						return;
					}
				}else{
					alert("년도 입력이 잘못되었습니다. 다시 입력해주십시오");
					obj.value = "";
					obj.focus();
					return;
				}
			}else{
				alert("년도는 4자리로 입력하여 주십시오.");
				obj.value = "";
				obj.focus();
				return;
			}
		}else if(dateFlag == "month") {
			if(obj.value.length == 2) {
				if(obj.value.substring(0,1) != "0" && obj.value.substring(0,1) != "1") {
					alert("월 입력이 잘못되었습니다. 다시 입력해주십시오");
					obj.value = "";
					obj.focus();
					return;
				}else if(obj.value.substring(0,2) > 12 || obj.value.substring(0,2) == "00"){
					alert("월 입력이 잘못되었습니다. 다시 입력해주십시오");
					obj.value = "";
					obj.focus();
					return;
				}
			}else{
				alert("월은 2자리로 입력하여 주십시오.");
				obj.value = "";
				obj.focus();
				return;
			}
		}else if(dateFlag == "day") {
			if(obj.value.length == 2) {
				if(obj.value.substring(0,1) > 3) {
					alert("일자 입력이 잘못되었습니다. 다시 입력해주십시오");
					obj.value = "";
					obj.focus();
					return;
				}else if(obj.value.substring(0,2) > 31 || obj.value.substring(0,2) == "00"){
					alert("일자 입력이 잘못되었습니다. 다시 입력해주십시오");
					obj.value = "";
					obj.focus();
					return;
				}
			}else{
				alert("일은 2자리로 입력하여 주십시오.");
				obj.value = "";
				obj.focus();
				return;
			}
		}
	}
	
	//텍스트박스로 년도 입력하는 경우 유효성 체크
	//ex) ValidateDate(해당 value, ('year' or 'month' or 'day'))
	function ValidateDate2(val, dateFlag) { 
		if(dateFlag == "year") {
			if(val.length == 4) {
				if(val.substring(0,1) == "1" || val.substring(0,1) == "2") {
					if(val.substring(0,2) != "19" && val.substring(0,2) != "20") {
						alert("년도 입력이 잘못되었습니다. 다시 입력해주십시오");
						val = "";
						return -1;
					}
				}else{
					alert("년도 입력이 잘못되었습니다. 다시 입력해주십시오");
					val = "";
					return -1;
				}
			}else{
				alert("년도는 4자리로 입력하여 주십시오.");
				val = "";
				return -1;
			}
		}else if(dateFlag == "month") {
			if(val.length == 2) {
				if(val.substring(0,1) != "0" && val.substring(0,1) != "1") {
					alert("월 입력이 잘못되었습니다. 다시 입력해주십시오");
					val = "";
					return -1;
				}else if(val.substring(0,2) > 12 || val.substring(0,2) == "00"){
					alert("월 입력이 잘못되었습니다. 다시 입력해주십시오");
					val = "";
					return -1;
				}
			}else{
				alert("월은 2자리로 입력하여 주십시오.");
				val = "";
				return -1;
			}
		}else if(dateFlag == "day") {
			if(val.length == 2) {
				if(val.substring(0,1) > 3) {
					alert("일자 입력이 잘못되었습니다. 다시 입력해주십시오");
					val = "";
					return -1;
				}else if(val.substring(0,2) > 31 || val.substring(0,2) == "00"){
					alert("일자 입력이 잘못되었습니다. 다시 입력해주십시오");
					val = "";
					return -1;
				}
			}else{
				alert("일은 2자리로 입력하여 주십시오.");
				val = "";
				return -1;
			}
		}
	}
		
	//컨설팅등록시 이전에 등록된 개인정보들을 가져옴
	function idsearch(sType){
		var id1=document.regForm.perid1.value;
		var id2=document.regForm.perid2.value;
		var id=id1+id2;
		var urls="IdSearch.jsp?perid="+id+"&sType="+sType ;
		ifrmS.location.href =urls;
	}
	
	//컨설팅등록시 이전에 등록된 개인정보들을 가져옴
	function idsearch2(sType){
		var id1=document.regForm.perid1.value;
		var id2=document.regForm.perid2.value;
		var id=id1+id2;
		var urls="IdSearch2.jsp?perid="+id+"&sType="+sType ;
		ifrmS.location.href =urls;
	}
	
	//컨설팅등록시 이전에 등록된 개인정보들을 가져옴
	function bizno_Search(){
		var bizno1 = document.Reg.bizno1.value;
		var bizno2 = document.Reg.bizno2.value;
		var bizno3 = document.Reg.bizno3.value;
		var bizno = bizno1 + "-" + bizno2 + "-" + bizno3;
		var urls="bizno_Search.jsp?bizno="+bizno;
		ifrmS.location.href =urls;
	}
	
	//입력 체크
	function isBlank(obj) {
		if (obj.value.replace(/ /g, '') == '') 
			return true;
		else 
			return false;
	}
	
	//경고창
	function alertMsg(str, obj) {
		alert(str+'을(를) 입력해 주세요.');
		obj.focus();
		return;
	}
	
	/////////////////////////////////////////////////////////////////////////////////////
	// 숫자만 입력 가능하도록
	// 사용방법 : onlyNum();
	// 사용 예 : <input type="text" name="txt_number" onKeyPress="onlyNum();">
	
	function onlyNum() {	
		if(event.keyCode<26||event.keyCode<45||event.keyCode>57) event.returnValue=false;
	}
	/////////////////////////////////////////////////////////////////////////////////////
	
	
	/////////////////////////////////////////////////////////////////////////////////////
	// 정해진 길이 만큼 입력 후 다음 입력 개체로 이동
	// 사용방법 : nextObj(현재개체, 입력길이, 다음개체);
	// 사용 예 : <input type="text" name="jumin1" onKeyUp="nextObj(this, 6, form.jumin2);">
	
	function nextObj(thisObj, maxLen, nextObj) {		
		if (thisObj.value.length >= maxLen) {
			nextObj.focus();
			return;
		}
	}
	/////////////////////////////////////////////////////////////////////////////////////
	
	
	/////////////////////////////////////////////////////////////////////////////////////
	// 글자수 제한
	// 사용방버 : cal_pre(최대길이, 현재 개체)
	// 사용 예 : <textarea onKeyPress="cal_pre(5000, this);"><textarea>
	function cal_pre(length, thisObj){
		var vLength = parseInt(length);
	
		if(getLength(thisObj.value) > vLength){
			alert("최대 입력범위를 초과하였습니다.");
			thisObj.value = input_cut_text(thisObj, length);
		}
	}
	//지정된 글자수만큼만 잘라서 출력
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
	//글자수 가져옴
	function getLength(str){
		return(str.length+(escape(str)+"%u").match(/%u/g).length-1);
	}
	/////////////////////////////////////////////////////////////////////////////////////
		
	
	/////////////////////////////////////////////////////////////////////////////////////	
	// 주민번호 유효성체크
	// 사용방법 : isValidJumin(주민번호앞자리 개체, 주민번호뒷자리 개체);
	// 사용 예 : if (isValidJumin(form.jumin1, form.jumin2)) {}
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
	// 실명인증 (실명인증 버튼 클릭시 호출되며 iframe이 존재해야 함)
	// 사용방법 : isRealName(iframe개체, form개체, 주민번호1개체, 주민번호2개체, 성명개체);
	// 사용예 : <input type="button" onclick="isRealName(ifrmJumin, regForm, regForm.jumin1, regForm.jumin2, regForm.name)" value="실명인증">
	var isCheckedJumin = false;
		
	function isRealName(objIFrame, objForm, objJumin1, objJumin2, objName){
		var win = objIFrame;
		var f = objForm;
	
		if (objJumin1.value.replace(/ /g, '') == '' || objJumin2.value.replace(/ /g, '') == '') {
			alert('주민등록번호를 입력해주세요');
			objJumin1.focus();
			return;		
		} else {
			if (isValidJumin(objJumin1.value, objJumin2.value)) {
				if (objName.value.replace(/ /g, '') == '') {
					alert("이름을 입력해주세요");
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
				alert("유효하지 않은 주민등록번호입니다");
				objJumin1.value = "";
				objJumin2.value = "";
				return;	
			}
		}
	}
	/////////////////////////////////////////////////////////////////////////////////////
	
	
	/////////////////////////////////////////////////////////////////////////////////////
	// 실명인증체크 초기화
	// 사용방법 : initJumin(); 호출
	// 사용예 : <input type="text" name="jumin1" onChange="initJumin();">
	
	function initJumin() {
		isCheckedJumin = false;
	}
	/////////////////////////////////////////////////////////////////////////////////////
	
	/////////////////////////////////////////////////////////////////////////////////////
	// 버튼 비활성화(한번 클릭후)
	// 사용방법 : submit 하기전 goDisabled 실행
	// 사용예 : f.action = "press_action.asp";
	//				 goDisabled(document.frmbtn.btn_del)
	//				 f.submit();
	function goDisabled() {
		var obj = goDisabled.arguments;
		for (var i=0; i<obj.length; i++) {
			obj[i].disabled = true;
		}
	}
	
	// 숫자 체크
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
	
    // 숫자 체크
    function checkNum(obj, value){
		if(!isNumber(value)){
    		alert("숫자만 입력하세요.");
    		$(obj).val("");
    		$(obj).focus();
    		return false;
    	}
	}
	
	// 금액 체크
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
	
	// 금액 초기화
    function initAmt(value) {
        if(value == null || value.trim() == '' || value.trim() == '-') {
            return 0;
        } else {
            return Number(value.replace(/(\$|\,)/g, ""));
        }
    }
    
	// 금액 체크
	function checkAmt(obj, value) {
    	var tmpLen =  String($(obj).val()).length;
    	
    	if(!isAmt(value)){
    		alert("금액을 입력하세요.");
    		$(obj).val("");
    		$(obj).focus();
    		return false;
    	}
    	
        if(tmpLen > 1 && $(obj).val().substring(0, 1) == '0'){
        	alert("첫째자리는 0 이외의 숫자만 입력하세요.");
        	$(obj).val("");
    		$(obj).focus();
        	 return false;
		}
        
        $(obj).val(String(value.replace(/(\$|\,)/g, "")).addComma());
    }
	
	// 금액 체크
	function checkAmt(obj, value, noComma) {
    	var tmpLen =  String($(obj).val()).length;
    	
    	if(!isAmt(value)){
    		alert("금액을 입력하세요.");
    		$(obj).val("");
    		$(obj).focus();
    		return false;
    	}
    	
        if(tmpLen > 1 && $(obj).val().substring(0, 1) == '0'){
        	alert("첫째자리는 0 이외의 숫자만 입력하세요.");
        	$(obj).val("");
    		$(obj).focus();
        	 return false;
		}
        
        $(obj).val(String(value.replace(/(\$|\,)/g, "")));
    }
	
	function zoomInOut(how) {
		var browser = navigator.userAgent;
		//alert(browser);
		if(browser.indexOf('MSIE') < 0 && browser.indexOf('Safari') < 0 && browser.indexOf('Chrome') < 0 && browser.indexOf('Firefox') < 0){
			alert('Zoom 기능이 지원되지 않는 브라우저입니다. \nCtrl키를 누른 상태에서 +/-키를 누르세요.');
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
	
	// 첨부파일 체크
	function checkAttachFile(obj, id, type) {
		var fileObj = $('#'+id).clone(true);
	    var fileName = obj.value;
		fileName = fileName.substring(fileName.lastIndexOf('\\') + 1, fileName.length);
		
	    // file ext check
	    if(fileName == '') { return false; }
	    if(!attachFileExtChk(fileName, type)){
	        alert("첨부파일이 올바른 형식이 아닙니다.");
	        $('#'+id).replaceWith(fileObj);
	        fileObj = $('#'+id).clone(true);
	        return false;
	    }
	}
	
	// 첨부 파일 확장자 유효성 검사
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
	
	