//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function() {

    $("#box").hide();
    $("#name").show();
    $("circle").show();
    $("#box").click();

    $("#toggle-text").click(function(){
        $("#box").toggle();

        $("#box").css("width,200px, height, 100px");
    });

    $("#name").click(function(){
        $("#box").css("border-radius","50%");
    });

    $("#circle").click(function(){
        $("#box").hide();
    });

    $(".box").click(function(){
        $(".box").addClass("animate-box");
        $(".box").removeClass("animate-box");
    });

});