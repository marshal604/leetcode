function findMaxConsecutiveOnes(nums) {
  let max = 0;
  let keep = 0;
  for (let i = 0; i < nums.length; i++) {
    keep = nums[i] === 1 ? keep + 1 : 0;
    max = Math.max(max, keep);
  }
  return max;
}
