/**
 * 문제 : 큰 팩토리얼
 * 수의 팩토리얼을 1000000007로 나눈 나머지 구하기
 *
 * 모듈러 연산 사용해서 나머지를 구한다
 */

// Node.js 환경에서 실행
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  console.log(solution(line));

  rl.close();
});

rl.on("close", function () {
  process.exit();
});

function solution(num) {
  const N = parseInt(num);
  let factorial = 1n;
  const mod = 1000000007n;

  for (let i = 1; i <= N; i++) {
    factorial = (factorial * BigInt(i)) % mod;
  }

  return factorial.toString();
}
