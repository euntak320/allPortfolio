$(document).ready(function () {

    /* video id값 추출 */
    function getId(url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            return match[2];
        } else {
            return 'error';
        }
    }

    /* 영상 썸네일 받아오기
     */
    $(".youtube_list_item").each(function (index, item) {
        var video_src = $(this).find(".youtube_list_item_thumb").data("srcVideo");
        var video_id = getId(video_src);
        var thumb_img = "http://img.youtube.com/vi/" + video_id + "/0.jpg";
        var thumb_alt = $(this).find(".youtube_list_item_title").text();
        $(this).find("img").attr("src", thumb_img);
        $(this).find("img").attr("alt", thumb_alt);
    });

    /* 영상이 3개 이상이면 3개만 표시 */
    $(".youtube_list").each(function (index, itmem) {
        var video_length=$(this).children(".youtube_list_item").length;
        var hidden_length=video_length-3;/* 숨겨진 동영상 개수 */
        if(hidden_length>0){
            for(var i=1;i<=hidden_length;i++){
                $(this).children(".youtube_list_item").eq(2+i).addClass("hidden");
            }
        }
        else{
            $(this).siblings(".youtube_more").addClass("hidden");
        }
    });

    /* more 버튼 클릭 */
    $(".youtube_more").click(function(){
        var hidden_length= $(this).siblings(".youtube_list").children(".hidden").length;
        var visible_num = $(this).siblings(".youtube_list").children('.youtube_list_item.active').length;
        if(hidden_length>3){
            for(var i=1;i<4;i++){
                $(this).siblings(".youtube_list").children(".youtube_list_item.hidden").eq(0).removeClass("hidden");
            }
            var tempt=$(this).siblings(".youtube_list").find('.youtube_list_item');
            setTimeout(function(){
                tempt.eq(visible_num).addClass('active');
                tempt.eq(visible_num+1).addClass('active');
                tempt.eq(visible_num+2).addClass('active');
            },1);
            
        }
        else{
            for(var i=1;i<=hidden_length;i++){
                
                $(this).siblings(".youtube_list").children(".youtube_list_item.hidden").eq(0).removeClass("hidden");
            }
            var tempt=$(this).siblings(".youtube_list").find('.youtube_list_item');
            setTimeout(function(){
                tempt.eq(visible_num).addClass('active');
                tempt.eq(visible_num+1).addClass('active');
                tempt.eq(visible_num+2).addClass('active');
                
            },1);
            $(this).addClass("hidden");
        }
    });

    //media 리스트 인터렉션
    $(window).on('scroll',function(){
        var scT = $(this).scrollTop();
        var winH = $(this).height()/1.5;
        $('.youtube .youtube_list .youtube_list_item').not(".hidden").each(function(){
            var item = $(this).offset().top-winH; 
            if(scT > item){
                $(this).addClass('active');
            }
        })
    })

    /* popup */
    $(".youtube_list_item_thumb").click(function(){
        var click_video_src=$(this).data("srcVideo");
        $(".youtube_popup_video").attr("src",click_video_src);
        $(".youtube_popup_wrap").fadeIn(400);
    });

    $(".popup_close").click(function(){
        $(".youtube_popup_wrap").fadeOut(400);
    });

    $('.youtube_popup_wrap').click(function(e){
        if(!$(e.target).is('.youtube_popup_video_wrap')){
            $(".youtube_popup_wrap").fadeOut(400);
        }
    });



    
    /* news */

    /* 범위(range)만큼의 아이템중 9개만 표시하고 나머지는 hidden  */
    $.news_hidden=function(range){
        var news_length=range.length;
        $(".news_list").children(".news_list_item").removeClass("visible");
        $(".news_total").text(news_length);
        if(news_length>=9){
            for(var i=0;i<=8;i++){
                range.eq(i).addClass("visible");
            }
            $(".news_more").removeClass("hidden");
        }
        else{
            range.addClass("visible");
            $(".news_more").addClass("hidden");
        }
    }
    var range= $(".news_list").children(".news_list_item");
    range.addClass("tag_visible");
    $.news_hidden(range);

    /* news기사 정렬 */

    
    /* news_more 버튼 */
    $(".news_more").click(function(){
        var news_hidden_length= $(this).siblings(".news_list").children(".news_list_item.tag_visible").not(".visible").length;
        var visible_num = $('.news_list_item.active').length;
        
        if(news_hidden_length>9){
            for(var i=0;i<9;i++){
                $(this).siblings(".news_list").children(".news_list_item.tag_visible").not(".visible").eq(0).addClass("visible");
            }
            setTimeout(function(){
                $('.news_list_item').eq(visible_num).addClass('active');
                $('.news_list_item').eq(visible_num+1).addClass('active');
                $('.news_list_item').eq(visible_num+2).addClass('active');
            },1);
        }
        else{
            for(var i=0;i<news_hidden_length;i++){
                $(this).siblings(".news_list").children(".news_list_item.tag_visible").not(".visible").eq(0).addClass("visible");
            }
            setTimeout(function(){
                $('.news_list_item').eq(visible_num).addClass('active');
                $('.news_list_item').eq(visible_num+1).addClass('active');
                $('.news_list_item').eq(visible_num+2).addClass('active');
            },1);
            $(this).addClass("hidden");
        }
    })

    /* tag click */
    $(".button_tag").click(function(){
        var liN = $(this).parent().index();
        var scleft = 0;
        for(i=0;i<liN;i++){
            scleft += $(this).parents('ul').find('li').eq(i).outerWidth(true);
        }
        $(this).parents('.hashtag_area').scrollLeft(scleft-20);

        var click_tag_src=$(this).data("srcTag");
        $(this).parents("li").siblings().removeClass("on");
        $(this).parents("li").addClass("on");

        if(click_tag_src=="all"){
            var range= $(".news_list").children(".news_list_item");
            range.addClass("tag_visible"); 
            $.news_hidden(range);
            $(".news_type:lang(ko)").text("보도자료");
            $(".news_type:lang(en)").text("press releases");
            $(".postposition:lang(ko)").text("가");
        }else{
            $('.news_list_item').not('[data-src-tag*='+click_tag_src+']').removeClass("tag_visible");
            $('.news_list_item[data-src-tag*='+click_tag_src+']').addClass("tag_visible");
            $.news_hidden($(".news_list").children(".news_list_item.tag_visible"));
            $(".news_type").text($(this).text().substr(1));

            if(click_tag_src=="sustainable" || click_tag_src=="contribution" || click_tag_src=="communication")
            $(".postposition:lang(ko)").text("이");
            else{
                $(".postposition:lang(ko)").text("가");
            }
        }

        $('.news_list .news_list_item').removeClass('active');
        $('.news_list .news_list_item.visible').eq(0).addClass('active');
        $('.news_list .news_list_item.visible').eq(1).addClass('active');
        $('.news_list .news_list_item.visible').eq(2).addClass('active');
    });

    //media 리스트 인터렉션
    $(window).on('scroll',function(){
        var scT = $(this).scrollTop();
        var winH = $(this).height()/1.5;
        $('.news .news_list .news_list_item.visible').each(function(){
            var item = $(this).offset().top-winH; 
            if(scT > item){
                $(this).addClass('active');
            }
        })
    })

    //scrollmotion
    if($('.media').hasClass('promotion') || $('.media').hasClass('youtube')){
        $(window).on('scroll',function(){
            var scT = $(this).scrollTop();
            var winH = $(this).height();

            $('.scroll_motion').each(function(){
                var motion_top = $(this).offset().top;
                if(scT > motion_top-winH/1.5){
                    $(this).addClass('on');
                }
            });
        }).scroll();
    }



    /* console.log(video_id);
    video_src += "?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist="; controls 컨트롤러 / autoplay 자동재생 / loop,playlist=video_id 반복재생
    video_src+=video_id;
    $(".keyvisual_video").attr("src", video_src); */
});