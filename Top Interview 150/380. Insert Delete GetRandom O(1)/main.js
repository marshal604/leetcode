/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var RandomizedSet = function() {
  this.numMap = new Map()
  this.nums = []
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if (this.numMap.has(val)) return false
  this.nums.push(val)
  this.numMap.set(val, this.nums.length - 1)

  return true
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  if (!this.numMap.has(val)) return false
  
  const lastElement = this.nums[this.nums.length - 1]
  // replace will removed element
  const currentIndex = this.numMap.get(val)
  this.nums[currentIndex] = lastElement
  this.numMap.set(lastElement, currentIndex)
  this.nums.pop()
  this.numMap.delete(val)
  
  return true
};

/**
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  const random = Math.floor(Math.random() * this.nums.length)    

  return this.nums[random]
};
