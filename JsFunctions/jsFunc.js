//normal function
function name(){
    console.log("bishal");
}
name()


// 1 to 5
function oneToFive(){
    for(let i = 1; i <= 5; i++){
        console.log(i);
    }
}
oneToFive()


//display dice value  1 to 6

function dice (){
    console.log("Dice",Math.floor(Math.random() * 6) + 1);
}
dice()



//function with arguments
function car(name,model){
    console.log(`Name is ${name} Model is ${model}`);  
}

//passing the parameter
car("fortuner",2021)
//in function with argument the value should pass according to the parameter sequence
car(2023) //diaplay wrong information
