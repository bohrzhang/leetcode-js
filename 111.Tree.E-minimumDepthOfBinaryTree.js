/**
 * 111
 * Given a binary tree, find its minimum depth.
   The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth(node) {
    if (!node) return 0
    if (!node.left) return minDepth(node.right) + 1
    if (!node.right) return minDepth(node.left) + 1
    return Math.min(minDepth(node.left), minDepth(node.right)) + 1
  }
