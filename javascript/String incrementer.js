// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.
function incrementString(strng) {
  const match = strng.match(/(.*?)(\d+)$/);
  if (!match) return strng + "1";

  const prefix = match[1];
  const numberPart = match[2];
  const incremented = (Number(numberPart) + 1).toString();
  const padded = numberPart.slice(0, -incremented.length) + incremented;

  return prefix + padded; // Combine prefix and updated number
}

console.log(
  "🚀 ~ incrementString ~ incrementString:",
  incrementString("foobar0099")
);
