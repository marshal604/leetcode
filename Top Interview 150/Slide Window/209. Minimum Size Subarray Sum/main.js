/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  // 這題是找出連續陣列中的值的總和大於等於 target 的長度
  // 找`區間內`的值都可以用 two pointers 的變形， slide window
  // 定義 l, r 都從 0 開始
  // 定義 minLength 當作回傳值
  // 定義 sum 當做加總的值
  // 先 loop nums, 透過移動 r 來加總 sum
  // 並在 sum >= target 時開始緊縮 l, 並持續紀錄 minLength
  // 這樣當 loop 結束即可找出 minLength
  // Time: O(n), loop r n 次， l 這邊的 loop 是在條件達到 sum 才會跑，雖然也會跑 n 次
  //       但因為分開跑，所以是 O(n) + O(n) = O(n)
  // Space: O(1), only constants

  let l = 0
  let r = 0
  let sum = 0
  let minLength = Infinity

  while (r < nums.length) {
      sum+=nums[r]
      r++
      
      while (sum >= target) {
          minLength = Math.min(minLength, r - l)
          sum-=nums[l]
          l++
      }
  }

  return minLength === Infinity ? 0 : minLength

  // follow up
  Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).
ChatGPT
要找到时间复杂度为 O(n log n) 的解决方案，我们可以考虑使用二分查找来优化滑动窗口方法。具体思路是：通过维护一个前缀和数组以及使用二分查找来高效地查找符合条件的子数组。

具体步骤
计算前缀和数组。
使用二分查找在前缀和数组中寻找满足条件的最小子数组长度。
实现思路
计算前缀和数组 prefixSums，其中 prefixSums[i] 表示从数组起点到索引 i-1 的所有元素之和。
对于每个起点 i，计算从 i 到当前终点 j 的子数组之和，并在 prefixSums 中找到使得子数组之和大于等于 target 的最小终点 j。
代码实现
以下是实现这个思路的代码：

javascript
Copy code
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const n = nums.length;
    if (n === 0) return 0;

    // 计算前缀和数组
    const prefixSums = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        prefixSums[i] = prefixSums[i - 1] + nums[i - 1];
    }

    let minLength = Infinity;

    // 遍历前缀和数组并使用二分查找
    for (let i = 1; i <= n; i++) {
        const targetSum = prefixSums[i - 1] + target;
        let left = i, right = n;

        // 二分查找在 prefixSums 中找到最小的 j 使得 prefixSums[j] >= targetSum
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (prefixSums[mid] >= targetSum) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        if (left <= n) {
            minLength = Math.min(minLength, left - (i - 1));
        }
    }

    return minLength === Infinity ? 0 : minLength;
};
解释
计算前缀和数组：

prefixSums[i] 表示从数组起点到索引 i-1 的所有元素之和。前缀和数组长度为 n + 1，prefixSums[0] 初始化为 0。
遍历前缀和数组：

对于每个起点 i，计算从 i 到当前终点 j 的子数组之和 targetSum = prefixSums[i - 1] + target。
使用二分查找在前缀和数组 prefixSums 中找到最小的索引 j，使得 prefixSums[j] 大于等于 targetSum。
更新最小子数组长度：

如果找到符合条件的 j，计算当前子数组的长度 left - (i - 1)，并更新 minLength。
如果没有找到符合条件的 j，继续下一个起点 i 的查找。
时间和空间复杂度
时间复杂度：O(n log n)，因为我们对每个前缀和数组元素进行二分查找。
空间复杂度：O(n)，因为我们需要额外的空间来存储前缀和数组。
通过这种方法，我们使用了前缀和数组和二分查找，使得总时间复杂度达到了 O(n log n)，满足了题目的要求。

  // 不符合題目，題目是不改變 nums 的 subarray
  // 這題是用最小長度的 subarray 加總的值大於等於 target
  // 遞增排序，從後面開始新增到 subarray

  // nums.sort((a, b) => a - b)
  // let current = 0
  // const sub = []
  // for (let i = nums.length - 1; i >= 0; i--) {
  //     if (current < target) {
  //         sub.push(nums[i])
  //         current+=nums[i]
  //     }
  //     if (current >= target) return sub.length
  // }

  // return 0

  
};