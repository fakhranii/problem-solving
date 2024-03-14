/* 
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/
//* 3 - init sum var
//* 2 - in this case, I need to loop on the array to reach every element in it
//* 3 - check if the number is positive or not
//! very important in loops we shouldn't use const cause it constant value and cannot be change

function sumPositive(arr) {
  return arr.filter((x) => x > 0).reduce((acc, current) => acc + current, 0);
  // let value = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > 0) {
  //     value += arr[i];
  //   }
  // }
  // return value;
}
console.log(sumPositive([1, -4, 8, 15]));
