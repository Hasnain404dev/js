//  in which tutorial we learn how the some properties emurable
//  and how we check the property  discreptor of the object and how we will make that object 
const obj=Object.getOwnPropertyDescriptor(Math,"PI") // in this we gave the object and its key which we want to check the properties
console.log(obj)
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// } this is the output and that why the value of pi not change by default the its changing is false and we do not change the value 
 
const newobj={
    name:'hasnain',
    email:'hasnain@gmail.com',
    islogin:true

}
