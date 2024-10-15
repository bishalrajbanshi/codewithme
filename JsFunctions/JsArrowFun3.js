//arrow functions it is used as a value 
// const function = (arg1,arg2,...)=>{
    //code
// }


const mul = (a,b)=>{
   // console.log(a*b);
   return a*b
}
// mul(2,2)
console.log(mul(2,2));



//arrow function 
//implicite (automatic) return
const sum = (a,b) =>(a+b)
console.log(sum(3,3));


//set time out
//setTimeout("function i.e callback function",time)
console.log("hello!");

setTimeout( () =>{
    console.log("bishal");
},4000)

console.log("buy");

//set time interval 
// time -> excute -> time -> excute

let idx = setInterval(() => {
    console.log("apna collage");
    
}, 2000);


 