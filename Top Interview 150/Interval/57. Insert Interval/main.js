/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  // Time: O(n), intervals.length
  // Space: O(n), intervals.length
  
  const result = []
  let i = 0
  
  // push origin intervals
  while ( i < intervals.length && newInterval[0] > intervals[i][1] ) {
      result.push(intervals[i])
      i++
  }

  // push merged intervals
  while ( i < intervals.length && newInterval[1] >= intervals[i][0]) {
      newInterval[0] = Math.min(newInterval[0], intervals[i][0])
      newInterval[1] = Math.max(newInterval[1], intervals[i][1])
      i++
  }

  result.push(newInterval)
  
  // push resting intervals
  while ( i < intervals.length ) {
      result.push(intervals[i])
      i++
  }

  return result

  // if (intervals.length === 0) return [newInterval]

  // const result = []
  // for (let i = 0; i < intervals.length; i++) {
  //     const [start, end] = newInterval
  //     const [curStart, curEnd] = intervals[i]
  //     if (newInterval.length === 0) {
  //         result.push(intervals[i])
  //     } else if (start >= curStart && curEnd >= start) {
  //         newInterval = [curStart, Math.max(end, curEnd)]
  //     } else if (end >= curStart && curEnd >= end) {
  //         newInterval = [Math.min(curStart, start), Math.max(end, curEnd)]
  //     } else if (curStart >= start && end >= curStart) {
  //         newInterval = [start, Math.max(end, curEnd)]
  //     } else if (curStart > start) {
  //         result.push(newInterval)
  //         result.push(intervals[i])
  //         newInterval = []
  //     } else {
  //         result.push(intervals[i])
  //     }
  // }

  // if (newInterval.length !== 0) result.push(newInterval)

  // return result
};