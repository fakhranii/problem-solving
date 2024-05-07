/*
Numbers ending with zeros are boring.
They might be fun in your world, but not here.  
Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway


*/

function noBoringZeros(n) {
  // return +String(n).replace(/0+$/, "");
  let stringParam = String(n);
  while (stringParam.endsWith(0)) {
    stringParam = stringParam.slice(0, stringParam.length - 1);
  }
  return Number(stringParam);
}
console.log(noBoringZeros(1050000));
