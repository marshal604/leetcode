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
var zigzagLevelOrder = function (root) {
  // Time: O(n), loop n 個節點
  // Space: O(n), 存放 n 個節點
  if (!root) return [];

  return bfs(root);
};

function bfs(root) {
  const queue = [root];
  const result = [];
  let leftToRight = true;

  while (queue.length) {
    const levelSize = queue.length;
    const currentLevels = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      const action = leftToRight ? "push" : "unshift";
      currentLevels[action](node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    leftToRight = !leftToRight;
    result.push(currentLevels);
  }

  return result;
}
