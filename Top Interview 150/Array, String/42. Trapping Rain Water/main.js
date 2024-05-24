/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  // 這題的主要是找出總積水量
  // 這題關鍵點是先確定怎麼計算幾水量
  // 第 i 位置的積水量 = 最小值(左邊最高點, 右邊最高點) - height[i]
  // 這題原先我會認為可以透過 greedy 來找出當前的最佳積水量
  // 不過因為我們剛也推導了第 i 位置的積水量
  // 因為 greedy 是用當前的資訊且既往不咎，而每個點的左邊跟右邊最高點沒辦法靠當前資訊找到，因此不符合

  // two pointers 
  // Time: O(n), loop n
  // Space: O(1), only constants 
  if (height.length < 3) return 0;

  // 定義 total 全部積水量
  let total = 0
  // 定義 l, r 當雙指標
  let l = 0, r = height.length - 1
  // 定義 leftMax 左邊最高值, rightMax 右邊最高值
  let leftMax = 0, rightMax = 0

  while (l < r) {
    // 如果 height[r] > height[l] 代表 l 的水位比較低，這樣不管是更新 leftMax 或是計算當前積水量都不會因為 rightMax 改變而有差
    if (height[r] >= height[l]) {
        // 接著我們判斷 leftMax 需不需要更新，也就是 leftMax < height[l]
        // 若要更新就代表不會積水，因為沒有凹陷，反之則紀錄積水並移動 l
        if (height[l] >= leftMax) leftMax = height[l]
        else {
            // 紀錄當前水位
            const current = leftMax - height[l]
            if (current > 0) total+=current
        }
        l++
    } else {
        // 反之 rightMax 也是如此作法
        if (height[r] >= rightMax) rightMax = height[r]
        else {
            // 紀錄當前水位
            const current = rightMax - height[r]
            if (current > 0) total+=current
        }
        r--
    }
  }

  return total

  // two pointers 
  // Time: O(n), loop n
  // Space: O(1), only constants 
  // 定義 total 全部積水量
  let total = 0
  // 定義 l, r 當雙指標
  let l = 0, r = height.length - 1
  // 定義 leftMax 左邊最高值, rightMax 右邊最高值
  let leftMax = height[l], rightMax = height[r]

  while (l < r) {
    // 如果 leftMax < rightMax 代表 leftMax 是我們當前最低的水位，套用公式就是最小值
    if (leftMax < rightMax) {
        // 接著我們判斷 leftMax 需不需要更新，也就是 leftMax < height[l]
        // 若要更新就代表不會積水，因為沒有凹陷，反之則紀錄積水並移動 l
        if (leftMax < height[l]) leftMax = height[l]
        else {
            // 紀錄當前水位
            const current = leftMax - height[l]
            if (current > 0) total+=current
            l++
        }
    } else {
        // 反之 rightMax 也是如此作法
        if (rightMax < height[r]) rightMax = height[r]
        else {
            // 紀錄當前水位
            const current = rightMax - height[r]
            if (current > 0) total+=current
            r--
        }
    }
  }

  return total

  // 暴力法
  // Time: O(n^2), loop 兩次 n
  // Space: O(1), only constants
  // 定義 total 全部積水量
  let total = 0
  // loop height 來跑每個 height
  for (let i = 0; i < height.length; i++) {
    // 定義 leftMax 左邊最高點
    let leftMax = 0
    // 定義 rightMax 右邊最高點
    let rightMax = 0
    // nested first loop height 找出 leftMax
    for (let j = 0; j < i; j++) {
        leftMax = Math.max(height[j], leftMax)
    }
    // nested second loop height 找出 rightMax
    for (let j = i; j < height.length; j++) {
        rightMax = Math.max(height[j], rightMax)
    }

    // 紀錄當前水位
    const current = Math.min(leftMax, rightMax) - height[i]

    // 有積水才加總
    if (current > 0) total+=current
  }

  return total  
  
  // DP
  // Time: O(n), 3 times n loop
  // Space: O(n), 2 n arrays
  // 定義 total 全部積水量
  let total = 0
  // 定義 leftMax 紀錄當前每個位置的左邊最高位置
  let leftMax = Array(height.length).fill(0)
  // 定義 rightMax 紀錄當前每個位置的右邊最高位置
  let rightMax = Array(height.length).fill(0)
  // loop height for leftMax
  leftMax[0] = height[0]
  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i])
  }
  // loop height for rightMax
  rightMax[height.length - 1] = height[height.length - 1]
  for (let i = height.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i])
  }
  // loop height to calculate total
  for (let i = 0; i < height.length; i++) {
    // 紀錄當前水位
    const current = Math.min(leftMax[i], rightMax[i]) - height[i]
    // 有積水才紀錄
    if (current > 0) total+=current
  }

  return total
};







/** 錯誤答案 **/
// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// var trap = function(height) {
//   // 當 height = [4,2,0,3,2,5]
//   // 可以盛水面積如下圖， `-` 為水
//   //           |
//   // | - - - - |
//   // | - - | - |
//   // | | - | | |
//   // | | - | | |
//   // 透過 greedy loop height
//   // 定義 total 當作總盛水量
//   // 定義 temp 當作暫時盛水量
//   // 定義 start 當作開始位置
//   // 定義 end 當作結束位置
//   // 每次都透過比對 height 有沒有高過 start 來確認要不要更改 start
//   // 每次水量都先存在 temp，直到 height 高過 start 才放進 total
//   // 當 temp 為 0 時，更改 start 至 end
//   // end 每次迴圈後會往後移一位
//   // 若是 temp 還有值的情況下且 end 為最後一個數值，則更改 start 到下一個值
//   let total = 0
//   let temp = 0
//   let start = 0
//   let end = 1

//   // 只要 height.length < 3，基本上無法構成一個容器
//   if (height.length < 3) return 0

//   while (start < height.length - 1) {
//       if (end === height.length && temp !== 0) {
//           start++
//           end = start + 1
//           temp = 0
//           continue
//       }

//       if (height[start] <= height[end]) {
//           total+=temp
//           temp = 0
//           start = end
//       } else {
//           temp+= height[start] - height[end]
//       }  
//       end++
//   }

//   return total
//   // 這題如果用一個 for loop 透過 greedy 找出局部最佳解，可能會錯過最好的解法，因為會載 4, 2, 0, 3 這段就停了
//   // 但如果透過 loop 當作起始，然後第二個 lopp 去找出最佳解，最後把雨水的量跟結束位置記錄下來
//   // 這樣第一個 lopp 從結束位置繼續的話，最後加總就是盛水量
//   // 定義 i 當作開始位置
//   // 定義 j 當作結束位置
//   // 定義 total 為總成水量
//   // 定義 current 為當前盛水量
//   // loop i 沒有超過 height.length
//   // loop j 沒有超過 height.length
//   // 使用 greedy 在 j loop 中找出最好的盛水量
//   // 透過比較 current 大小，比較大的去更改 i 位置，並把 j 改為 i 的下一個位置
//   // 加總的數字可以透過 height[j-1] - height[j]

  
// };