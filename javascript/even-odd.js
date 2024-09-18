/*
? Create a function that takes an integer as an argument 
? And returns "Even" for even numbers or "Odd" for odd numbers.
*/
function oddOrEven(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

console.log(oddOrEven(0));
