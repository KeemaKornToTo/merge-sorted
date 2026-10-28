/**
 * Merge three sorted arrays into one array sorted ascending.
 *
 * - v1, v2: sorted ascending (min -> max)
 * - v3:     sorted descending (max -> min)
 *
 * No sort function is used.
 *
 * Iterators (array indexes, C++ style):
 * - it1, it2 start at begin (0) and move forward until they reach end (length).
 * - it3 starts at end (v3.length) and moves backward until it reaches begin (0).
 *   Like a C++ iterator at end(), it3 points one past the element it reads,
 *   so the current value of v3 is v3[it3 - 1].
 *
 * Time: O(n1 + n2 + n3)
 */
export function merge(v1: number[], v2: number[], v3: number[]): number[] {
  const result: number[] = [];

  let it1 = 0; // v1.begin()
  let it2 = 0; // v2.begin()
  let it3 = v3.length; // v3.end()

  // Keep going while at least one iterator still points at data.
  while (it1 !== v1.length || it2 !== v2.length || it3 !== 0) {
    let m = 0; // the smallest value found this round
    let from = 0; // which array m came from: 1, 2 or 3 (0 = none yet)

    // 1) If v1 still has data, take its value as m.
    if (it1 !== v1.length) {
      m = v1[it1];
      from = 1;
    }

    // 2) If v2 still has data, compare it with m.
    if (it2 !== v2.length) {
      if (from === 0 || v2[it2] < m) {
        m = v2[it2];
        from = 2;
      }
    }

    // 3) If v3 still has data, compare it with m.
    if (it3 !== 0) {
      if (from === 0 || v3[it3 - 1] < m) {
        m = v3[it3 - 1];
        from = 3;
      }
    }

    // Add m to the result and move the iterator it came from.
    result.push(m);
    if (from === 1) {
      it1++;
    } else if (from === 2) {
      it2++;
    } else {
      it3--;
    }
  }

  return result;
}
