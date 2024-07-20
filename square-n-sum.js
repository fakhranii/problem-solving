/*
Complete the square sum function so that 
it squares each number passed into it and then sums the results together.
*/

function squareSum(numbers) {
  return numbers
    .map((n) => n * n)
    .reduce((previous, current) => previous + current, 0);
}
console.log(squareSum([1, 2, 2]));
