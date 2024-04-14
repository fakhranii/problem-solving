/*
* DESCRIPTION:
Given a string of digits, 
you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
Return the resulting string.
Note: input will never be an empty string
*/

function fakeBin(x) {
  //   let arr = [];
  //   Number(x);
  //   for (const digit of x) {
  //     if (digit < 5) arr.push(0);
  //     if (digit >= 5) arr.push(1);
  //   }
  //   return arr.join("");
  return x
    .split("")
    .map((n) => (n < "5" ? "0" : "1"))
    .join("");
}

console.log(fakeBin("1565646835615"));
