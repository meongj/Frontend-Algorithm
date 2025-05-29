/**
 * Computes the intersection of arrays, returning a new array containing unique values present in all given arrays.
 *
 * @param {Array[]} arrays - The arrays to perform the intersection on.
 * @returns {Array} - A new array containing the unique values present in all given arrays.
 */
export default function intersection(...arrays) {
    if (!arrays || arrays.length === 0) {
        return [];
    }
    // 첫번째 배열 중복제거
    const firstSetArr = Array.from(new Set(arrays[0]));
    console.log(firstSetArr);

    return arrays.slice(1).reduce((acc, currentArray) => {
        return acc.filter((item) => currentArray.includes(item));
    }, firstSetArr);
}

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [3, 4, 5];

console.log(intersection(arr1, arr2, arr3)); // => [3]