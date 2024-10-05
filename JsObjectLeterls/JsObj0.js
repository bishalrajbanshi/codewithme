//js object leterls
//used to store keyed collection and complex entites


//property=>(key,value)pair
//object are a collection of properties
//it is used to store the complex data


//arraydecleration has not clearity
// let std = ["bishal",00,"India"]

//object leterls
const student = {
    name : "bishal",
    age : 21,
    address : "India"
}
console.log(student);

const product =  {
    name:"apple",
    price:900,
    locations:["kasmir","mustang"]
}
console.log(product);
console.log(typeof(product));

//Create an object literal for the properties of threadl twitter post which includes -
//in js the onject leterals key is converted into string 

const post = {
    username:"@name",
    content:"video",
    likes:100,
    repostt:11,
    tag:["@apnacollage","delta","sigma"] 
}

console.log(post.repostt);


const obj = {
    null:"a",
    undefined:"hello",
    true:"jsf",
    1:"gg"
}
console.log(obj.undefined);


//add and update value in object
const students = {
    name : "bishal",
    age : 21,
    address : "India"
}
console.time();

console.log(student);
students.address = "Delhi"
console.log(students);
students.gender = "female"
console.log(students);
students.marks = [33,44,55,55,44,44]
console.log(students);
delete students.gender
console.log(students);
console.timeEnd()
 
//student.access existing key = updatevalue
//student.new key = value 
//to delete object.keyname




//nested object
const carInfo ={
    //obj for toyota
    toyota : {
        xuv: ["fortuner","landcruser"],
        mpv:["innova","hycross"],
        sportscar:["sura","chmery"]
    },
    mahindra : {
            xuv:["scorpio","scorpioN"],
            offroad:["thar"]
    },
    bmw : {
        xuv:["bmwx5","bmwx7"],
        coupa:["bmwx6"],
        sportscar:["bmwm8 compitition","bmwm6"]
    }
}
console.log(carInfo.bmw)
//pushing the new data on sports car array
carInfo.bmw.sportscar.push("bmwMotarad")
console.log(carInfo.bmw);
//creating new key and value 
carInfo.mahindra.loader = "camper"
//this is also called method channing
carInfo.mahindra.offroad.push("thar rocks 5 door") 
console.log(carInfo.mahindra);


//array of objects
const classInfo = [
    {
        name:"bishal",
        grade:"A",
        standerd:"undergraduate"
    },
    {
        name:"admin",
        grade:"B",
        standerd:"graduate",
        subject:["math","science"]
    },
    {
        name:"akash",
        grade:"c",
        standerd:"undergraduate"
    },
]
console.log(classInfo);
//array object no[1].arrayname.push("value")
classInfo[1].subject?.push("computer")
console.log(classInfo);
//adding new key value in array object[2]
classInfo[2].faculty = "bsc"
console.log(classInfo);
//updating existing value on array object
classInfo[0].standerd = "postgraduate"
console.log(classInfo);
//delete array object
// delete classInfo[0]
classInfo.splice(0,1)
console.log("final result",classInfo);
//delete array boject key value
// delete classInfo[1].standerd
// console.log("curret",classInfo);

console.log(classInfo.length);















