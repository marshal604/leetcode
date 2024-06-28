/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  // 使用 two pointer 來記錄起始跟結束
  // Time: O(n), loop nums.length
  // Space: O(n), save nums.length memory
  let l = 0
  let r = 1
  const result = []

  while (r <= nums.length) {
      while (r !== nums.length && (nums[r] - nums[r - 1]) === 1) r++
      const range = (r - 1) === l ? `${nums[l]}` : `${nums[l]}->${nums[r - 1]}`
      result.push(range)
      l = r
      r++
  }

  return result

  // gpt 解法1, two pointers
  // const result = []
  // let l = 0

  // while (l < nums.length) {
  //     let r = l
  //     while (r + 1 < nums.length && nums[r + 1] - nums[r] === 1) r++
  //     if (l === r) result.push(`${nums[l]}`)
  //     else result.push(`${nums[l]}->${nums[r]}`)

  //     l = r + 1
  // }

  // return result
};