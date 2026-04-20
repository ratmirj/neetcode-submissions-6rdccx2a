/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        const depth = (root, d = 0) => {
            if(!root){
                return d;
            }

            return Math.max(depth(root.left, d+1), depth(root.right, d+1))

        }

        return depth(root)
    }
}
