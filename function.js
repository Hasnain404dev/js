// function in js 
// function number(){
//     console.log("H")
//     console.log("a")
//     console.log("s")
//     console.log("n")
//     console.log("a")
//     console.log("i")
//     console.log("n")
// }
// number()
// 2nd return statement and input output 

// function addnumber(num1,num2){
//     console.log(num1+num2)

// }

// addnumber(4,5)

// function addnum(num1,num2){
//     let result=num1+num2
//     return result

// }
// addnum(1,6)
// function addnum(num1,num2){
   
//     return num1+num2

// }
// let result= addnum(1,6)
// console.log(result)

// function userloggedIn(username){
    
//     return `${username} user just log in`

// }
// userloggedIn("manu")
// let user=userloggedIn("manu")
// console.log(user)

// object with function

// this is rest operator which is use to add the multiple vlaue
// function calculateCartPrice(...cratItem) {
//     return cratItem
// }
// console.log(calculateCartPrice(100,200,500))
// console.log(typeof calculateCartPrice(100,200,500))

// second scenerio is when the parameter is val1, val2, ...num1 and return is num1 what the output

function newcart(val1, val2, ...num1){
    return num1
    // the 1st value save in val1 and the second val save in val2 and the rest of value are enter in...num1


}
console.log(newcart(100,200,500,600,))

const user={
    name:'Manu',
    email:'manudalol@gmail.com',
}

function handleObject(anyobject){
    return `the username is ${anyobject.name} and the email is ${anyobject.email}`
}   

console.log(handleObject(user))


// now pass the array = in function
const arr=[100,200,300,400]
function secValue(arrayValue){
    return  arrayValue[1]

}
console.log(secValue(arr))











 






