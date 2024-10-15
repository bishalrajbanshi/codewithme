
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
