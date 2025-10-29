// high order array loops/ array specific loops

// for of loop
// [{},{},{}] this is most commanly used in array of objects that are driven from database

// let arr=["manu","sachin","dhoni","virat"];
// for (const value of arr) {
//     console.log(value)
// } 

//  we aslo use this loop in string
// let str="hello world";
// for (const char of str) {
//     if (char===" ") continue;

//     console.log(char)
// }

// map is another datatype in javascript
// map is known for the unique key value pair and the  it maintain order of insertion
const map = new Map();
map.set("name", "manu");
map.set("age", 24);
map.set("city", "Lahore");
// console.log(map.keys()) // it will give all keys of map
// console.log(map.values()) // it will give all values of map
// console.log(typeof map) // it will give object because map is a type of object
// map.delete("age") // it will delete the key value pair of age
// for(const [key, value] of map){
//     console.log(key,value)
// }

// in object we can not use for of loop directly because object is not iterable so we need to use Object.entries() method to convert object into array of arrays
// const game={
//     gameName:"pubg",
//     gameType:"fps",
//     gamePrice:1000,
//     gameDeveloper:"tencent"
// }
// for (const key in game) {
//    console.log(key,game[key])

// }
// for in loop also use in array but its not commanly used because it give the index of the array not the value of the array
//  let array=["manu","sachin","dhoni","virat"];
//  for (const key in array) {
//     console.log(array[key])


//  }


// for each loop

// let myarr=["manu","sachin","dhoni","virat"]

// myarr.forEach((value,key,index)=>{
//     console.log(value,key,index)
// })
// function print(item) {
//     console.log(item)
// }
// myarr.forEach(print)

let arr = [
    {
        name: "manu",
        age: 22
    },
    {
        name: "sachin",
        age: 48
    },
    {
        name: "dhoni",
        age: 41
    },
    {
        name: "virat",
        age: 30
    }
]
arr.forEach((val)=>{
    console.log(val.name,val.age)
})