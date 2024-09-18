const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
const reset = document.getElementById('reset')
const count = document.getElementById('count')

increase.addEventListener('click', () => {
    count.innerText = parseInt(count.innerText) + 1
    })
decrease.addEventListener('click',() => {
    count.innerText = parseInt(count.innerText) - 1
})
reset.addEventListener('click',() => {
    count.innerText = 0
})
