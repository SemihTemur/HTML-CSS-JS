let buttons=document.querySelectorAll(".btn");

for(var i=0;i<buttons.length;i++){
    
buttons[i].addEventListener("click",function(element){
var bill=document.getElementById("number").value;//hesap
bill=Number(bill);;
d=element.currentTarget.textContent;
d=d.split("%")
element.currentTarget.style.backgroundColor="#26c0ab";
d[0]=Number(d[0]);// yuzde degerler
d[0]=d[0]/100;
var s=document.getElementById("numberr").value;
s=Number(s);
if(s==0){
document.getElementById("z").style.display="block"
}
else{
    
document.getElementById("z").style.display="none"
    var y=s*(bill*d[0]);
    y= Number(y.toFixed(3));
    var se=y+bill;
    document.getElementById("la").innerHTML="$"+y;
    document.getElementById("laa").innerHTML="$"+se;
}


})

}


function reset(){
    document.getElementById("yr").placeholder="Custom";
    document.getElementById("yr").value="";
    let button=document.querySelectorAll(".btn");
    document.getElementById("number").value="0";
    document.getElementById("numberr").value="0";
    document.getElementById("la").innerHTML="$0.00";
document.getElementById("laa").innerHTML="$0.00";
for(var i=0;i<button.length;i++){
button[i].style.backgroundColor="#00494d"

}


}



function yüzde(){
    var bill=document.getElementById("number").value
    bill=Number(bill);;
    d=document.getElementById("yr").value;
    d=d.split("%")
    d[0]=Number(d[0]);// yuzde degerler
    d[0]=d[0]/100;
    var s=document.getElementById("numberr").value;
    s=Number(s);
    if(s==0){
    document.getElementById("z").style.display="block"
    }
    else{
        
    document.getElementById("z").style.display="none"
        var y=s*(bill*d[0]);
        y= Number(y.toFixed(3));
        var se=y+bill;
        document.getElementById("la").innerHTML="$"+y;
        document.getElementById("laa").innerHTML="$"+se;
}
}








