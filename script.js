// menu

let bars = document.querySelector(".fa-bars");
let close = document.querySelector(".fa-xmark")
let nav = document.querySelector("ul")

console.log(bars);

bars.addEventListener("click",()=>{
    nav.style.right = "200px";
    nav.style.cssText = "transition:.5s ease"
})

close.addEventListener("click",()=>{
   nav.style.right = "-650px"
})