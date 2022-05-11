// 년도 셀렉터 옵션 셋팅
function getYearsOptions(today){
	var options = '<option value="">년도</option>';
	for(var i=today.getFullYear(); i>=today.getFullYear()-100; i--) {
		options += '<option value="'+i+'">' + i+ '</option>';
	}
	return options;
}
//월 셀렉터 옵션 셋팅
function getMonthOptions(){
	var options = '<option value="">월</option>';
	for(var i=1; i<=12; i++){
		if(i < 10){
			options += '<option value="0'+i+'">' + '0'+i +'</option>';
		}else{
			options += '<option value="'+i+'">' + i +'</option>';
		}
	}
	return options;
}

function getDayOptions(lastDate){
	var options = '<option value="">일</option>';
	for(var i=1; i<=lastDate; i++){
		if(i < 10){
			options += '<option value="0'+i+'">' + '0'+i +'</option>';
		}else{
			options += '<option value="'+i+'">' + i +'</option>';
		}
	}
	return options;
}


//일 셀렉터 옵션 셋팅
function getLastDate(dateVal){
	var day = 0;
	switch((dateVal.getMonth()+1)){
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			day = 31;
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			day = 30;
			break;
		case 2:
			if(((dateVal.getFullYear() % 4 == 0) && (dateVal.getFullYear() % 100 != 0)) || 
					(dateVal.getFullYear() % 400 == 0)){
				day = 29;
			}else{
				day = 28;
			}
			break;
		default:
			break;
	}
	return day;
}
