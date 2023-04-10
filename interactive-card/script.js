function yazi(){
var a=document.getElementById("c").innerHTML="";
var b=document.getElementById("es").value;
document.getElementById("c").innerHTML=b;

}

function rakam(){
    var aa=document.getElementById("b").innerHTML="";
    var bb=document.getElementById("ess").value;
    document.getElementById("b").innerHTML=bb;
    
    }

    function tarih(){
        var aa=document.getElementById("d").innerHTML="";
        var bb=document.getElementById("mm").value;
       
            document.getElementById("d").innerHTML=bb

        

    }

    function ay(){

            var aa=document.getElementById("e").innerHTML="";
            var bb=document.getElementById("yy").value;
            document.getElementById("e").innerHTML=bb;
    }


    function cvc(){

        var aa=document.getElementById("sfr").innerHTML="";
        var bb=document.getElementById("ha").value;
        document.getElementById("sfr").innerHTML=bb;
}



function btn(){

    if(document.getElementById("es").value!=""&&document.getElementById("ess").value!="" &&document.getElementById("mm").value!="" &&document.getElementById("yy").value!="" &&document.getElementById("ha").value!="")
    {
        document.getElementById("dv").style.display="flex"
        document.getElementById("dvv").style.display="none"

    }
    else{
        alert("lütfen tüm kutucuklari doldurunuz")
    }
}


function tek(){
    document.getElementById("dv").style.display="none"
    document.getElementById("dvv").style.display="flex"
    document.getElementById("es").value=""
    document.getElementById("ess").value="" 
    document.getElementById("mm").value="" 
    document.getElementById("yy").value="" 
    document.getElementById("ha").value=""

    document.getElementById("sfr").innerHTML="000"
    document.getElementById("b").innerHTML="0000 0000 0000 0000" 
    document.getElementById("c").innerHTML=" JANE APPLESEED" 
    document.getElementById("d").innerHTML="00" 
    document.getElementById("e").innerHTML="00"


}