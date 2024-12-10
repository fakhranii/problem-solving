// 1 - using each index for seprate the array into two arrays
// 2 - calculate the both sides
// 3 - check the results and return the index that applied the condtion

export function findEvenIndex(arr: number[]): number {
  let left: number;
  let right: number;
  for (let i: number = 0; i <= arr.length; i++) {
    left = arr
      .slice(0, i)
      .reduce((pre: number, curr: number): number => (pre += curr), 0); // Elements from start to index

    right = arr
      .slice(i + 1)
      .reduce((pre: number, curr: number): number => (pre += curr), 0);

    if (left == right) {
      return i;
    }
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); //3
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
// -console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); //3
