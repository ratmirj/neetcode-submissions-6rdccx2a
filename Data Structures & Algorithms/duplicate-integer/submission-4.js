class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
		const encounteredNums = {}
		for(let i = 0; i < nums.length; i++){
			const currentNum = nums[i];

			if(encounteredNums[currentNum]){
				return true;
			}

			encounteredNums[currentNum] = true;
		}
		return false;
	}
}
