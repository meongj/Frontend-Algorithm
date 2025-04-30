
/**
문제설명 :
두 문자열 ransomNote, magazine이 있고
ransomNote가 magazine의 문자로 ransomNote를 만들수 있다면 true, 아니면 false
문자의 개수도 동일해야함
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  
    // magazined의 문자와 개수를 map에 저장
    const map = {}; // key: 문자, value: 개수

    for (let char of magazine) {
        map[char] = (map[char] || 0) + 1; // map[char] 없다면 0이 초기값, 있다면 그 값에 1더해주기
    }
    // ransomNote에도 동일하게 문자와 개수가 있는지 count
    for (let char of ransomNote) {
        if(!map[char]) {
            // 없는 문자 (undefined)거나 count=0이면 false -> 둘다 falsey한 값
            return false;
        }
        // 있는 문자면 count--해서 줄인다
        map[char]--;
    }

    return true;
};


// Input: ransomNote = "a", magazine = "b"
// Output: false
console.log(canConstruct("a", "b")); //false
// Input: ransomNote = "aa", magazine = "ab"
// Output: false
console.log(canConstruct("aa", "ab")); //false
// Input: ransomNote = "aa", magazine = "aab"
// Output: true
console.log(canConstruct("aa", "aab")); //true
