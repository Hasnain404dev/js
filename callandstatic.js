// classes in javascript 
// its a simple syntatic sugar because under the hood new key word and this logic use
// class User{
//     // we can add properties and function in class
//     // constructor call when object intialize from class
//     constructor(username,email,password){
//         this.username=username
//         this.password=password
//         this.email=email

//     }
//     // now we use this syntax in class so we dont need to use function word in it
//     encryptpassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const newUser = new User('Manu','manu@gmail.com','123$')
// console.log(newUser.encryptpassword())
// console.log(newUser.changeUserName())

// behind the scene

// so this is the exact work that class are do and this is the behind the sceen
// function user(username,email,password) {
//     this.username=username
//     this.email=email
//     this.password=password
// }
// now i want to add some method in it like the class 

// user.prototype.encryptpassword=function(){
//     return `${this.password}abxc`
// }
// user.prototype.capitalName=function(){
// console.log(`${this.username.toUpperCase()}`)

// }
// let newuse= new user('hasnian khan','hk@gmail.com','123456789')
// console.log(newuse)
// console.log(newuse.encryptpassword())
// newuse.capitalName()

// inheritance 

// 
// class user{
//     constructor(username){
//         this.username=username
//     }
//     logMe(){
//         console.log(`Username is ${this.username}`)
//     }
// }

// let we make lms or ecommarce webapp so we need to make user sometime admin or sometime in different role 

// class Teacher extends user{
//     constructor(username,email,password){
//         super(username) // super key word check the extend user go there take username behind the scene use this and set the value of username and directly acces the username here
//         this.email=email
//         this.password=password

//     }
//     addCourse(){
//         console.log(`A new course added by ${this.username}`)
//     }
// }
// const name=new Teacher('Manu','manu@gmail.com','1230')
// console.log(name)
// name.addCourse()

// const nuser=new user('Hasnain')
// console.log(nuser)
// nuser.logMe()
// name.logMe()

// check instance and inheritance
// console.log(nuser===name)
// console.log(name===Teacher)
// console.log(name instanceof Teacher)
// console.log(name instanceof Teacher)
// console.log(name instanceof user)

// static

// suppossed that we want that when a user create a unique id attact to the user
class newUser{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`UserName: ${this.username}`)
    }
   static createid(){ // static use to stop the access of this method
        return `${this.username}123`
    }
}

const user1=new  newUser('Hasnain khan')
console.log(user1)
// console.log(user1.createid())


class Teacher extends newUser{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const user2= new Teacher('hasnainkhan','hasnain@gmail.com')
user2.logMe()
console.log(user2.createid()) // no access








