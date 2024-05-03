// DESCRIPTION:
// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

function spinWords(string) {
  let final = [];
  let arr = string.split(" ");
  for (let i = 0; i < arr.length; i++)
    if (arr[i].length < 5) final.push(arr[i]);
    else final.push(arr[i].split("").reverse().join(""));
  return final.join(" ");
}

console.log(spinWords("Hey fellow warriors"));
