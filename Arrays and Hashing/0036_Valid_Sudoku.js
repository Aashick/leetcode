/*
Example: 1
Input: board = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

Output: true


Example 2:

Input: board = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","1",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

Output: false
*/

// * Time O(1) | Space O(1)
function isValidSudoku(board) {
    // Initialize sets for rows, columns, and sub-grids
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const subgrids = Array.from({ length: 9 }, () => new Set());

    // const rows = new Array(9).fill().map(() => new Set());
    // const cols = new Array(9).fill().map(() => new Set());
    // const square = new Array(9).fill().map(() => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];
            if (num === '.') {
                continue; // Skip empty cells
            }

            // Check if the number is already in the current row
            if (rows[i].has(num)) {
                return false;
            }
            rows[i].add(num);

            // Check if the number is already in the current column
            if (cols[j].has(num)) {
                return false;
            }
            cols[j].add(num);

            // Determine the index of the sub-grid (3x3)
            const subgridIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (subgrids[subgridIndex].has(num)) {
                return false;
            }
            subgrids[subgridIndex].add(num);
        }
    }

    return true;
}
