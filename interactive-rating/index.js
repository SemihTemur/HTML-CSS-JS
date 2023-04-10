let buttons=document.querySelectorAll(".btn");
var a=5;
var d;
for(let i=0;i<buttons.length;i++){

    buttons[i].addEventListener("click",function(element){
      
 a=element.currentTarget.innerHTML;
  d=buttons[i].style;
      

      
    })
   

}

     
        function t(){
       
            document.getElementById("span").innerHTML="";
            document.getElementById("span").innerHTML=a+" "
            document.getElementById("hd").style.display="none";
            document.getElementById("fle").style.display="flex";
       
            
        }
        