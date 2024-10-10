//Methods 
//object leterls with functions
const calsulate = {
    add:function(a,b){
        return a+b
    },
    sub:function(a,b){
        return a-b;
    }
}
console.log(calsulate.add(4,4));
console.log(calsulate.sub(4,4));
 

//this keywords
//this Keyword  "This" keyword refers to an object that is executing the current piece of code.
const std  = {
    name: "bishal",
    age: 21,
    eng: 33,
    math:100,
    phy:88,

    getAvg(){
        //we cannot directly access the std key so to access the key we use this keyword
        console.log(this);
        
        let avg = (this.eng + this.math + this.phy) / 3
        console.log(avg);
        
    }

}


std.getAvg()



