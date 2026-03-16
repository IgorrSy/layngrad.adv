// NAVBAR SCROLL EFFECT
window.addEventListener("scroll",function(){
const nav=document.querySelector("nav")
if(window.scrollY>60){
nav.classList.add("nav-scroll")
}else{
nav.classList.remove("nav-scroll")
}
})

// FADE ANIMATION ON SCROLL
const elements=document.querySelectorAll(".fade")

const observer=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show")
}
})
})

elements.forEach(el=>{
observer.observe(el)
})