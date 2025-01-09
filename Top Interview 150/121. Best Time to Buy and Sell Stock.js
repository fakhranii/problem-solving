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
