// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string
//

function myFunction(characterSearched, word) {
    return word.filter(x => x == characterSearched).length;
}

console.log(myFunction('m', 'How many times does the character occur in this sentence?'))  //2 
console.log(myFunction('h', 'How many times does the character occur in this sentence?'))  //4 
console.log(myFunction('?', 'How many times does the character occur in this sentence?'))  //1 
console.log(myFunction('z', 'How many times does the character occur in this sentence?'))  //0 