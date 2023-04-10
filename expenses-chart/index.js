


$(function(){

$(".mon").mouseover(function(){

    $(this).css({
        "background-color":" hsl(10, 79%, 65%,0.3)",
        "cursor":"pointer"
    })

    $.getJSON("data.json",function(dataa){

        var ad=dataa[0]["amount"];
        $("#mp").css({
            "display":"block"
        })
     $("#mp").text("$"+ad);

    })

})
$(".mon").mouseleave(function(){
    $(this).css("background-color" ,"hsl(10, 79%, 65%)")
    $("#mp").css({
        "display":"none"
      
    })

})

$(".tue").mouseover(function(){

    $(this).css({
        "background-color":" hsl(10, 79%, 65%,0.3)",
        "cursor":"pointer"
    })

    $.getJSON("data.json",function(dataa){

        var ad=dataa[1]["amount"];
        $("#tp").css({
            "display":"block"
        })
     $("#tp").text("$"+ad);

    })

    
})
$(".tue").mouseleave(function(){
    $(this).css("background-color" ,"hsl(10, 79%, 65%)")
  
    $("#tp").css({
        "display":"none"
      
    })
})


$(".thu").mouseover(function(){

    $(this).css({
        "background-color":" hsl(10, 79%, 65%,0.3)",
        "cursor":"pointer"
    })

    
    $.getJSON("data.json",function(dataa){

        var ad=dataa[3]["amount"];
        $("#thp").css({
            "display":"block"
        })
     $("#thp").text("$"+ad);

    })

})
$(".thu").mouseleave(function(){
    $(this).css("background-color" ,"hsl(10, 79%, 65%)")
  
    $("#thp").css({
        "display":"none"
      
    })
})



$(".fri").mouseover(function(){

    $(this).css({
        "background-color":" hsl(10, 79%, 65%,0.3)",
        "cursor":"pointer"
    })
    
    $.getJSON("data.json",function(dataa){

        var ad=dataa[4]["amount"];
        $("#fp").css({
            "display":"block"
        })
     $("#fp").text("$"+ad);

    })

})
$(".fri").mouseleave(function(){
    $(this).css("background-color" ,"hsl(10, 79%, 65%)")
  
    $("#fp").css({
        "display":"none"
      
    })
})



$(".sat").mouseover(function(){

    $(this).css({
        "background-color":" hsl(10, 79%, 65%,0.3)",
        "cursor":"pointer"
    })

    $.getJSON("data.json",function(dataa){

        var ad=dataa[5]["amount"];
        $("#sp").css({
            "display":"block"
        })
     $("#sp").text("$"+ad);

    })

})
$(".sat").mouseleave(function(){
    $(this).css("background-color" ,"hsl(10, 79%, 65%)")
  
    $("#sp").css({
        "display":"none"
      
    })
})

$(".sun").mouseover(function(){

    $(this).css({
        "background-color":" hsl(10, 79%, 65%,0.3)",
        "cursor":"pointer"
    })

    $.getJSON("data.json",function(dataa){

        var ad=dataa[6]["amount"];
        $("#ssp").css({
            "display":"block"
        })
     $("#ssp").text("$"+ad);

    })

})
$(".sun").mouseleave(function(){
    $(this).css("background-color" ,"hsl(10, 79%, 65%)")
  
    $("#ssp").css({
        "display":"none"
      
    })
})


$(".wed").mouseover(function(){

    $(this).css({
        "background-color":" rgb(118, 181, 188,0.5)",
        "cursor":"pointer"
    })

    
    $.getJSON("data.json",function(dataa){

        var ad=dataa[2]["amount"];
        $("#wp").css({
            "display":"block"
        })
     $("#wp").text("$"+ad);

    })
})
$(".wed").mouseleave(function(){
    $(this).css("background-color" ,"rgb(118, 181, 188)")
    $("#wp").css({
        "display":"none"
      
    })

})


})