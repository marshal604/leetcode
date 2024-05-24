/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  // 找出最後一個字的長度，不包括空白
  // 最簡單的想法就是 split 並從後開始找出有長度的字回傳
  // Time: O(n), loop splitedList
  // Space: O(n), save splitedList
  // const splitedList = s.split(' ')
  // let result = 0
  // for (let i = splitedList.length - 1; i >= 0; i--) {
  //     const currentLength = splitedList[i].length
  //     if (currentLength > 0) {
  //         result = currentLength
  //         break;
  //     }
  // }

  // return result

  // 另一個思考方式是從後面開始，遇到不是空白的就開始計數
  // Time: O(n), loop s
  // Space: O(1), only constants
  let i = s.length - 1
  let lastWordLength = 0

  while (i > 0 && s[i] === ' ') {
      i--
  }
  while (i >= 0 && s[i] !== ' ') {
      lastWordLength++
      i--
  }

  return lastWordLength
};