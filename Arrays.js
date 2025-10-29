// const arr1=[1,2,3,4,5];

// array method
// push method is use to add element at the end of the array
// arr1.push(6)
// console.log(arr1);
// pop method is use to remove element from the end of the array
// arr1.pop()
// console.log(arr1);

// unshift method is use to add element at the beginning of the array
// its not a good practice to use because it shifts the index of all the elements
// arr1.unshift(0)
// console.log(arr1);

// shift method is use to remove element from the beginning of the array\ its not need a argument
// arr1.shift()
// console.log(arr1);

// .includes() method is use to check if an element is present in the array or not
// console.log(arr1.includes(6))

// indexof method is use to find the index of an element in the array
// console.log(arr1.indexOf(3))

// join method is use to join all the elements of the array into a string we aonly need to provide the separator like - , or space
// its return a string
// console.log(arr1.join());

// const arr2=[0,1,2,3,4,5];
// now slice method is use to extract a part of the array and it takes two arguments one is starting index and ending index
// const newArr=arr2.slice(1,4);
// console.log(newArr);
// console.log(arr2);
// console.log("------------------");
// const arr3=[0,1,2,3,4,5];
// console.log(arr3);
// now splice method is use to add or remove elements from the array and it takes three arguments one is starting index second is number of elements to be removed and third is the element to be added
// const newArr1=arr3.splice(0,3);
// const newArr1=arr3.splice(0,3,3);
// console.log(newArr1);
// console.log(arr3);  
// console.log(arr3.lastIndexOf(3))



// more methods of array

// merge two arrays

const marvel=["ironman","spiderman","thor"]
const dc=["batman","superman","flash"]
const xmen=["wolverine","deadpool","storm"]
// it will add the dc array as a single element in the marvel array But it not merger the arrays
// marvel.push(dc) 
// console.log(marvel[3][1])

// it will merge two arrays  and return a new array
// let allHeroes=marvel.concat(dc)
// console.log(allHeroes)
//  now we can also use spread operator to merge two arrays or more arrays

// let allHeroes=[...marvel,...dc,...xmen]
// console.log( typeof allHeroes)

let mixedArr=[1,2,3,[4,5],6,7,8,[9,10,[11,12,]]]
// flat method is use to flatten (make it single array) //the array and it takes one argument which is the depth of the array
let newMixedArr=mixedArr.flat(2)
console.log(newMixedArr)

console.log(Array.isArray("hello")) // it is use to check if the given value is an array or not it return a boolean value    
console.log(Array.from("hello"))  // return value to array 
console.log(Array.from({name:"manu"}))  // return an empty array because it is not iterable so we need to provide an iterable object so we need to tell that make a array using key  or using value
// array.of is use to create an array from the given values like variable or constant
let score=100;
let score2=300;
let score3=200;
console.log(Array.of(score,score2,score3)) // it will create an array from the given values