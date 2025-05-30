/**
 * 문제 : MaxBy
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 */
/** 불필요한 map 생성 -> 주석 처리
export default function maxBy(array, iteratee) {
    // 입력 값 유효성 검사
    if (array === null || array.length === 0) {
        return undefined;
    }

    const map = new Map();
    array.forEach((obj) => {
        const result = iteratee(obj);
        if (result === null || result === undefined) {
            return;
        }
        map.set(result, obj); //바뀐값, 원본
    });

    // map이 비어있다면 바로 반화
    if (map.size === 0) {
        return undefined;
    }

    // map의 key가 가장 큰 value 값 반환
    // const maxKey = Math.max(...map.keys());
    // 영어 문자열의 크기를 비교하기 위해 reduce 사용
    const keysArray = Array.from(map.keys());
    const maxKey = keysArray.reduce((a, b) => (a > b ? a : b));
    return map.get(maxKey);
}
**/

// 배열을 순회하면서 제일 큰 값과 결과값을 갱신한다
export default function maxBy(array, iteratee) {
    // 최대값
    let max = -Infinity;
    // 결과값
    let result = undefined;

    for (const element of array) {
        const value = iteratee(element);

        if (value != null && (result === undefined || value > max)) {
            max = value;
            result = element;
        }
    }
    return result;
}

console.log(maxBy([{ n: 1 }, { n: 2 }], (o) => o.n)); // => { n: 2 }

console.log(maxBy([1, 2], (o) => -o)); // => 1

console.log(maxBy([{ n: null }, { n: 10 }, { n: undefined }], (o) => o.n)); // { n: 10 }

console.log(
    maxBy(
        [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }],
        (o) => o.name
    )
); // { name: 'Charlie' }