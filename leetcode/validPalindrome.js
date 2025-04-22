/**
 * @param {string} s
 * @return {boolean}
 */
// 투 포인터 방식으로 변경
var isPalindrome = function(s) {
    // 영문자와 숫자만 남기고, 모두 소문자로 변환
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // 투 포인터 방식으로 확인
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("0P")); // false




