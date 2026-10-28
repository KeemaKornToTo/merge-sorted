# merge-sorted

Merge three sorted integer arrays into one array sorted ascending, **without using any sort function**.

```ts
merge(collection1: number[], collection2: number[], collection3: number[]): number[]
```

- `collection1`, `collection2`: already sorted ascending (min → max)
- `collection3`: already sorted descending (max → min)

## How it works

1. `collection3` is read **from its last index backwards**, so it behaves like an ascending array. Nothing is reversed or copied.
2. Three pointers (`i`, `j`, `k`) point at the current smallest unused value of each array.
3. Each step compares the three current values, pushes the smallest into the result, and moves that pointer forward (or backward for `collection3`).
4. An exhausted array contributes `Infinity`, so it is never picked.

Complexity: **O(n1 + n2 + n3)** time, linear in the total number of elements. Compare that with O(n log n) for concatenating everything and sorting.

## Requirements

- Node.js 18 or newer (tested on Node 22)
- npm

## Setup

```bash
git clone https://github.com/KeemaKornToTo/merge-sorted.git
cd merge-sorted
npm install
```

## Run the code

```bash
npm start
```

Output:

```
collection_1: [ 0, 3, 5, 9 ]
collection_2: [ 1, 2, 8 ]
collection_3: [ 10, 7, 4, 0 ]
merged     : [ 0, 0, 1, 2, 3, 4, 5, 7, 8, 9, 10 ]
```

## Run the unit tests

```bash
npm test
```

The tests (Jest + ts-jest) cover:

- typical input, all-empty input, and each array alone
- duplicates within and across arrays
- single-element and very uneven array lengths
- inputs that are not mutated
- 200 random cases checked against a reference result
- a spy confirming `Array.prototype.sort` is never called

## Build

```bash
npm run build   # compiles TypeScript to dist/
```

## Project structure

```
merge-sorted/
├── src/
│   ├── merge.ts        # the merge function
│   └── index.ts        # demo entry point
├── tests/
│   └── merge.test.ts   # unit tests
├── jest.config.js
├── tsconfig.json
└── package.json
```
