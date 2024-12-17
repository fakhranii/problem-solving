const largestEven = (arr: number[]): number =>
  Math.max(...arr.filter((num) => num % 2 == 0));

console.log("🚀 ~ largestEven ~ largestEven:", largestEven([20, 6, 7]));
