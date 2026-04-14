class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
		const encounteredNums = {}
		for(let i = 0; i < nums.length; i++){
			const currentNum = nums[i];
			
			if(encounteredNums[nums[i]]){
				return true;
			}
			encounteredNums[nums[i]] = true;
		}
		return false;
	}
}
