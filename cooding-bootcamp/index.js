const a=document.getElementById("tanya");//tanya
const b=document.getElementById("john");//john
const c=document.getElementById("y");//tanya h1 
const e=document.getElementById("pp");//tanya  p
const f=document.getElementById("y1");//john h1
const g=document.getElementById("pp1");//john p
const resim=document.getElementById("resim1");
const resim2=document.getElementById("resim2");
let oks=document.querySelectorAll(".ok");

oks.forEach((ok)=>{

    ok.addEventListener("click",function(){

        if(a.style.display=="none"){
            resim.style.display="block"
            a.style.display="block";
            c.style.display="block"
            e.style.display="block"
            b.style.display="none";
            f.style.display="none";
            g.style.display="none";
            resim2.style.display="none"
        }
        else{
            resim2.style.display="block"
            resim.style.display="none"
            a.style.display="none";
            c.style.display="none"
            e.style.display="none"
            b.style.display="block";
            f.style.display="block";
            g.style.display="block";   
        }


    })


})