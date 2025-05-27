/**
 * 문제 : Majority Element
 * 목적 : (n/2) 번 보다 큰 다수 요소 찾기
 * 해결 방법 : Liear search
 * 시간 복잡도 O(N)  / 공간 복잡도 O(N)
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    const size = nums.length;

    // 숫자에 따른 빈도수 map 저장
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // 횟수가 (n/2) 번 보다 큰 요소 찾기
    for (const [num, count] of map) {
        if (count > size / 2) {
            return num;
        }
    }
    return undefined;
};

// let nums = [3, 2, 3];
let nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));