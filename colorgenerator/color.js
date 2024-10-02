
const btn  = document.querySelector(".btn")
const btn2  = document.querySelector(".btn2")
const colorName = document.querySelector(".colorcode")
const colorName2 = document.querySelector(".colorcode2")
const colorbox = document.querySelector(".colorbox")
const colorbox2 = document.querySelector(".colorbox2")


//rgb color code generator
btn2.addEventListener('click',(e)=>{

    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    let rgbColor = `rgb(${red},${green},${blue})`


    colorbox2.style.backgroundColor = rgbColor;
    colorName2.textContent = rgbColor;
    colorName2.style.color = rgbColor;
    
})



//hex color code generator
let hex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
btn.addEventListener('click',(e)=>{
    
    let hexcolor = '#'
    let i = 1;
    while (i <= 6) {
        let randomidx = Math.floor(Math.random() * hex.length)
        hexcolor = hexcolor +  hex[randomidx]
        i++;
    }

    colorbox.style.backgroundColor = hexcolor;
    colorName.textContent = hexcolor
})

// colorbox.addEventListener("mouseover",(e)=>{
//     colorbox.style.borderRadius = "200px";
//     colorbox.style.transition = "2s";
// })
// colorbox.addEventListener("mouseout",(e)=>{
//     colorbox.style.borderRadius = "0px";
//     colorbox.style.transition = "2s";
// })


