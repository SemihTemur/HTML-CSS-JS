function onayla(){
const a=document.getElementById("ib");
const b=document.getElementById("em");
document.getElementById("btn").style.marginTop="-35px"
if(b.value.includes("@email.com")){
    b.style.border=" 1px solid hsl(223, 100%, 88%)"
    a.style.display="none";
    b.placeholder=""
    document.getElementById("btn").style.marginTop="0px"
}
else{
b.style.border="2px solid hsl(354, 100%, 66%)"
a.style.display="block";
b.placeholder="example@email.com"
b.value=""
}

}



