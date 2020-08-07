## Question

Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example 1:

```
Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.

It doesn't matter what you leave beyond the returned length.
```

Example 2:

```
Given nums = [0,1,2,2,3,0,4,2], val = 2,

Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.

Note that the order of those five elements can be arbitrary.

It doesn't matter what values are set beyond the returned length.
```

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

```javascript
// nums is passed in by reference. (i.e., without making a copy)
int len = removeElement(nums, val);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

## Brain Storming

先說明一下題目意思
首先他會給你一個陣列`nums`跟一個數值`val`，然後請在陣列用 in-place 的方式移除 val 的值，並回傳移除後陣列的長度，in-place 就是直接在陣列裡面做改動，所以他會給你一個限制是空間複雜度必須是 O(1)，然後他備註在回傳長度之後的陣列值，他完全不理會，而且陣列被改動的順序他也不在意。

根據上方的題目我認為核心應該是將`val`的位置做交換。

### 第一版

第一個想法是用`Array.sort`把`val`的排序到最後
然後再去找`val`的位置回傳

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement1 = function (nums, val) {
  nums.sort((a, b) => (a === val ? 1 : -1));
  const pos = nums.findIndex((num) => num === val);
  return pos === -1 ? nums.length : pos;
};
```

以上時間複雜度是`Array.sort`的時間複雜度，如果用的是 mergeSort 就是 O(nlogn)
空間複雜度就是 O(1)，因為無論 nums 長度多長，我都只會創建`pos`一次

### 第二版

假設不用 sort 的話，有其他好的解法嗎?
有辦法可以把時間複雜度變成 O(n)嗎?
其實也有，就是在記錄要刪除的位置`pos`，然後當找到的值跟要刪除的值不同時
做交換

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement2 = function (nums, val) {
  let pos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      if (i !== pos) {
        // swap
        nums[i] = nums[i] + nums[pos];
        nums[pos] = nums[i] - nums[pos];
        nums[i] = nums[i] - nums[pos];
      }
      pos++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      return i;
    }
  }

  return nums.length;
};
```

上面的`swap`，是不用變數`temp`來做交換，類似二元一次的加減法，然後這邊多一個判斷是`i`跟`pos`不相等時才會交換，不然這個會因為都是同一個 reference 而導致結果有誤，以上的結果
時間複雜度為 O(n)，雖然跑兩個 for，不過總體來說都是跑 n 次
空間複雜度一樣只有創建`pos`一次，所以是 O(1)
