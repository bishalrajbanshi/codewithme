//get the display field
let display = document.querySelector('.disp')
//get all the buttons
let btns = document.querySelectorAll('button')
//initialize count with 0
let count  = 0

//using for each loop for iterating over each button
btns.forEach(button => {
    //addint event listner to button
    button.addEventListener('click',(e)=>{
        if (e.target.classList.contains('inc')) {
            count++;
        }
        else if(e.target.classList.contains('dec')){
            count--;
        }
        else if (e.target.classList.contains('res')) {
            count = 0;
        }

        display.textContent = count;
    })
});