/**
 * @param {number[]} ratings
 * @return {number}
 */
 // Time: O(n), loop ratings
 // Space: O(n), candies length
 var candy = function(ratings) {
  // 每個小孩都至少有一個糖果，而且只要分數比旁邊高的話，糖果也會比旁邊多
  // 我們可以透過 candies 的陣列去分配每人至少一個糖果
  // 並利用 greedy 去找出每個小孩至少要有多少糖果
  // 透過第一次 greedy 找出比左邊鄰居 rating 高的糖果數量
  // 並透過第二次 greedy 找出比右邊鄰居 rating 高的糖果數量
  

  let candies = Array(ratings.length).fill(1)
  
  // 找出比左鄰居評分多的 candies 結果
  for (let i = 1; i < ratings.length; i++) {
      // 要跟前一個比的原因是，這樣才有符合 greedy 的局部最佳解，也就是當前可以獲得最多的糖果數
      // 如果讓 i = ratings.length，然後 ratings[i] > ratings[i - 1] 則會變成每次都 reset，而沒辦法找出當前最大的糖果數
      if (ratings[i] > ratings[i - 1]) candies[i] = candies[i - 1] + 1
  }

  // 找出比右鄰居評分多的 candies 結果
  for (let i = ratings.length - 2; i >= 0; i--) {
      // 要跟後一個比的原因是，這樣才有符合 greedy 的局部最佳解，也就是當前可以獲得最多的糖果數
      // 如果是讓 i = 0 開始，然後 ratings[i] > ratings[i + 1] 則會變成每次都 reset，而沒辦法找出當前最大的糖果數
      if (ratings[i] > ratings[i + 1]) {
          candies[i] = Math.max(candies[i], candies[i + 1] + 1)
      }
  }

  const minCandies = candies.reduce((total, num) => total + num, 0)

  return minCandies
}

// 以下都錯誤答案，雙指標的方式因為只要比旁邊多就多一個糖果，所以會多發糖果

// /**
//  * @param {number[]} ratings
//  * @return {number}
//  */
// var candy = function(ratings) {
//     // 題目很清楚，每個小孩至少一個糖果，然後比左右兩邊其中一邊大就可以再多得一個糖果，求出最小要發幾個糖果
//     // 定義 minCandies 並先給他 ratings 長度的糖果，因為只少每人會有一個，然後這個參數是紀錄最少要多少糖果
//     // 當 rating 只有一個長度直接回傳 minCandies
//     // 當 rating 只有兩個長度時且有大小之分就回傳 minCandies + 1，反之直接回傳 minCandies
//     // 定義 l 來記錄上一個 rating
//     // 定義 c 來記錄當前的 rating
//     // 定義 r 來紀錄下一個 rating
//     // loop ratings
//     // 當 i = 0 的時候，只要比對 i 有沒有大於 i + 1，有就 minCandies + 1
//     // 當 i = 最後一個時，只要比對 i 有沒有大於 i - 1，有就 minCandies + 1
//     // 當 c > l 或 c > r 時，代表比旁邊多，所以要加一個糖果

//     let minCandies = ratings.length

//     if (ratings.length === 1) return minCandies
//     if (ratings.length === 2) return ratings[0] > ratings[1] || ratings[1] > ratings[0] ? minCandies + 1 : minCandies

//     for (let i = 0; i < ratings.length; i++) {
        
//         if (i === 0) {
//             if (ratings[i] > ratings[i + 1]) minCandies++
//             continue;
//         }

//         if (i === ratings.length - 1) {
//             if (ratings[i] > ratings[i - 1]) minCandies++
//             continue;
//         }

//         let l = ratings[i - 1]
//         let c = ratings[i]
//         let r = ratings[i + 1]

//         if (c > l || c > r) minCandies++
//     }

//     return minCandies
    
// };

// /** 一開始誤會題目，以為只要比旁邊大就多一個糖果，所以糖果會多發
//  * @param {number[]} ratings
//  * @return {number}
//  */
// var candy = function(ratings) {
//     // 題目很清楚，每個小孩至少一個糖果，然後比左右兩邊其中一邊大就可以再多得一個糖果，求出最小要發幾個糖果
//     // 感覺可以用雙指標跑這一題
//     // 因為是雙指標會要兩個值，所以只有一個 rating 時就直接回傳 1
//     // 定義 minCandies 紀錄最少要多少糖果
//     // 定義 l 來記錄上一個 rating
//     // 定義 r 來紀錄當前的 rating
//     // loop ratings
//     // 當 l 大於 r 時，代表 l 比旁邊多，所以要加一個糖果
//     // 當 r 大於 l 時，代表 r 比旁邊多，所以要加一個糖果
//     // *盲區* 但這邊要小心的是，他是只要比旁邊多就只多給一次糖果，所以比左邊大跟比右邊大總共只會多一個糖果
//     // 所以當 l > r 給完糖果後，要把 l 往右

//     if (ratings.length === 1) return 1

//     let minCandies = 1
//     let l = 0
//     let r = 1

//     for (let i = 1; i < ratings.length; i++) {
//         l = ratings[i - 1]
//         r = ratings[i]
//         if (l > r) minCandies++
//         if (r > l) minCandies++
//         minCandies++
//     }

//     return minCandies
    
// };