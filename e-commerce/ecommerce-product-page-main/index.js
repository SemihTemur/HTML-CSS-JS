const hamburger=document.getElementById("hamburgerr");
const hamburgermenu=document.querySelector(".hamburger-menu")
const close=document.getElementById("close")
const darkoverlay=document.querySelector(".dark-overlay")
const header=document.querySelector(".header")
const next=document.querySelector("#next");
const imgs=document.querySelectorAll(".imgg");
const reduce =document.querySelector("#negative")
const increase=document.querySelector("#pozitif")
const input=document.querySelector(".inputt")
const deletee=document.getElementById("deletee");
const cart=document.getElementById("cartt");
const sepet=document.querySelector(".sepet")
const btncart=document.getElementById("btncart")
const carttop=document.querySelector(".cart-top")
const price1=document.getElementById("fiyat1")
const price2=document.getElementById("fiyat2");
const sepetbottom=document.querySelector(".sepet-bottom")
const checkdiv=document.querySelector(".checkdiv")
const prev=document.getElementById("previos")
const mainimg=document.getElementById("mainimg")
var a=0;
var diziimgs=["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"]
let i=0;
const close2=document.getElementById("close2")
const imgss=document.querySelectorAll(".imggg")
const nexts=document.querySelector("#nextt")
const prevs=document.querySelector("#previoss")
var j=0;
var count=0;
hamburger.addEventListener("click",function(){
    hamburgermenu.classList.add("active")
    darkoverlay.classList.add("activ")
    header.classList.add("header-index")
})

close.addEventListener("click",function(){
    hamburgermenu.classList.remove("active")
    darkoverlay.classList.remove("activ")
    header.classList.remove("header-index")
})

increase.addEventListener("click",function(){
a++;
    input.textContent=a;

})

reduce.addEventListener("click",function(){
   
    if(a-1>=0){
        a--
        input.textContent=a; 
    }

})
btncart.addEventListener("click",function(){
    sepetbottom.style.display="flex"
    checkdiv.style.display="block"
    document.getElementById("cardepmty").style.display="none"
    carttop.style.display="block";
    var fiyt=125;
    fiyt=125*input.textContent;
    carttop.textContent=input.textContent;
    carttop.classList.add("active")
    price1.textContent="$125.00 ×"+" "+input.textContent
    price2.textContent="$"+fiyt;
})

cart.addEventListener("click",function(){
    sepet.classList.toggle("sepetactive")
})

 deletee.addEventListener("click",function(){
    sepetbottom.style.display="none"
    checkdiv.style.display="none"
    document.getElementById("cardepmty").style.display="block"
    carttop.style.display="none";
})  

imgs.forEach((img,i)=>{

    imgs[i].addEventListener("click",function(){
        document.getElementById("mainimg").src=imgs[i].src
        j=i;
        changee()
        imgss[j].classList.add("change")
        change()
        imgs[i].classList.add("change")
      
    })

}
)
function change(){
   imgs.forEach((img,i)=>{
    imgs[i].classList.remove("change")
   })
}
next.addEventListener("click",function(){
   
 j++
 if(j<4){
            document.getElementById("mainimg").src=diziimgs[j]   
    }
    else{
        j=0
        document.getElementById("mainimg").src=diziimgs[j]  
    }
    
})

prev.addEventListener("click",function(){
    
    if(j>0){
        j--
               document.getElementById("mainimg").src=diziimgs[j]  
              
                
       }
       else{
           j=3
           document.getElementById("mainimg").src=diziimgs[j]  
         
       }

})

mainimg.addEventListener("click",function(){
  document.getElementById("mainimgg").src=mainimg.src
    document.querySelector(".dark-overlay").classList.add("active")
    document.querySelector(".main-divv").classList.add("active")
})

close2.addEventListener("click",function(){
    document.querySelector(".dark-overlay").classList.remove("active")
    document.querySelector(".main-divv").classList.remove("active")

})

imgss.forEach((img,i)=>{

    imgss[i].addEventListener("click",function(){
        document.getElementById("mainimgg").src=imgss[i].src
        j=i;
        changee()
        imgss[i].classList.add("change")
    })

}
)
function changee(){
   imgss.forEach((img,i)=>{
    imgss[i].classList.remove("change")
   })
}


nexts.addEventListener("click",function(){
  
 j++

    if(j<4){
               document.getElementById("mainimgg").src=diziimgs[j]   
               changee()
               imgss[j].classList.add("change")
               document.getElementById("mainimgg").classList.remove("change")
              
       }
       else{
           j=0
           document.getElementById("mainimgg").src=diziimgs[j]  
           changee()
           imgss[j].classList.add("change")
           document.getElementById("mainimgg").classList.remove("change")
       }
       
   })
   
   prevs.addEventListener("click",function(){
       
       if(j>0){
           j--
                  document.getElementById("mainimgg").src=diziimgs[j]  
                  changee()
                  imgss[j].classList.add("change")
                  document.getElementById("mainimgg").classList.remove("change") 
          }
          else{
              j=3
              document.getElementById("mainimgg").src=diziimgs[j]  
              changee()
              imgss[j].classList.add("change")
              document.getElementById("mainimgg").classList.remove("change")
          }
   
   })
   