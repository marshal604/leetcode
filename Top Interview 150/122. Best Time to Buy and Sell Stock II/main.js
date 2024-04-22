/**
 * @param {number[]} prices
 * @return {number}
 */
// Time: O(n), loop prices
// Space: O(1), 因為只有固定的變數
var maxProfit = function(prices) {
  // 這題主要是買低賣高
  // loop prices 並用雙指針去紀錄買跟賣
  // 當賣的價錢低於買就應該要調整購買的方式
  // 然後把這些買賣結果累加起來
  if (prices.length < 2) return 0

  let buy = prices[0]
  let sell = 0
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
      const price = prices[i]
      sell = price
      const diff = sell - buy
      if (diff > 0) profit = profit + diff
      buy = sell
  }

  return profit
};