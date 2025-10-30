// oop in js
//javascript primarly prototype base language

// object is collection of properties and method (properties is data and method is function)

// why use oop
//  the large code make spegeti so the code make messup so we use oop concept

// components of oop / parts of oop

// object literal mean we take object 

// constructor function
//prototype
//classes
//instances (new , this)

// 4 pillars of oop
// abstraction : hide the detials show the user what they want to see like fetch we dont see the network call but we use it 

//encapsulation : wrapup the data and method so the user used what they have access

// polymorphism : same function but different result

//inheritance : held properties from parent

// object literal is to make a object its a base unit in js

//  this keyword is use for refrence the current context so we can use the object 

// const user={
//     username:'manu',
//     loginCount:'5',
//     signedIn:true,
//     getuserdetails:function(){
//         console.log(` method in objectliteral ${this.username}`)
//     }

// }
// console.log(user.username)
// console.log(user.getuserdetails())
// so suppose that we need the same object with properties and method so we need to rewrite the object for a
// avoid this hussle we use cunstructor function

// constructor function // the new key word is constructor function its allow the user from single object literal to use multiple time like new so we can create multiple instaces from single object
// const date=new date()
// const promiseone= new Promise()

// now we structure the example data so we use it more then one time without rewrite it
function user(username, loginCount,isLoggedIn,greetings) {
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn,
    this.greetings=function(){
        console.log(   `this is method in it @ ${this.username}`)
    }
    return this
    // return is bydefault so its up to you 
}
// let newuser= user('manu' ,8, false) // if we write it with out using new keyword then when we recall it the previous value change in to new value
// let newuser1= user('manu1' ,5, true) 
// console.log(newuser)
let newuser1= new user('manu1' ,5, true)
let newuser2= new user('manu1' ,5, true) 
// console.log(newuser1)
console.log(newuser1 instanceof user)
console.log(newuser1 instanceof Object)
console.log(newuser1.constructor) // its the refrenc5 of your on funtion or object
// console.log(newuser2) // new key word is a costructor function now it gave us everytime new instace


// when we use new key word empty object create
// costructor function call through new key word so its pack all the argument and gave to user
// this keyword inject the argument value in to the object
// and return the object with value
