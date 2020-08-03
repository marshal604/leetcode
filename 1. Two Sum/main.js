// version 1
var twoSum1 = function (nums, target) {
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

// version 2
var twoSum2 = function (nums, target) {
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
// version 2
