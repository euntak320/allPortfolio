"use strict";


//var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();
var connection = new signalR.HubConnectionBuilder().withUrl("http://211.238.8.47:5000/chatHub").configureLogging(signalR.LogLevel.Information).withAutomaticReconnect().build();

var room = $("#chat_key").val();			//채팅키
var user = $("#doc_idx").val();				//의사키
var pat_name = $("#pat_name").val();		//환자이름
var message = $("#messageInput").val();

//Disable send button until connection is established
//$("#btnSend").attr("disabled", true);

var chk = 0;

connection.on("ReceiveMessage", function (usr, message) {
	var today = new Date();
	let hours = today.getHours(); // 시
	let minutes = today.getMinutes();  // 분
	
    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    console.log(msg.indexOf("joined"));
    if(msg.indexOf("joined") == -1){
	    var chatHtml = "";
	    if(usr == user){
	    	chatHtml = chatHtml+"<div class=\"chat-box chat-box-right\">";
	    	chatHtml = chatHtml+"<p class=\"message-date\">"+hours +":" +minutes +"</p>";
	    	chatHtml = chatHtml+"<div class=\"message-text\">"+msg+"</div>";
	    	chatHtml = chatHtml+"</div>";
	    } else {
	    	chatHtml = chatHtml+"<div class=\"chat-box chat-box-left\">";
	    	chatHtml = chatHtml+"<p class=\"message-date\">"+hours +":" +minutes +"</p>";
	    	chatHtml = chatHtml+"<div class=\"message-text\">";
	    	chatHtml = chatHtml+"<p class=\"name\">"+pat_name+" 환자</p>";
	    	chatHtml = chatHtml+"<p class=\"message\">"+msg+"</p>";
	    	chatHtml = chatHtml+"</div>";
	    	chatHtml = chatHtml+"</div>";
	    }
	    $("#chatArea").append(chatHtml);
    }
    var encodedMsg = usr + " says " + msg;
    console.log(encodedMsg);
});

connection.start().then(function () {
	$("#btnSend").attr("disabled", false);
}).catch(function (err) {
	console.log(err);
});

//채팅방 입장
$("#btnTxtChat").on("click", function(e){
	if(chk == 0){
		connection.invoke("SendMessage", user, message, room, true).catch(function (err) {
			return console.log(err.toString());
		});
		chk = 1;
	}
	e.preventDefault();
});

//메시지 전송
$("#btnSend").on("click", function(e){
	message = $("#messageInput").val();
    connection.invoke("SendMessage", user, message, room, false).catch(function (err) {
        return console.error(err.toString());
    });
    $("#messageInput").val("");
    e.preventDefault();
});

//메시지 엔터키 전송
$("#messageInput").keydown(function(key) {
	if (key.keyCode == 13) {
		message = $("#messageInput").val();
	    connection.invoke("SendMessage", user, message, room, false).catch(function (err) {
	        return console.error(err.toString());
	    });
	    $("#messageInput").val("");
	}
	key.preventDefault();
});



