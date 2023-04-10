function onayla(){
var a=document.getElementById("fn").value;
var b=document.getElementById("ln").value;;
var c=document.getElementById("em").value;
var d=document.getElementById("pw").value;

    if(a==""){
        document.getElementById("h").style.display="block"
        document.getElementById("r").style.display="block"
        document.getElementById("fn").style.border="2px solid hsl(0, 100%, 74%)"
        document.getElementById("fn").placeholder=""
    }
    else{
        document.getElementById("h").style.display="none"
        document.getElementById("r").style.display="none"
        document.getElementById("fn").style.border="1px solid rgba(128, 128, 128, 0.223)" 
    }
    if(b==""){
        document.getElementById("h1").style.display="block"
        document.getElementById("r1").style.display="block"
        document.getElementById("ln").style.border="2px solid hsl(0, 100%, 74%)"
        document.getElementById("ln").placeholder=""
    }
    else{
        document.getElementById("h1").style.display="none"
        document.getElementById("r1").style.display="none"
        document.getElementById("ln").style.border="1px solid rgba(128, 128, 128, 0.223)" 
    }

    if(c==""){
        document.getElementById("h2").style.display="block"
        document.getElementById("r2").style.display="block"
        document.getElementById("em").style.border="2px solid hsl(0, 100%, 74%)"
        document.getElementById("em").placeholder="email@example/com"
        
    }
    else if(c.includes("@email.com")){
        document.getElementById("h2").style.display="none"
        document.getElementById("r2").style.display="none"
        document.getElementById("em").style.border="1px solid rgba(128, 128, 128, 0.223)" 
    }
    else{
        document.getElementById("h2").style.display="block"
        document.getElementById("r2").style.display="block"
        document.getElementById("em").style.border="2px solid hsl(0, 100%, 74%)"
        document.getElementById("em").placeholder="email@example/com"
    }
if(d==""){
    document.getElementById("h3").style.display="block"
    document.getElementById("r3").style.display="block"
    document.getElementById("pw").style.border="2px solid hsl(0, 100%, 74%)"
    document.getElementById("pw").placeholder=""
    
}
else{
    document.getElementById("h3").style.display="none"
        document.getElementById("r3").style.display="none"
        document.getElementById("pw").style.border="1px solid rgba(128, 128, 128, 0.223)" 

    }


    
}