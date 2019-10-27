//////////////////////check palindrome//////////////////////
//palindrome is not casesentivie => make every letter to lowercase//
//check if the reverse == before reverse => split it and reverse it and join it//
const isPal = function(word){
    let lowercaseWord = word.toLowerCase() //str
    let splitWord = lowercaseWord.split("") //arr
    let reversedArr = splitWord.reverse()
    let reversedWord = reversedArr.join("")

    let checkPal = reversedWord === lowercaseWord
    return checkPal
}

console.log("Check palindrome: ", isPal("Mom"))


//////////////////////login system//////////////////////
//username not case sensitive => input username and username toLowerCase//
//password case sensitive => check input password directly with password// 
let username = "bill-yj-zhang" // not case sensitive
let password = "notMyRealPassword1234" //case sensitive

const login = (u, p) => username.toLowerCase() === u && p === password

console.log("login: ", login("bill","notMyRealPassword1234"))


//////////////////////check if the first letter is uppercase//////////////////////
//take the first letter and make it uppercase//
//check if they equal to each other//
const check = (word) => word[0] === word[0].toUpperCase()
console.log("Is the first letter uppercase? ", check("hello"))


//////////////////////add up each letter//////////////////////
//give each letter a number => make them into a string//
//split a string into an array//
//turn every letter into it's corresponding number//
//add up every number//
var alpha = " abcdefghijklmnopqrstuvwxyz" // index starts at 0, so in order for a to be 1, add something to the index 0

var change = (char) => alpha.indexOf(char)

var add = function(string){
    var num = 0
    string.toLowerCase().split("").forEach((e) => num += change(e))
    return num
}

console.log("The sum of all letters is: ", add("Jimmy"))


//////////////////////add up each letter(version 2.0)//////////////////////
const alpha1 = " abcdefghijklmnopqrstuvwxyz"
let num = 0
const change1 = (char) => alpha1.indexOf(char)
const process1 = (txt) => txt.toLowerCase().replace(/ /g, "").split("").filter((e) => e.toLowerCase() !== e.toUpperCase())
const add1 = function(txt) {
    process1(txt).forEach((e) => num += change1(e))
    return num
}
console.log("The sum of all letters is: ",  add1("  j i m M!Y#($*@"))