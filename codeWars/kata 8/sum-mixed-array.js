/*
DESCRIPTION:
Given an array of integers as strings and numbers, 
return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

function sumMix(x) {
  //   let arr = [];
  //   for (const num of x) {
  //     arr.push(Number(num));
  //   }
  //   return arr.reduce((previous, current) => previous + current, 0);
  return x
    .map((n) => Number(n))
    .reduce((previous, current) => previous + current, 0);
}
console.log(typeof sumMix([1, 2, "5", "1"]));
console.log(sumMix([1, 2, "5", "1"]));
