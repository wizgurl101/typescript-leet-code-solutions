export function maxProfit(prices: number[]): number {
  let left = 0;
  let right = 1;
  let max = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];

      if (profit > max) {
        max = profit;
      }
    } else {
      left = right;
    }

    right++;
  }

  return max;
}
