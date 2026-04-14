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
     * @return {number[]}
     */

    inorderTraversal(root) {
        if(!root) return [];
        var val = [];

        const traverse = (root) => {
            if(!root.left && !root.right){
                val.push(root.val);
                return null;
            }

            root.left && traverse(root.left);
            val.push(root.val)
            root.right && traverse(root.right);

        }
        traverse(root);
        return val

    }
}
