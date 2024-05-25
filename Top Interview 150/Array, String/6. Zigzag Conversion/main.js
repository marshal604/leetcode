/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  // 從題目可以知道會隨著 s 字串一路走一個倒 N 的走法
  // 我們可以定義一個長度為 numRows 的字串陣列去跟隨倒 N 來走完, 但 s 長度可能小於 numRows, 所以要取最小值
  // 怎麼走的邏輯大概是『從上往下』，接著『從下往上』不斷輪流
  // Time: O(n), loop s length
  // Space: O(n), save numRows
  if (numRows === 1) return s

  const strs = Array(Math.min(s.length, numRows)).fill('')
  let upAndDown = false
  let curRow = 0
  for (let i = 0; i < s.length; i++) {
      strs[curRow]+= s[i]
      const isHead = curRow === 0
      const isBottom = curRow === numRows - 1
      if (isHead || isBottom) upAndDown = !upAndDown
      curRow += upAndDown ? 1 : -1
  }

  return strs.join('')
};

// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */
// var convert = function(s, numRows) {
//     if (numRows === 1) return s
//     const max = numRows * 2 - 2
//     let convertedStr = ''
//     for (let i = 0; i < numRows; i++) {        
//         let j = i
//         let isFirstOrLastRow = i === 0 || i === numRows - 1
//         let isEven = false
//         const odd = max - 2 * i
//         const even = 2 * i
//         while(j < s.length) {
//             convertedStr += s[j]
//             const increased = isFirstOrLastRow
//             ? max
//             : isEven
//             ? even 
//             : odd
//             j += increased
//             isEven = !isEven
//         }
//     }
//     return convertedStr
// };

/**
console.log(isFirstOrLastRow, numRows, max, odd, even)
console.log(s, convertedList.join(''))
max = num * 2 - 2
num = 3
origin index
0   4   8 (4, 4) = 3 * 2 - 2
1 3 5 7 9 (2, 2) = (2, 2)
2   6   10 (4, 4) = 3 * 2 - 2
after index
0   1   2 => i / 4
3 4 5 6 7 => i - 2
8.  9.  10 => i * 
num = 4
0.    6.      12 (6, 6) = 4 * 2 - 2
1   5 7.   11 13 (4, 2, 4, 2) = max - 2row, 2row
2 4.  8 10.   14 (2, 4, 2, 4)
3     9       15 (6, 6)

num = 6
0.        10             20 (10, 10) = 6 * 2 - 2
1.      9 11          19 21 (8, 2, 8, 2) max - 2row, 2row
2.    8   12       18    22 (6, 4, 6, 4) 
3.  7     13    17       23 (4, 6, 4, 6)
4 6       14 16          24 (2, 8, 2, 8)
5         15             25 (10, 10)

首先每個 row 的間距加起來都是一樣數字
*/