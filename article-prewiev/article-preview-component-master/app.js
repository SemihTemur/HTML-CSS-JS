/* variables */
const black=document.querySelector("#share-black")
const shareactive=document.querySelector(".share-click")
const white=document.querySelector("#share-white")

/* EVENTS */
black.addEventListener("click",function(){
    shareactive.classList.toggle("active")
})

 white.addEventListener("click",function(){
    shareactive.classList.remove("active")
}) 