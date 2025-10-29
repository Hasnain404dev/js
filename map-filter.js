// map filter reduce in js

// const coding=['html','css','js','react','nodejs'];

// coding.forEach((value)=>{
//     console.log(value)
// })
 
// filter return the new array based on the condition
// let numbers=[1,2,3,4,5,6,7,8,9,10]

// let newnumber=numbers.filter((num)=>num>5)
// console.log(newnumber)

//  so this is how we can filter the array using for each loop 
//  const newnum=[]
//  numbers.forEach((num)=>{
//     if(num>5){
//         newnum.push(num)
//     }
//  })

 
// console.log(newnum)
// const books = [
//   { title: "The Silent Patient", genre: "Thriller", publish: 2019, edition: "First" },
//   { title: "Atomic Habits", genre: "Self-help", publish: 2018, edition: "Second" },
//   { title: "Educated", genre: "Thriller", publish: 2018, edition: "First" },
//   { title: "The Alchemist", genre: "Fiction", publish: 1988, edition: "Third" },
//   { title: "Sapiens", genre: "History", publish: 2011, edition: "First" },
//   { title: "Deep Work", genre: "Productivity", publish: 2016, edition: "Second" },
//   { title: "Dune", genre: "Science Fiction", publish: 1965, edition: "Fourth" }
// ];

// let userCart = books.filter((bk) => bk.genre === "Thriller" && bk.publish >= 2000 );
// console.log(userCart)


// now map 
// let numbers=[1,2,3,4,5,6,7,8,9,10]
// let mynum=numbers.map((num)=>num*2)
// console.log(mynum)
// chaining of map and filter
// let numbers=[1,2,3,4,5,6,7,8,9,10]
// let mynum=numbers.map((num)=>num*2).map((num)=>num+10).filter((num)=>num>20)
// console.log(mynum)


// reduce method in js
// it takes two argument one is a callback function and second is the initial value of the accumulator
let number=[1,2,3,4,5]
let sum =number.reduce((acc,crval)=>acc+crval*2,0)
console.log(sum)