/*
write a javascript program to check two numbers and return true if one of the numbers is 100
or the sum of the two numbers is 100
*/
const checkNumber = (n1, n2) => n1 === 100 || n2 === 100 || n1 + n2 === 100;

console.log(checkNumber(100, 50));
console.log(checkNumber(0, 100));
console.log(checkNumber(50, 560));
