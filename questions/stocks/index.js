/** Stock Trading
 *
 * Given an array of 'prices', find the transaction that will yield the greatest profits.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing
 * a different day in the future to sell that stock.
 *
 * @examples
 * stocks([8, 3, 6, 1, 6, 4, 7]) -> 6
 * stocks([1, 8, 3, 4]) -> 7
 * stocks([2, 9, 18, 9, 2]) ->  16
 */

const stocks = (prices) => {
  // MY TRY:
  let buy = prices[0];
  let sell = prices[1];
  for (let i = 0; i < prices.length - 2; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    }
    for (let j = i + 1; j < prices.length - 1; j++) {
      if (prices[j] > sell) {
        sell = prices[j];
      }
    }
  }
  return sell - buy;
  //
  // OTHER SOLUTIONS:
  let buy2 = 0;
  let sell2 = 1;
  let maxProfit = 0;
  while (sell2 < prices.length) {
    const profit = prices[sell2] - prices[buy2];
    if (profit > 0) {
      maxProfit = Math.max(maxProfit, profit);
    } else {
      buy2 = sell2;
    }
    sell2++;
  }
  return maxProfit;
};

//DO NOT EDIT BELOW THIS LINE
module.exports = stocks;
