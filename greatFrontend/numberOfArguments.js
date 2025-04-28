/**
 * 함수의 매개변수 개수 반환
 * @param {...any} args
 * @return {number}
 */
export default function numberOfArguments() {
  return arguments.length;
}

console.log(numberOfArguments()); // 0
console.log(numberOfArguments(1)); // 1
console.log(numberOfArguments(2, 3)); // 2
console.log(numberOfArguments("a", "b", "c")); // 3
