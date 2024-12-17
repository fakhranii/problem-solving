const uniqueLett = (str: string): string[] => {
  const letters: string[] = str.split("");
  let arr: string[] = [];
  for (let i: number = 0; i < letters.length; i++) {
    if (letters[i] != letters[i + 1]) {
      arr.push(letters[i]);
    }
  }
  return arr;
};
console.log("🚀 ~ uniqueLett ~ uniqueLett:", uniqueLett("aaabbbcc"));
