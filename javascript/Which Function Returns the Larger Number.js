/**
Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

If f returns the larger number, return the string f.
If g returns the larger number, return the string g.
If the functions return the same number, return the string neither.
Examples
whichIsLarger(() => 5, () => 10) ➞ "g"

whichIsLarger(() => 25,  () => 25) ➞ "neither"

whichIsLarger(() => 505050, () => 5050) ➞ "f"
Notes
This exercise is designed as an introduction to higher order functions (functions which use other functions to do their work).

 */

function whichIsLarger(f, g) {
  const fResult = f(); // Call function f and get its result
  const gResult = g(); // Call function g and get its result

  if (fResult > gResult) {
    return "f"; // f returns the larger number
  } else if (gResult > fResult) {
    return "g"; // g returns the larger number
  } else {
    return "neither"; // Both return the same number
  }
}

console.log(
  whichIsLarger(
    () => 5,
    () => 15
  )
);
