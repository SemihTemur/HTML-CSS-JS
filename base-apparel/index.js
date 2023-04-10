let a;

function tikla(){

 a=document.getElementById("ema").value;

 if(a.includes("@email.com")){
    document.getElementById("msj").style.display="block";
    document.getElementById("msj").innerHTML="Succesfull";
    document.getElementById("msj").style.color="red";
 }
 else{
    document.getElementById("msj").style.display="block";
    document.getElementById("error").style.display="block"
 }



}