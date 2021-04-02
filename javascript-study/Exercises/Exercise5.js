// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
//

function myFunction(unsortedArray) {
    const sortedArray = unsortedArray.sort(); 
return sortedArray.reverse();
}


//Response
function myFunction( input ) {
    return input.sort((a, b) => b - a);
  }
  