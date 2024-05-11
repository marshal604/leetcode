/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Time: O(n)
// Space: O(1), The output array does not count as extra space for space complexity analysis
var productExceptSelf = function(nums) {
  // 基本上我們可以先算出 prefix 跟 suffix
  // prefix 是每個值前面被乘的數
  // suffix 是每個值後面被乘的樹
  // prefix * suffix = product of array except self
  // 如果不要額外創建 prefix 跟 suffix
  // 我們就必須在 for loop 裡面直接把 prefix 跟 suffix 計算到 result 中
  const result = Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i++) {
      result[i] = result[i - 1] * nums[i - 1]
  }
  
  let R = 1
  for (let i = nums.length - 2; i >= 0; i--) {
      R = R * nums[i + 1]
      result[i] = result[i] * R
  }

  return result
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Time: O(n)
// Space: O(n)
var productExceptSelf = function(nums) {
    // 基本上我們可以先算出 prefix 跟 suffix
    // prefix 是每個值前面被乘的數
    // suffix 是每個值後面被乘的樹
    // prefix * suffix = product of array except self
    const prefix = Array(nums.length).fill(1)
    const suffix = Array(nums.length).fill(1)

    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1]
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1]
    }

    const result = []

    for (let i = 0; i < nums.length; i++) {
        result.push(prefix[i] * suffix[i])
    }

    return result
};

