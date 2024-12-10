export const min = (list: number[]): number => {
  return Math.min(...list);
};

export const max = (list: number[]): number => {
  return Math.max(...list);
};

console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
console.log(min([4, 6, 2, 1, 9, 63, -134, 566]));
