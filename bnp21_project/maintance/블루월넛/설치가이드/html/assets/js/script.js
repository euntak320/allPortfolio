
$(function(){
    $( ".cal" ).datepicker({
        showOn: "button",
        buttonImage: "assets/images/calendar.jpg",
        buttonImageOnly: true,
        buttonText: "Select date",
        changeMonth: true,
        changeYear: true,
        dateFormat: "yy-mm-dd",
        showMonthAfterYear: true
    });
    
    
});

function layerClose(){
    $(".layerFrame").hide();
    $("body").css("overflow","visible");
}