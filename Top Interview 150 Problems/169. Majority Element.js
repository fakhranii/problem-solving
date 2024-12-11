/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const resObject = nums.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1;
    return prev;
  }, {});
  const biggestValue = Object.keys(resObject).reduce((prev, curr) => {
    return resObject[prev] > resObject[curr] ? prev : curr;
  });
  return biggestValue;
};

console.log(majorityElement([3, 2, 3]));

//* to be continued .
