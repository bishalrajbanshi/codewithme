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



//avg of 3 num
function avg(a,b,c){
    let av = (a+b+c) / 3
    console.log(av);
}
avg(55,55,33)


//multiplication table

function table(num){
    for(let i = 1; i <= 10; i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
}

table(2) 


//return value
function sum(a,b){
    return a + b
}
//callig sum function multiple times
let result = sum(sum(sum(4,4),4),4)
console.log(result);


//concinate array string
let str = ["hi","hello","buy"]

function concat(st){
    let rest = ""
   for(let i = 0; i < st.length; i++){
    rest += st[i]
   }
return rest
  
}
console.log(concat(str));
