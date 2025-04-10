/**
 Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105

 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): number[] {
  return (nums = [...nums.splice(nums.length - k), ...nums]);
}
console.log("🚀 ~ rotate:", rotate([1, 2, 3, 4, 5, 6, 7], 3));
