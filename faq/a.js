let imgs=document.querySelectorAll(".img");
let p=document.querySelectorAll(".ee");
let pp=document.querySelectorAll(".yr");
let div=document.querySelectorAll(".as");


for(let i=0;i<imgs.length;i++){
    imgs[i].addEventListener("click",function(element){

        if($(this).hasClass('k')){
            document.getElementById("err").style.transform="rotate(0deg)"
            $(this).removeClass('k')
            pp[i].style.fontWeight="400";
            p[i].style.display="none";
            }
            else{
            $(this).addClass('k')
            p[i].style.display="block"
            pp[i].style.fontWeight="700";
            document.getElementById("err").style.transform="rotate(180deg)"
            }
       
        
           
         
/* 
     if(p[i].style.display=="block" || pp[i].style.fontWeight=="700" || imgs[i].style.transform=="rotate(180deg)"){
            p[i].style.display="none";
            imgs[i]  .style.transform="rotate(0deg)"
pp[i].style.fontWeight="400";

        }

        else{
            p[i].style.display="block";
            imgs[i]  .style.transform  ="rotate(180deg)"
            pp[i].style.fontWeight="700";
   
        } */
  
})

div[i].addEventListener("click",function(){

    if(p[i].style.display=="block" || pp[i].style.fontWeight=="700" || imgs[i].style.transform=="rotate(180deg)"){
           p[i].style.display="none";
           imgs[i]  .style.transform="rotate(0deg)"
pp[i].style.fontWeight="400";

       }

       else{
           p[i].style.display="block";
           imgs[i]  .style.transform  ="rotate(180deg)"
           pp[i].style.fontWeight="700";
        
          
       }
 
})
    

}
