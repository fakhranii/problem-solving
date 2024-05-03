// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  if (str == null) return [];
  let final = [];
  let strArr = str.split("");
  if (strArr.length % 2 == 1) strArr.push("_");
  for (let i = 0; i < strArr.length; i += 2)
    final.push(`${strArr[i]}${strArr[i + 1]}`);
  return final;
}

console.log(solution("abc"));
