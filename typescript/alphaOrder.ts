// (a > b ? 1 : -1):
// If a is greater than b, it returns 1 → meaning a should come after b.
// If a is less than b, it returns -1 → meaning a should come before b.
// Example: Given the array:

// typescript
// Copy code
// ["w", "e", "b", "m", "a"]
// Sorting process step-by-step:
// Compare "w" and "e": Since "w" > "e", return 1 → "e" comes before "w".
// Compare "e" and "b": Since "e" > "b", return 1 → "b" comes before "e".
// This process continues until all characters are arranged in alphabetical order.

const alphOrder = (str: string): string => {
  return str
    .split("")
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");
};

console.log("🚀 ~ alphOrder ~ alphOrder:", alphOrder("webmaster"));
