 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // Start from the last element of nums1 and nums2
  let i = m - 1; // Pointer for nums1
  let j = n - 1; // Pointer for nums2
  let k = m + n - 1; // Pointer for the merged array (nums1)

  // Merge nums2 into nums1, starting from the back
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // If nums2 still has elements left, add them to nums1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}
