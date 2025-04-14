export function markIslandDFS(matrix: number[][], visited: boolean[], row: number, col: number) {
  if (
    row < 0 ||
    row >= matrix.length ||
    col < 0 ||
    col >= matrix[0].length ||
    matrix[row][col] === 0 ||
    visited[row * matrix[0].length + col]
  ) {
    return;
  }

  visited[row * matrix[0].length + col] = true;

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
export function countIslandsDFS(matrix: number[][]): number {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const visited = new Array(rows * cols).fill(0);
  let islands = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] !== 1 && matrix[row][col] !== 0) {
        throw new Error("Malformed matrix. Matrix should be only of 1s and 0s");
      }

      if (matrix[row][col] === 1 && !visited[row * cols + col]) {
        islands++;
        markIslandDFS(matrix, visited, row, col)
      }
    }
  }

  return islands;
}

function find(parent: number[], x: number): number {
  if (parent[x] !== x) {
    parent[x] = find(parent, parent[x]);
  }

  return parent[x];
}

function union(parent: number[], x: number, y: number): void {
  const xRoot = find(parent, x);
  const yRoot = find(parent, y);
  if (xRoot !== yRoot) {
    parent[yRoot] = xRoot;
  }
}

export function countIslandsUnionFind(matrix: number[][]): number {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const parent = new Array(rows * cols).fill(-1);

  let islands = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] !== 1 && matrix[row][col] !== 0) {
        throw new Error("Malformed matrix. Matrix should be only of 1s and 0s");
      }

      if (matrix[row][col] !== 1) {
        continue;
      }

      const idx = row * cols + col;
      parent[idx] = idx;
      islands++;

      const directions = [[-1, 0], [0, -1]];
      for (const [dirRow, dirCol] of directions) {
        const nRow = row + dirRow;
        const nCol = col + dirCol;
        if (nRow < 0 || nCol < 0 || matrix[nRow][nCol] !== 1) {
          continue;
        }

        const nIdx = nRow * cols + nCol;
        const currRoot = idx; // root just assigned; no need to find root
        const rootNeighbor = parent[nIdx];
        if (currRoot !== rootNeighbor) {
          union(parent, idx, nIdx);
          islands--;
        }
      }
    }
  }

  return islands;
}
