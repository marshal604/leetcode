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
var averageOfLevels = function (root) {
  // time: O(n), n 代表節點數
  // space: O(m), m 代表當層最多的節點數
  const result = [];

  bfs(root, (levelNodes) => {
    const sum = levelNodes.reduce((pre, cur) => pre + cur, 0);
    const average = sum / levelNodes.length;
    result.push(average);
  });

  return result;
};

function bfs(root, callback) {
  const queue = [root];

  while (queue.length > 0) {
    const levelNodes = [];
    const nodeSize = queue.length;
    for (let i = 0; i < nodeSize; i++) {
      const node = queue.shift();
      levelNodes.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    callback(levelNodes);
  }
}

// var averageOfLevels = function(root) {
//     // time: O(n), n 代表節點數
//     // space: O(m), m 代表當層最多的節點數
//     const result = []
//     const queue = [root]

//     while (queue.length > 0) {
//         const nodeSize = queue.length
//         let sum = 0
//         for (let i = 0; i < nodeSize; i++) {
//             const node = queue.shift()

//             sum+=node.val

//             if (node.left) queue.push(node.left)
//             if (node.right) queue.push(node.right)
//         }

//         result.push(sum / nodeSize)
//     }

//     return result
// };
