String.prototype.trim = function()
{
  return this.replace(/(^\s*)|(\s*$)/gi, "");
}

String.prototype.replaceAll = function(str1, str2)
{
  var temp_str = "";

  if (this.trim() != "" && str1 != str2)
  {
	temp_str = this.trim();

	while (temp_str.indexOf(str1) > -1)
	{
	  temp_str = temp_str.replace(str1, str2);
	}
  }

  return temp_str;
};

var StringBuffer = function()
{
  this.buffer = [];
};

StringBuffer.prototype.append = function(string) 
{ 
  this.buffer.push(string); 
  return this; 
}; 

StringBuffer.prototype.toString = function()
{ 
  return this.buffer.join(""); 
};

var test = function() {
	var s = new StringBuffer();
	s.append("Hello, ").append(" World!");
	alert(s.toString()); 
};

var GetOzDataFromJSONObject = function (myJSONObject) {
	var sData = new StringBuffer();
	var jsonData = myJSONObject.jsonData;
	
	var delimiter_field = "^";
	var delimiter_record = "$$";
	var delimiter_dataset = '//DSEOR//';

	for(var key in myJSONObject){
		if( typeof(myJSONObject[key]) == "object") {
			//_TraceLn("############################# DataSetName : "+key);

			var setData = myJSONObject[key];
			for(var row in setData){
				//_TraceLn("rowIndex : "+row);
				for(var column in setData[row]){
					//_TraceLn("name : "+column +", value : " + setData[row][column]);
					sData.append(setData[row][column]).append(delimiter_field);
				}
				sData.append(delimiter_record);
			}
			sData.append(delimiter_dataset);
		}
	}
	return sData.toString();
};

var GetOzParamFromJSONObject = function (myJSONObject) {
	var sData = new StringBuffer();
	var delimiter_field = "^";

	for(var key in myJSONObject){
		if( typeof(myJSONObject[key]) != "object") { // string, number
			//alert("ODIParamName : "+key+", ODIParamValue : "+ myJSONObject[key]);
			sData.append(myJSONObject[key]).append(delimiter_field);
		}
	}
	return sData.toString();
};

var GetOZDataModule = function ()  
{       
	var dm = _GetNewDataModule();
	var ViewerType = _GetParamValue("ViewerType");	 // ActiveX, HTML5
	var html;
	if(ViewerType == "HTML5") {
		html = window;
	} else {
		html = _GetWebBrowserWindow();
	}
	
	var JSONObjectName = "html." + _GetParamValue("JSONObjectName");
	var JSONObject = eval(JSONObjectName);

	var oz_data = GetOzDataFromJSONObject(JSONObject);
	var odi_param = GetOzParamFromJSONObject(JSONObject);

	//_TraceLn("oz_data >> " + oz_data);
	//_TraceLn("odi_param >> " + odi_param);
	
	var odiname = _GetParamValue("odiname");
	var delimiter_field = '^';
	var delimiter_record = '$$';
	var delimiter_dataset = '//DSEOR//';
	var delimiter_master_detail = '//EOR//';
	
	var sData = oz_data.split(delimiter_dataset);
	dm.ParseData(odiname, sData, odi_param, delimiter_record, delimiter_field, delimiter_master_detail);
	
	return dm;
};