import { describe, expect, it } from "vitest";
import { countIslandsDFS, countIslandsUnionFind } from "./island-counter";

describe(countIslandsDFS.name, () => {
  it("should return 0 islands if matrix is empty", () => {
    const islands = countIslandsDFS([[]]);
    expect(islands).toBe(0);
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

    expect(() => countIslandsDFS(matrix)).toThrowError("Malformed matrix. Matrix should be only of 1s and 0s");
  });

  it("should evaluate diagonally adjacent 1s as separate islands", () => {
    const matrix = [
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
    ];
    const islands = countIslandsDFS(matrix);

    expect(islands).toBe(4);
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

    expect(islands).toBe(3);
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

    expect(islands).toBe(2);
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

    expect(islands).toBe(1);
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

    expect(islands).toBe(5);
  });
});

describe(countIslandsUnionFind.name, () => {
  it("should return 0 islands if matrix is empty", () => {
    const islands = countIslandsUnionFind([[]]);
    expect(islands).toBe(0);
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

    expect(() => countIslandsUnionFind(matrix)).toThrowError("Malformed matrix. Matrix should be only of 1s and 0s")
  });

  it("should evaluate diagonally adjacent 1s as separate islands", () => {
    const matrix = [
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
    ];
    const islands = countIslandsUnionFind(matrix);

    expect(islands).toBe(4);
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

    expect(islands).toBe(3);
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

    expect(islands).toBe(2);
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

    expect(islands).toBe(1);
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

    expect(islands).toBe(5);
  });
})
