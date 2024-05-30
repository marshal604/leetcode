/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  // 這題是找出 s 是不是 t 的子序列
  // 用 two pointers 應該能快速解題
  // l 當作 s 的起始
  // r 當作 l 的起始
  // loop r < t.length
  // 當 l === s.length 代表是子序列，回傳 true
  // 反之則回傳 false
  // Time: O(n), loop t length
  // Space: O(1), only constants
  
  let l = 0
  let r = 0
  if (s.length === 0) return true
  
  while (r < t.length) {
      if (s[l] === t[r]) l++
      if (l === s.length) return true
      r++
  }

  return false
};

// follow up, 適合多次查詢
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let charIndexMap = new Map();
  
  // 預處理 t
  for (let i = 0; i < t.length; i++) {
      if (!charIndexMap.has(t[i])) {
          charIndexMap.set(t[i], []);
      }
      charIndexMap.get(t[i]).push(i);
  }

  let currentIndex = -1;
  // 檢查 s
  for (let i = 0; i < s.length; i++) {
      if (!charIndexMap.has(s[i])) {
          return false;
      }

      let indices = charIndexMap.get(s[i]);
      let pos = binarySearch(indices, currentIndex);
      if (pos === -1) {
          return false;
      }

      currentIndex = indices[pos];
  }

  return true;
};

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] > target) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }

  return left < arr.length ? left : -1;
}
