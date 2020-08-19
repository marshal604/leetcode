## Question

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
```

Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

## BrainStorming

先解釋一下題意，
給一個整數的陣列並在陣列中找出連續子陣列的最大整數和，並回傳這個整數和
依範例給的例子
[4, -1, 2, 1]，這一串連續的子陣列相加的值為 6，也是所有子陣列中最大的值，所以回傳 6

這邊我第一個想法是先用暴力的解法

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = Number.MIN_SAFE_INTEGER;
  nums.forEach((_, index) => {
    nums.slice(index).reduce((pre, cur) => {
      const sum = pre + cur;
      max = Math.max(sum, max);
      return pre + cur;
    }, 0);
  });
  return max;
};
```

設定 max 為最小的負值，然後跑兩個迴圈
第一個迴圈是整個索引跑一次
第二個迴圈是為了將每個數相加，並且利用相加中的 sum 找出跟 max
這邊的 slice 基本上是濾掉前面用過的數值
以[1, -2, 2, 3]為例

```
## first loop
sum = 1
max = 1 // compare 1 <- sum and Number.MIN_SAFE_INTEGER <-上個max
-------
sum = -1
max = 1 // compare -1 <- sum and 1 <-上個max
-------
sum = 1
max = 1 // compare 1 <- sum and 1 <-上個max
-------
sum = 4
max = 4 // compare 4 <- sum and 1 <-上個max
-------
## 一路下去到第3個loop時
sum = 2
max = 4 // compare 2 <- sum and 4 <-上個max
-------
sum = 5
max = 5 // compare 5 <- sum and 4 <-上個max

答案就是 5
```

時間複雜度應該為 O(n!)，因為是一路從 n 個往下遞減第一次跑 n 第二次跑 n-1 所以是 n!
空間複雜度為 O(1)，因為只有指定一個 max

不過這題最佳解我沒想出來，因為最佳解應該要是 O(n)

### 參考解答

```javascript
function maxSubArray(A) {
  var prev = 0;
  var max = -Number.MAX_VALUE;

  for (var i = 0; i < A.length; i++) {
    prev = Math.max(prev + A[i], A[i]);
    max = Math.max(max, prev);
  }
  return max;
}
```

這邊大家的思考方式都蠻相近的，不過他多利用了一個變數去存之前的數值
也就是`prev = Math.max(prev + A[i], A[i])`，這邊他比較的是**上一個數值連續相加數值**與**當前數值的最大值**，這邊會這樣比是為了找出目前連續的最大值，然後再藉由`max = Math.max(max, prev);`保留每次比較的最大值，不過這邊 max 使用`-Number.MAX_VALUE`我不確定會不會溢位就是了

如剛剛的例子
var A = [1, -2, 2, 3]

```
prev = 1 // compare 1 <- 0 + A[0] and 1 <- A[0]
max = 1 // compare -Number.MAX_VALUE, 1
---
prev = -1 // compare -1 <- A[0] + A[1] and -2 <- A[1]
max = 1 // compare 1 <- max, -1 <- prev
---
prev = 2 // compare 1 <- A[0] + A[1] + A[2](1 - 2 + 2) and 2 <- A[2]
max = 2 // compare 1 <- max, 2 <- prev
---
prev = 5 // compare 5 <- A[2] + A[3] and 3 <- A[3]
max = 5 // compare 2 <- max, 5 <- prev
```

時間複雜度為 O(n)
空間複雜度為 O(1)

## Conclusion

這次的題目雖然被定為 Easy 但其實蠻難的，整體的思維方向算是對的，但是在簡化的過程中沒抓到前值與後值做交互可以讓時間複雜度變低
