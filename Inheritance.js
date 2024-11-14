

class User {
     constructor(username) {
          this.username = username
     }

     logMe() {
          console.log(`username is ${this.username}`);

     }
}


class Teacher extends User {
     constructor(username, email, password) {
          //super keyword bring the USer username automatically
          super(username)
          this.email = email
          this.password = password
     }

     addCourses(){
          console.log(`New course is add by : ${this.username}`);
          
     }
}

const chai = new Teacher("bishal","bishal@gmail.com","123")
chai.addCourses()


const tea = new User("admin")
tea.logMe()

console.log(chai instanceof Teacher);
console.log(chai instanceof User);
console.log(tea instanceof Teacher);
