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
     * @return {boolean}
     */
    isBalanced(root) {

        if(!root){
            return true;
        }

        const traverse = (node, height) => {
            if(!node.left && !node.right){
                return height
            }

            let lefth = height;
            let righth = height;

            if(node.left){
                lefth = traverse(node.left, height+1)
                if(lefth < 0) return -1;
            }

            if(node.right){
                righth = traverse(node.right, height+1)
                if(righth < 0) return -1;
            }

            const diff = lefth - righth;
            if(Math.abs(diff) > 1){
                return -1
            }

            if(diff > 0) return lefth
            return righth;

        }
        
        if(traverse(root, 0) < 0) return false;
        return true;

    }
}
