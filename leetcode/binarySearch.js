/**
 * 시간 복잡도 : O(n)
 * 비효율적인 코드!
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
//     // 몇번째 index 있는지 찾기
//     return nums.indexOf(target);
// };

/**
 * 이진 탐색(Binary search) 방식으로 찾기
 * 시간 복잡도 : log(N)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return binarySearch(nums, 0, nums.length - 1, target);
};
// left, right : index
function binarySearch(nums, left, right, target) {
  // left 가 right를 넘어 버릴경우는 아무리 찾아도 값이 없을 경우다
  if (left > right) {
    return -1;
  }
  // 중간값(index) 구하기
  const mid =  Math.floor((left + right) / 2);


  // 타겟이 중간값과 같을때
  if (nums[mid] === target) {
    return mid;
  }
  // 타겟이 중간값보다 클 때 (오른쪽만 search)
  if (nums[mid] < target) {
    // 다시 재귀 호출
    return binarySearch(nums, mid + 1, right, target);
  }
  // 타켓이 중간값보다 작을때 (왼쪽만 search)
  else {
    return binarySearch(nums, left, mid - 1, target);
  }
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
