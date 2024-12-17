const vowels = ["e", "i", "y", "a", "o"];

const countVowel = (str: string): number => {
  return str.split("").filter((key, num) => key[num] == vowels[num]).length;
};

console.log(countVowel("adhjdiuys"));
