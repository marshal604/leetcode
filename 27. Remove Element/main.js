/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
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
