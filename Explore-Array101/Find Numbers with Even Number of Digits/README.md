## Question

Given an array nums of integers, return how many of them contain an even number of digits.

Example 1:

```
Input: nums = [12,345,2,6,7896]
Output: 2
```

Explanation:

```
12 contains 2 digits (even number of digits).
345 contains 3 digits (odd number of digits).
2 contains 1 digit (odd number of digits).
6 contains 1 digit (odd number of digits).
7896 contains 4 digits (even number of digits).
Therefore only 12 and 7896 contain an even number of digits.
```

Example 2:

```
Input: nums = [555,901,482,1771]
Output: 1
```

Explanation:

```
Only 1771 contains an even number of digits.
```

Constraints:

1 <= nums.length <= 500
1 <= nums[i] <= 10^5

## BrainStorming

給一個整數陣列並將是偶數位數的個數回傳，基本上會以一個 for 把內容變成字串，然後以長度來看是不是符合偶數位數

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers1 = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      count++;
    }
  }
  return count;
};
```

或是直接用 Array 提供的方法 filter 掉

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers2 = function (nums) {
  return nums.filter((item) => item.toString().length % 2 === 0).length;
};
```
