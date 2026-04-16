class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let start = 0;
        let end = numbers.length - 1;

        while(true){

            const res = numbers[start] + numbers[end];

            if(res > target){
                end--;
                continue;
            } 

            if(res < target){
                start++;
                continue;
            } 

            return [start+1, end+1]
        }
    }
}
