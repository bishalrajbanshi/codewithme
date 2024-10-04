//Qs1.  Write  a JS programto deleteall  occurrencesof element‘num’in a givenarray   .Example  : ifarr  = [1,  2, 3, 4, 5, 6, 2, 3]&num  = 2Resultshouldbearr  = [1,3,4,5,6,3]

let arr = [1, 2, 3, 4, 5, 6, 2, 3]
let n = 2

// let i = 0
// while (i <= arr.length) {
//     if (arr[i] == 2) {
//         arr.splice(i,1)
//         console.log(arr);  
//     }
//     i++
// }

arr.forEach(element => {
    if (arr[element] == 2) {
        arr.splice(element,1)
        console.log(arr);
        
    }
})



//Qs2.  Write  a JS programto find  the  no of digitsin a number.Example  : if number = 287152,count= 6

let num = 287152
let count = 0
// let temp = num

while (num > 0) {
    count++
    num = Math.floor(num / 10)
    console.log(count);
    
}


//Write  a JS programto find  the  sum  of digitsin a number.Example  : ifnum  ber  = 287152,sum  = 2

let num1 = 287152
let sum = 0

while (num1 > 0) {
    lastnum = num1 % 10
    sum += lastnum
    num1 = Math.floor(num1/10)
}
console.log("sum",sum);


//Qs4.  Printthe  factorialof a num  ber  n.[F actorialof a num  ber  n is the  productof all  positiveintegers less   than   or equalto agivenpositiveintegerand  denotedby that   integer. ]Example  :7! (factorialof 7) = 1x2x3x4x5x6x7= 50405! (factorialof 5) = 1x2x3x4x5= 1203! (factorialof 3) = 1x2x3= 60! Is always1


let fact = 7
let res = 1;
for(let i = 1; i<=fact; i++){
   res *= i
}
console.log("factorial",res);


//Qs5.  Find  the  largestnum  ber  in an arraywith   only   positivenum  bers

let arr2 = [1, 2, 3, 4, 5, 6, 2, 3]
let largest = 0;
//iterating each element
for(let i =0; i<arr2.length; i++){
if (arr[i]>largest) {
    largest = arr[i]
}
}

console.log("largest number",largest);

