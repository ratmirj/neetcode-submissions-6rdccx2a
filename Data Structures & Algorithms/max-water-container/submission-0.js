class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let max = 0;

        for (let i = 1; i<heights.length; i++){
            
            let windowStart = 0;
            let windowEnd = i;

            while(windowEnd < heights.length){
                let side;

                if(heights[windowEnd] < heights[windowStart]){
                    side = heights[windowEnd];
                } else {
                    side = heights[windowStart];
                }

                const currentVolume = side*(windowEnd - windowStart);

                max = max > currentVolume ? max : currentVolume;

                windowStart++;
                windowEnd++;
            }
        }

    return max;

    }
}
