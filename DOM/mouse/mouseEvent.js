const pr = document.querySelector('.prg')
const btn = document.querySelector('.btn')

pr.addEventListener('mouseover',()=>{
    pr.style.background = "red"
})
pr.addEventListener('mouseleave',()=>{
    pr.style.background = "green"
})



btn.addEventListener('dblclick',()=>{
    console.log("hello");
    window.style.background = "black"
})

const inp = document.querySelector('.inp')

inp.addEventListener('keydown',()=>{
    console.log("pressed");
    // console.log(event.key);
    console.log(event.code);
    
    
    
})