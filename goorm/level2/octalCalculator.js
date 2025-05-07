/**
 * 문제: 8진수 계산기
 * 10진수를 8진수로 바꾼다
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let firstLineInput;
let secondLineArray;
let linesRead = 0;

rl.on("line", function (line) {
  linesRead++;
  if (linesRead === 1) {
    firstLineInput = line.trim();
  } else if (linesRead === 2) {
    secondLineArray = line.split(" ").map((el) => parseInt(el.trim()));
    rl.close();
  }
});

rl.on("close", function () {
  console.log(solution(secondLineArray));
  process.exit();
});

const solution = (arr) => {
  // 배열 모두 더하기
  const sum = arr.reduce((acc, current) => {
    return acc + current;
  }, 0);  

  // 10진수 -> 8진수 변경
  if (sum === 0) return 0;


  let result = [];
  let num = sum;
  let remainder = 0;

  while (num > 0) {
    remainder = num % 8; // 나머지
    num = Math.floor(num / 8); // 몫
    result.push(remainder);

    if (num < 8) {
      result.push(num);
      break;
    }
  }

  // 배열의 맨 뒤 값부터 문자열로 반환
  return result.reverse().join("");
};


// 방법2. toString(8) 사용
const solution2 = (arr) => {
  // 배열 모두 더하기
  const sum = arr.reduce((acc, current) => {
    return acc + current;
  }, 0);

  // 10진수 -> 8진수 변경
  return sum.toString(8);
}