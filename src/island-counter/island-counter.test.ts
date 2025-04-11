import { describe, it } from "node:test";
import { countIslands } from "./island-counter";
import assert from "node:assert";

describe(countIslands.name, () => {
  it("should return 0 islands if matrix is empty", () => {
    const islands = countIslands([[]]);
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

    assert.throws(() => countIslands(matrix));
  });

  it("should evaluate diagonally adjacent 1s as separate islands", () => {
    const matrix = [
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
    ];
    const islands = countIslands(matrix);

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
    const islands = countIslands(matrix);

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
    const islands = countIslands(matrix);

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
    const islands = countIslands(matrix);

    assert.equal(islands, 1);
  });
});
