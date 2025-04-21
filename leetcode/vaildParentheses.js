// 유효한 괄호
/**
 * s =  '(', ')', '{', '}', '[' and ']'
1. 열린 대괄호는 같은 유형의 대괄호로 닫아야 합니다.
2. 열린 대괄호는 올바른 순서로 닫아야 합니다.
3. 모든 닫는 대괄호에는 같은 유형의 열린 대괄호가 있습니다.
 */

//------------------------------------------------
// 정답
/**
 * 최근 연 괄호가 먼저 닫혀야함 -> LIFO 구조  => Stack 사용
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = {
    // 일반객체
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
console.log(isValid("["));
