console.log(Math.floor(-5.4));
console.log(Math.ceil(5.8));
console.log(Math.random());
console.log(Math.round(5,5));


//generate the random number using  1 to 100
//math.floor remove the decomal value and math.random takes the random number from 0 to 1 and * 100 + 1
console.log(Math.floor(Math.random() * 100) + 1);

// Qs1. Createa programthat generatesa randomnumberrepresentinga dice roll.[T he num  ber should be between1 and  
console.log(Math.floor(Math.random() * 6)+1);

//random number from 25 to 30
console.log(Math.floor(Math.random() * 5)+26);



//Qs2.  Create an objectrepresentinga car  that   storesthe  followingpropertiesfor  thecar:   nam  e, model,color   .Printthe  car  ’s n

const cars = {
    name : "ferarri",
    model: 919,
    color : "red"
}
console.log(cars);



//Qs3.  Createan objectPersonwith   their   nam  e, age  and  city  .Edit   their   city’   s originalvalueto changeit to “NewYork”.Add   a new  propertycountryand  set  it to the  UnitedStates.

const person = {
    name: "bishal",
    age : 21,
    city : "mumbai"
}
console.log(person);
person.city = "New York"
console.log(person);
person.country = "Uninted States"
console.log(person);






