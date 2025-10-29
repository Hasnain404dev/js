// // globak scop and local scop in js
// let a =20
// const b =40           
// var c=300
//  if (true){
//     let a =200
// const b =400
// var c=30
//  }


// console.log(a)
// console.log(b)
// console.log(c) 
 
// scopp leveling and mini hosting
function one(){
    const username="manu Dalol"
    function two() {
        const web="netflix";
        console.log(username)
    }
    // console.log(web)
    two()
}
// one()
if (true){
    const usermam="manu"
    if (usermam=="manu") {
        const web="manu.com"
        console.log(usermam+web)
    } 
    // console.log(web) // its not acces because its out side of the scope

}
// console.log(usermam) // its not acces because its out side of the scope
 