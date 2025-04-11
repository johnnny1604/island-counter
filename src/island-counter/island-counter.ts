function markIslandDFS(matrix: number[][], visited: boolean[][], row: number, col: number) {
  if (
    row < 0 ||
    row >= matrix.length ||
    col < 0 ||
    col >= matrix[0].length ||
    matrix[row][col] === 0 ||
    visited[row][col]
  ) {
    return;
  }

  visited[row][col] = true;

  markIslandDFS(matrix, visited, row + 1, col);
  markIslandDFS(matrix, visited, row, col + 1);
  markIslandDFS(matrix, visited, row - 1, col);
  markIslandDFS(matrix, visited, row, col - 1);
}

/**
  * Calcualtes the number of connected islands of 0s and 1s.
  * Connected island is each group of 1s adjacent on the side, top or bottom.
  * Diagonally connected 1s are ignored
  * @returns number of islands in the provided matrix of 0s and 1s
*/
export function countIslands(matrix: number[][]): number {
  const visited = Array.from({ length: matrix.length }, () => new Array(matrix[0].length).fill(false));
  let islands = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] !== 1 && matrix[row][col] !== 0) {
        throw new Error("Malformed matrix. Matrix should be only of 1s and 0s");
      }

      if (matrix[row][col] === 1 && !visited[row][col]) {
        islands++;
        markIslandDFS(matrix, visited, row, col)
      }
    }
  }

  return islands;
}
