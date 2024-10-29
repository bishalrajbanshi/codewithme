function fetchuserdata (userId){
    console.log("hello");
    

fetch(`https://api.example.com/users/${userId}`)
.then( (respond) => {
    console.log("RESPOND RECIVED");
    if (!respond) {
        throw new Error("User not found");
    }
    return respond.json();
})
.then( (userdata) =>{
    console.log(`user data : ${userdata}`);
})
.catch(error => {
    console.error(`error fetching user data`);
})
console.log("fatch initiated");

}
fetchuserdata(1)