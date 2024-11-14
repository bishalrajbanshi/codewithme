//jasahe new keyword ko kam ma loga ta constructor call hoga


class User {
     constructor(username,email,password){
          this.username = username
          this.email = email
          this.password = password
     }

     encryptPassword(){
          return `${this.password}abc`
     }

     capitalUsername(){
          return `${this.username.toUpperCase()}`
     }
}

const user = new User("bishal","bishal@gmail.com","1234")
console.log(user.encryptPassword());
console.log(user.capitalUsername());


//behind the scean
function User(username,email,password){
     this.username = username
     this.email = email
     this.password = password
}

User.prototype.encryptpassword = function(){
      return `${this.password}abc`
}


const users = new User("bishal","bishal@gmail.com","1234")
console.log(users.encryptpassword());

