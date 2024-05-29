/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  // 題目
  // 根據 maxWidth 決定每行顯示的字數
  // 每行文字中間的 space 都是均等的，但若無法均等，左邊的 space 會比右邊多
  // 最後一行每個單字的 space 都是一個，後面 space 會補齊
  
  // 這題基本上要先算出每行的單字數量
  // 然後再根據是不是一個單字或是最後一行來做兩種 space 補齊的處理
  // 這題我會用 two pointers
  // 定義 l 為起始 index
  // 定義 r 為該行最後一個 index
  // loop l < words.length 來跑全部的 words
  // 定義 charsLength 來紀錄當前紀錄到幾個字元了
  // 透過第二個 loop r < words.length 來計算每行的單字數量
  // 定義 numberOfWords = r - l 來紀錄當前有幾個單字
  // 定義 wordsGapLength = numberOfWords - 1
  // 定義 numberOfSpaces = maxWidth - charsLength + wordsGapLength, 把多加的 space 補回來
  // Time: O(MN), M 為每行的單字數量, N 為總單字數量
  // Space: O(N), N 為幾行單字
  // 根據條件計算 r === words.length || numberOfWords === 1 計算最後一行跟一個單字的行為
  // 這邊就單純地放入單字跟確認不是最後一個單字就補上 space 即可
  // 另一個就比較複雜一點，需要計算每個單字間空格的基本數量以及還要補齊的空格數量
  // basicSpaces = Math.floor(numberOfSpaces / wordsGapLength)
  // extraSpaces = numberOfSpaces % wordsGapLength
  // 接著就是補齊，然後考慮 extraSpaces 要不要補上即可

  let l = 0
  const result = []
  while (l < words.length) {
      let r = l + 1
      let totalCharsLength = words[l].length
      while (r < words.length) {
          if (totalCharsLength + 1 + words[r].length > maxWidth) break
          totalCharsLength+= 1 + words[r].length
          r++
      }

      const numberOfWords = r - l
      const wordsGapLength = numberOfWords - 1
      const numberOfSpaces = maxWidth - totalCharsLength + wordsGapLength
      let line = ''

      if (r === words.length || numberOfWords == 1) {
          while (l < r) {
              line+=words[l]
              if (l !== r - 1) line+= ' '
              l++
          }
          line+= ' '.repeat(numberOfSpaces - wordsGapLength)
      } else {
          const basicSpace = Math.floor(numberOfSpaces / wordsGapLength)
          let extraSpace = numberOfSpaces % wordsGapLength

          while (l < r) {
              line+=words[l]
              if (l !== r - 1) line+= ' '.repeat(basicSpace + (extraSpace-- > 0 ? 1 : 0))
              l++
          }
      }
      result.push(line)
  }

  return result


  // 思路對，但我的解法有漏洞，會在 maxWidth 跟 words 的單字相同時出現 runtime error
  // 根據 maxWidth 決定每行顯示的字數
  // 每行文字中間的 space 都是均等的，但若無法均等，左邊的 space 會比右邊多
  // 最後一行的 space 都是一個
  // two pointers
  // 定義 l 為初始, r 為滿足 maxWidth 的位置
  // 當 r 不等於 words.length 代表還沒分配完
  // 當找到 maxWidth 後，要在一個 while 去把 l 到 r 跑完，其中要算出 space 放進去
  // 當 r 是 words.ength 時，代表最後一行，這邊就特別放另一個 space 的解法

  // let l = 0
  // let r = 0
  // let currentLength = 0
  // const result = []
  // const SPACE = ' '
  // while (r !== words.length) {
  //     let str = ''
  //     let spaceCount = 0
  //     while (r !== words.length && maxWidth > currentLength + words[r].length + spaceCount) {
  //         if (currentLength) spaceCount++
  //         currentLength+=words[r].length
  //         r++
  //     }
  //     if (l === r - 1 || r === words.length) {
  //         while (l < r) {
  //             if(str) str+=SPACE
  //             str+=words[l]
  //             l++
  //         }
  //         if (str.length < maxWidth) str+=SPACE.repeat(maxWidth - str.length)
  //     } else {
  //         let remainLength = maxWidth - currentLength
  //         const basicSpaces = Math.floor(remainLength / (r - l - 1))
  //         let extraSpaces = remainLength % (r - l - 1)
  //         while (l < r) {
  //             str+=words[l]
  //             if (str && l !== r - 1) str+=SPACE.repeat(basicSpaces + (extraSpaces-- > 0 ? 1 : 0))
  //             l++
  //         }
  //     }

  //     currentLength = 0
  //     result.push(str)
  // }

  // return result
};