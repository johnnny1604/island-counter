import assert from "node:assert";
import { describe, it } from "node:test";
import { countIslandsDFS, countIslandsUnionFind } from "./island-counter";

describe(countIslandsDFS.name, () => {
  it("should return 0 islands if matrix is empty", () => {
    const islands = countIslandsDFS([[]]);
    assert.equal(islands, 0);
  });

  it("should throw if matrix contains non 1 or 0 char", () => {
    const matrix = [
      [1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [1, 1, 1, "z", 1, 1],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1],
    ] as number[][];

    assert.throws(() => countIslandsDFS(matrix));
  });

  it("should evaluate diagonally adjacent 1s as separate islands", () => {
    const matrix = [
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
    ];
    const islands = countIslandsDFS(matrix);

    assert.equal(islands, 4);
  });

  it("should count all adjacet 1s on the side as an island", () => {
    const matrix = [
      [1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1],
    ];
    const islands = countIslandsDFS(matrix);

    assert.equal(islands, 3);
  });

  it("should count all adjacet 1s on top and bottom as an island", () => {
    const matrix = [
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
    ];
    const islands = countIslandsDFS(matrix);

    assert.equal(islands, 2);
  });

  it("should count all adjacet 1s as an island", () => {
    const matrix = [
      [1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1],
    ];
    const islands = countIslandsDFS(matrix);

    assert.equal(islands, 1);
  });

  it("should correctly avaluate random distribution", () => {
    const matrix = [
      [1, 0, 0, 0, 1, 1],
      [1, 0, 1, 1, 0, 0],
      [1, 0, 1, 1, 0, 1],
      [0, 1, 0, 1, 0, 1],
      [0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1, 0],
    ];
    const islands = countIslandsDFS(matrix);

    assert.equal(islands, 5);
  });
});

describe(countIslandsUnionFind.name, () => {
  it("should return 0 islands if matrix is empty", () => {
    const islands = countIslandsUnionFind([[]]);
    assert.equal(islands, 0);
  });

  it("should throw if matrix contains non 1 or 0 char", () => {
    const matrix = [
      [1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [1, 1, 1, "z", 1, 1],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1],
    ] as number[][];

    assert.throws(() => countIslandsUnionFind(matrix));
  });

  it("should evaluate diagonally adjacent 1s as separate islands", () => {
    const matrix = [
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
    ];
    const islands = countIslandsUnionFind(matrix);

    assert.equal(islands, 4);
  });

  it("should count all adjacet 1s on the side as an island", () => {
    const matrix = [
      [1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1],
    ];
    const islands = countIslandsUnionFind(matrix);

    assert.equal(islands, 3);
  });

  it("should count all adjacet 1s on top and bottom as an island", () => {
    const matrix = [
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
    ];
    const islands = countIslandsUnionFind(matrix);

    assert.equal(islands, 2);
  });

  it("should count all adjacet 1s as an island", () => {
    const matrix = [
      [1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1],
    ];
    const islands = countIslandsUnionFind(matrix);

    assert.equal(islands, 1);
  });

  it("should correctly avaluate random distribution", () => {
    const matrix = [
      [1, 0, 0, 0, 1, 1],
      [1, 0, 1, 1, 0, 0],
      [1, 0, 1, 1, 0, 1],
      [0, 1, 0, 1, 0, 1],
      [0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1, 0],
    ];
    const islands = countIslandsUnionFind(matrix);

    assert.equal(islands, 5);
  });
})
