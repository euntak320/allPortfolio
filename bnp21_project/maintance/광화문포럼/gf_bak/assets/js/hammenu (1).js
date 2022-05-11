$(document).ready(function(){

	$("header .mobile_menu").on("click" , function(){
		$("header .nav .menu").toggleClass("on");

		return false;
	});
});
