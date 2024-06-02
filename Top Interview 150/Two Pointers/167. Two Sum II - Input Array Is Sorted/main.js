/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // 在一個遞增的陣列找出兩個值相加會等於 target 的 indexes，並且空間複雜度為 O(1)
  // 因為是一個遞增的陣列，且一定會有一個解答
  // 我們可以透過 two pointers, l 從左邊開始, r 從右邊回來
  // 透過 l + r 產出的數值，來確認是大於 target 還是小於 target 來決定 l 跟 r 的位置
  // Time: O(n), loop numbers
  // Space: O(1), only constants
  let l = 0
  let r = numbers.length - 1

  while (l < r) {
    const sum = numbers[l] + numbers[r]
    if (sum === target) return [l + 1, r + 1]
    // 比 target 大，代表要小一點的數值，陣列是遞增，所以把 r 往前一個 index 數值就會變小
    if (sum > target) r--
    else l++
  }


//   // 這邊可以使用 two pointers 透過 loop 找出相加等於 tagert
//   // l 紀錄當前位置
//   // r 紀錄比對的位置
//   // while (r < numbers.length) 跑完整個 numbers
//   // 判斷 numbers[l] 跟 numbers[r] 的值相加是不是等於 target，不是就繼續，是就回傳，大於就 l++ 重跑
//   // 因為一定會有一個 solution, 所以不理 edge cases
//   // Time: O(N^2), loop numbres twice
//   // Space: O(1), only constants


//   let l = 0
//   let r = 1

//   while (r < numbers.length) {
//     while (r < numbers.length && numbers[l] + numbers[r] < target) r++
//     if (numbers[l] + numbers[r] === target) return [l + 1, r + 1]
//     l++
//     r = l + 1
//   }

//   return [l + 1, r + 1]
};