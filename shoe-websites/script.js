// variables
const centerimg=document.querySelector(".images-center-img")

let imgs=document.querySelectorAll(".flex-img");

//loops
for(let i=0;i<imgs.length;i++){

    imgs[i].addEventListener("click",function(){
      centerimg.src=imgs[i].src;

    })

}
 

// with for each
/* imgs.forEach((img,i)=>{

  img.addEventListener("click",function(){
    centerimg.src=imgs[i].src;

  })

})
 */