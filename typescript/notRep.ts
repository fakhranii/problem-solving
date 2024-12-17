// convert the string into array of strings
// looping throw the string
// push the unique

const notRep = (str: string): string[] => {
  let strArr: string[] = str.split("");
  return strArr.filter((val, index, arr) => {
    return arr.filter((arrItem) => arrItem == val).length === 1;
  });
};
console.log("🚀 ~ notRep ~ notRep:", notRep("aabbddsaf"));
