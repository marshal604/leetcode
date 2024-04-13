/**
 * 
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
 */
// ## 看解答後才知道藉由限制字母數量來做排序

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 // Time: O(n * k), n 為 strs length, k 為 26 字母
 // Space: O(n * k), n 為 strs length, k 為 26 字母
 var groupAnagrams = function(strs) {
  // 這題是 valid anagram 的變形
  // 除了要找出相同的，還要把相同的放到同一個組合裡
  // 目前想到最簡單的就是排序
  // 把 strs 的字串都根據字母做排序
  // 接著再把相同的字母的原始排序存到陣列回傳
  const hash = {}
  const result = []
  for (let i = 0; i < strs.length; i++) {
      const originItem = strs[i]
      const sortedItem = getSortedItem(originItem)
      if (hash[sortedItem] !== undefined) {
          result[hash[sortedItem]].push(originItem)
          continue
      }

      hash[sortedItem] = result.length
      result.push([originItem])
  }
  
  return result
};

var getSortedItem = function(str) {
  // 透過只跑 26 個字母來做到排序，降低 O(nlogn) 變成 O(n)
  // return str.split('').sort().join('')
  
  const count = Array(26).fill(0)
  const aCodePosition = 'a'.charCodeAt()
  for (let s of str) {
      count[s.charCodeAt() - aCodePosition]++
  }

  const result = []
  for (let i = 0; i < 26; i++) {
      if (count[i] !== 0) {
          const letter = String.fromCharCode(aCodePosition + i) 
          result.push(letter, count[i])
      }
  }

  return result.join('')
}


/** 第一次解只想到排序解法
 * @param {string[]} strs
 * @return {string[][]}
 */
 // Time: O(nlogn), 使用排序
 // Space: O(n), 存 n 字串的 key-value
 var groupAnagrams = function(strs) {
  // 這題是 valid anagram 的變形
  // 除了要找出相同的，還要把相同的放到同一個組合裡
  // 目前想到最簡單的就是排序
  // 把 strs 的字串都根據字母做排序
  // 接著再把相同的字母的原始排序存到陣列回傳
  const sortedList = strs.map((str) => {
      return str.split('').sort((a, b) => a > b ? -1 : 1)
  })
  const hash = {}
  const result = []
  for (let i = 0; i < sortedList.length; i++) {
      const originItem = strs[i]
      const item = sortedList[i]
      if (hash[item] !== undefined) {
          result[hash[item]].push(originItem)
          continue
      }

      hash[item] = result.length
      result.push([originItem])
  }
  
  return result
};

/** 只要在 loop 裡排序即可
 * @param {string[]} strs
 * @return {string[][]}
 */
 // Time: O(nlogn), 使用排序
 // Space: O(n), 存 n 字串的 key-value
 var groupAnagrams = function(strs) {
  // 這題是 valid anagram 的變形
  // 除了要找出相同的，還要把相同的放到同一個組合裡
  // 目前想到最簡單的就是排序
  // 把 strs 的字串都根據字母做排序
  // 接著再把相同的字母的原始排序存到陣列回傳
  const hash = {}
  const result = []
  for (let i = 0; i < strs.length; i++) {
      const originItem = strs[i]
      const sortedItem = strs[i].split('').sort().join('')
      if (hash[sortedItem] !== undefined) {
          result[hash[sortedItem]].push(originItem)
          continue
      }

      hash[sortedItem] = result.length
      result.push([originItem])
  }
  
  return result
};