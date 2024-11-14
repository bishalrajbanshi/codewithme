function addnum(num){
     return num+5
}
addnum(3)
addnum.multiply = function(x){
     return x * 2
}

console.log(addnum.multiply(3));

// function multiply(x){
//      return x*2
// }

// addnum.multiply(3)

// console.log(addnum.multiply(3));

console.log(addnum(5));
console.log(addnum.power);
console.log(addnum.prototype);


//this => current context
function createUser(username,score){
     this.username = username
     this.score = score
}

createUser.prototype.increment = function(){
     //jisne v bolaya ha uska pass jao
     this.score++
}

createUser.prototype.printMe = function(){
     //jis ka matlab this
     console.log(`price is ${this.score}`);
     
}
// ya nehi chalage because {proprty inject huai ha jab function sa variable ma value transfer kare tab mane bataya nehi ke ya additional property aayi ha ya batana padaga with (new keyword)}
//new keyword creates new objects
const chai = new createUser("chai",30)
const tea = new createUser("tea",400)
chai.printMe()


/* 
 a prototype is an object that other objects can inherit properties and methods from. Every JavaScript function (when used as a constructor with the new keyword) has a property called prototype, which is also an object. This prototype object acts as a blueprint from which all instances of that function (object instances) inherit properties and methods.

Here's what happens behind the sceans when the new keyword is used:

A new object created: The new keyword initiates the creation of a new js object

A property is linked: The newly created object gets linked to the prototype of the constructor function.
This means that it has access properties and methods defined on the constructor's prototype.(js dont give constructor function through clsss ( it gives through new keyword))

The constructor function is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explict return value is specified fron the constructor , js assume this, the newely created object , to be the intended return value.

THe new object is returned: After the constructor function has been called, if it doesn't return a non-primitive  value (object,array,function, etc) , the newly created object is returned.

*/