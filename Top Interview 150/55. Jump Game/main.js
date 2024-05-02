/**
 * @param {number[]} nums
 * @return {boolean}
 */
 // Time: O(n), loop nums
 // Space: O(1), 常數
 var canJump = function(nums) {
  // 陣列每個數值為最大可跳耀的數值, 若為 3 則可跳 1 - 3 步
  // 透過 greedy 的方式 (局部最優解) 使用最大可跳耀到的位置 (maxReach) 來記錄最佳解
  // 若 maxReach 可以到最後一個 index 就回傳 true
  // 若沒有則持續 loop nums 來更新 maxReach
  // 因為 maxReach 是最大可到的長度，所以若當前 index (nums 當前的 i)比 maxReach 還要大
  // 代表 maxReach 可能遇到 0，所以回傳 false
  let maxReach = 0
  for (let i = 0; i < nums.length; i++) {
      if (i > maxReach) return false
      
      maxReach = Math.max(maxReach, i + nums[i])

      if (maxReach >= nums.length - 1) return true
  }

  return false
};


// gpt
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // 初始化 maxReach，表示最远可到达的索引位置。
  let maxReach = 0;

  // 遍历 nums 数组，每个元素表示在当前位置最多可以向前跳的步数。
  for (let i = 0; i < nums.length; i++) {
      // 如果当前索引 i 超过了之前计算的最远可到达的位置 maxReach，
      // 则表示当前位置不可达，返回 false。
      if (i > maxReach) return false;
      
      // 更新 maxReach，取当前的 maxReach 和当前位置加上可跳跃步数的较大值。
      // 这表示我们尝试从每个位置跳得尽可能远，以扩大可到达的范围。
      maxReach = Math.max(maxReach, i + nums[i]);

      // 如果更新后的 maxReach 已经足够到达或超过数组的最后一个位置，
      // 则表示可以从起点跳到终点，返回 true。
      if (maxReach >= nums.length - 1) return true;
  }

  // 遍历完数组后，如果没有能到达最后一个索引的情况，返回 false。
  return false;
};
