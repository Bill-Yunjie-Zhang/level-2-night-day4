// // // const isPal = function(word){
// // //     let lowercaseWord = word.toLowerCase() //str
// // //     let splitWord = lowercaseWord.split("") //arr
// // //     let reversedArr = splitWord.reverse()
// // //     let reversedWord = reversedArr.join("")

// // //     let checkPal = reversedWord === lowercaseWord
// // //     return checkPal
// // // }

// // // const checkMom = isPal("Mom") 
// // // console.log(checkMom)

// // let username = "bill-yj-zhang" // not case sensitive
// // let password = "notMyRealPassword1234" //case sensitive

// // const login = (u, p) => username.toLowerCase() === u && p === password

// // console.log(login("bill","notMyRealPassword1234"))

// const check = (word) => word[0] === word[0].toUpperCase()
// console.log(check("hello"))

var alpha = "abcdefghijklmnopqrstuvwxyz"

var change = (char, alpha) => alpha.indexOf(char) + 1

var add = function(string){
    var num = 0
    var splitLower = string.toLowerCase().split("")
    splitLower.forEach(function(e){
        num += change(e, alpha)
    })
    return num
}

console.log(add("Jimmy"))