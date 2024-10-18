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

// let idx = setInterval(() => {
//     console.log("apna collage");
    
// }, 2000);

// Qs1. Square and sum the array elements using the arrow function and then find the average of the array
 

let nums = [2,4,6,8,10]
let sqrt = nums.map((nums)=> (nums * nums))
let sqtsum = sqrt.reduce((acc,el)=>(acc+el))
let avg = sqtsum /nums.length

console.log(sqrt);
console.log(sqtsum);
console.log(avg);
