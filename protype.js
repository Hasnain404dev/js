// javascript use layer like it go from child to parent to grandparent
// js access it for required result or the null value showup
// everything in js is object

//   in this we exeersise we learn new keyword behind the logic and prototyping
function multiplyu(num) {
    return num*5
    
}
// console.log(multiplyu(5))
multiplyu.power=2
// console.log(multiplyu.power) // function is funcion but also behave like object  end of the day everything in js meet object and object is endof the world and prototype of object is null because there is nothing above it

// console.log(multiplyu.prototype) // result is empty {} it also provide internel properties
// result is empty {} by default  its set context of this 
 
function craeteUser(username,price) {
    // this is also connect with prototype 
    this.username=username
    this.price=price
    
}// suppose that i want to add my functionality in prototype so that every object can access it

craeteUser.prototype.increasePrice= function () {
   this.price++
    
}
craeteUser.prototype.printME=function() {
    console.log(`price is ${this.price}`)
}
const value1= new craeteUser('Manu',150)
const value2=craeteUser('manu2',130)

// value1.printME() // its provide error properties inject in prototype but when i transfer the value of function in varable then we dont tell that the new properties are added 
// new keyword use to tell prototype the new properties added
// value1.increasePrice()
// value1.printME()    
/*
Here's what happens behind the scenes when you use the new keyword:

A new empty object is created. the new keyword initiate the creation of a new object.

A prototype is linked: the newly created object gets linked to the prototype of the constructor function. This linkage allows the new object to inherit properties and methods from the constructor's prototype.
The constructor function is called: the constructor function is executed with this set to the newly created object. This allows the constructor to initialize properties on the new object.

The new object is returned: by default, the new object is returned from the constructor function, unless the constructor explicitly returns a different object.

*/

// now learn prototype


let myheros=['thor','spiderman']
let heropower={
    thor:'hammer',
    spiderman:'web'    ,
    getspidypower:function(params) {
        console.log(`spidy power is ${this.spiderman}`)
    }

}

    
// now we gave the authority to object so every one have access of the mehtod
Object.prototype.newfunction=function(){
    console.log(`this is prototype inheritence ` )
}

// heropower.newfunction()

// inheritance
// its old style code for understanding porpose
// let there is a situation where we want to linked the object to share the information
const user={
    name:'Hasnain',
    email:'hasnain@gmail.com'
}
const teacher={
    makevedio:true
}
 
const teachingsupport={
    isAvailabel:true
}

const TAsupport={
    makeassignment:'js assignment',
    fulltime:true,
    __proto__:teachingsupport
}
// teacher.__proto__=user
// console.log(teacher.email)
// console.log(TAsupport)

// moder syntax

Object.setPrototypeOf(teachingsupport,teacher)
console.log(teachingsupport.isAvailabel)

let Username='chaiorcode     '
String.prototype.lengthfunction=function(){
    console.log(`${this}`)
    console.log(`the truelength of the string ${this.trim().length}`)
    console.log(`${this}`)
}
Username.lengthfunction()
'manu     '.lengthfunction()
'Hasnain   '.lengthfunction()










