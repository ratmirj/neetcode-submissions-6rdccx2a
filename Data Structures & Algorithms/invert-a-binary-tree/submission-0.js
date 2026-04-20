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
     * @return {TreeNode}
     */
    invertTree(root) {

        const invert = (node) => {
            if(node){
                const buffer = node.left;

                node.left = node.right;
                node.right = buffer;

                invert(node.left);
                invert(node.right);

                return root;
            }
        }

        invert(root);

        return root;


    }
}
