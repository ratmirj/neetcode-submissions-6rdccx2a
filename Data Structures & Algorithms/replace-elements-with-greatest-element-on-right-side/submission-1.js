class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */

    replaceElements(arr) {

        let greatest = -1;
        let i = arr.length - 1;

        while(i >= 0){
            const original = arr[i];
            arr[i]  = greatest;
            greatest = original > greatest ? original : greatest;
            i--;
        }

        return arr
    }
}
