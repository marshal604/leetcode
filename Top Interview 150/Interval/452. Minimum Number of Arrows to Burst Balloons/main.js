/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  /** 思路一，將氣球合併來算要射幾次 */
  // 這題就是找出 merge interval 然後回傳 length
  // 先排序讓 start 小的在前面
  // 定義 result 來紀錄 merged interval
  // loop points 做 merge 最後回傳 result
  // Time: O(nlogn), sort
  // Space: O(n), result

  const result = []
  points.sort(([a], [b]) => a - b)
  let point = points[0]

  for (let i = 1; i < points.length; i++) {
      const current = points[i]
      if (point[1] >= current[0]) point[1] = Math.min(point[1], current[1])
      else {
          result.push(point)
          point = current
      }
  }

  if (point) result.push(point)

  return result.length

  /** 思路二，GPT 認為不需要浪費 Space，直接用 overlap 算射幾次即可 */
  // Time: O(nlogn), sort
  // Space: O(1), only constants

  if (points.length === 0) return 0

  points.sort((a, b) => a[1] - b[1])
  let end = points[0][1]
  let arrow = 1

  for (let i = 1; i < points.length; i++) {
      const point = points[i]
      if (point[0] > end) {
          arrow++
          end = point[1]
      }
  }

  return arrow
};