// const course = {
//     coursename:"js course",
//     price: "999",
//     courseinstructor:"bishal"
// }

// const {courseinstructor} = course
// console.log(courseinstructor);


//json format
//  

// function fetchdata() {
//     console.log("data fetching"); 
//     fetch("https://api.github.com/users/bishalrajbanshi")

//         .then((respond) => {
//             return respond.json()
//         })
//         .then((userdata) => {
//             console.log("Bishal", userdata);
//         })
//         .catch((err) => {
//             console.error(err);
//         })

//         console.log("data fetched complited");

// }
// fetchdata()



async function fatchuserdata() {
    console.log('Fetching user data...');
    try {
        const res = await fetch("https://api.github.com/users/bishalrajbanshi")
        const userdata = await res.json()

        console.log(userdata);


    } catch (error) {
        console.error(error);

    }

    console.log("completed");
    
}
fatchuserdata()