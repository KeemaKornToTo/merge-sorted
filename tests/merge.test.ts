import { merge } from "../src/merge";

describe("merge", () => {
  it("merges three typical arrays into ascending order", () => {
    expect(merge([0, 3, 5, 9], [1, 2, 8], [10, 7, 4, 0])).toEqual([
      0, 0, 1, 2, 3, 4, 5, 7, 8, 9, 10,
    ]);
  });

  it("returns an empty array when all inputs are empty", () => {
    expect(merge([], [], [])).toEqual([]);
  });

  it("works when only collection1 has items", () => {
    expect(merge([0, 1, 2], [], [])).toEqual([0, 1, 2]);
  });

  it("works when only collection2 has items", () => {
    expect(merge([], [0, 4, 6], [])).toEqual([0, 4, 6]);
  });

  it("reverses collection3 correctly when it is the only input", () => {
    expect(merge([], [], [9, 5, 3, 0])).toEqual([0, 3, 5, 9]);
  });

  it("keeps duplicate values across all three arrays", () => {
    expect(merge([0, 2, 2], [2, 3], [3, 2, 0])).toEqual([
      0, 0, 2, 2, 2, 2, 3, 3,
    ]);
  });

  it("handles single-element arrays", () => {
    expect(merge([5], [1], [3])).toEqual([1, 3, 5]);
  });

  it("handles arrays of very different lengths", () => {
    expect(merge([0, 1, 2, 3, 4, 5, 6], [100], [50])).toEqual([
      0, 1, 2, 3, 4, 5, 6, 50, 100,
    ]);
  });

  it("handles non-overlapping ranges", () => {
    expect(merge([0, 1, 2], [10, 11, 12], [22, 21, 20])).toEqual([
      0, 1, 2, 10, 11, 12, 20, 21, 22,
    ]);
  });

  it("does not modify the input arrays", () => {
    const c1 = [0, 4];
    const c2 = [1, 5];
    const c3 = [6, 2];
    merge(c1, c2, c3);
    expect(c1).toEqual([0, 4]);
    expect(c2).toEqual([1, 5]);
    expect(c3).toEqual([6, 2]);
  });

  it("produces the same result as a reference sort on random inputs", () => {
    // Array.prototype.sort is used ONLY here in the test, to check the answer.
    const randomSortedAsc = (len: number): number[] => {
      const arr: number[] = [];
      let v = 0;
      for (let n = 0; n < len; n++) {
        v += Math.floor(Math.random() * 5);
        arr.push(v);
      }
      return arr;
    };

    for (let round = 0; round < 200; round++) {
      const c1 = randomSortedAsc(Math.floor(Math.random() * 20));
      const c2 = randomSortedAsc(Math.floor(Math.random() * 20));
      const c3 = randomSortedAsc(Math.floor(Math.random() * 20)).reverse();

      const expected = [...c1, ...c2, ...c3].sort((x, y) => x - y);
      expect(merge(c1, c2, c3)).toEqual(expected);
    }
  });

  it("does not call Array.prototype.sort", () => {
    const spy = jest.spyOn(Array.prototype, "sort");
    merge([0, 3], [1, 4], [5, 2]);
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
});
