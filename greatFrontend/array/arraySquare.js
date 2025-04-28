/**
 * 배열 인스턴스에서 메서드를 바로 사용 가능
 * @return {Array<number>}
 */
Array.prototype.square = function () {
  const length = this.length;
  let result = new Array(length);
  // 제곱수로 변경해서 array 반환
  for (let i = 0; i < length; i++) {
    result[i] = this[i] * this[i];
  }
  return result;
};

/**
 * map 을 사용해서 제곱수로 변경
 */
Array.prototype.square = function () {
  return this.map((num) => num * num);
};

console.log([-2].square()); // [4]
console.log([1, 2, 3, 4].square()); // [1, 4, 9, 16]
