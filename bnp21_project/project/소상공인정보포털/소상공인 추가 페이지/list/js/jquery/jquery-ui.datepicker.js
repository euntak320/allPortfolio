jQuery(function(a) {
    a.datepicker.regional.ko = {
        closeText : '\ub2eb\uae30',
        prevText : '\uc774\uc804\ub2ec',
        nextText : '\ub2e4\uc74c\ub2ec',
        currentText : '\uc624\ub298',
        monthNames : ['1\uc6d4','2\uc6d4','3\uc6d4','4\uc6d4','5\uc6d4','6\uc6d4','7\uc6d4','8\uc6d4','9\uc6d4','10\uc6d4','11\uc6d4','12\uc6d4'],
        monthNamesShort : ['1\uc6d4','2\uc6d4','3\uc6d4','4\uc6d4','5\uc6d4','6\uc6d4','7\uc6d4','8\uc6d4','9\uc6d4','10\uc6d4','11\uc6d4','12\uc6d4'],
        dayNames : ['\uc77c','\uc6d4','\ud654','\uc218','\ubaa9','\uae08','\ud1a0'],
        dayNamesShort : ['\uc77c','\uc6d4','\ud654','\uc218','\ubaa9','\uae08','\ud1a0'],
        dayNamesMin : ['\uc77c','\uc6d4','\ud654','\uc218','\ubaa9','\uae08','\ud1a0'],
        dateFormat : 'yy-mm-dd',
        firstDay : 0,
        isRTL : false
    };
    
    a.datepicker.setDefaults(a.datepicker.regional.ko);
    
    a.datepicker.init = {
        showOn : 'button',
        buttonImage : '../images/sub/btn_calendar.gif',
        buttonImageOnly : true,
        buttonText : '\ub2ec\ub825',
        changeYear : true,
		changeMonth: true, //월변경가능
        showOtherMonths : true,
        showMonthAfterYear : true,
		yearRange: 'c-90:c+5',	// 현재부터 - 년도 까지 : 현재부터 + 년도 까지
		maxDate: '+6Y'	//오늘부터 6년후날짜까지만
    };
    
    a.datepicker.setDefaults(a.datepicker.init);
    
});