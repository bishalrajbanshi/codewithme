// const promiseOne = new Promise((resolve, reject) => {
//     //async task
//     //db call
//     setTimeout(() => {
//         console.log("hello");
//             resolve()
//     }, 1000)
// })
// promiseOne.then(function () {
//     console.log("promess consume");

// })

// // second

// new Promise(function(resolve , rejecct ){
//     setTimeout(() => {
//         console.log("hello 2");
//             resolve()
//     }, 1000)
// }).then(function(){
//     console.log("hello 2 resolved");
    
// })

// const promessThree = new Promise(function(resolve ,reject){
//     setTimeout(() => {
       
//         resolve({username:"bishal"})
//     }, 1000)
// })

// promessThree.then(function(user){
//     console.log(user);
    
// })


//fourth
const promessFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({usernamefour:"bishal",password:"1234"})
        }else{
            reject("something went wrong")
        }
    }, 1000);
})

promessFour
.then((user) => {
    console.log(user);
    return user.usernamefour
    
})
.then((username)=>{
console.log(username);

})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("The promiss is resolve or rejected");
    
})
