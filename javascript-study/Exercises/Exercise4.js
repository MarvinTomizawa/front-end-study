// Write a function that takes an array of strings as argument
// It should return the longest string
//

function myFunction(receivedArray) {

    let longestString = "";

 receivedArray.sort();

    for(let x = 0; x < receivedArray.length; x++){
       if(receivedArray[x].length > longestString.length){
          longestString = receivedArray[x];
       }
    }
    
    return longestString;
}

console.log("Exercicio");
console.log(myFunction(["help", "me"]));
console.log(myFunction(["I", "need", "candy"]));