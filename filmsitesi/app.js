const arrows=document.querySelectorAll(".arrow");
const movieLists=document.querySelectorAll(".movie-list");
arrows.forEach((arrow,i)=>{
    const widthRadio=Math.floor(window.innerWidth / 300);
    let clickcounter=0;
    const imageItem=movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click",function() { 
        clickcounter++;
        if(imageItem - (4 + clickcounter)+(4 - widthRadio) >= 0){
            movieLists[i].style.transform=`translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
            }px)`;

        } else{
            movieLists[i].style.transform="translateX(0)"
            clickcounter=0;
        }
    })
});

//dark mode
const ball=document.querySelector(".toggle-ball")
const items=document.querySelectorAll(".container,header,#lnk,.sidebar,.sidebar i,#tg,.movie-list-filter select,#bal,#tit");
ball.addEventListener("click",function(){
items.forEach((item)=>item.classList.toggle("active"))


})