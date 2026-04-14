class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const prefix = (word) => {
            if(!word) return '0#';
            return word.length + '#' + word;
        }

        let coded = ''; 

        for (const word of strs) {
            coded += prefix(word);
        }

        return coded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const isDelimeter = (str) => str === "#";

        const res = [];
        let nextWordLength = '';
        let parsing = false;
        let word = '';


        for(let i = 0; i < str.length; i++){
            
            if(!parsing){
                if(isDelimeter(str[i])){
                    parsing = true;
                    nextWordLength = parseInt(nextWordLength);
                    if (nextWordLength === 0) {
                        res.push('');
                        nextWordLength = '';
                        parsing = false;
                    }
                    continue;
                }
                nextWordLength += str[i];
            } else {
                nextWordLength--;

                word += str[i];

                if(nextWordLength <= 0){
                    res.push(word);
                    word = '';
                    nextWordLength = '';
                    parsing = false;
                } 
            }
        }

        return res;
    }
}
