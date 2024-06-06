/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // 這題要用到兩個 loop 才能解
  // 我們可以用第一個 loop 當作 base
  // 並在第二個 loop 使用 two pointers 來做加總
  // 為了讓加總的數字有可預測性，我們需要對 nums 做遞增的排序
  // 這樣加總出來的數字若大於小於 0 時，我們就可以調整指針指到的位置
  // Time: O(n^2), 排序 nlogn, loop n * n
  // Space: O(k), match 的數值
  
  let result = []
  nums.sort((a, b) => a > b ? 1 : -1)
  // nums.length - 2 是減去指針的空間
  for (let i = 0; i < nums.length - 2; i++) {
      // 為了避免重複計算，我們會把已經計算過的數值 skip 掉
      while (i > 0 && nums[i] === nums[i - 1]) i++

      let l = i + 1
      let r = nums.length - 1

      while (l < r) {
          const sum = nums[i] + nums[l] + nums[r]
          if (sum === 0) {
              result.push([nums[i], nums[l], nums[r]])
              
              // 避免同一組的數字再出現
              while (l < r && nums[l] === nums[l + 1]) l++
              while (l < r && nums[r] === nums[r - 1]) r--
              l++
              r--
          }
          else if (sum > 0) r--
          else l++
      }
  }

 return result

 // let l = 0
  // let r = nums.length - 1
  // const result = []
  // const hash = {}
  // nums.sort()

  // while (l < r) {
      
  //     for (let i = l + 1; i < nums.length; i++) {

  //     }

  //     for (let i = l + 1; i < r; i++) {
  //         if (nums[l] + nums[i] + nums[r] === 0 && !hash[`${nums[l]}${nums[i]}${nums[r]}`]) {
  //             hash[`${nums[l]}${nums[i]}${nums[r]}`] = true
  //             result.push([nums[l], nums[i], nums[r]])
  //         }
  //     }
  //     l++
  //     r--
  // }

  // return result
};