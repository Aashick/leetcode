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
class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const rows = new Array(9).fill().map(() => new Set());
    const cols = new Array(9).fill().map(() => new Set());
    const square = new Array(9).fill().map(() => new Set());

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        let currentValue = board[r][c];
        if (currentValue === ".") {
          continue;
        }

        if (
          rows[r].has(currentValue) ||
          cols[c].has(currentValue) ||
          square[this.getSquareIndex(r, c)].has(currentValue)
        ) {
          return false;
        }

        rows[r].add(currentValue);
        cols[c].add(currentValue);
        square[this.getSquareIndex(r, c)].add(currentValue);
      }
    }

    return true;
  }

  getSquareIndex(r, c) {
    return Math.floor(r / 3) * 3 + Math.floor(c / 3);
  }
}
