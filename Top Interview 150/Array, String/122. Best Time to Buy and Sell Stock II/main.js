/**
 * @param {number[]} prices
 * @return {number}
 */
 // Time: O(n), loop prices
 // Space: O(1), 常數
 var maxProfit = function(prices) {
  // 股票通常可以使用 FSM + DP 來解
  // 定義 hold 來記錄繼續持有股票/當天買進股票
  // 定義 notHold 來紀錄繼續空手/當天賣出股票
  // 這題目是找出陣列內加總的最大利益
  // 因此我們可以 loop prices 並記錄每天的 hold 跟 notHold 的最大利潤狀態
  // hold 是記錄持有股票(前一天的 hold)跟當天買進股票 (前一天的 notHole - 當天 price)
  // notHold 是記錄空手(前一天的 notHold)跟當天賣出股票 (前一天的 hold + 當天 price)
  // 為了追求最大利潤，都會以 Math.max 去儲存每天該狀態會獲得的最大利潤 (持有股票的最大理潤/持有現金的最大利潤)
  // 最後把最後一天過完後的 notHold 回傳就是最後賣出股票的金額
  if (prices.length === 0) return 0

  let currentHold = -prices[0]
  let currentNotHold = 0

  for (let i = 1; i < prices.length; i++) {
      const [prevHold, prevNotHold] = [currentHold, currentNotHold]
      currentHold = Math.max(prevHold, prevNotHold - prices[i])
      currentNotHold = Math.max(prevNotHold, prevHold + prices[i])
  }

  return currentNotHold
};


// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
//  // Time: O(n), loop prices
//  // Space: O(1), 紀錄常數
// var maxProfit = function(prices) {
//     // 這題主要是買低賣高
//     // loop prices 並用雙指針去紀錄買跟賣
//     // 當賣的價錢低於買就應該要調整購買的方式
//     // 然後把這些買賣結果累加起來
//     if (prices.length < 2) return 0

//     let buy = prices[0]
//     let sell = 0
//     let profit = 0
//     for (let i = 1; i < prices.length; i++) {
//         const price = prices[i]
//         sell = price
//         const diff = sell - buy
//         if (diff > 0) profit = profit + diff
//         buy = sell
//     }

//     return profit
// };