//variables
const hamburgericon=document.querySelector(".hamburger");
let hamburgermenu=document.querySelector(".hamburger-menu")
const close=document.querySelector(".close");
//EVENT
hamburgericon.addEventListener("click",hamburgeractive)
close.addEventListener("click",closeActive);
//FUNCTION
function hamburgeractive(){
    hamburgermenu.classList.add("active")
hamburgericon.classList.add("notactive")
close.classList.add("activee");
}

function closeActive(){
    hamburgermenu.classList.remove("active")
  hamburgericon.classList.remove("notactive")
close.classList.remove("activee");

}