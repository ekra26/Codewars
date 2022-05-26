/*In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )*/


//Using arrays and strings - time complexity n*m where m = number of characters in string and n = length of alphabet array//
function alphabetPosition(text) {
//create array with all alphabets we need
  let alphabet = ["a", "b", "c", "d", "e", "f","g","h","i","j","k","l","m","n","o",
                 "p","q","r","s","t","u","v","w","x","y","z"]
                 
 //empty array to store positions//           
  let positionArray = []
 
 //turn string into array//
  let textArray = text.replace(/\s+/g,"").toLowerCase().split("")
  
  //loop and get position//
  textArray.forEach(function (element) {if(alphabet.indexOf(element) > -1) {
     positionArray.push(alphabet.indexOf(element)+1)}})
    
  //convert array into string//  
  return positionArray.toString().replace(/,/g, " ");
}

test//
console.log(alphabetPosition("The sunset sets at twelve o' clock."))
