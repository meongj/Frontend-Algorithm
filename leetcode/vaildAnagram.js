/**
 * 두 문자열이 아나그램인지 확인하기
 * 
 * 문자와 개수가 동일해야한다
 * 문자별 개수를 순회하며 비교하고, 비교한 후 개수를 1씩 차감한다
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 길이가 다르면 false
    if (s.length != t.length) {
        return false;
    }
    
    // s의 문자와 개수를 저장한다
    const count = {};
    for(let char of s) {
        // 같은 문자가 있다면 count 증가, 없다면 1
        count[char] = (count[char] || 0) + 1;
    }

    // t에 문자에 따른 개수가 맞는지 비교한다
    for(let char of t) {
        // 같은 문자의 개수가 0이면 같은 문자가 없는 것이기 때문에 false 로 리턴
        if (!count[char]) { // 없거나 0인 경우
            return false;
        }
        // 문자에 따른 개수를 1씩 감소
        count[char]--;
    }
    return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
