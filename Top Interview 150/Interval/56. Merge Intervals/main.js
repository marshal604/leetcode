/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // 基本上就是找出 overlap 的邏輯
  // 不過排序因為不同，可以先 sort
  // Time: O(nlogn), sort
  // Space: O(n), interval.length
  
  if (intervals.length < 2) return intervals

  intervals.sort(([a], [b]) => a - b)

  let current = intervals[0]
  const result = []

  for (let i = 1; i < intervals.length; i++) {
      const [start, end] = intervals[i]
      // 因為排序後，第一個值一定最小
      if (current[1] >= start) current[1] = Math.max(end, current[1])
      else {
          result.push(current)
          current = intervals[i]
      }
  }

  result.push(current)

  return result
};