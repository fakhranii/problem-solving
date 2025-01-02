// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
// function maxProfit(prices) {
//   let minPrice = Infinity; // Initialize to a very high value
//   let maxProfit = 0; // Initialize to 0, as no profit can be negative

//   for (let price of prices) {
//     // Update the minimum price seen so far
//     if (price < minPrice) {
//       minPrice = price;
//     }
//     // Calculate the profit if sold at the current price
//     const profit = price - minPrice;
//     // Update maxProfit if the current profit is greater
//     if (profit > maxProfit) {
//       maxProfit = profit;
//     }
//   }

//   return maxProfit;
// }

function maxProfit(prices) {
  let minPrice = prices[0]; // Initialize to the first price
  let maxProfit = 0; // Initialize to 0, as no profit can be negative

  for (let i = 1; i < prices.length; i++) {
    // Update the minimum price seen so far
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    // Calculate the profit if sold at the current price
    const profit = prices[i] - minPrice;
    // Update maxProfit if the current profit is greater
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}

// Example usage:
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0

// Example usage:
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0
