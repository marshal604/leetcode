 /**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 // Time: O(n), loop gas n times
 // Space: O(1), only constants
 var canCompleteCircuit = function(gas, cost) {
  // 這題是典型的 greedy 題目，也就是要找出從哪個加油站開始可以跑完整個環路
  // 定義 startSationIndex 來記錄加油站的起點
  // 定義 currentTank 來計算當前的油量，並透過每次的迴圈去驗證是否為負數，若為負數則代表開始的加油站無法跑完全程
  // 基本上當前油量(gas[i])扣除到下一站前的油花費(cost[i])，就可以得出能不能到下一站了，因為不可能先獲得油才消耗，需要先消耗才能獲得油
  // 定義 totalTank 來確認跑完全程的油量是否足夠，並在足夠的情況下回傳 startSationIndex，反之則回傳 -1
  
  let totalTank = 0
  let currentTank = 0
  let startSationIndex = 0

  for (let i = 0; i < gas.length; i++) {
      currentTank = currentTank + gas[i] - cost[i]
      totalTank = totalTank + gas[i] - cost[i]

      if (currentTank < 0) {
          currentTank = 0
          startSationIndex = i + 1
      }
  }

  return totalTank >= 0 ? startSationIndex : -1
}


// /** 我錯誤的答案
//  * @param {number[]} gas
//  * @param {number[]} cost
//  * @return {number}
//  */
//  // Time
//  // Space
// var canCompleteCircuit = function(gas, cost) {
//     // gas[i] 是到站可以加的油
//     // cost[i] 是到 i+1 站要消耗的油
//     // 思路應該是先找出最多油的站，然後由他開始當起點
//     // 接著 loop 一個 circle，若能跑完則回傳 start index
//     // 反之回傳 -1

//     let startIndex = 0
//     let currentGas = gas[0]
//     let diff = gas[0] - cost[0]
//     for (let i = 1; i < gas.length; i++) {
//         if (gas[i] - cost[i] > diff) {
//             startIndex = i
//             currentGas = gas[i]
//             diff = gas[i] - cost[i]
//         }
//     }

//     let costIndex = startIndex
//     let gasIndex = (startIndex + 1) % gas.length

//     for (let i = 0; i < gas.length; i ++) {
//         if (currentGas - cost[costIndex] < 0) return -1

//         currentGas = currentGas - cost[costIndex] + gas[gasIndex]        
//         gasIndex = (gasIndex + 1) % gas.length
//         costIndex = (costIndex + 1) % gas.length
//     }

//     return startIndex
// };