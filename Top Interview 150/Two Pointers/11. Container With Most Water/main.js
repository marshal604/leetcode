/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // 這題是找出可容納最多水的兩點
  // 這題可以使用 Two Pointers, 找出可容納水位的點位並計算出盛水量
  // 定義 l 為左邊端點，定義 r 為右邊端點
  // 透過計算盛水量來決定是否變換 l 或 r
  // Time: O(n), loop height
  // Space: O(1), only constants
  let l = 0
  let r = height.length - 1
  let water = 0

  while (l < r) {
      const waterHeight = Math.min(height[l], height[r])
      const waterWidth = r - l
      water =  Math.max(waterHeight * waterWidth, water)
      if (height[l] > height[r]) r--
      else l++
  }

  return water
};