//Qs1. Write a JavaScript function that returns array elements larger than a number.

let arr = [8,9,10,1,2,3,4,5,6,7]
let num = 5
//elementts larger than a number
function getElement(arr,num){
    for(let i = 0; i < arr.length; i++){
        if (arr[i]>num) {
            console.log(arr[i]);
            
        }
    }
}
getElement(arr,num)


//. Write a JavaScript function to extract unique characters from a string. Example: str = “abcdabcdefgggh” ans = 

let str = "abcdabcdefgggh"
let ans = ""
//function to get all the unique element 
function getUnique(str){
    for(let i = 0; i < str.length; i++){
        let current = str[i]
        if (ans.indexOf(current) == -1) {
            //if current char is not added than add it else dont add
            ans += current
        }
    }
    return ans
}
console.log(getUnique(str));

