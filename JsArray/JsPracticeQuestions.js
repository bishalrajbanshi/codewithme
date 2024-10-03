
// // In js string is immutable

// //trim and conver tinto uppercase 
let msg = "  help "
console.log(msg.trim().toUpperCase())
//finde the index of "g"
let str = "collage"
console.log(str.indexOf("g"))

// //replace "I" with "T"

console.time()
let st = "apnacollage"

console.log(st.repeat(2));


newstr  = st.slice(4).replace('l','t').replace('l','t')
console.log(newstr);

console.timeEnd()



//js program to get the number  n element of an array [n can be positive number]
let arrPv = [9,2,-3,4,-1,-8]
let n = 3;

//first 3 element
console.log(arrPv.slice(0,n));


//last 3 element
console.log(arrPv.slice(arrPv.length - n));


//check wether string is blank or not 
let str1 = "";
if(str1 === ""){
    console.log(true);
}
else{
    console.log(false);
}

//check the character is lowercase or not
let str2 = "fsnfj"
console.log(str2[2]);
if (str2 === str2.toLowerCase()) {
    console.log(true);
}
else{
    console.log(false);
}


//nested array 
let country = [["INDIA","NEPAL","CHINA","BHUTAN"],["USA","UK","CANADA"],["DENMARK","KAWIT","SIRLANKA"]]

// for(let i  = 0; i < country.length; i++){
//     console.log(i);
//   for(let j = 0; j < country[i].length; j++){
//     conso  le.log(j,country[i][j]);
    
//   }
// }


//for of loop it helps to access the collections of items
let ctr = ["INDIA","NEPAL","CHINA","BHUTAN"]
for(ctr of ctr){
console.log(ctr);
}


//for of loop for char

for(ch of "bishalrajbansh"){
    console.log(ch);   
}







