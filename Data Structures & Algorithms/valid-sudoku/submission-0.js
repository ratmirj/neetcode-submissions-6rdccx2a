class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = {}
        const columns ={}
        const boxes = {}

        const getBoxIndex = (row, col) => Math.floor(row/3)*3 + Math.floor(col/3);

        for (let i = 0; i < 9; i++){
            rows[i] = new Set();
            columns[i] = new Set();
            boxes[i] = new Set();
        }

        for(let row = 0; row < 9; row++){
            for(let col = 0; col < 9; col++){

                const current = board[row][col];

                if(isNaN(current)) continue;

                if(rows[row].has(current)){
                    return false;
                }
                rows[row].add(current);

                if(columns[col].has(current)){
                    return false;
                }
                columns[col].add(current);

                const box = getBoxIndex(row, col);

                if(boxes[box].has(current)){
                    return false
                }
                boxes[box].add(current)
            }
        }

        return true;




    }
}
