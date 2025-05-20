/**
 * 문제 : 가장 긴 팰린드롬
 * 가장 긴 팰린드롬 길이를 반환
 * 시간 복잡도 : O(N)
 * 공간 복잡도 : O(1)
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  // 개수 별로 문자 저장 {} - 대소문자 구분
  let obj = {}; // key : 문자, value : 개수
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    // 있다면 있는 개수에서 1 증가, 없다면 1넣기
    obj[char] = (obj[char] || 0) + 1;
  }

  let hasOddCount = false; // 홀수인 경우 더한 적이 있는 지 구분자
  let count = 0;
  // 한개씩 순회하면서 짝수, 홀수 판별
  for (const value of Object.values(obj)) {
    // 짝수면
    if (value % 2 === 0) {
      // count 더하기 1
      count += value;
    } else {
      // 홀수면 개수 빼기 1
      count += value - 1;
      hasOddCount = true;
    }
  }
  // 홀수가 1개라도 있으면 개수 + 1
  if (hasOddCount) {
    count++;
  }

  return count;
};

console.log(longestPalindrome("abccccdd")); // 7
console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("ccc")); // 3
