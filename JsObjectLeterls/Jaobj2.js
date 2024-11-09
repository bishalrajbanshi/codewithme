//distructuring arrray

// const name = ["bishal","admin","aa","bb","cc"]

// let [winner,second,third,...others] = name
// console.log(winner,second,third,others);



//distructuring object 
const student = {
    name:"bishal",
    age:14,
    class:10,
    subject:["hindi","english","math","science"],
    username:"@bishal"
}
//eg we need username and subject only
let {username,subject} = student
console.log(username,subject);
let {username:uname} = student
console.log(uname);
let {city  = "mumbai"} = student
console.log(city);
console.log(student);



const obj = Object.entries(student)
console.log(obj[0][0]); //array

let arr = [1,2,3,4,5]//index of array are key and element are value
let newarr = {...arr} 
console.log(arr);




//giving the defult valut for city
// let {username:user,name,age,city="wb"} = student
// console.log(user,name,age,city);




function sum(...args){
    return args.map((el)=>el*2)
}
console.log(sum(2,3,4,5));


