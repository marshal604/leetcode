/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // Time: O(n), loop n 個節點
  // Space: O(n), 全部共 n 個節點
  if (!root) return [];

  return bfs(root);
};

function bfs(root) {
  const queue = [root];
  const result = [];
  while (queue.length) {
    const levelSize = queue.length;
    const currentLevels = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevels.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currentLevels);
  }

  return result;
}
