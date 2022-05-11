<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="ko">
<head>
<title>2017서울상상력 발전소 메이커스, 생각하는 손</title>
<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
	<meta http-equiv="Content-Script-Type" content="text/javascript">
	<meta http-equiv="Content-Style-Type" content="text/css">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<script type="text/javascript" src="../common/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="common/common.js"></script>
	<script type="text/javascript" src="common/masonry.pkgd.min.js"></script>
	<link rel="stylesheet" type="text/css" href="common/common.css?ver=1.5" />
	<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/earlyaccess/notosanskr.css" />
</head>
<%
	joinarea = Request.ServerVariables("HTTP_USER_AGENT")
	Browser_array =  array("iPhone", "iPad,IEMobile","Android", "lgtelecom", "PPC", "BlackBerry", "SCH-", "SPH-", "LG-", "CANU", "IM-" ,"EV-","Nokia") '모바일 접속시 해당 문자열이 joinarea에 있는지 체크하기위한 데이터
	work_area = "PC"
	For i=0 To UBound(Browser_array)
		b_array = Browser_array(i)
		'response.write i
		If InStr(joinarea,b_array) Then
			response.redirect "/mobile/main.asp"
		End If
	Next
	
Response.Expires = 0

Response.Expiresabsolute = Now() - 1

Response.AddHeader "pragma","no-cache"

Response.AddHeader "cache-control","private"

Response.CacheControl = "no-cache"

%>
