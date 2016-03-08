//Write a program to solve a Sudoku puzzle by filling the empty cells.
//Empty cells are indicated by the character '.'.
//You may assume that there will be only one unique solution.
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
//TLE,但Java同样算法可以通过
var solveSudoku = function (board) {
  var stack = [];
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (board[i][j] == '.')
        stack.push(i * 9 + j);
    }
  }
  solve(board, stack);
  return board;
};
var solve = function (board, stack) {
  var now = stack[0], m = Math.floor(now / 9), n = now % 9;

  for (var k = 1; k <= 9; k++) {
    if(isValid(board,m,n,k)) {
      board[m]=board[m].slice(0,n)+k+board[m].slice(n+1);//???应该有更好的方法吧
      stack.shift();
      if (stack.length == 0) {
        return true;
      }
      if(solve(board, stack))
        return true;
      board[m]=board[m].slice(0,n)+'.'+board[m].slice(n+1);//???
      stack.unshift(now);
    }
  }
  return false;
}
var isValid = function(board,m,n,k){
  for (var i = 0; i < 9; i++) {
    if (board[m][i] == k) {
      return false;
    }
    if (board[i][n] == k) {
      return false;
    }
  }
  for (var i = 0, mt = Math.floor(m / 3) * 3; i < 3; i++) {
    for (var j = 0, nt = Math.floor(n / 3) * 3; j < 3; j++) {
      if (board[i + mt][j + nt] == k)
        return false;
    }
  }
  return true;
}
var test = ["..9748...", "7........", ".2.1.9...", "..7...24.", ".64.1.59.", ".98...3..", "...8.3.2.", "........6", "...2759.."];
console.log(solveSudoku(test));