function mytest(arr) {
  return arr.reduce((acc, current) => {
    const sum = acc + current;
    return sum;
  });
}
console.log(mytest([1, 2, 3, 4, 5]));
