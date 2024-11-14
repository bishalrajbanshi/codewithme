

class User{
     constructor(username){
          this.username = username
     }

     logMe(){
          console.log(`USERNAME : ${this.username}`);
          
     }
     
   static createId(){
          return `1234`
     }
}

const bishal = new User("bishal")
// console.log(bishal.createId());
console.log(User.createId());


class teacher extends User {
     constructor(username,email){
          super(username)
          this.email = email
     }
}

const iphone = new teacher("iphone","i@gmail.com")
// iphone.logMe();
iphone.createId()


//In your code, you are trying to call bishal.createId(), but createId is defined as a static method in the User class. Static methods are not available on instances of the class; they are called directly on the class itself.