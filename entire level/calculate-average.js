/*
! DESCRIPTION:
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.
*/
function findAverage(array) {
return array.length === 0 ? 0 : array.reduce((previous, current) => previous + current) / array.length
//   if (array.length === 0) {
//     return 0;
//   } else {
//     return (
//       array.reduce((previous, current) => previous + current) / array.length
//     );
//   }
}

console.log(findAverage([]));
