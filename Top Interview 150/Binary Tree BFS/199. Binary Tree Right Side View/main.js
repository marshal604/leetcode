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
 * @return {number[]}
 */
var rightSideView = function (root) {
  // 從右邊看過來可以看到哪些節點，並把他們回傳
  // Time: O(n), n 個節點
  // Space: O(m), 一層最多 m 個節點
  if (!root) return [];

  return bfs(root);
};

function bfs(root) {
  const queue = [root];
  const result = [];
  while (queue.length) {
    let rightSideNode = null;
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      rightSideNode = node;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(rightSideNode.val);
  }

  return result;
}
