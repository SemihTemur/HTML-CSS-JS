/* buttons */
const add=document.querySelector(".add")
const clear=document.querySelector(".clear")
/* text */
const text =document.querySelector(".list")

let containertext=document.querySelector(".container-bottom")

let paragraphs;


/* functions */

add.addEventListener("click",adds) 
clear.addEventListener("click",clears)

function adds(){
    const node=document.createElement("p")
    const textnode=document.createTextNode(text.value)
    node.appendChild(textnode)
    node.classList.add("paragraph")
    containertext.appendChild(node)
    text.value=""
     paragraphs=document.querySelectorAll(".paragraph") 
  
            node.addEventListener("click",function(){
                this.style.textDecoration= "line-through"; 
                node.addEventListener("click",function(){
                    this.remove()
                })
            })

          
            
       
 
}

function clears(){
    for(let i=0;i<paragraphs.length;i++){
        paragraphs[i].remove()
    }
}


