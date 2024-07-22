/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // Time: O(n), loop s
  // Space: O(1), constants
  const stack = []
  const correspoindingSymbolDict = {
      ')': '(',
      '}': '{',
      ']': '['
  }

  for (let char of s) {
      if (correspoindingSymbolDict[char]) {
          const current = stack.pop()
          if (current !== correspoindingSymbolDict[char]) return false
      } else {
          stack.push(char)
      }
  }

  return stack.length === 0
};