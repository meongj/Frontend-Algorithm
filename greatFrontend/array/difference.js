/**
 * 두 배열에서 같은 값이 있으면 제거하고 새로운 배열을 만들어 반환하기
 * @param {Array} array - Array from which different elements are to be removed.
 * @param {Array} values - Array of values that are to be removed from the original array.
 * @return {Array} Returns filtered array.
 */
export default function difference(array, values) {
  const result = [];

  // 중복 제거를 위해 Set을 생성
  const valuesSet = new Set(values);
  console.log(valuesSet);

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    // set.has() : 특정값이 존재하는지 확인
    // !(i in array) : array 에 인덱스i 값이 비어있지 않은지 확인
    if (!valuesSet.has(value) && !(value === undefined && !(i in array))) {
      result.push(value);
    }
  }

  return result;
}

// 2. filter() 사용
export default function difference(array, values) {
    const valuesSet = new Set(values);
    return array.filter((value) => !valuesSet.has(value));
  }

// 3. includes() 사용
export default function difference(array, values) {
    return array.filter((value) => !values.includes(value));
  }
difference([1, 2, 3], [2, 3]); // => [1]
difference([1, 2, 3, 4], [2, 3, 1]); // => [4]
difference([1, 2, 3], [2, 3, 1, 4]); // => []
difference([1, , 3], [1]); // => [3] (case of a sparse array)
