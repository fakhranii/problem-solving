/**
 Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:
   12 --> "10 + 2"
   45 --> "40 + 5"
70304 --> "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0.
 */

// loop throw each element and add the number of elements after the target number
function expandedForm(num) {
  let str = `${num}`.split("");
  let arr = [];
  for (let i = 0; i < str.length; i++)
    if (str[i] > 0) arr.push(str[i] + "0".repeat(str.length - 1 - i));
  return arr.join(" + ");
}

console.log("🚀 ~ expandedForm ~ expandedForm:", expandedForm(12));
