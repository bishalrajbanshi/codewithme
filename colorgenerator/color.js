
const btn  = document.querySelector(".btn")
const container  =  document.querySelector(".container")

btn.addEventListener('click',(e)=>{

    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    let rgbColor = `rgb(${red},${green},${blue})`
    console.log(rgbColor)

    container.style.backgroundColor = rgbColor;
})
