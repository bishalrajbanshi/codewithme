let info = [["bishal",88,77,"india"],["math","science"]]
console.table(info[0][0])
console.log(info.length);


// arrays are muitable
let name = ["bishal","admin"]
name[5] = "aa"
name[4] = "vv"
console.log(name);
console.log(name.length);

//array methods 
// push: add to end
//pop:delete from end
//unshift:add to start
//shift: delete from start

name.push("akash") //added to end
console.log(name);
name.pop() //delete from end
console.log(name);

name.unshift("ajay")//added to start
console.log(name);

name.shift()//delete from start
console.log(name);


let contact = [99,44,222,2213,453,114,525]
console.log("contact",contact);
let block = contact.shift()
console.log(block);

// ["january","july","march","august"] state
// ["july","june","march","august"] finaloutput

let months = ["january","july","march","august"]

console.log(months);
//removed
months.shift()
months.shift()
console.log(months);

// added
months.unshift("june")
months.unshift("july")
console.log(months);














