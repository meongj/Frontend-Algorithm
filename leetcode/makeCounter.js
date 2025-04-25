/**
 * 클로저 Closure 를 사용해서 count함수의 수를 1씩 증가 시킨다
 * @param {number} initialValue
 * @return {Function}
 */
// 1번 방식
export default function makeCounter(initialValue = 0) {
  let count = 0;
  return function () {
    if (initialValue) {
        return initialValue++;
    }
    return count++;
  };
}

const counter = makeCounter(5);
// 함수로 호출하려면 counter 가 함수로 반환되야한다
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

// 2번 방식
export default function makeCounter(initialValue = 0) {
    let count = initialValue - 1;
  
    return () => {
      count += 1;
      return count;
    };
  }
const counter = makeCounter(); //makeCounter()함수는 1번만 실행되서  initialValue 가 count변수에 저장됨, 클로저 함수 반환
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2