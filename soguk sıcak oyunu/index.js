// variables

let result=document.querySelector("#result")// tahmınlerı yazma kısmı
const input=document.querySelector("input");
const guessbtn=document.querySelector(".guess-btn")
const guesstext=document.querySelector(".guess-text")//ohoo kısmı
let guessorder=document.querySelector(".guess-order")//1.tahmin kısmı
const repeatbtn=document.querySelector(".repeat")
let count=1;
var random
//Events
guessbtn.addEventListener("click",guesswhat)
repeatbtn.addEventListener("click",repeatGame)

//functions
random = Math.floor(Math.random() * 101)



function guesswhat(){
    var value=input.value;
    if(value==""){
        guesstext.style.display="block"
        guesstext.textContent="Lütfen Sayi giriniz"
    }
    else{
  block()
if(value>100){
    guesstext.textContent="İpucu:Tuttugum sayı 0 ile 100 arasında"
    count++;
    guessorder.textContent=count+"."+"Tahmin";
    result.textContent+=value + " ";
  
}
else if(random==value){
    guesstext.textContent="Tebrikler"+" "+count+"."+"denemede buldunuz"
    count++;
    guessorder.textContent=count+"."+"Tahmin";
    result.textContent+=value + " ";
    guessbtn.classList.add("events")
}

else if(random-value<=10&&random-value>0||value-random<10&&value-random>0){
    guesstext.textContent="Cok sıcak Yaniyorum..."
    count++;
    guessorder.textContent=count+"."+"Tahmin";
    result.textContent+=value + " ";
}

else if(random-value<20&&random-value>0||value-random<20&&value-random>0){
    count++;
guesstext.textContent="Ilık devam et bulucaksın"
guessorder.textContent=count+"."+"Tahmin";
result.textContent+=value + " ";
}

else{
    guesstext.textContent="Üşüyorum Soguk"
guessorder.textContent=count+"."+"Tahmin";
result.textContent+=value + " ";
count++;
}
    }
}

function block(){
    guesstext.style.display="block"
    guessorder.style.display="block"
    result.style.display="block"
}

function repeatGame(){
    random = Math.floor(Math.random() * 101)
    guessbtn.classList.remove("events")
    guesstext.textContent=""
    none()
    count=1
    guessorder.textContent="1.Tahmin"
    result.textContent=""
 input.value=""

  
}

function none(){
    guesstext.style.display="none"
    result.style.display="none"
}
