/**
 * Merge three sorted arrays into one array sorted ascending.
 *
 * - collection1, collection2: sorted ascending (min -> max)
 * - collection3: sorted descending (max -> min)
 *
 * No sort function is used. collection3 is read from its last index
 * backwards, which turns it into an ascending sequence, then a 3-way
 * merge picks the smallest head each step.
 *
 * Time: O(n1 + n2 + n3)   Space: O(n1 + n2 + n3) for the result
 */
export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[],
): number[] {
  const result: number[] = [];

  let i = 0; // pointer into collection1 (front -> back)
  let j = 0; // pointer into collection2 (front -> back)
  let k = collection3.length - 1; // pointer into collection3 (back -> front)

  while (i < collection1.length || j < collection2.length || k >= 0) {
    const a = i < collection1.length ? collection1[i] : Infinity;
    const b = j < collection2.length ? collection2[j] : Infinity;
    const c = k >= 0 ? collection3[k] : Infinity;

    if (a <= b && a <= c) {
      result.push(a);
      i++;
    } else if (b <= c) {
      result.push(b);
      j++;
    } else {
      result.push(c);
      k--;
    }
  }

  return result;
}
