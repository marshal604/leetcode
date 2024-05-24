// /**
//  * @param {string} s
//  * @return {number}
//  */
//  // Time: O(n), worst case is loop s.length
//  // Space: O(1), only constants
// var romanToInt = function(s) {
//       const sym = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     }

//     let result = 0;

//     for (let i = 0; i < s.length; i++) {
//         const cur = sym[s[i]];
//         const next = sym[s[i + 1]];

//         if (cur < next) {
//             result += next - cur;
//             i++;
//         } else {
//             result += cur;
//         }
//     }

//     return result;
// };

/**
 * @param {string} s
 * @return {number}
 */
 // Time: O(n), worst case is loop s.length
 // Space: O(1), only constants
 var romanToInt = function(s) {
  // 定義 ruleHash 去存放 [symbol, value]
  // loop s 並藉由 ruleHash 的組合確定 ruleMap 有沒有數值

  const ruleHash = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000,
  }

  let result = 0

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && ruleHash[s[i] + s[i+1]]) {
        result+= ruleHash[s[i] + s[i+1]]
        i++
    } else {
        result+= ruleHash[s[i]]
    }
  }

  return result
};