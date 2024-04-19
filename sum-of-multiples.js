/*
DESCRIPTION:
Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/

function sumMul(n, m) {
  if (m < 0 || m == 0 || n == 0) return "INVALID";
  let final = 0;
  for (let i = n; i <= m; i += n) final += i;
  return final;
}

console.log(sumMul(2, 9)); //expected 751680 to equal 741312
