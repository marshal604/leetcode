/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 // Time: O(n)
 // Space: O(1)
 var productExceptSelf = function(nums) {
  // 看解答 Space O(1)
  // Follow up: Can you solve the problem in O(1) extra space complexity?
  // (The output array does not count as extra space for space complexity analysis.)
  // 產出一個 output list
  // 用 nums 計算左側乘績並存到 output, 從 1 是因為最左側不需要計算
  const output = Array(nums.length).fill(1)
  for (let i = 1; i < nums.length; i++) {
      output[i] = output[i - 1] * nums[i - 1]
  }
  // 用 nums 計算右側並跟 output 結合, 從 -2 是因為最右側不需要計算
  let R = 1
  for (let i = nums.length - 2; i >=0; i--) {
      R *= nums[i + 1]
      output[i] = output[i] * R
  }

  return output
/*
  // 看解答 Space O(n)
  const prefix = Array(nums.length).fill(1)
  const suffix = Array(nums.length).fill(1)
  const result = Array(nums.length).fill(1)
  // 計算左邊的乘積, 從 1 開始是因為 0 左邊沒值
  for (let i = 1; i < nums.length; i++) prefix[i] = prefix[i - 1] * nums[i - 1]
  // 計算右邊的乘積, 從 length - 2 是因為撇除最右邊以及 index 從 0 開始
  for (let i = nums.length - 2; i >= 0; i--) suffix[i] = suffix[i + 1] * nums[i + 1]
  // prefix * suffix 為除本身的乘數
  for (let i = 0; i < nums.length; i++) result[i] = prefix[i] * suffix[i]
  
  return result

  // 基本上回傳一個陣列, answers
  // answers[i] 為其他元素的相乘
  // 先嘗試暴力解
  const result = Array(nums.length).fill(1)
  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
          if (i === j) continue
          result[i] = result[i] * nums[j]
      }
  }
  
  return result

*/
};