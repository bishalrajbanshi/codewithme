// const student = {
//     name : "bishal",
//     marks:100,
//     prop :this, //global scope //window object
//     getName: function (){
//         console.log(this);//for this function this refers to the  object i.e student
//         return this.name
//     },
//     getMarks: () =>{
//         // return this.marks  [for arrow function this = parent scope]
//         return student.marks //calling object this 
//     },
//     getInfo1: function(){
//         setTimeout(()=>{
//             console.log(this)//student object
//             console.log("apne collage"); 
//         },2000)
//     },
//     getInfo2: function(){
//         setTimeout(function(){
//             console.log(this) //window object
//             console.log("bishal");
//         },2000)
//     }
// }
// console.log(student);
// console.log(student.getName());


// console.log(student.getInfo2);




// function hello(){
//     function callme(){ // in call stack it refers to global excution window object // node {empty} object
//         console.log("hello");
//     }
//     callme()
// }

// hello()


function setusername(username){
    this.username = username
    console.log("called");
    
}


function createUser(username,email,pwd){

    //call method is calling to another function but refrence is not holding ( to hold the refrence use your this )
    setusername.call(this,username)
    this.email = email
    this.pwd = pwd
}

const user = new createUser("bishal","bishal@gmail.com","12345")
console.log(user);
