/**
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Time: O(n), loop n 個字串
// Space: O(1), 因為只有 26 個字母
var isAnagram = function(s, t) {
  // 基本上是確認兩邊是不是相同字母但順序不同沒關係
  // 我們先做幾個 case 的比較
  // 長度是否相同
  if (s.length !== t.length) return false
  const hash = {}
  // 我們 loop s 用一個 hash 存 s 字母出現的次數
  for (let letter of s) {
      const count = hash[letter] || 0
      hash[letter] = count + 1
  }
  // 接著 loop t 去把 hash 一一清空
  for (let letter of t) {
      const count = hash[letter]
      if (!count) return false
      hash[letter] = count - 1
  }
  
  return true
};