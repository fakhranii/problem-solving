// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
// REGULAR EXP

function pigIt(str) {
  const twoLetter = "ay";
  let pharse = [];
  let letter;
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if ((words[i].length == 1 && words[i] == "?") || words[i] == "!") {
      pharse.push(words[i]);
    } else {
      letter = words[i].split("").slice(0, 1);
      pharse.push(words[i].slice(1).concat(letter).concat(twoLetter));
    }
  }
  return pharse.join(" ");
}

console.log(pigIt("H Hello world ?")); // elloHay orldway !
