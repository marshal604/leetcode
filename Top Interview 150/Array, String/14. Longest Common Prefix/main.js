/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // 暴力解
  // Time: O(NM), loop N (strs.length) * loop M (第一個字串長度)
  // Space: O(1), only constants
  // 紀錄第一個字串
  // loop strs 並且 loop strs[i] 去判斷到第幾個字串是符合的，並更新當前的字串
  // let commonPrefix = strs[0]

  // for (let i = 1; i < strs.length; i++) {
  //     let end = 0
  //     for (let j = 0; j < Math.min(commonPrefix.length, strs[i].length); j++, end++) {
  //         if (commonPrefix[j] === strs[i][j]) continue;
  //         break;
  //     }
  //     commonPrefix = commonPrefix.substring(0, end)
  // }

  // return commonPrefix
  // 縱向掃描, 最佳解效能比暴力解好一點
  // Time: O(MN), loop M (第一個字串長度) * loop N (strs.length)
  // Space: O(1), only constants
  let commonPrefix = strs[0]
  
  // 掃描字串
  for (let i = 0; i < strs[0].length; i++) {
      const char = commonPrefix[i]
      // 掃描整個 strs 第 i 個
      for (let j = 1; j < strs.length; j++) {
          if (i > strs[j].length || strs[j][i] !== commonPrefix[i]) {
              return commonPrefix.substring(0, i)
          }
      }
  }

  return commonPrefix
};