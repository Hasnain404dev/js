// const userLoggedIn=true;
// const userRole='admin'; // Possible values: 'admin', 'editor', 'viewer'

// Using if-else statements to determine access level           
// if (userLoggedIn) {
//     if (userRole === 'admin') {
//         console.log('Access granted: You have full access.');
//     }}


// switch case statement
// let  number =4;
// switch (number) {
//     case 1:
//         console.log("number is 1")
//         break;
//     case 2:
//         console.log("number is 2")
//         break;
//     case 3:
//         console.log("number is 3");
//         break;

//     default:
//         console.log("number is not 1,2 or 3")
//         break;
// }


// const userLoggedIn=true;
// const userRole='viewer'; // Possible values: 'admin', 'editor', 'viewer'
// if (userLoggedIn) {
//     switch (userRole) {
//         case 'admin':
//             console.log('Access granted: You have full access.');
//             break;
//         case 'editor':
//             console.log('Access granted: You can edit content.');
//             break;  
//         case 'viewer':
//             console.log('Access granted: You can view content.');
//             break;
//         default:
//             console.log('Access denied: Unknown role.');
//             break;
//     }   }

// falsy value
// false 0 '' bigint 0n, null undefined NaN
// truthy value
// true 1 'abc' '0' 'false' [] {} function(){}


let array=[]
if(array.length===0){
    console.log("array is empty")
}

let obj={}
if(Object.keys(obj).length===0){
    console.log("object is empty")
}
// nullish coalesecing operator (??)
let number=null ??10;
console.log(number) // it will give 10 because nullish coalesecing operator check for null and undefined only
number=undefined ??10;  
console.log(number) // it will give 10 because nullish coalesecing operator check for null and undefined only
// this is use to check the value is null or undefined because both are falsy value and mostly came from database
let userColor=null
let defaultColor='blue'
let currentColor=userColor ?? defaultColor
console.log(currentColor) // it will give blue because userColor is null

// ternary operator
let age=17
let canVote=age>=18 ? "yes you can vote":"no you can not vote"
console.log(canVote)

