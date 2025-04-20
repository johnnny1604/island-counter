# Island Counter

## Description

A small library for counting the number of contiguous elements in a 2D matrix.

A cluster of elements (island) will only be considered as such,
if the cells are connected from any of the four general directions.
Diagonally connected cells do not count as part of the same island.

## Quickstart

Install all project dependencies
```sh
npm install
```

You could build the library locally by running:
```sh
npm run build
```

or you could build it in release mode with:
```sh
npm run release
```

To run the unit tests in all environments (node.js, chromium, mozilla and webkit)
install all project dependencies then run
```sh
npm test
```

To run benchmarks for the island counter's performance use
```sh
npm run bench
```
This will run the benchmark locally for `countIslandsDFS` and `countIslandsUnionFind`.
The benchmark consists of creating one matrix for each size (100x100, 500x500, 1000x1000 and 5000x5000)
running and timing the execution of each algorithm 10 times per size. The results are then logged to stdout
and a `benchmark.json` is exported with all the run timings.
