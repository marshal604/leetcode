## Question

Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:

```
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
```

Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000

## BrainStorming

輸入只會是 1 或 0 的陣列，並找出陣列中 1 的連續最大值
這題只要用個 for 去紀錄有沒有出現 1 並累加到 keep 這個持續幾次的參數，
然後跟 max 這個最大值的參數互相比較覆蓋就能得出結果

```javascript
function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0;
  let keep = 0;
  for (let i = 0; i < nums.length; i++) {
    keep = nums[i] === 1 ? keep + 1 : 0;
    max = Math.max(max, keep);
  }
  return max;
}
```
