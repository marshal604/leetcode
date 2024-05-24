/**
 * @param {number[]} citations
 * @return {number}
 */
 // Time: O(nlogn), sort
 // Space: O(1), 常數 h
 var hIndex = function(citations) {
  // 找出發表 h 篇論文且被引用 h 次數的最大值
  // h index 是代表至少有幾個，所以我們可以排序後去慢慢加出來

  citations.sort((a, b) => a > b ? -1 : 1)

  let h = 0
  for (let i = 0; i < citations.length; i++) {
      if (citations[i] > h) h++
  }

  return h
};
/**
 * @param {number[]} citations
 * @return {number}
 */
 // Time: O(n), bucket sort
 // Space: O(n), save maxCitations memory
 var hIndex = function(citations) {
  // 找出發表 h 篇論文且被引用 h 次數的最大值
  // h index 是代表至少有幾個，所以我們可以排序後去慢慢加出來
  const maxCitations = 1000
  const buckets = new Array(maxCitations + 1).fill(0)
  for (let i = 0; i < citations.length; i++) {
    buckets[citations[i]]++
  }

  let total = 0
  for (let i = maxCitations; i >=0; i--) {
    total += buckets[i]
    if (total >= i) return i
  }

  return 0
};