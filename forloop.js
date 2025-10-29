// for (let index = 1; index <=10; index++) {
//     const element = index;
//     console.log(element);
    
// }


for (let index = 1; index <=10; index++) {
    if (index==5) {
        console.log("This is the for loop with condition");
    }
    console.log(index);
}



// for in  for loop
for (let i = 1; i <=10; i++) {
    // console.log(` ======= ${i}`);
    // console.log("-----------------");
    for (let j = 1; j <= 10; j++) {
      
        // console.log(`The value of j is ${j}`);
        
        // console.log(`${i} * ${j} = ${i*j}`);
    }
    
}

// break and countinue
for (let index = 1; index <=10; index++) {
    if (index==5) {
        console.log("This is the for loop with condition");
        break;
    }
    console.log(index);
}
// continue
for (let index = 1; index <=10; index++) {
    if (index==5) {
        console.log("This is the for loop with condition");
        continue;
    }   
    console.log(index);
}


let arr=["manu","dalol","sappal","hello","world"]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
    
}
console.log(arr.length);