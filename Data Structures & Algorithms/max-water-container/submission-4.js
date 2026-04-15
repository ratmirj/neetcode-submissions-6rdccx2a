class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let max = 0;

        let windowStart = 0;
        let windowEnd = heights.length - 1

        while(windowEnd > windowStart){

            if(heights[windowStart] > heights[windowEnd]){
                max = (heights[windowEnd]*(windowEnd-windowStart)) > max ? (heights[windowEnd]*(windowEnd-windowStart)) : max;
                windowEnd--;
            } else {
                max = (heights[windowStart]*(windowEnd-windowStart)) > max ? (heights[windowStart]*(windowEnd-windowStart)) : max;
                windowStart++;
            }

        }


    return max;

    }
}
