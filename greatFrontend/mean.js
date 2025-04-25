/**
 * 배열의 모든 숫자의 합을 개수로 나누는 Function
 * @param {Array} array - Array from which the elements are all numbers.
 * @return {Number} Returns mean.
 */
// 방법1. loop 사용
export default function mean(array) {

    let sum = 0;
    for(let i = 0; i<array.length; i++) {
        sum += array[i];
    }

    return sum / array.length;
}

console.log(mean([4, 2, 8, 6])); // => 5
console.log(mean([1, 2, 3, 4])); // => 2.5
console.log(mean([1, 2, 2])); // => 1.6666666666666667

// 방법2. reduce() 함수 사용
export default function mean(array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / array.length;
}

console.log(mean([4, 2, 8, 6])); // => 5
console.log(mean([1, 2, 3, 4])); // => 2.5
console.log(mean([1, 2, 2])); // => 1.6666666666666667