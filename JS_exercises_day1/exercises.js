// EXERCISE 1

// A1) Data types in JS are strings, numbers, booleans, undefined and null. We refer to them as primitive types.

// A2) Undefined variable means a variable has been declared but it does not have a value. Undeclared variable means that the variable does not exist in the program at all.

// A3) Single line is //, multiline /**/, function comment /**... */

// A4) Does JavaScript support automatic type conversion? Yes. It's usually called type coercion, but conversion is perfectly accurate.

// A5) https://www.w3schools.com/js/js_strict.asp Strict mode eliminates some JavaScript silent errors by changing them to throw errors. Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode. You use it by writing "use strict"


// EXERCISE 2
const myRandomNum = Math.ceil(Math.random() * 10)
console.log(myRandomNum)

const addition = (a, b) => a + b
console.log(addition(20, 12))

const roundMyNumberUp = (num) => Math.ceil(num)
console.log(roundMyNumberUp(10.334))

const roundMyNumberDown = (num) => Math.floor(num)
console.log(roundMyNumberDown(10.334))

// EXERCISE 3
let cph = "Copenhagen"
let bis = "Business"
let aca = "Academy"

let cba = `${cph} ${bis} ${aca}`
console.log(cba)

console.log(cba.toUpperCase())
console.log(cba.toLowerCase())

cba = cba.replace("Copenhagen", "Lyngby")
console.log(cba)

console.log("Copenhagen".substring(1, 5))

console.log(cba.split(" "))

// EXERCISE 4
var boys = ["Peter", "lars", "Ole"]
var girls = ["Janne", "hanne", "Sanne"]

const all = boys.concat(girls)
console.log(all)

const allInAString = all.join(", ")
console.log(allInAString)

const allInAString2 = all.join("-")
console.log(allInAString2)

all.push("Lone", "Gitte")
console.log(all)

all.unshift("Hans", "Kurt")
console.log(all)

all.shift()
console.log(all)

all.splice(3, 2) // splice(start, deleteCount)
console.log(all)

all.reverse()
console.log(all)

all.sort()
console.log(all)

const mySortingAlgorithm = (namesList) => {
    newArray = namesList.map((name) => name.charAt(0).toUpperCase() + name.slice(1)).sort()

    return newArray
}

console.log("Sorted with my own function: ", mySortingAlgorithm(all))

const myNewArray = all.map((names) => names.toUpperCase())
console.log(myNewArray)


const myArrayWithNamesStartingWithlorL = (arr) => {
    const newArr = arr.filter((names) => names.charAt(0) === "L" || names.charAt(0) === "l")
    return newArr
}

console.log(myArrayWithNamesStartingWithlorL(myNewArray))



// EXERCISE 5


// EXERCISE 6


// EXERCISE 7