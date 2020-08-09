## Question

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

## BrainStorming

先稍微翻一下題目的問題

傳入都是整數的陣列會回傳兩數相加是特定數值的索引值
而且每次的輸入只會回傳一種結果，也就是範例寫的，當 target 是 9 時，索引值在 0 跟 1 相加會等於 target，所以回傳 0 跟 1 的，而其他也都不會達成這個條件。

### 第一版

這邊先用最暴力的解法
兩個 for 來快速比對解出第一版解法

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
        return result;
      }
    }
  }
};
```

這邊的時間複雜度是 O(n^2)，因為跑兩次 nums 有 n 個整數就會跑兩次 n 所以 n\*n 就 n^2
空間複雜度是 O(1)，因為 nums 多長都只會傳兩個 index

### 第二版

通常要解決這種時間複雜度高的題目，就會以提高空間複雜度然後降低時間複雜度的方式來實作，所以思考方向會先往 hash table 來想。

接著依照題目的描述，回傳兩個數值相加的會成於 target 的 index，也就是說我們在比較時也需要考慮到這個數值是存在哪個 index，因為最後要回傳 index。

那用 hash table 就是要存這些 key 到 table 中，所以第一個想法是，先跑一個 for 把所有的 nums 跟 value 跟 index 存到 table，然後再平行跑第二個 for 去比對，不過這邊就會卡住，因為跑第二個 for 時，還是要拿 nums 跟 hash 去相加，所以根本沒改善時間複雜度。

所以換個方法想，也許 hash table 是要在 run for 時動態去做比較，然後根據兩個相加會是 target 的思路來做以下的推斷，在 for 開始跑時將 target - 本身的值存到 key 中，然後 value 存 index，接著跑下一個時先看自己的值有沒有在 hash table 中，有的話就吐 value 的 index 跟現在在跑的 index，解法如下

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const result = [];
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    const sub = target - nums[i];
    if (hash.get(sub) === undefined) {
      hash.set(sub, i);
    }

    if (hash.get(nums[i]) !== undefined && i !== hash.get(nums[i])) {
      result.push(hash.get(nums[i]), i);
      return result;
    }
  }
};
```

這邊就是將 target 減自己放進 hash，然後當 hash table 能拿到值就代表相加是 target，所以就將 index 回傳出去，不過需要顧慮會不會 target - 自己會是自己的問題，所以在加一個 i 不等於自己來避免這個問題。

這邊的時間複雜度因為只跑一個 for，最多就 nums 長度 n 的複雜度，所以時間複雜度是 O(n)。

而空間複雜度因為用了 hash table，所以會隨著 nums 的長度做增長，nums 長度為 n 的話，空間複雜度就是 O(n)。

## Conclusion

這題其實若沒注意到兩者相加會為 target 這個描述的話，其實算是蠻難解的題目，所以在拿到題目時真的需要稍微想一下其中的關聯性。
