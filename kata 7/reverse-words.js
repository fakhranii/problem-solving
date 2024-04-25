// DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  let strword = str.split(" ");
  let final = [];
  for (let i = 0; i < strword.length; i++)
    final.push(strword[i].split("").reverse().join(""));
  return final.join(" ");
}

console.log(reverseWords("This is an example!"));
