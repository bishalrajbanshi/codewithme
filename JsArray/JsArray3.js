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








