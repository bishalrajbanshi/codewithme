
//return can reaturn the single value

function add(a,b){
    return a+b
}
console.log(add(2,2));


//return the object
function obj(){
    return cars = {
        name:"lemborgini",
        model:2025
    }
}
console.log(obj());

//retutn the array
function arr(){
    return str = ["bishal","rajbanshi"]
}

console.log(arr());



//nested  functions
function outerfun(){
    let x = 10 //this vlariable can be used in inner function
    let y = 10

    function addinner(x,y){ //function scope
        let st = "sva" //this cannot be used in outer function
        return x+y
    }
    console.log(addinner(x,y));
    
}
outerfun()



let greet = "hello"

function chgreet(){
    let greet  = "namasta"
    console.log(greet);
     
    function inngreet(){
        console.log(greet); 
    }   
    inngreet()
}

console.log(greet);
chgreet()


//function expression
//nameless function  const variablename = function(arg1,arg2..){
// do or return something
// }

let sum = function(x,y,z){
    return x+y+z
}

console.log(sum(sum(2,2,2)+2,2,2));



//higher order function
function gret(){
    console.log("hello");
}

function ptrgret(fun,num){
    for(let i = 0; i<num; i++){
        fun()
    }
}
ptrgret(gret,4)


 

//higher order function return
function odev(request){
     if (request == "even") {
        return function(n){
            console.log(n % 2 == 0);
        }
       
     }
     else if (request == "odd") {
        return function(n){
            console.log(n % 2 != 0);
        }
    
     }
     else{
        console.log("incorrect request");
     }
}
let request = "odd"
let func = odev(request)
func(4) 