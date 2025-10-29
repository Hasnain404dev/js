// singleton
// there are two type of objects or there is two way to create object
// 1. object literal
// 2. object constructor / make singleton object /
let mysym=Symbol("my unique identifier")
// if we want to add symbol in the object we can do it like this [mysym]:value
const newUser={
    name:'manu',
    "full name":"manu dalol",
    age:22,
    email:'manu@gmail.com',
    location:'Lahore',
    isLoggedIn:true,
    LastloginDays:["monday","saturday"],
    [mysym]:"this is symbal",
    // greetings:function(){

    //     console.log("hello user insider the object")
    // }
    
}
// console.log(typeof newUser)
// console.log(newUser.email)
// we can also access the properties of the object using bracket notation so if the key is in "name" like this we can access it using bracket notation
// console.log(newUser["full name"])
// now if we want to add a Symbol
// console.log(typeof newUser[mysym])
// console.log(newUser)

// how to change the value of the object

// newUser.email="manudalol@gmail.com"
// console.log(newUser.email)
// console.log(newUser)
// if we want to freez the Object we can use Object.freeze() method
// Object.freeze(newUser)
// newUser.email="manu@gmail.com"
// console.log(newUser) // it will not change the value of the email because we have freez the object

// Now if we want the fuction in the object
//  newUser.greetings=function(){

    //  console.log(`hello user ${this.name} insider the object`)
//  }
// console.log(newUser.greetings())
// console.log(newUser)


// how to make singleton or constructor object

// const foodPandaUser=new Object()

// let newPandaUser={}
// newPandaUser.name="manu"
// newPandaUser.email="manu@gmail.com"
// newPandaUser.phoneNumber='0304646413'
// newPandaUser.isLoggedIn='false'
// console.log(newPandaUser) 

// nested Object
// const uberUser={
//     email:'manu@gmail.com',
//     fullname:{
//         username:{
//             firstname:"manu dalol",
//             middlename:'dalol',
//             lastname:'sappal'  
//         }
//     }
// }

// console.log(uberUser.fullname.username.middlename)
    
// merge the Object

// const obj={a:2,n:3,c:4}
// const obj2={b:3,c:2,a:1}
// const obj3=Object.assign({},obj,obj2)
// console.log(obj3)

// now with spread

// const obj4={...obj,...obj2,...obj3}
// console.log(typeof obj4)
// when data came frome database


let newPandaUser={}
newPandaUser.name="manu"
newPandaUser.email="manu@gmail.com"
newPandaUser.phoneNumber='0304646413'
newPandaUser.isLoggedIn='false'


const user=[
    {
        id:"123anc",
        emai:"manudalol@gmail.com"
    },
    {
        id:"124anc",
        emai:"manudalol@gmail.com"
    },
    {
        id:"125anc",
        emai:"manudalol@gmail.com"
    },
    {
        id:"126anc",
        emai:"manudalol@gmail.com"
    },
  
]
console.log(user[0].id)
// console.log(Object.keys(newPandaUser)) // it is use to provide the keys as well as value of an object and return the array
// console.log( typeof Object.values(newPandaUser)) // it is use to provide the keys as well as value of an object and return the array 
console.log(Object.entries(newPandaUser))
// console.log(newPandaUser.hasOwnProperty("isLoggedIn"))

// de structring object

const manu={
    name:"manu",
    email:"manu@gmail.com"
}

// method of destructure

// const {email}=manu
// console.log(email)
// agar key in text is big ◘too hum destructure k time usay new name de saktay hai
// const {email:manuemail}=manu
// console.log(manuemail)
// console.log(manu)

// api concept  



