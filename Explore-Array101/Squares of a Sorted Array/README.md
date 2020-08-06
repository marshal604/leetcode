## Question

Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

Example 1:

```
Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
```

Example 2:

```
Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
```

Note:

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order.

## Brain Storming

給整數遞增排序的陣列 A，回傳每個數字平方後的遞增排序陣列

這題基本上就是先把每個數值做平方，然後再重新排序一次

### 第一版

```javascript
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  for (let i = 0; i < A.length; i++) {
    A[i] = A[i] * A[i];
  }
  return A.sort((a, b) => (a > b ? 1 : -1));
};
```

以上的時間複雜度為 O(nlogn)，因為有用到 sort，目前 sort 都是用合併排序
空間複雜度因為沒 create 所以是 O(1)
