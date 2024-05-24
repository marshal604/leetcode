/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  // 單字之間最多一個空格
  // 請回傳翻轉方向的單字
  // Time: O(N), loop s length
  // Space: O(1), only constants
  // 可以使用 two pointer 從後面開始記錄
  // let start 去紀錄開始，起始值為 s.length - 1
  // let end 去紀錄結束，起始值為 s.length - 1
  // loop s, 條件是 start < 0 結束
  // 當是 space 時， 如果 start 跟 end 不相同時則紀錄並更新 start 跟 end 
  //               若相同則 end 跟 start 都從當前位置往前
  // 當不是 space 時，只有 start 要往前

  let start = s.length - 1
  let end = s.length - 1
  let result = ''
  const SPACE = ' '

  while (start >= 0) {
      if (s[start] === SPACE) {
          if (end !== start) {
              const spaceIndex = result === '' ? 1 : 0
              result = result + s.substring(start + spaceIndex, end + 1)
          }
          end = start - 1
      } else if (start === 0) {
          if (result) result = result + SPACE + s.substring(start, end + 1)
          else result = result + s.substring(start, end + 1)
      }
      start--
  }

  return result


  // 單字之間最多一個空格
  // 請回傳翻轉方向的單字
  // Time: O(N), loop s length
  // Space: O(M), save words length
  // 可以使用 two pointer 從後面開始記錄
  // let start 去紀錄開始，起始值為 s.length - 1
  // let end 去紀錄結束，起始值為 s.length - 1
  // loop s, 條件是 start < 0 結束
  // 當是 space 時， 如果 start 跟 end 不相同時則紀錄並更新 start 跟 end 
  //               若相同則 end 跟 start 都從當前位置往前
  // 當不是 space 時，只有 start 要往前

  // let start = s.length - 1
  // let end = s.length - 1
  // let words = []
  // const SPACE = ' '

  // while (start >= 0) {
  //     if (s[start] === SPACE) {
  //         if (end !== start) {
  //             words.push(s.substring(start + 1, end + 1))
  //         }
  //         end = start - 1
  //     } else if (start === 0) {
  //         words.push(s.substring(start, end + 1))
  //     }
  //     start--
  // }

  // return words.join(SPACE)
};