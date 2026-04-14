class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
		for(let i = 0; i < nums.length; i++){
			for(let k = 0; k < nums.length; k++){
				if(nums[k] === nums[i] && k !== i){
					return true
				}
			}
		}
		return false;
	}
}
