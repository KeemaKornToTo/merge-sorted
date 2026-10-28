# merge-sorted

Merge three sorted integer arrays into one array sorted ascending, **without using any sort function**.

```ts
merge(collection1: number[], collection2: number[], collection3: number[]): number[]
```

- `collection1`, `collection2`: already sorted ascending (min → max)
- `collection3`: already sorted descending (max → min)

## How it works

The function uses three iterators (array indexes), like C++ iterators:

- `it1` and `it2` start at **begin** (index 0) of `v1` and `v2` and move forward.
- `it3` starts at **end** (`v3.length`) of `v3` and moves backward. As with a C++ `end()` iterator, it points one past the element it reads, so its current value is `v3[it3 - 1]`. Reading `v3` backwards turns its descending order into ascending order.

```ts
while (it1 !== v1.length || it2 !== v2.length || it3 !== 0) {
  // 1) if v1 has data -> m = v1[it1]
  // 2) if v2 has data -> compare with m, keep the smaller
  // 3) if v3 has data -> compare with m, keep the smaller
  // push m, then move the iterator that m came from
}
```

The loop runs while at least one iterator still points at data. Complexity is **O(n1 + n2 + n3)**, linear in the total number of elements.

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
