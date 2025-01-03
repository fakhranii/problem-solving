/**
 When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

RT = R1 + R2 + R3 ...
Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

Examples
seriesResistance([1, 5, 6, 3]) ➞ "15 ohms"

seriesResistance([16, 3.5, 6]) ➞ "25.5 ohms"

seriesResistance([0.5, 0.5]) ➞ "1.0 ohm"
Notes
All inputs will be valid.
Notice the singular ohm for values <= 1.
This challenge was inspired by Joshua Señoron's Python Sum of Resistance in Parallel Circuits challenge. You can find it here.

 */
function seriesResistance(arr) {
  return arr.reduce((pre, curr) => pre + curr) <= 1
    ? `${arr.reduce((pre, curr) => pre + curr)} ohm`
    : `${arr.reduce((pre, curr) => pre + curr)} ohms`;
}
console.log("🚀 ~ seriesResistance:", seriesResistance([1, 5, 6, 3]));
