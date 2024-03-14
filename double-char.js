/*
DESCRIPTION:
Given a string, you have to return a string in which each character 
(case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck! 
*/

/*
! The solution -
* 1 - turn the string
* 2 - loop through the array
* 3 - repeat each element once
* 4 - return the array into string again
*/
function doubleChar(str) {
  return str
    .split("") // convert string into an array
    .map((x) => x.repeat(2))
    .join(""); // convert array into string
}

console.log(doubleChar("String"));
