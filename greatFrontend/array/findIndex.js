/**
 * 판별 함수 조건에서 배열의 fromIndex의 첫벗째 인덱스값 반환
 * This function returns the index of the first element in the array that satisfies the provided testing function.
 * Otherwise, it returns -1, indicating that no element passed the test.
 *
 * @param {Array} array - The array to search.
 * @param {Function} predicate - The function invoked per iteration.
 * @param {number} [fromIndex=0] - The index to start searching from.
 * @returns The index of the found element, else -1.
 */
export default function findIndex(array, predicate, fromIndex = 0) {
  if (!array || typeof predicate !== "function") {
    return -1;
  }
  const length = array.length;
  let startIndex = fromIndex;

  // fromIndex가 음수일 경우 인덱스 0부터 시작해서 양수로 만든다
  // 시작인덱스가 양수로 만들어도 여전히 음수인 경우 0 부터 시작
  if (startIndex < -length) {
    startIndex = 0;
    // 시작인덱스가 배열 크기보다 크면 -1 반환
  } else if (startIndex >= length) {
    return -1;
    // 시작 인덱스가 음수값이면
  } else if (startIndex < 0) {
    startIndex += length;
  }

  for (let i = startIndex; i < length; i++) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5];

// Search for the first value in the array that is greater than 3.
console.log(findIndex(arr, (num) => num > 3)); // => 3

// Start searching from index 4 (inclusive).
console.log(findIndex(arr, (num) => num > 3, 4)); // => 4

// No such element exists.
console.log(findIndex(arr, (num) => num > 10, 3)); // => -1
