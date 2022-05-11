var Cam = (function() {
    'use strict'

    var _init = false
    var _socket = io('//mjvirtualcarecenter.co.kr:8081');
    var _role = ''
    	
	var room_id = $("#chat_key").val();
    var user_id = "";
    var role = "";

	user_id = $("#doc_idx").val();
	role = "doctor";

    return {
        init: function() {
            if (_init) return false
            _init = true

            _socket.on('connect', function() {
                console.log('connect')
                _socket.emit('join_room', {
                    room_id: room_id,
                    user_name: user_id,
                    role: role
                })
            })

            _socket.on('request_conference', function() {
                console.log('request_conference')
                
                var chatHtml = "";
                chatHtml = chatHtml+"<div class=\"btnArea\">";
                chatHtml = chatHtml+"<button type=\"btton\" onclick=\"Cam.responseConference();\" class=\"w100\">화상 상담 수락하기</button>";
                chatHtml = chatHtml+"</div>";
    	    	$("#chatArea").append(chatHtml);
                
                //$('#responseConference').show().attr('disabled', false)
            })

            _socket.on('set_conference', function(url) {
            	$("#cam_box").attr("src",url);
            	//$("#cam_box").load(url);
                //window.location.href = url
            })

            _socket.on('disconnect', function() {
                console.log('disconnect')

                window.location.reload(true)
            })

            _socket.on('error', function(error) {
                console.log(error);
            })
        },

        requestConference: function() {
            _socket.emit('request_conference', room_id)

            $('#btnCamStart').attr('disabled', true).text('화상 수락 대기중...');
        },
        responseConference: function() {
            _socket.emit('response_conference', room_id)

            $('#btnCamStart').attr('disabled', true)
        }
    }
}())

$(document).ready(function() {
	Cam.init()
})