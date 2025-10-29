// this and arrow functions
// this keyword refers to the object it belongs to
// in arrow function this keyword refers to the global object
// const obj={
//     name:"username",
//     website:"manu.com",
//     price:399,
//     getinfo:function(){
//         console.log(`${this.name},Welcome to ${this.website} your monthly subscription is ${this.price}` )
//         console.log(this)
//     }
// }
// console.log(obj.getinfo())
// obj.name="manu Dalol"
// console.log(obj.getinfo())
//console.log(this) // this is refer to the global object in console in browse and gave the empty object in node enviorment
//this keyword is use to provide th currunt context of the object
    
// function myfun(){
//     console.log(this) // now it gave global value because its not in any object so it refer to the global object
// }
// myfun()

// arrow function
// this is Explemple of arrow function and this is explicit return
//in this return is use to return the value from the function
// const addNumber=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addNumber(4,5))
// now implicit return in this return is not use to return the value from the function
// const addnum=(num1,num2)=> num1+num2
// console.log(addnum(4,5))

// also we use (num1+num2) or for object we use ({key1:value1,key2:value2})
// const manu=(num1,num2)=> (num1+num2)
// console.log(manu(4,5))
// const username=()=>({userName:"manu",email:"manu.com"})
// console.log(username())

// IIEF imediatly invoked function expression

function name (){
    console.log("IIEF Fuction")
}
name();
(function(){
    console.log("DB Connected.....")
})();
(()=>{
    console.log("DB Connected with arrow function.....")
})() ;
((num1, num2 )=>{
    console.log("DB Connected with arrow function.....")
    console.log (num1+num2)
})(5,6)










