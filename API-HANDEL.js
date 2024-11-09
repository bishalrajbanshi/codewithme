

const userdata = fetch("https://api.github.com/users/bishalrajbanshi")

userdata
.then((response)=>{
     return response.json()
})
.then((userData) => {
     // console.log(`user data ${userData}`);
      userData.city ="India"
      return userData
})
.then((arrayData)=>{
     //converting object to array
     //entities make all the object to array
     //values makes only one array 
     const newVal = Object.entries(arrayData)
     console.log("Array Data",newVal);
     
})
// .then((updatedData) => {
//      // console.log(`user data ${userData}`);
//      const [login,id] = updatedData
//      console.log("optional data",login,id);
// })
.catch((err)=>{
     console.error(err);
     
})

const arr = [['name', 'John'], ['age', 30], ['country', 'USA']];

//converting array to object
const obj = Object.fromEntries(arr);
console.log(obj);

