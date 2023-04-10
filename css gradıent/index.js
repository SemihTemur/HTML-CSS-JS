// variables
const a= $("#blac");
const b=$("#whit");
const body=$("#body");
const text=$("#sn");

var dizi=[
    "A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"
]

$("#btn").click(function (){
var yazi="#";
let yaz="#";
for(let i=0;i<6;i++){
    var random=Math.floor(Math.random()*15)
    yazi+=dizi[random];
    var random1=Math.floor(Math.random()*15)
    yaz+=dizi[random1];
}
updateColor(yazi,yaz)
a.val(yazi);
b.val(yaz)
String(yazi,yaz);

body.css({
"background":"linear-gradient(90deg" + "," +yazi+","+yaz+")"

});


})
function updateColor(yazi,yaz){
    text.text( " "+yazi+","+" "+yaz)
};
function change(){

    body.css({
        "background":"linear-gradient(90deg" + "," +a.val()+","+b.val()+")"
        
        });
var x=a.val()
x=x.toUpperCase()
var y=b.val();
y=y.toUpperCase()
        text.text( " "+x+","+" "+y)

}
    
        

function change1(){

    body.css({
        "background":"linear-gradient(90deg" + "," +a.val()+","+b.val()+")"
        
        });
var x=a.val()
x=x.toUpperCase()
var y=b.val();
y=y.toUpperCase()
        text.text( " "+x+","+" "+y)

}
    


