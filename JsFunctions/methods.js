
//for each loop = goes to the each index of an array and doesnot suppot break or continue it works only for array element  arr.forEach(callback, thisArg)
//for of loop = it works any iterable object like array string etc support break and continue it give access only to the element not index


let arr = [1, 2, 3, 4, 5];
// forEach example (cannot break early)
arr.forEach(element => {
    if (element === 3) return; // This will just return from the callback, not stop the loop
    console.log("for each",element);
});


// for...of example (can break early)
for (const element of arr) {
    if (element === 3) break; // Stops the loop
    console.log("for of",element);
}

//for each example
let std = [
    {
        name:"bishal",
        age:20
    },
   {
        name:"aman",
        age:30
    },
    {
        name:"saradha",
        age:200
    }
]

//for each can be used in array only 
std.forEach(el=>{
    console.log(el);
})

//use split('') to convert the string into an array of characters.

let str = "my name is bishal i am learning javascript from apna collage"
// str.split('').forEach(el =>{ //this is done using split function it  converts the strint to array
//     console.log(el);
// })

//for of loop can be used in any iterable functions,methods,object etc
for (const element of str) {
    console.log(element);
}


/// map function
let num = [1,2,3,4,5,6,7,8,9,10]

let double = num.map((el)=>{
    return el * el //it returns the sqrt of each elements
})
console.log(double);


const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];
let name = users.map((el)=>{ //it is  used to transform or process each element of an array and return a new array with the results.
    return el.name
})
console.log(name);


//filter function
let nu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ev = nu.filter((el) => {
    return el % 2 == 0; // it returns the value according to the return confition it could be true or false
});
console.log(ev);

//Every Returns true if every element of array gives true for some function. Else returns false.
let numbs = [2,4,6,8,10,7]
let everyFunc = numbs.every((el)=>{
    return el % 2 == 0; //it return true because evely element in array return true give single value [logical AND]
})
console.log(everyFunc);

let somefunc = numbs.some((el) =>{
    return el % 2 == 0; // [logical OR]
})
console.log(somefunc);
 



//reducer function
let reducer = [1,2,3,4,5]
let rdx = reducer.reduce((res,ele) =>{
    console.log(res);
  return  res+ele
})
console.log(rdx);

//max in array
let max = [2,4,10,11,22,100,1,6,7]
// let m = -1
// for(let i = 0; i< max.length; i++){
//     if (max[i] > m) {
//         m = max[i]
//     }
// }
// console.log(m);


//max using reducer
//reducer function provide the single value result according to the condition 
let ans = max.reduce((result,element)=>{
    
    if (element > result) {
        return element
    }else{
        return result 
    }
})
console.log(ans);



//spread 
let arr1 =  [2,4,10,11,22,100,1,6,7]
// Math.max(arr1[0],arr1[1]) we dont need to pass the each individual value the spread function takes the individual value
let arr1res = Math.min(...arr1)
console.log(arr1res);
console.log(arr1); //printing in array
console.log(...arr1);//individual printing



arr1.push(9000)
console.log(arr1);

let arr2 = [...arr1]
arr2.push(22)
console.log(arr2);

let str1 = "hello bishal"
console.log(...str1);


let newarr = [...arr1,...reducer]
console.log(...newarr);
