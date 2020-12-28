$( document ).ready(function() {

    $(".owl-carousel").owlCarousel({
        items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
    });

// ---------------login--start---------------
$(".login").hide();

$(".log-in").on("click",function(){
    $(".login").show(500);
});

$("#login-X").on("click",function(){
    $(".login").hide(500);
});

// ---------------login--end---------------

// ---------------signup--start---------------
$(".signup").hide();

$(".sign-up").on("click",function(){
    $(".signup").show(500);
});

$("#signup-X").on("click",function(){
    $(".signup").hide(500);
});

// ---------------signup--end---------------




    $(".in2").hide()

    $("#R2").on("click",function(){
        $(".in3 label").text("الرقم الجمركي");
        $("#tex3").attr("placeholder","الرقم الجمركي");
        $(".r-label").css({
            "opacity":0
        });
        $(".in2").hide();
        $("#tex1").attr("placeholder","رقم الهوية / الإقامة / الشركة");
    });

    $("#R3").on("click",function(){
        $(".in2").hide();
        $("#tex1").attr("placeholder","رقم الهوية / الإقامة / الشركة");
    });

    $("#R1").on("click",function(){
        $(".in3 label").text("الرقم التسلسلي");
        $("#tex3").attr("placeholder","الرقم التسلسلي");
        $(".r-label").css({
            "opacity":100
        });
        $("#R3").click();
    });

    $("#R4").on("click",function(){
    //    رقم هوية / إقامة مالك المركبة
    $("#tex1").attr("placeholder"," رقم هوية / إقامة مالك المركبة");
    $(".in2").show();
        
    });


    // ----------------------------------

    $(".m-menu span.close").on("click",function(){
        $(".m-menu").animate({
            "right":"-300px"
        },400);
    });

    $(".menu ul li:first-of-type a").on("click",function(e){
        e.preventDefault();
        $(".m-menu").animate({
            "right":"0px"
        },400);
    });


});

$(window).on("load",function(){
    $(".loader-wrapper").delay(900).fadeOut();

});