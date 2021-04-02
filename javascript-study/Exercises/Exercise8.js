// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

function myFunction(argument) {
    return argument % 2 == 0;
}

console.log(myFunction(10) ) // true
console.log(myFunction(-4) ) // true
console.log(myFunction(5) ) // false
console.log(myFunction(-111) ) // false