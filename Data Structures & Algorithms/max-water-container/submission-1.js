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

                const res = heights[windowEnd]*(windowEnd-windowStart)
                max = res > max ? res : max;
                windowEnd--;

            } else {

                const res = heights[windowStart]*(windowEnd-windowStart)
                max = res > max ? res : max;
                windowStart++;
                
            }

        }


    return max;

    }
}
