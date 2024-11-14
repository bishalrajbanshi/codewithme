
let myName = "bishal   "
String.prototype.trueLength = function(){
     console.log(`Original value: "${this}"`);
     console.log(`True length : ${this.trim().length}`);  
}

myName.trueLength()
"   admin     ".trueLength()


let names = ["bishal","admin"]

let useraccess = {
     bishal:"studentaccess",
     admin: "allaccess",

     getadminaccess: function(){
          console.log(`admin power ${this.admin}`);
          
     }
}

//giving power to object
Object.prototype.adminMethod = function(){
     console.log(`admin is present in all object`); 
}

// useraccess.adminMethod()
names.adminMethod()


//injecting power in array
Array.prototype.heyadmin = function(){
     console.log(`hey admin`); 
}
// useraccess.heyadmin()
names.heyadmin()


//inheritance
//harak object alag instance

const user = {
     name:"bishal",
     email: "bishal@gmail.com"
}
const Teacher = {
     makevideo: true
}

const teachingSupport = {
     isAvailable: false
}
const TAsupport = {
     makeAssitant: "js assigsment",
     fullTime: true,
     __proto__: teachingSupport
}

// Teacher.__proto__ = user

//modern syntax
Object.setPrototypeOf(teachingSupport,Teacher)



let uname = "  bishal"

Object.prototype.uppercase = function(){
     console.log(`${this.toUpperCase().trim().length}`);  
}

uname.uppercase()


