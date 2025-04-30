/**
 * 배열을 start인덱스 부터 end -1 인덱스 까지 value로 변경한다
 * @param {Array} array - The array to fill.
 * @param {*} value - The value to fill array with.
 * @param {number} [start=0] - The start position.
 * @param {number} [end=array.length] - The end position.
 * @return {Array} Returns the filled array.
 */
export default function fill(array, value, start = 0, end = array.length) {
  const length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }

  if (end > length) {
    end = length + 1;
  }

  if (end < 0) {
    end += length;
  }

  for (let i = start; i < Math.min(end, length); i++) {
    array[i] = value;
  }

  return array;
}
// fill([1, 2, 3], "a"); // ['a', 'a', 'a'] 시작 0 끝 3
// fill([4, 6, 8, 10], "*", 1, 3); // [4, '*', '*', 10] 시작 1 끝3

// out of bounds indices
// fill([4, 6, 8, 10, 12], "*", 1, 8); // [4, '*', '*', '*', '*']
// fill([4, 6, 8, 10, 12], "*", 8, 10); // [4, 6, 8, 10, 12]

// negative but within bounds indices
// fill([4, 6, 8, 10, 12], "*", -3, -1); // [4, 6, '*', '*', 12]

// negative out of bounds indices
// fill([4, 6, 8, 10, 12], "*", -10, 2); // ['*', '*', 8, 10, 12] -> 좀 이상함
// fill([4, 6, 8, 10, 12], "*", -10, -8); // [4, 6, 8, 10, 12]
