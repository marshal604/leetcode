## Question
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.


Example:
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```
## Brain Storming
先稍微翻一下題目的問題

傳入都是整數的陣列會回傳兩數相加是特定數值的索引值
而且每次的輸入只會回傳一種結果，也就是範例寫的，當target是9時，索引值在0跟1相加會等於target，所以回傳0跟1的，而其他也都不會達成這個條件。

### 第一版
這邊先用最暴力的解法
兩個for來快速比對解出第一版解法
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
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
這邊的時間複雜度是O(n^2)，因為跑兩次nums有n個整數就會跑兩次n所以n*n就n^2
空間複雜度是O(1)，因為nums多長都只會傳兩個index

### 第二版
通常要解決這種時間複雜度高的題目，就會以提高空間複雜度然後降低時間複雜度的方式來實作，所以思考方向會先往hash table來想。

接著依照題目的描述，回傳兩個數值相加的會成於target的index，也就是說我們在比較時也需要考慮到這個數值是存在哪個index，因為最後要回傳index。

那用hash table就是要存這些key到table中，所以第一個想法是，先跑一個for把所有的nums跟value跟index存到table，然後再平行跑第二個for去比對，不過這邊就會卡住，因為跑第二個for時，還是要拿nums跟hash去相加，所以根本沒改善時間複雜度。

所以換個方法想，也許hash table是要在run for時動態去做比較，然後根據兩個相加會是target的思路來做以下的推斷，在for開始跑時將target - 本身的值存到key中，然後value存index，接著跑下一個時先看自己的值有沒有在hash table中，有的話就吐value的index跟現在在跑的index，解法如下

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
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
這邊就是將target減自己放進hash，然後當hash table能拿到值就代表相加是target，所以就將index回傳出去，不過需要顧慮會不會target - 自己會是自己的問題，所以在加一個i不等於自己來避免這個問題。

這邊的時間複雜度因為只跑一個for，最多就nums長度n的複雜度，所以時間複雜度是O(n)。

而空間複雜度因為用了hash table，所以會隨著nums的長度做增長，nums長度為n的話，空間複雜度就是O(n)。
## Conclusion
這題其實若沒注意到兩者相加會為target這個描述的話，其實算是蠻難解的題目，所以在拿到題目時真的需要稍微想一下其中的關聯性。