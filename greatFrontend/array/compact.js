/**
 * 1. array의 falsey 한 값을 제거하는 함수
 * @param {Array} array: The array to compact.
 * @return {Array} Returns the new array of filtered values.
 */
export default function compact(array) {
  // falsey  : "", NaN, undefined, -0, 0, false, null
  // falsey 한 값은 false 다

  let result = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if (value) {
      result.push(value);
    }
  }

  return result;
}


/**
 * 2. Array.prototype.filter 사용
 * @param {Array} array: The array to compact.
 * @return {Array} Returns the new array of filtered values.
 */
export default function compact(array) {
    // filter() : true인 값만 필터링한다
    return array.filter(Boolean);
  }


compact([0, 1, false, 2, "", 3, null]); // => [1, 2, 3]
compact(["hello", 123, [], {}]); // => ['hello', 123, [], {}]
