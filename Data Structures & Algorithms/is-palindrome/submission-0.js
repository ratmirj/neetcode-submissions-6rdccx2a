class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const news = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

        let start = 0;
        let end = news.length - 1;

        console.log(news);

        while (end > start){
            if(news[start] !== news[end]) return false;
            start++;
            end--;
        }

        return true
    }
}
