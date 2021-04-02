// Write a function that takes an object with the properties number and percentage as argument
// Return the given percentage of the number

function myFunction( input ) {
    return input.number * (input.percentage/100);
    }


console.log(myFunction({number: 777, percentage: 2}));
console.log(myFunction({number: 500, percentage: 99}));
console.log(myFunction({number: 100, percentage: 50}));
