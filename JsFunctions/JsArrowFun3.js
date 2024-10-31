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


// Qs2. Create a new array using the map function whose each element is equal to the original element plus 5

let numbers = [2,3,4,5]

console.log(numbers.map((numbers)=> numbers + 5));



//. Create a new array whose elements are in uppercase of words present in the original array

let personNames = ["bishal","admin","akash"]
console.log(personNames.map((ele)=> ele.toUpperCase()));



//Write a function called doubleAndReturnArgs which accepts an array and avariable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled

const doubleReturnArgs = (arr4,...args0)=>[
    ...arr4,
    ...args0.map((el)=>el*2),
]

console.log(doubleReturnArgs([1,2,3],4,4));


//. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object


const meargobj = (obj1,obj2)=>(
    {...obj1,...obj2}
)
console.log({name:"bishal"},{name:"admin"});
