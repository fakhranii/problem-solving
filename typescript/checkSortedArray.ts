const checkAsc = (arr: number[]): boolean => {
  for (let i: number = 0; i <= arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      return false;
    }
  }
  return true;
};
console.log("🚀 ~ checkAsc ~ checkAsc:", checkAsc([8, 2, 3, 4, 5, 6, 8, 9]));
