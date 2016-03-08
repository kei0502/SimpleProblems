import java.util.Stack;

//Write a program to solve a Sudoku puzzle by filling the empty cells.
//Empty cells are indicated by the character '.'.
//You may assume that there will be only one unique solution.
public class SudokuSolver {
	public static void main(String[] args) {
		String[] strs = { "..9748...", "7........", ".2.1.9...", "..7...24.", ".64.1.59.", ".98...3..", "...8.3.2.",
				"........6", "...2759.." };
		char[][] chs = new char[9][9];
		for (int i = 0; i < chs.length; i++)
			chs[i] = strs[i].toCharArray();
		solveSudoku(chs);
		for (int i = 0; i < chs.length; i++)
			System.out.println(String.valueOf(chs[i]));
	}

	public static void solveSudoku(char[][] board) {
		Stack<Integer> stack = new Stack();
		for (int i = 0; i < 9; i++) {
			for (int j = 0; j < 9; j++) {
				if (board[i][j] == '.')
					stack.push(i * 9 + j);
			}
		}
		solve(board, stack);
	}

	public static boolean solve(char[][] board, Stack<Integer> stack) {
		if (stack.empty())
			return true;
		int now = stack.peek(), m = now / 9, n = now % 9;

		for (int k = 1; k <= 9; k++) {
			if (isValid(board, m, n, (char) (k + '0'))) {
				board[m][n] = (char) (k + '0');
				stack.pop();
				if (stack.empty()) {
					return true;
				}
				if (solve(board, stack))
					return true;
				board[m][n] = '.';
				stack.push(now);
			}
		}
		return false;
	}

	public static boolean isValid(char[][] board, int m, int n, char k) {
		for (int i = 0; i < 9; i++) {
			if (board[m][i] == k) {
				return false;
			}
			if (board[i][n] == k) {
				return false;
			}
		}
		for (int i = 0, mt = m / 3 * 3; i < 3; i++) {
			for (int j = 0, nt = n / 3 * 3; j < 3; j++) {
				if (board[i + mt][j + nt] == k)
					return false;
			}
		}
		return true;
	}
}
