/* VARİABLES */
const button =document.querySelector("#btn");
const text=document.querySelector(".text");
let array;
const mesaj=document.querySelector(".valid")
/* EVENTS */
button.addEventListener("click",emailcheck);



function emailcheck(){
  var counter=text.value.length;
  if(counter<1){
    text.classList.add("error")
    mesaj.classList.add("active")
  } 
  else{
    if(text.value.includes("@")){
      array=text.value.split("@");
      if(!array[1].includes(".com")){
        text.classList.add("error")
        mesaj.classList.add("active")
      }
    else{
        text.classList.remove("error")
        mesaj.classList.remove("active") 
        button.href="index2.html"
    }
    }
    else{
        text.classList.add("error")
        mesaj.classList.add("active")
    }
  }

    
}