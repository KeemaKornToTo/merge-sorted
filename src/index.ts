import { merge } from "./merge";

const collection1 = [0, 3, 5, 9];
const collection2 = [1, 2, 8];
const collection3 = [10, 7, 4, 0];

console.log("collection_1:", collection1);
console.log("collection_2:", collection2);
console.log("collection_3:", collection3);
console.log("merged     :", merge(collection1, collection2, collection3));
