/**
 * 문제 : In Range
 * value가 start와 end 값 사이에 있는지 여부 true/false 반환
 * @param {number} value The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
export default function inRange(value, startParam = 0, endParam) {
    const [start, end] =
    endParam !== undefined ? [startParam, endParam] : [0, startParam];

    return value >= Math.min(start, end) && value < Math.max(start, end);
}

console.log(inRange(3, 2, 4)); // => true
console.log(inRange(4, 8)); // => true
console.log(inRange(4, 2)); // => false
console.log(inRange(2, 2)); // => false
console.log(inRange(1.2, 2)); // => true
console.log(inRange(5.2, 4)); // => false
console.log(inRange(-3, -2, -6)); // => true