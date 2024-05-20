/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  // 最簡單的辦法是把所有可能放到 symbols 裡面 loop
  // 然後根據順位依序除到不能除為止
  // Time: O(n), loop symbols
  // Space: O(1), only symbols length  
  const symbols = [
      [1000, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I']
  ]

  let roman = ''

  for (let i = 0; i < symbols.length; i++) {
      const [value, symbol] = symbols[i]
      while (num >= value) {
          roman+=symbol
          num-=value
      }
      if (num === 0) break;
  }

  return roman
};
// Time: O(1) 解法, 因為輸入數值是固定的, 所以直接列出所有的可能
// class Solution {
//   public:
//       string intToRoman(int num) {
//           string ones[] = {"","I","II","III","IV","V","VI","VII","VIII","IX"};
//           string tens[] = {"","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"};
//           string hrns[] = {"","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"};
//           string ths[]={"","M","MM","MMM"};
          
//           return ths[num/1000] + hrns[(num%1000)/100] + tens[(num%100)/10] + ones[num%10];
//       }
//   };

// 錯誤解法，還沒解出來
// 題目是將數字轉換為羅馬拼音
  // 最簡單的辦法是把所有可能放到 symbols 裡面 loop
  // 但嘗試挑戰用題目給的資料，用演算法跑出結果
  // loop num > 0
  // 定義 currentIndex 來確定要用哪個符號
  // 假如說有 900 的數值，就可以在 1000 計算完後，接著用 1000 - 100 計算出殘值
  // const symbols = [
  //     [1000, 'M'],
  //     [500, 'D'],
  //     [100, 'C'],
  //     [50, 'L'],
  //     [10, 'X'],
  //     [5, 'V'],
  //     [1, 'I']
  // ]

  // let roman = ''
  // let currentIndex = 0
  // while (num > 0) {
  //     const [value, symbol] = symbols[currentIndex]
  //     console.log('currentIndex, value, symbol', currentIndex, value, symbol)
  //     let count = Math.floor(num / value)
  //     console.log('num, count', num, count)
  //     while (count > 0) {
  //         roman+=symbol
  //         num-=value
  //         count--
  //     }
  //     console.log('#num, roman', num, roman)
  //     if (currentIndex + 2 >= symbols.length) {
  //         currentIndex++
  //         continue;
  //     }
  //     const [value2, symbol2] = symbols[currentIndex + 2]
  //     console.log('currentIndex, value2, symbol2', currentIndex, value2, symbol2)
  //     const mergedValue = value - value2
  //     const mergedSymbol = symbol2 + symbol
  //     count = Math.floor(num / mergedValue)
  //     console.log('mergedValue, mergedSymbol, count', mergedValue, mergedSymbol, count)
  //     while (count > 0) {
  //         roman+=mergedSymbol
  //         num-=mergedValue
  //         count--
  //     }
  //     console.log('#num, roman', num, roman)

  //     currentIndex++
  // }

  // return roman


