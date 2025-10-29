let myDate= new Date()
console.log(myDate)
// now we learn the date and time
// console.log(myDate.toString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toISOString())


// if i want to create the date by myself;
// let myBirthday=new Date(2001,0,19,2,30) 
// console.log(myBirthday.toLocaleString())
// month start from 0 to 11
//  console.log(myBirthday.toLocaleString())
let myBirthday=new Date("2001-01-19")

// let mytimeStamp=Date.now()
// console.log(mytimeStamp)
// console.log(myBirthday.getTime()) it provide the time in millisecond from 1970 to the given date
// console.log(myBirthday.getFullYear())
//  console.log(Math.floor(Date.now()/1000)) //it chanage the millisecond into second
let newDate=new Date() 
console.log( newDate.toLocaleString("default",{month:"long",calendar:"gregory",hour12:"12"})) // it return the full month name
