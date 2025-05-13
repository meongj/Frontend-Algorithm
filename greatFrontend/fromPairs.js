/**
 * Creates an object from an array of key-value pairs.
 *
 * @param {Array} pairs - An array of key-value pairs.
 * @returns {Object} - The object composed from the key-value pairs.
 */
export default function fromPairs(pairs) {
  let obj = {};
  pairs.forEach((pair) => {
    const key = pair[0];
    const value = pair[1];

    obj[key] = value;
  });
  return obj;
}

const pairs = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];

fromPairs(pairs); // => { a: 1, b: 2, c: 3 }
