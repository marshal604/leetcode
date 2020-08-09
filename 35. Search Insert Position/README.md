## Question

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

```
Input: [1,3,5,6], 5
Output: 2
```

Example 2:

```
Input: [1,3,5,6], 2
Output: 1
```

Example 3:

```
Input: [1,3,5,6], 7
Output: 4
```

Example 4:

```
Input: [1,3,5,6], 0
Output: 0
```

## BrainStorming

先解釋一下題意，基本上是找出傳進來的參數在陣列的哪個位置，若是沒有的話，應該插在哪個位置，這邊的回傳值是以 0 為起始的索引值。

這題基本上就是迴圈跑一遍然後找出相等或是大於傳入數值的位置就能找出答案了

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target || target < nums[i]) {
      return i;
    }
  }
  return nums.length;
};
```

時間複雜度為 O(n)，最壞的情況跑 n 次迴圈
空間複雜度為 O(1)，沒有建造記憶體位置，所以是 1
