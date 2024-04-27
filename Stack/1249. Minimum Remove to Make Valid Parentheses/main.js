// 解法一
/**
 * @param {string} s
 * @return {string}
 */
// 確保有對數的括號
// 算出 opended `(`,  closed `)` 最小的出現的次數 min
// loop str
// 若 opened > min 則直接跳過並 -1
// 若 opened > 0 則可以放入 `(`
// 若 closed > opened 則代表已經有一個 `(` 則可以放入 `)`
// Time: O(n), loop str
// Space: O(1), 常數
var minRemoveToMakeValid = function(str) {
  let opened = 0
  let closed = 0
  Array.from(str).forEach(s => {
      if (s === '(') opened++
      if (s === ')') closed++
  })
  
  const min = Math.min(closed, opened)
  let result = ''
  let flag = 0
  Array.from(str).forEach(s => {
      if (s !== '(' && s !== ')') {
          result+=s
          return
      }
      if (s === '(') {
          if (min > flag && closed > flag) {
              result+=s
              flag++
          }
          opened--
      } else {
          if (flag > 0) {
              result+=s
              flag--
          }
          closed--
      }
  })

  return result
};

// 解法二
/**
 * @param {string} s
 * @return {string}
 */
// 確保有對數的括號
// 使用 Stack 存無效的 () 的 index
// loop str, 當 index 相同就跳過
// Time: O(n), loop s
// Space: O(n), record n to stack

var minRemoveToMakeValid = function(s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          stack.push(i)
      }
      if (s[i] === ')') {
          if (s[stack[stack.length - 1]] === '(') stack.pop()
          else stack.push(i)
      }
  }

  let result = ''
  for (let i = 0; i < s.length; i++) {
      if (stack.length && i === stack[0]) {
          stack.shift();
          continue;
      }
      result+=s[i]
  }

  return result
};