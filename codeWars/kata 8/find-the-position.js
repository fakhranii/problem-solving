/*  
! DESCRIPTION:
When provided with a letter, return its position in the alphabet.

Input :: "a"
Ouput :: "Position of alphabet: 1"
*/

function position(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`;
  //   for (let i = 0; i < alphabet.length; i++) {
  //     if (alphabet[i] === letter) {
  //       return `Position of alphabet: ${i + 1}`;
  //     }
  //   }
}
console.log(position("a"));
