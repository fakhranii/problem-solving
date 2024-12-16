/*
write a js code code to create a new string adding "New!" in front of given string
if the given string begins with "New!" already then return the original string
 */
const createString = (str) => (str.indexOf("New!") === 0 ? str : `New! ${str}`);

// let strArr = str.split(" ");
// if (strArr[0] === "New!") {
//   return strArr.slice().join("");
// } else {
//   return "New! " + strArr.join(" ");
// }

console.log("🚀 ~ createString:", createString("New! ali"));
