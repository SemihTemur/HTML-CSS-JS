var a=0;
var toplam
var b=0;
var ya=0;
$(function(){
$(".btn").click(function(){


    if($(this).text()=="1"){
        toplam=$(this).text();
          toplam=Number(toplam);
          a=(a*10)+toplam
          $(".sonuç").text(a)
    }

    if($(this).text()=="2"){
        toplam=$(this).text();
        toplam=Number(toplam);
      a=(a*10)+toplam
        $(".sonuç").text(a)
    }

    if($(this).text()=="3"){
        toplam=$(this).text();
        toplam=Number(toplam);
      a=(a*10)+toplam
        $(".sonuç").text(a)
    }

    if($(this).text()=="4"){
        toplam=$(this).text();
        toplam=Number(toplam);
      a=(a*10)+toplam
        $(".sonuç").text(a)
    }
 
    if($(this).text()=="5"){
        toplam=$(this).text();
        toplam=Number(toplam);
      a=(a*10)+toplam
        $(".sonuç").text(a)
    }
   
    if($(this).text()=="6"){
        toplam=$(this).text();
        toplam=Number(toplam);
      a=(a*10)+toplam
        $(".sonuç").text(a)
    } 


    if($(this).text()=="7"){
        toplam=$(this).text();
        toplam=Number(toplam);
      a=(a*10)+toplam
        $(".sonuç").text(a)
    }

    if($(this).text()=="8"){
        toplam=$(this).text();
        toplam=Number(toplam);
      a=(a*10)+toplam
        $(".sonuç").text(a)
    }
    if($(this).text()=="9"){
        toplam=$(this).text();
        toplam=Number(toplam);
      a=(a*10)+toplam
        $(".sonuç").text(a)
    }

    if($(this).text()=="0"){
        toplam=$(this).text();
        toplam=Number(toplam);
      a=(a*10)+toplam
        $(".sonuç").text(a)
    }


    if($(this).text()=="+"){
      b=a;
        $(".sonuç").text(a+"+")
ya=1
a=0;
    }


    if($(this).text()=="-"){
      b=a;
        $(".sonuç").text(a+"-")
ya=2
a=0;
    }

    
    if($(this).text()=="*"){
      b=a;
        $(".sonuç").text(a+"×")
ya=3
a=0;
    }
    
    if($(this).text()=="/"){
      b=a;
        $(".sonuç").text(a+"/")
ya=4
a=0;
    }
    if($(this).text()=="%"){
      b=a;
        $(".sonuç").text(a+"%")
ya=5
a=0;
    }





    if($(this).text()=="="){
      if(ya==1){
      a+=b;
        $(".sonuç").text(a)
      }
        
      if(ya==2){
        b-=a;
          $(".sonuç").text(b)
          a=b;
        }

        if(ya==3){
          a*=b;
            $(".sonuç").text(a)
          }

          if(ya==4){
            b=b/a;
            b=b.toFixed(2)
              $(".sonuç").text(b)
            }

            if(ya==5){
              
              b=(b*a)/100;
            b=b.toFixed(2)
              $(".sonuç").text(b)
            }



    }

    
})

$("#sfr").click(function(){
  $(".sonuç").text("");
a=0;
b=0


})

})