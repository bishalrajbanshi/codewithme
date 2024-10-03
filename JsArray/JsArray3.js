// let arr = [1,2,3,4,5,6,7]

// arr[100] = "bishal"
// console.log(arr);



let st = [1, 2, 3, 4, 5]
let stt = [6, 7, 8, 9, 0]
// console.log(st.concat(stt));

// console.log(stt.reverse());
//in reverse the array is changed in original array


//slice
// slice("starting","ending")

const colors = [
    "red",
    "blue",
    "green",
    "yellow"
]

// console.log(colors.slice(0,5));
// console.log(colors.slice(6));


//splice
//splice(startidx,deletecount,item0,item1... or replace items....)  
//note delete count is optional 

// console.log(colors.splice(2)); //passing starting index work like slice
// console.log(colors.splice(0,2));//delete  first 2 index

console.log(colors.splice(0,1,"bishal","rajbanshi"))
colors.push("bishall")
console.log(colors);


//adding in the middle
colors.splice(3,0,"hello")
console.log(colors);

//deleting and replacing element in same position
colors.splice(6,1,"collage")
console.log(colors);

//sort method convert the numbses into string and short them this is used in char or string 
let ch = ['f','a','r','t']
console.log(ch.sort());


//using splice make like the start array to final
//final = ["july","june","march","august"]
let start = ["january","july","march","august"]
console.log(start);

start.splice(0,2,"july","june")
console.log(start);

let lang = ["c","c++", "html","javascript","python", "java"]
console.log(lang.reverse().indexOf("javascript"));

let name1 = "b"
let name2 = "b"
console.log(name1 === name2);


let arr = ['a','b','c']

let arr2 = ['a']
console.log(arr === arr2);

//array copy
let arrcpy = arr
console.log(arr);

arr.push("name")
console.log(arrcpy);
console.log(arr);


console.log(arr === arrcpy)
// note
//new array = new address



//the number is constant not array value
const number = [1,2,3]
number.push(77)
//this is not possible in constant array
// number = arr
console.log(number);


//nested array or multidimensional array
//to access the nums array value nums[row][col]
let nums =[[1,2],[3,4],[5,6,9,8]]
console.table(nums[2][2]);



let game = [
    ["x",null,0],
    [null,"x",null],
    [0,null,"x"]
]
console.table(game);
console.log(game[1][2]);

















