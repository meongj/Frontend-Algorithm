/**
 * Array.slice() 함수를 사용해서 array를 size만큼 자르기
 * @template T
 * @param {Array<T>} array The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {Array<Array<T>>} The new array of chunks.
 */
export default function chunk(array, size = 1) {
  // array 인지, size는 양수인지 확인
  if (!Array.isArray(array) || size < 1) {
    return [];
  }
  // array 복사 배열 생성
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

console.log(chunk(["a", "b", "c", "d"])); // => [['a'], ['b'], ['c'], ['d']]
console.log(chunk([1, 2, 3, 4], 2)); // => [[1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4], 3)); // => [[1, 2, 3], [4]]
