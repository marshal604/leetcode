/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = Number.MIN_SAFE_INTEGER;
  nums.forEach((_, index) => {
    nums.slice(index).reduce((pre, cur) => {
      const sum = pre + cur;
      max = Math.max(sum, max);
      return pre + cur;
    }, 0);
  });
  return max;
};

/** 參考解答
function maxSubArray(A) {
  var prev = 0;
  var max = -Number.MAX_VALUE;

  for (var i = 0; i < A.length; i++) {
    prev = Math.max(prev + A[i], A[i]);
    max = Math.max(max, prev);
  }
  return max;
}
 */
