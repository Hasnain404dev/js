// const number=100;
// const score= new Number(200)
// console.log(score)
// 1st method of number to string
// const newScore=score.toString()
// console.log(newScore,typeof newScore)
// 2nd method to fixed method is used to add fixed number after the decimal point and its return string 
// let price = 100
// let discount = 15.123456
// console.log(price.toFixed(2),typeof price.toFixed(2))
// console.log(discount.toFixed(3),typeof discount.toFixed(3))
// 3rd method  is toPrecision is used to return the number with specified length if user want to return 4 number total with decimal number and it define reange of 4 and the number is 12.456 then it round the number and return 12.46
// also it return string

// let num=123.656789
// console.log(num.toPrecision(3),typeof num.toPrecision(3))
// if the number is 12125.456789 and user want to return 4 number then it return exponential form 
// let num1=12125.456789
// console.log(num1.toPrecision(4),typeof num1.toPrecision(5))

// tolocalestring method is used to convert the number into local string form
// let cost=1000000
// console.log(cost.toLocaleString("en"),typeof cost.toLocaleString("en"))


// ============== Math library =============
// console.log(Math)
// abs // it return the absolute value of the number its return positive value
// console.log(Math.abs(-5))
// Math.round // it return the nearest integer value
// console.log (Math.round(4.5)) // 5 if the . number is 0.5 or greater it round up
// console.log(Math.round(4.4)) // 4 if the . number is less
// ceil method it provide the higer integer value of the after decimal number is lower the .5 or higher it return the next integer value
// console.log(Math.ceil(4.1)) // 5
// math.floor // it provide the lower integer value of the after decimal number if the number is higer then .5 it always return the lower integer value
// console.log(Math.floor(4.9)) // 4


// Math.min // it return the minimum value from the given numbers
// console.log(Math.min(1,2,3,4,5,-1)) 
// Math.max // it return the maximum value from the given numbers
// console.log(Math.max(1,2,3,4,5,-1))


// Math.random // it return the random number between 0 and 1
// console.log(Math.random())
// let minvalue=20;
// let maxvalue=30;
// console.log(Math.floor(Math.random()*(maxvalue-minvalue+1))+minvalue) // it return the random number between the given range

// console.log(Math.random())
//  console.log(Math.random()*10) //this use to return the random number between 0 to 10
// console.log(((Math.random()*10)+1).toFixed(0)) // this use to return the random number between 1 to 10 whith out after the ecimal number and same thing we can achive by math.floor
// console.log(Math.floor((Math.random()*10)+1))

// now we imagine the the dice game and we want to return the random number between 1 to 6
let min=50;
let max=60;

// now the calculation formula
console.log(Math.floor(Math.random()*(max-min+1)+min))