/**
 * 배열 끝에서 부터 함수가 true면 빼고, false가 나올때까지 반복함
 * @param {Array} array - The array to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @return {Array} Returns the slice of `array`.
 */
export default function dropRightWhile(array, predicate) {
  // while 문 사용하기
  let index = array.length - 1; // 끝에서 부터 시작
  // 뒤에서 부터 true인 값이 있는 index를 찾는다
  while (index >= 0 && predicate(array[index], index, array)) {
    index--;
  }

  return array.slice(0, index + 1);
}

// Example 1: Basic usage
dropRightWhile([1, 2, 3, 4, 5], (value, _index, _array) => value > 3);
// => [1, 2, 3]
// Explanation: Starts from right (5). 5 > 3 (true, drop). 4 > 3 (true, drop). 3 > 3 (false, stop). Returns [1, 2, 3].

// Example 2: Predicate always true
dropRightWhile([1, 2, 3], (value, _index, _array) => value < 6);
// => []
// Explanation: 3 < 6 (true, drop). 2 < 6 (true, drop). 1 < 6 (true, drop). Returns empty array.

// Example 3: Predicate always false
dropRightWhile([1, 2, 3, 4, 5], (value, _index, _array) => value > 6);
// => [1, 3, 2, 4, 5]
// Explanation: 5 > 6 (false, stop immediately). Returns the original array slice.

// Example 4: Using the `index` argument
dropRightWhile([1, 2, 3, 4, 5], (_value, index, _array) => index > 2);
// => [1, 2, 3]
// Explanation: Starts at index 4. 4 > 2 (true, drop). Index 3. 3 > 2 (true, drop). Index 2. 2 > 2 (false, stop). Returns [1, 2, 3].

// Example 5: Using the `array` argument
dropRightWhile([10, 11, 12, 4, 5], (value, _index, array) => value < array[1]);
// => [1, 2, 3]
// Explanation: array[1] = 11. 5 < 11 (true, drop). 4 < 11 (true, drop). 12 < 11 (false, stop). Returns [10, 11, 12].
