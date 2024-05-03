// DESCRIPTION:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

function findUniq(arr) {
  let countMap = {};
  for (let num of arr) {
    countMap[num] = (countMap[num] || 0) + 1;
  }
  return countMap;
}

console.log(findUniq([1, 1, 0, 1, 1]));

function findUniqueInteger(arr) {
  const countMap = {};

  // Count occurrences of each integer
  for (let num of arr) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  // Find the integer with count equal to 1
  for (let num in countMap) {
    if (countMap[num] === 1) {
      return parseInt(num);
    }
  }

  // If no unique integer found
  return null; // or whatever value you prefer
}
