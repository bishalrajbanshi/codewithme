function showTme(){
    let date = new Date()
    //get hour
    let hours = date.getHours()
    //get minuits
    let minuites = date.getMinutes()
    //get seconds
    let seconds = date.getSeconds()

    //this is to show the two digits for h,m,s
    hours = hours < 10 ? '0'+ hours : hours;
    minuites = minuites < 10 ? '0'+ minuites : minuites;
    seconds = seconds < 10 ? '0'+ seconds : seconds;

    //construct it in one variable
    let updatedTime = `${hours}:${minuites}:${seconds}`

//get the text field form htmla
    let currentTime = document.querySelector('.times')
    currentTime.innerHTML = updatedTime
}

setInterval(showTme,1000)

showTme()