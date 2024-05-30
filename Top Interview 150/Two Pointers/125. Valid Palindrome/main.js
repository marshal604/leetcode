/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // 這題是找出有效的回文
  // 邏輯很簡單，左邊到右邊跟右邊到左邊是相同的
  // 我們使用 two pointers 分別左右比較即可
  // Time: O(n), loop s
  // Space: O(1), only constants
  let l = 0
  let r = s.length - 1

  while (l < r) {
      if (!isAlphanumeric(s[l])) {
          l++
          continue;
      }

      if (!isAlphanumeric(s[r])) {
          r--
          continue;
      }
      if (s[l].toLowerCase() !== s[r].toLowerCase()) return false
      l++
      r--
  }

  return true
};

function isAlphanumeric(char) {
  const aCode = 97
  const zCode = 122
  const zeroCode = 48
  const nineCode = 57
  const charCode = char.toLowerCase().charCodeAt()

  return aCode <= charCode && charCode <= zCode || zeroCode <= charCode && charCode <= nineCode
}

/** GPT 解法
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
      while (l < r && !isAlphanumeric(s[l])) {
          l++;
      }
      while (l < r && !isAlphanumeric(s[r])) {
          r--;
      }
      if (s[l].toLowerCase() !== s[r].toLowerCase()) {
          return false;
      }
      l++;
      r--;
  }

  return true;
};

function isAlphanumeric(char) {
  return /^[a-z0-9]$/i.test(char);
}