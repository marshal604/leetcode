## Question

Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

```
Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
```

Example 2:

```
Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
```

## Brain Storming

一樣先理解一下問題
題目說會給一個排序過的陣列，然後要我們在陣列中把重複的數值直接**去掉**，接著在最後回傳陣列的長度，並且限制我們的空間複雜度要是 O(1)

而且範例中表示他不在意回傳長度後的陣列值
也就是回傳 2 的話，長度 2 後面的值都可以忽略了

### 第一版

我們一樣先做一個簡單暴力版

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates1 = function (nums) {
  const result = [];
  let current;
  for (let i = 0; i < nums.length; i++) {
    if (current !== nums[i]) {
      result.push(nums[i]);
    }
    current = nums[i];
  }
  return result.length;
};
```

上面的寫法就是紀錄上一個值，並比對是不是相同的，不相同才存到陣列中，然後最後指回去 nums 回傳 nums 的長度，不過既沒有 in-place 來去除重複數值且空間複雜度 O(1)都沒有達成，所以這是完全的錯誤解

### 第二版

因此藉著第一版的模式稍微調整成不創一個變數，且要可以直接改變到 nums 的參考
我的想法是從後面來做比較，然後不斷的把重複的數值移調

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};
```

若是不用 array 內建的 function 輔助的話，大概這個解法

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates3 = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j];
    }
  }
  return i + 1;
};
```

## Conclusion

這題蠻簡單，主要是 array 間的互相覆蓋就可以輕鬆解完，不過還是要看考官願不願意給用 array 內建的 function。
