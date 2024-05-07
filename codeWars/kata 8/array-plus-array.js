/* 
DESCRIPTION:
I'm new to coding and now I want to get the sum of two arrays... 
Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/
function arrayPlusArray(arr1, arr2) {
  //? First Solution
  //   return (
  //     arr1.reduce((previous, current) => previous + current, 0) +
  //     arr2.reduce((previous, current) => previous + current, 0)
  //   );
  //? Second Solution
  // const firstSum = arr1.reduce((previous, current) => previous + current, 0);
  // const secondSum = arr2.reduce(
  //   (previous, current) => previous + current,
  //   firstSum
  // );
  // return secondSum;
  //? Third Solution
  return arr1.concat(arr2).reduce((previous, current) => previous + current, 0);
}

console.log(arrayPlusArray([12, 12, 12], [7, 7]));
