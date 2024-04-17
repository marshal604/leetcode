/**
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 
 // Time: O(n)
 // Space: O(k + n), topK 加上 freqMap key length
 var topKFrequent = function(nums, k) {
  // use bucket sorting
  // 判斷 nums 為空就回傳空陣列 []
  if (nums.length === 0) return []
  
  // 紀錄頻率最多的數字
  let maxFreq = 0
  // 使用 hash 把頻率記錄下來
  const freqMap = new Map()

  for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      freqMap.set(num, (freqMap.get(num) || 0) + 1)
      maxFreq = Math.max(maxFreq, freqMap.get(num))
  }
  // 根據頻率創建一個陣列把該頻率的數值放進去
  const buckets = Array(maxFreq + 1).fill().map(() => [])
  freqMap.forEach((value, key) => {
      buckets[value].push(key)
  })
  // 最後在 loop k 次回傳數值
  const topK = []
  for (let i = maxFreq; i >= 0; i--) {
      for (let j = 0; j < buckets[i].length; j++) {
          if (topK.length === k) return topK
          topK.push(buckets[i][j])
      }
  }

  return topK

  // Time: O(nlogn), 使用排序
  // Space: O(n), 使用 Map 紀錄
  // 找出 k 個最常出現的數字
  // 基本上用 hash 存出現數字就能知道頻率
  // 而要怎麼讓陣列保留 k 個最常出現頻率的數值
  // 可以使用排序找出前 k 個最常出現的陣列
  // if (nums.length === 0) return []
  // const countMap = new Map()

  // for (let i = 0; i < nums.length; i++) {
  //     const num = nums[i]
  //     countMap.set(num, (countMap.get(num) || 0) + 1)
  // }
  // const sortedList = Array.from(countMap.entries()).sort((a, b) => b[1] - a[1])

  // return sortedList.map(([key]) => key).slice(0, k)
};