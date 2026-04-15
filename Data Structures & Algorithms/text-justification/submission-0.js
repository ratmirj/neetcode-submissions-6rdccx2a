class Solution {
    /**
     * @param {string[]} words
     * @param {number} maxWidth
     * @return {string[]}
     */
fullJustify(words, maxWidth) {
    const result = [];
    let i = 0;

    while (i < words.length) {
        // Step 1: Pack words into current line
        let line = [];
        let lineLength = 0;

        while (i < words.length && lineLength + words[i].length + line.length <= maxWidth) {
            line.push(words[i]);
            lineLength += words[i].length;
            i++;
        }

        // Step 2: Format the line
        const leftJustified = i === words.length || line.length === 1;
        if (leftJustified) {
            // Left-justified
            result.push(line.join(' ') + ' '.repeat(maxWidth - (lineLength + line.length - 1)));
        } else {
            // Fully justified
            const totalSpaces = maxWidth - lineLength;
            const gaps = line.length - 1;
            const spacePerGap = Math.floor(totalSpaces / gaps);
            const extraSpaces = totalSpaces % gaps;

            let formatted = '';
            for (let j = 0; j < line.length; j++) {
                formatted += line[j];
                if (j < gaps) {
                    formatted += ' '.repeat(spacePerGap + (j < extraSpaces ? 1 : 0));
                }
            }
            result.push(formatted);
        }
    }

    return result;
}
}
