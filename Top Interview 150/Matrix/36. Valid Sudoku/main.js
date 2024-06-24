/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // 確認當前數獨的數字都有遵守規則
  // 有三個規則是，同一排沒有相同值、同一列沒有相同值，同個九宮格沒有相同值
  // 我們可以定義三個 set 去存這些值，並且直接存進數字
  // Time: O(81) -> O(1)
  // Space: O(81 + 81 + 81) -> O(1)

  const rowSet = Array(9).fill().map(() => new Set())
  const colSet = Array(9).fill().map(() => new Set())
  const blockSet = Array(9).fill().map(() => new Set())

  for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
          const num = board[row][col]
          if (num === '.') continue
          const blockIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3)

          if (rowSet[row].has(num) || colSet[col].has(num) || blockSet[blockIndex].has(num)) return false
          rowSet[row].add(num)
          colSet[col].add(num)
          blockSet[blockIndex].add(num)
      }
  }

  return true

  
  // 確認當前數獨的數字都有遵守規則
  // 同一排沒有相同值、同一列沒有相同值，同個九宮格沒有相同值
  // 暴力法
  // 先跑行、接著跑列、最後跑九宮格
  // Time: O(n*n), loop row & col
  // Space: O(n*n), 最多存到 n*n 個數
   
  // const rowMap = new Map()
  // const nineMap = new Map()
  
  // for (let row = 0; row < board.length; row++) {
  //     const colMap = new Map()
  //     const cols = board[row]

  //     for (let col = 0; col < cols.length; col++) {
  //         const cell = board[row][col]
  //         if (cell === '.') continue 
  //         if (colMap.has(cell)) return false
  //         colMap.set(cell, true)

  //         if (rowMap.get(col)?.[cell]) return false
  //         rowMap.set(col, {
  //             ...(rowMap.get(col) || {}),
  //             [cell]: true
  //         })
  //         const position = `${Math.floor(row / 3)}_${Math.floor(col / 3)}`

  //         if (nineMap.get(position)?.[cell]) return false
  //         nineMap.set(position, {
  //             ...(nineMap.get(position) || {}),
  //             [cell]: true
  //         })
  //     }
  // }

  // return true
};