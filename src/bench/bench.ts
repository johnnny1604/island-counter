import { writeFileSync } from "fs";
import { countIslandsDFS, countIslandsUnionFind } from "../island-counter/island-counter";

const matrixSizes = [100, 500, 1000, 5000] as const;
const ITERATIONS = 10;

type BenchmarkData = {
  runs: {
    time: number;
    result: number;
  }[];
  avg: number;
};

type Algorithm = "dfs" | "unionFind";
type BenchmarkOutput = Record<Algorithm, Record<string, BenchmarkData>>;

function createMatrix(size: number): number[][] {
  return Array.from({ length: size }, () => Array.from({ length: size }, () => Math.round(Math.random())));
}

const benchOut: BenchmarkOutput = {
  dfs: {},
  unionFind: {},
};

function runBench(): void {
  for (let i = 0; i < matrixSizes.length; i++) {
    const size = matrixSizes[i];
    console.log(`running size ${size}x${size}`);

    const matrix = createMatrix(size);

    benchOut.dfs[size] = {
      runs: [],
      avg: 0,
    };
    benchOut.unionFind[size] = {
      runs: [],
      avg: 0,
    };

    for (let j = 0; j < ITERATIONS; j++) {
      let start = performance.now();
      const dfsRes = countIslandsDFS(matrix);
      let end = performance.now();
      benchOut.dfs[size].runs.push({
        time: Number((end - start).toFixed(2)),
        result: dfsRes
      });

      start = performance.now();
      const unionFindRes = countIslandsUnionFind(matrix);
      end = performance.now();
      benchOut.unionFind[size].runs.push({
        time: Number((end - start).toFixed(2)),
        result: unionFindRes
      });
    }

    const dfsAvgTime = benchOut.dfs[size].runs.reduce((avg, curr) => avg + curr.time, 0) / ITERATIONS;
    const unionFindAvgTime = benchOut.unionFind[size].runs.reduce((avg, curr) => avg + curr.time, 0) / ITERATIONS;
    benchOut.dfs[size].avg = Number(dfsAvgTime.toFixed(2));
    benchOut.unionFind[size].avg = Number(unionFindAvgTime.toFixed(2));
  }
}

runBench();

console.log(`exporting benchmark results as "benchmark.json"\n`);
writeFileSync("benchmark.json", JSON.stringify(benchOut), "utf-8");

console.log("\nDFS");
console.table(benchOut.dfs, ["avg"]);
console.log("\nUnionFind");
console.table(benchOut.unionFind, ["avg"]);
