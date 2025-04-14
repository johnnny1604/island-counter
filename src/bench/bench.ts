import { countIslandsDFS, countIslandsUnionFind } from "../island-counter/island-counter";

// const args = process.argv.slice(2);
// const densityIdx = args.indexOf("--density");
// const density = densityIdx >= 0 ? Number(args[densityIdx + 1]) : 0.5;
//
// console.log(densityIdx, args[densityIdx], args[densityIdx + 1], density);

const matrixSizes = [100, 500, 1000, 5000];

function createMatrix(size: number): number[][] {
  return Array.from({ length: size }, () => Array.from({ length: size }, () => Math.round(Math.random())));
}

function runBench(): void {
  for (const size of matrixSizes) {
    const matrix = createMatrix(size);

    for (let i = 0; i < 10; i++) {
      let start = performance.now();
      const dfsRes = countIslandsDFS(matrix);
      let end = performance.now();

      console.log(`
matrix size: ${size}x${size}
time taken:  ${end - start}
result DFS:  ${dfsRes}`);

      start = performance.now();
      const unionFindRes = countIslandsUnionFind(matrix);
      end = performance.now();

      console.log(`
matrix size: ${size}x${size}
time taken:  ${end - start}
result UF:   ${unionFindRes}`);
    }
  }
}

runBench();

