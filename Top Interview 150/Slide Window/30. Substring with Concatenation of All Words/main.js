/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  // 找 substring 我們通常都會使用 slide window，因為是"區間內"的字串
  // 這題因為要確保連續，所以需要配合 hashSum 來紀錄出現的次數
  // hashSum 會有兩個，一個是 word 總共會出現幾次，另一個是當前的 slide window 的 word 會出現幾次
  // 透過兩者的比較才能知道當前的 slide window 的數值是否正確
  // 主邏輯為 loop words.length 再開始做 slide window
  // 原因是單字會在 words.length 中循環，但不一定從 0 開始
  // 而 slide window 這邊就是定義 l, r 都是從 i 開始
  // 並從 r 開始往右擴展，每次擴長一個 word 的長度
  // 透過 hashSum 來確認是否已經出現過，若出現過就用計數(count)來紀錄，當 count 跟 words 長度一樣代表是 concatenated string
  // 已經知道 r 如何往右擴展，那 l 又是如何往右內縮呢?
  // 我們透過 hashSum 知道顯示的次數，而 slide window 顯示的次數若超過應該出現的次數，我們就需要調整 slide window 的顯示次數
  // 我們可以藉由內縮 l 去比對 word ，把超出的 word 的顯示次數 - 1，直到沒超出後，在繼續 r 的擴展

  let wordCountMap = new Map()
  let wordLength = words[0].length
  let result = []
  
  for (let word of words) wordCountMap.set(word, (wordCountMap.get(word)|| 0) + 1)

  for (let i = 0; i < wordLength; i++) {
      let l = i
      let r = i
      let count = 0
      const slideWindowWordCountMap = new Map()

      while (r + wordLength <= s.length) {
          const word = s.substr(r, wordLength)
          r += wordLength

          if (wordCountMap.has(word)) {
              slideWindowWordCountMap.set(word, (slideWindowWordCountMap.get(word) || 0) + 1)
              count++
              
              while (slideWindowWordCountMap.get(word) > wordCountMap.get(word)) {
                  const lWord = s.substr(l, wordLength)
                  slideWindowWordCountMap.set(lWord, slideWindowWordCountMap.get(lWord) - 1)
                  l += wordLength
                  count--
              }

              if (count === words.length) result.push(l)
          } else {
              slideWindowWordCountMap.clear()
              count = 0
              l = r
          }

      }
  }

  return result

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // gpt 答案
  // const wordCountMap = new Map()
  // const result = []
  // const wordLength = words[0].length
  // const totalWordLength = words.length * wordLength

  // for (const word of words) wordCountMap.set(word, (wordCountMap.get(word) || 0) + 1)
  
  // // 要跑 wordLength 是避免序列不是從 0，可能是 1 至 word 的長度
  // // 但如果確定都是從 0 ，這個 array 就不必要
  // for (let i = 0; i < wordLength; i++) {
  //     let left = i
  //     let right = i
  //     let wordCountInSlideWindowMap = new Map()
  //     let count = 0

  //     while (right + wordLength <= s.length) {
  //         const word = s.substr(right, wordLength)
  //         right += wordLength

  //         if (wordCountMap.has(word)) {
  //             wordCountInSlideWindowMap.set(word, (wordCountInSlideWindowMap.get(word) || 0) + 1)
  //             count++

  //             while (wordCountInSlideWindowMap.get(word) > wordCountMap.get(word)) {
  //                 const leftWord = s.substr(left, wordLength)
  //                 wordCountInSlideWindowMap.set(leftWord, wordCountInSlideWindowMap.get(leftWord) - 1)
  //                 count--
  //                 left += wordLength
  //             }
              
  //             if (count === words.length) result.push(left)

  //         } else {
  //             wordCountInSlideWindowMap.clear()
  //             count = 0
  //             left = right
  //         }
  //     }
  // }

  // return result
  
  // 這題透過 hashSum 跟 slide window 來解
  // hash 存放 substr 顯示的次數
  // slide window 來找出 concatenated str
  // 定義 wordLength = words[0].length
  // 定義整個concatenated substrings totalWordLength = words.length * wordLength
  // 定義 wordCountMap 來記錄整個 words 出現的次數
  // 定義 l, r
  // loop s.length, 並用 l < s.length - totalWordLength 當作條件, 因為至少要 totalWordLength 才能有一組結果
  // 定義 wordCountInSlideWindowMap 來紀錄, 在 slide window 出現 words 的次數
  // loop r < words.length
  // 利用 substr 找出每個 word
  // 接著比對 wordCount，若有就並加到 wordCountInSlideWindowMap
  // 如果 wordCountInSlideWindowMap > wordCount 就重比
  
  // 效能較差 2358ms
  // Time: O(MN), words.length = M, s.length = N
  // Space: O(N), words.length = N
  // const wordCountMap = new Map()    
  // const result = []
  // const wordLength = words[0].length
  // const totalWordLength = words.length * wordLength
  // let l = 0

  // for (let word of words) wordCountMap.set(word, (wordCountMap.get(word) || 0) + 1)

  // while (l <= s.length - totalWordLength) {
  //     const wordCountInSlideWindowMap = new Map()
  //     let r = 0
  //     while (r < words.length) {
  //         const str = s.substr(l + r * wordLength, wordLength)
  //         if (!wordCountMap.has(str)) break
          
  //         wordCountInSlideWindowMap.set(str, (wordCountInSlideWindowMap.get(str) || 0) + 1)
  //         if (wordCountInSlideWindowMap.get(str) > wordCountMap.get(str)) break;
  //         r++
  //     }
      
  //     if (r === words.length) result.push(l)
      
  //     l++
  // }

  // return result
};