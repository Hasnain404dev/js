// string op[kop[k0-a
// 1st concat the string
// const name= "manu"
// const secname="dalol"
// const number=50
// console.log(`this is the name ${name} and last name ${secname} or payment is ${number}` )
// another method to decleare a string``

// const gameName= new String("callofduty")
// console.log(gameName,typeof(gameName))

// to find the length of the string
// console.log(gameName.length)
// access the key of the string
// console.log(gameName[0])
// console.log(gameName.toLowerCase())
// console.log(gameName.toUpperCase())
// in which index the character is present
// console.log(gameName.charAt(4))
// now check which index the character is present
// console.log(gameName.indexOf("f"))
// now check the last index of the character
// console.log(gameName.lastIndexOf("l",2))
// const newString=gameName.substring(0,4)
// console.log(newString)

// javascript finding / searching methods
const gameName= new String("callofduty")
console.log(gameName)
// to check the length of the string
// console.log(gameName.length)
// to find the index of the character
// console.log(gameName.indexOf("l"))
// to find the last index of the character in which we check the index of last occurance of the character
// we also select the index from which we want to start searching
// console.log(gameName.lastIndexOf("l",2))
// search method return the index of the first match it finds
// console.log(gameName.search("l"))
// startwith and endswith method
// console.log(gameName.startsWith("b"))
//  console.log(gameName.endsWith("duty"))
// includes method to check the character is present or not
// console.log(gameName.includes("o"))
// now all the searh and find method is
// 1.Indexof to find the index of the character
// 2.lastindexof to find the last index of the character
// 3.search method to find the index of the characcter same as indexof
// 4.includes method to check the character is presenct or not
// 5.startswith method to check the string is start with the given character or not
// 6.endswith method to check the string is end with the given character or not
// 6.lenth method to find the length of the string

// now extracting methods that use to extract the part of the string
// 1.slice method use  to extract the part of the given string and it takes two arguments one is starting index and ending index
// const newString=gameName.slice(0,4)
// console.log(newString)

// console.log(gameName.slice(4,6))
// console.log(gameName.slice(-8,-4))
// 2.substring method it is same as slice method but it does not take negative index
// const newString=gameName.substring(0,4)
// console.log(newString)
// replace method
// it is used to  replace the part which are first match of the string
// let url="https://www.youtube.com/watch%20gmail.com"
// const newUrl=url.replace("%20","-")
// console.log(newUrl.includes("https"))
// console.log(newUrl)
// replaceAll
// it is used to replace all the part of the string
// const newURL="https://www%20.youtube%20.com%20/watch%20gmail.com"
// const newUrl=newURL.replaceAll("%20","-")
// console.log(newUrl)



// trim method is use to remove the extra space from the string and end of the string
// it does not take any argument
// const name="   manudalol   "
// console.log(name.trim())
// there is also trimStart and trimEnd method

// charAt method is used to find the character at the given index
// const name="manudalol"
// console.log(name.charAt(5))
// charcodeAt method is used to find the character unicode (ascii code) at the given index
// const name="manudalol"
// console.log(name.charCodeAt(5))
// it is used to find the unicode of the character at the given index


// at method is used to find the character at the given index it is same as charAt method but it can take negative index
// const newName="Pubgamer"
// console.log(newName.at(-1))

// split method is used to split the string into an array of substrings based on the given separator
// const name="manu dalol 60 50"
// console.log(name.split(" "))

// padstart method is used to padding the string with the given character at the start of the string
// const name = "manu"
// console.log(name.padStart(9,"dalol"))
// console.log(name.length)
// padend method is used to padding the string with the given character at the end of the string
// const name2 = "manu"
// console.log(name.padEnd(9,"dalol"))
// console.log(name.length)


// repeat method is used to repeat the string the given number of times
// const name="manu dalol "
// console.log(name.repeat(5))
// let str = new String("hello world")
// console.log(str)
// console.log(str.valueOf()) // returns the primitive value of the string object

// change number to string
// let number = 123;
// let strNumber=number.toString();
// console.log(strNumber, typeof strNumber); // "123" "string"

let a = "apple";
let b = "banana";
console.log(a.localeCompare(b)); // -1 (apple < banana)
// 