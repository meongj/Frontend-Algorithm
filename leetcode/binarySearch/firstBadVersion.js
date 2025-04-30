/**
 * 나쁜 버전인지 아닌지를 true/false로 리턴
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * 이진 탐색을 사용하여 현재 나쁜 버전이 몇인지 반환
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;

        while(left < right) {
            const mid = Math.floor((left + right) / 2);
            if (isBadVersion(mid)) {
                // mid 가 bad면 반복문에서 나가도록 right를 mid 로 지정
                right = mid;

            } else{
                // bad 가 되버린 이후는 모두 bad 가 된다
                // mid는 good이다 -> bad는 mid 뒤에있다
                left = mid +1; // 왼쪽을 mid 다음으로 옮긴다
            }
        }
        return left; // right 도 가능
    };
};

/**
 * 나쁜 버전인지 아닌지를 true/false로 리턴
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
const isBadVersion = function(version) {
    const badVersion = 4;
    return version >= badVersion;
};



// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.
/**
 * n = 5, bad=  4
 * 
 * g  g  g  b  b
 * 1, 2, 3, 4, 5
 * 
 * l           r
 * 1, 2, 3, 4, 5
 *       m 
 *          l  r
 * 1, 2, 3, 4, 5
 *       m
 * 
 *          l,r  
 * 1, 2, 3, 4, 5
 *          m
 * 
 */

const findFirstBad = solution(isBadVersion);
console.log(findFirstBad(10));