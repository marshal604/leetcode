/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 找區間可以使用 slide window
  // 這邊關鍵是找出重複時要變更 window 寬度
  // 我們可以透過 Map 來紀錄重複的值
  // 定義 l, r 為窗口左右值
  // 定義 maxLength 為最長的長度, 每次長度公式為 max(maxLength, r - l + 1)
  // loop r < s.length
  // 當遇到重複的值就更新 l 值到不重複的位置，比較不抽象的講法就是內縮 window 中的 l
  // Time: O(n), loop s.length
  // Space: O(n), s 若都不重複則為 s.length
  
  let l = 0
  let r = 0
  let maxLength = 0
  const map = new Map()

  while (r < s.length) {
      if (map.has(s[r])) {
          // 只能往外縮，不會往外長
          l = Math.max(map.get(s[r]) + 1, l)
      }

      map.set(s[r], r)
      maxLength = Math.max(maxLength, r - l + 1)
      r++
  }

  return maxLength

  // 低效能版
  // 找區間可以使用 slide window
  // 定義 l, r 為起點
  // loop r < s.length
  // 定義 hash 去把走過的字存起來
  // 每次都更新 maxLength
  // 遇到重複就重置 r, l, hash
  // let l = 0
  // let r = 0
  // let maxLength = 0
  // const map = new Map()

  // while (r < s.length) {
  //     if (map.has(s[r])) {
  //         r = map.get(s[r]) + 1
  //         l = r
  //         map.clear()
  //         continue;
  //     }

  //     map.set(s[r], r)
  //     maxLength = Math.max(maxLength, r - l + 1)
  //     r++
  // }

  // return maxLength
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // let l = 0
  // let max = 0
  // const hash = {}
  // for (let r = 0; r < s.length; r++) {
  //     if (hash[s[r]] !== undefined) l = Math.max(l, hash[s[r]] + 1)
  //     hash[s[r]] = r
  //     max = Math.max(r - l + 1, max)
  // }

  // return max
}