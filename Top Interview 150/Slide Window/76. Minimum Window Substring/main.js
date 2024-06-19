/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  // 找出 s 中包含 t 的最小 substr，t 有多少重複的字母，substr 就至少要有多少重複的字母
  // 這題可以透過 hashSum 紀錄字母出現次數以及使用 slide window 找出 substr
  // 透過 wordCountMap 去紀錄字母出現次數，以及 windowWordCountMap 去紀錄 window 裡面字母的出現的次數
  // 因為是至少要有多少重複的字母，所以我們要去紀錄當前有多少字母，requiredCount = wordCountMap.size()
  // 以及有多少字母符合的次數 wordMatchedCount，透過條件做加減
  // 透過 loop r < s.length 去擴長右邊的寬度
  // 當有 s[r] 有 match 到就記錄到 windowWordCountMap
  // 當 windowWordCountMap.get(s[r]) === wordCountMap.get(s[r]) 就更新 matchedWordCounts
  // 當 matchedWordCounts === wordCountsMap.size 代表有 result，紀錄到 minLength 跟 minLeft
  // 最後回傳 substr(minLeft, minLength) 即可
  // Time: O(M+N), loop l 次與 r 次，所以是 M+N
  // Space: O(2N), 第一個 N 是 t.length， 第二個 N 也是 t.length

  const wordCountsMap = new Map()
  for (let word of t) wordCountsMap.set(word, (wordCountsMap.get(word) || 0) + 1)

  let r = 0
  let l = 0
  let minLength = Infinity
  let minLeft = l
  const windowWordCountsMap = new Map()
  let matchedWordCounts = 0

  while (r < s.length) {
      const word = s[r]
      if (wordCountsMap.has(word)) {
          windowWordCountsMap.set(word, (windowWordCountsMap.get(word) || 0) + 1)
          if (wordCountsMap.get(word) === windowWordCountsMap.get(word)) matchedWordCounts++
      }

      while (l <= r && matchedWordCounts === wordCountsMap.size) {
          if (minLength > r - l + 1) {
              minLength = r - l + 1
              minLeft = l
          }

          if (windowWordCountsMap.has(s[l])) {
              windowWordCountsMap.set(s[l], windowWordCountsMap.get(s[l]) - 1)
              if (windowWordCountsMap.get(s[l]) < wordCountsMap.get(s[l])) matchedWordCounts--                
          }

          l++
      }
      r++
  }

  const result = s.substr(minLeft, minLength)

  return minLength === Infinity ? '' : result
  
  
  // 理解錯誤的版本，因為不 care  match 幾次，而是該有的字要有但找出都有的最小長度
  // 用最小長度找出 s 中有 t 的字串
  // 這題透過 hashSum 紀錄出現次數，搭配 slide window 找出最小長度就可以解決
  // hashSum 會有兩個，一個是紀錄 t 有哪些字，一個是紀錄 slide window 中的字幕出現幾次
  // 定義 l, r, loop s，並透過 r 持續往右來找出所有可能性
  // loop 期間要有個 count 跟 t.length 做比對，當相等時代表有一個解，把解放到 result
  // 如果再次遇到相同的姐，就比較長度，小的就取代

  // const wordCountMap = new Map()
  // for (let str of t ) wordCountMap.set(str, (wordCountMap.get(str) || 0) + 1)

  // let l = 0
  // let r = 0
  // let count = 0
  // let result = ''
  // let changed = false
  // const wordCountInSlideWindowMap = new Map()

  // while (r < s.length) {
  //     const word = s[r]
  //     if (wordCountMap.has(word)) {
  //         wordCountInSlideWindowMap.set(word, (wordCountInSlideWindowMap.get(word) || 0) + 1)
  //         count++
  //         while (wordCountInSlideWindowMap.get(word) > wordCountMap.get(word)) {
  //             while (!wordCountMap.has(s[l])) l++
  //             const lWord = s[l]
  //             wordCountInSlideWindowMap.set(lWord, wordCountInSlideWindowMap.get(lWord) - 1)
  //             count--
  //             l++
  //         }
          
  //         if (count === t.length) {
  //             while (!wordCountMap.has(s[l])) l++
  //             const currentWindowStr = s.substring(l, r + 1)
  //             if (changed) {
  //                 result = currentWindowStr.length < result.length ? currentWindowStr : result
  //             } else {
  //                 result = currentWindowStr
  //             }
  //             changed = true
  //         }
  //     }
  //     r++
  // }

  // return changed ? result : ''

};