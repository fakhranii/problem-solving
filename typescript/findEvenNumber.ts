const evenNumber = (arr: number[]): any => {
  return arr.filter((e) => {
    return !isNaN(e) && e % 2 == 0;
  });
};

console.log(
  "🚀 ~ evenNumber ~ evenNumber:",
  evenNumber([15, 25, 5, 4, 16, 20, 10])
);
