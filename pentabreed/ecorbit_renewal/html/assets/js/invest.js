$(document).ready(function(){
    
    /* invest */

    /* 범위(range)만큼의 아이템중 12개만 표시하고 나머지는 hidden  */
    $.item_hidden=function(range){
        var item_length=range.length;
        $(".box_list_area").children(".box_area").removeClass("visible");
        if(item_length>12){
            for(var i=0;i<=11;i++){
                range.eq(i).addClass("visible");
            }
            $(".invest_more").removeClass("hidden");
        }
        else{
            range.addClass("visible");
            $(".invest_more").addClass("hidden");
        }
    }
    var range= $(".box_list_area").children(".box_area.green");
    range.addClass("filtering_visible");
    $.item_hidden(range);

    /* news기사 정렬 */

    
    /* invest_more 버튼 */
    $(".invest_more").click(function(){
        var item_hidden_length= $(this).siblings(".box_list_area").children(".box_area.filtering_visible").not(".visible").length;
        
        if(item_hidden_length>8){
            for(var i=0;i<8;i++){
                $(this).siblings(".box_list_area").children(".box_area.filtering_visible").not(".visible").eq(0).addClass("visible");
            }
            
        }
        else{
            for(var i=0;i<item_hidden_length;i++){
                
                $(this).siblings(".box_list_area").children(".box_area.filtering_visible").not(".visible").eq(0).addClass("visible");
            }
            $(this).addClass("hidden");
        }
    })

    /* 1depth click */
    $(".1depth_category").click(function(){
        var click_business_area=$(this).data("businessArea");       
            $('.box_area').not('[data-business-area='+click_business_area+']').removeClass("filtering_visible");
            $('.box_area[data-business-area='+click_business_area+']').addClass("filtering_visible");
            $.item_hidden($(".box_list_area").children(".box_area.filtering_visible"));
            console.log(click_business_area);
    });

    /* 2depth click */
    $(".2depth_category").click(function(){
        var click_company_area=$(this).data("subsidiaryCompany");       
            $('.box_area').not('[data-subsidiary-company='+click_company_area+']').removeClass("filtering_visible");
            $('.box_area[data-subsidiary-company='+click_company_area+']').addClass("filtering_visible");
            $.item_hidden($(".box_list_area").children(".box_area.filtering_visible"));
            console.log(click_company_area);
    });
});