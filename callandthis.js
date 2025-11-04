// call and this in js
function user(username) {
    this.username=username
    
    
}
function useremail(username,email,password){
    user.call(this,username)// so when i call this function to 2nd function so we need to hold the refrence of the 1st function. because when in execution context first function execute and out and if the properties not hold then the value not show 

    this.email=email
    this.password=password
}

const newuUser=new useremail('manu','manu@gmail.com','123456')
console.log(newuUser)
console.log(typeof newuUser)