
// variables
const btn=document.getElementById("btn");
const textt=document.getElementById("textt");
const warningmessage=document.getElementById("warning")

//events
btn.addEventListener("click",emailcheck);


//functions

function emailcheck(){
    
    if(textt.value.includes("@")){
    var textcheck=textt.value.split("@",2)

    if(textcheck[1]=="gmail.com"){
        warningmessage.style.display="none" 
        alert("Email succesfully saved")
    }

    else{
        warningmessage.style.display="block"
    }

}

    else{
        warningmessage.style.display="block"
      
    }

}
