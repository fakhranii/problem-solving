/*
* DESCRIPTION:
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null
*/
//? square root => جذر تربيعي
/*
! Solution
1 - Loop through the array
2 - check the number if it has an integer square root or not
3 - If true take the root, and if it's false square the number
4 - return the new array
 */
function squareOrSquareRoot(array) {
  return array.map((num) =>
    Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num * num
  );
  //   let newArray = [];
  //   for (let i = 0; i < array.length; i++) {
  //     if (Number.isInteger(Math.sqrt(array[i]))) {
  //       newArray.push(Math.sqrt(array[i]));
  //     } else {
  //       newArray.push(array[i] * array[i]);
  //     }
  //   }
  //   return newArray;
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
