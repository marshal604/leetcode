/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // 使用 two pointers l 代表 match needle 位置的 index, r 紀錄 match 到第幾個 index
  // 如果 r - l + 1相等於 needle 代表 matched
  // Time: O(m * n), loop haystack length - needle length and loop needle length
  // Space: O(1), only constants
  let l = 0
  let r = 0
  let hLength = haystack.length
  let nLength = needle.length

  while (l <= hLength - nLength) {
      while (r - l < nLength && haystack[r] === needle[r - l]) r++
      if ((r - l) === needle.length) return l
      l++
      r = l
  }
  
  return -1

  // 使用 two pointers l 代表 match needle 位置的 index, r 紀錄 match 到第幾個 index
  // 如果 r - l + 1相等於 needle 代表 matched
  // Time: O(m * n), loop haystack length and loop needle length
  // Space: O(1), only constants
  // let l = 0, r = 0

  // while (l < haystack.length) {
      
  //     if (haystack[r] !== needle[r - l]) {
  //         l++
  //         r = l
  //         continue
  //     }
      
  //     if (haystack[r] === needle[r - l]) r++
  //     if ((r - l) === needle.length) return l
  // }
  
  // return -1
};