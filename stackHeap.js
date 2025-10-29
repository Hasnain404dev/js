// premitive use stack memory
// in non premitive  datatype heap memory use
// let username="username"
// let userlogin="username"
// console.log(username)
// userlogin="user@email.com"
// console.log(userlogin)

// in stack memory the value duplicate in momery but orignal value not change 

// heap memory provide refrence of orignal value if somthing change in refrence then the main value also change
let mainuser={
    name:"username",
    email:"useremail@gmail.com"

}
let mainuser1=mainuser
mainuser1.name="userfirstname"
console.log(mainuser.name)
console.log(mainuser.name)
 