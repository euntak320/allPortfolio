function ShowOpenWin( sName, sUrl, nLeft, nTop, nWidth, nHeight,scroll, nType){
	var CreateWin;
	if( nType == 2 || nType == 3 || nType == 4 || nType == 5 || nType == 6)
	{
		nLeft	= ( window.screen.availWidth - nWidth) / 2;
		nTop	= ( window.screen.availHeight - nHeight) / 2;
		if (nLeft < 0)	nLeft	= 0;
		if (nTop < 0)	nTop	= 0;
	}
	if( nType == 0)
		sFeatures = "left="+ nLeft +", top="+ nTop +", width="+ nWidth +", height="+ nHeight;
	else if( nType ==3)
		sFeatures = "fullscreen=no,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no, left="+ nLeft +", top="+ nTop +", width="+ nWidth +", height="+ nHeight;
	else if( nType ==4)
		sFeatures = "fullscreen=no,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes, left="+ nLeft +", top="+ nTop +", width="+ nWidth +", height="+ nHeight;
	else if( nType ==5)
		sFeatures = "fullscreen=no,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes, left="+ nLeft +", top="+ nTop +", width="+ nWidth +", height="+ nHeight;
	else if( nType ==6)
		sFeatures = "fullscreen=no,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes, left="+ nLeft +", top="+ nTop +", width="+ nWidth +", height="+ nHeight;
	else if( nType ==7)
		sFeatures = "fullscreen=no,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars="+scroll+",resizable=no, left="+ nLeft +", top="+ nTop +", width="+ nWidth +", height="+ nHeight;
	else
		sFeatures = "fullscreen=no,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes, left="+ nLeft +", top="+ nTop +", width="+ nWidth +", height="+ nHeight;


	CreateWin = window.open( sUrl, sName, sFeatures);
}

var rolling_banner = function(ta){

	this.ta = ta;

	this.ta_id = 'roll_'+(this.ta.id||this.ta.name);

	this.gap = 5;					//움직이는 픽셀단위

	this.gap_count=0;			//카운팅용:건들지 마세요

	this.gap_time = '1000';		//움직이는 단위시간

	this.gap_sleep = '1000';	//화면이 멈춰있을 단위시간

	this.over_stop = true;  //마우스를 올렸을 때 멈출 것인가?

	this.timer = null;

	eval(this.ta_id+'=this');

	var temp = eval(this.ta_id);

	this.init_div();

}

rolling_banner.prototype.start = function(){	//롤링 시작

	this.ta.readonly =false;

	this.stop =false;

	if(!this.timer){ this.rolling();	 }

}

rolling_banner.prototype.stop = function(){	//롤링 시작

	this.stop =true;

}

rolling_banner.prototype.init_div = function(){	//<div> 빼고 전부 제거 , 스타일 초기화

	this.ta.style.position="relative";

	this.ta.style.overflow="hidden";

  	this.ta.onmouseover=function(){ eval("this.readOnly=true;"); }

  	this.ta.onmouseout=function(){ eval("this.readOnly=false;"); }



	var child = this.ta.childNodes;

	var ch = this.ta.firstChild;

	var ch2 = null;

	while(ch){

		ch2 = ch.nextSibling;

		if(ch.nodeName.toLowerCase() !='div'){

		this.ta.removeChild(ch);

		}else{

		ch.style.position = "relative";

		ch.style.borderStyle='none';

		ch.style.top='0px';

		}

		ch=ch2;

	}

}

rolling_banner.prototype.strtonum = function(str){

	var num = parseInt(str);

	if(isNaN(num)) num = '0';

	return num

}

rolling_banner.prototype.strtopx = function(str){

	var num = this.strtonum(str);

	return num+'px';

}

rolling_banner.prototype.rolling = function(){

	if(this.gap_count==0){

		this.sleep();

		this.gap_count+=1;

		return;

	}

	if(!this.ta.readOnly && !this.stop){

		this.rolling_top();

	}

	this.timer = null;

	var re = this.ta_id+'.rolling()';

	this.timer = setTimeout(re,this.gap_time);

}

rolling_banner.prototype.rolling_top = function(){

	this.gap_count+=parseInt(this.gap);

	var ch1 = this.ta.firstChild;

	var child = this.ta.childNodes;

	var ta_ch = null;

	var	top_ori = this.strtonum(child[0].style.top);

	var top = this.strtopx(top_ori-parseInt(this.gap));

	for(var i=0,m=child.length;i<m;i++){

		child[i].style.top=top;

	}

	if(this.gap_count >= this.strtonum(ch1.style.height)){

		var temp =ch1.cloneNode(true);

		this.ta.removeChild(ch1);

		this.ta.appendChild(temp);

		for(var i=0,m=child.length;i<m;i++){

			child[i].style.top='0px';

		}

	this.gap_count = 0

	}

}

rolling_banner.prototype.sleep = function(){

	this.timer = null;

	var re = this.ta_id+'.rolling()';

	this.timer = setTimeout(re,this.gap_sleep);

}