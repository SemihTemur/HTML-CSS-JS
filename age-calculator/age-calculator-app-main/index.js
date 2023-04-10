var yil=-1;
var ay=-1;
var gün=-1;

    $("#tk").click(function(){
        var a=$("#dy").val();
        var b=$("#mh").val();
        var c=$("#yr").val();
      
Number(a);
Number(b);
Number(c);
        if($("#dy").val()==""){
            $("#p").css({
                "visibility":"visible"
            })
        }
       else{
            if(a<1||a>31){
                $("#p").css({
                    "visibility":"visible"
                })
                
                $("#p").text("Must be a valid day")
                $("#a").text("- -");
                $("#b").text("- -");
                $("#c").text("- -");
                gün=-1
            }
                else{
                    $("#p").css({
                        "visibility":"hidden"
                    })
                gün=a;
               
            }
        }
        if($("#mh").val()==""){
            $("#pp").css({
                "visibility":"visible"
            })
        }
    
        else{
            $("#pp").css({
                "visibility":"visible"
            })
            
            if(b<1||b>12){
                $("#pp").text("Must be a valid month")
                $("#a").text("- -");
                $("#b").text("- -");
                $("#c").text("- -");
                ay=-1;
            }
            else{
                $("#pp").css({
                    "visibility":"hidden"
                })
                ay=b;
    
            }
        }

        if($("#yr").val()==""){
            $("#se").css({
                "visibility":"visible"
            })
        }

    else{
        $("#se").css({
            "visibility":"visible"
            
        })
        
        if(c>2023){
            $("#se").text("Must be in the past")
            $("#a").text("- -");
            $("#b").text("- -");
            $("#c").text("- -");
yil=-1
        }
        else{
            $("#se").css({
                "visibility":"hidden"
            })
            yil=c;
        }

        
    }

   
    const d = new Date();
    var g=d.getDate()//gun
var dd=d.getMonth()+1;//bu ay
var y=d.getFullYear();//yıl

if(gün!=-1&&ay!=-1&&yil!=-1){

    if(dd>ay){
        yil=y-yil;
        if(g>=gün){
            ay=dd-ay;
            gün=g-gün;
            gün++;
            $("#a").text(yil);
            $("#b").text(ay);
            $("#c").text(gün);
        }
        else{
            ay=dd-ay;
            ay--;
          gün=gün-g;
          gün=32-gün;
            $("#a").text(yil);
            $("#b").text(ay);
            $("#c").text(gün);
        }


    }
    if(dd==ay){
        if(gün>g){
            yil=y-yil;
            yil--;
            ay=ay-dd;
            ay=12-1;
            gün=32-(gün-g);
            $("#a").text(yil);
            $("#b").text(ay);
            $("#c").text(gün);
        }
        else if(g>=gün){
            yil=y-yil;
            ay=ay-dd;
            ay=0;
            gün=g-gün;
            gün++;
            $("#a").text(yil);
            $("#b").text(ay);
            $("#c").text(gün);  
        }
    }
    else if (ay>dd){
        yil=y-yil;
        yil--;
        ay=ay-dd;
        ay=12-ay;
        if(gün>g){
            ay--;
            gün=32-(gün-g);
        }
        if(ay==12){
            yil++;
            ay=0;
        }
      
        $("#a").text(yil);
        $("#b").text(ay);
        $("#c").text(gün);
    }

/* yil=y-yil;
gün=gün-g;
ay=ay-dd
yil= Math.abs(yil);
gün= Math.abs(gün);
ay= Math.abs(ay); */

}

        


    })