// 看了 gpt 後的思路
/**
 * @param {number[]} nums
 * @return {number}
 */
 // Time: O(n), loop nums
 // Speac: O(1), 常數
 var jump = function(nums) {
  // 定義 maxReach 紀錄最大可跳耀的位置
  // 定義 edge 紀錄當前這一步最大可跳耀到的位置
  // 定義 jumpCount 紀錄當前跳幾次
  // 在 Jump Game I 是當 maxReach 超過 nums.length - 1 就會告知可到達
  // 但在 Jump Game II 的重點在於 jump 的次數，所以不能在 maxReach 超過時就回傳
  // 反而是要在等這一步計算完成，也就是 edge 超過時才回傳

  if (nums.length === 1) return 0 // 等於一個值就是不用跳就到了
  
  let maxReach = nums[0]
  let edge = nums[0]
  let jumpCount = 1


  for (let i = 1; i < nums.length; i++) {
      if (i > edge) {
          edge = maxReach
          jumpCount += 1
          if (edge >= nums.length - 1) break;
      }
      maxReach = Math.max(maxReach, nums[i] + i)
  }

  return jumpCount
};


// // 我一開始的思路
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var jump = function(nums) {
//     // Jump Game I 是透過 maxReach 去找出區間最優，並 loop nums 去確認能不能到最後一個值
//     // Jump Game II 則是找出最小步數可到最後一個值
//     // 我認為一樣可以使用 maxReach 找出區間最優，但要有個算法去計算目前共幾步
//     // 定義 maxReach 去紀錄最大可到達的 index
//     // 定義 minStepNumber 去紀錄最小步數
//     // 定義 prevMaxReach, 紀錄當 maxReach 變更前的值
//     // 如果 maxReach 大於 nums 的長度，則直接回傳 minStepNumber
  
//     let maxReach = 0
//     let prevMaxReach = 0
//     let minStepNumber = 0

//     for (let i = 0; i < nums.length; i++) {
//         maxReach = Math.max(maxReach, nums[i] + i)
//         if (maxReach !== prevMaxReach) {
//             prevMaxReach = maxReach
//             minStepNumber += 1
//         }
//         if (maxReach >= nums.length - 1) return minStepNumber
//     }

//     return minStepNumber
// };