/**
 * 문제 : 피보나치 수
 * k번째의 피보나치 수에서 나눈 나머지 값 구하기
 * 
 * 번외) 테스트케이스 1개를 통과하지 못했는데..뭐가 잘못됐는지 잘모르겠다ㅠㅠ
 */
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

function solution(k) {
  let a = 0;
  let b = 1;

  const m = 1000000007;

  for (let i = 3; i <= k; i++) {
    const temp = (b + a) % m;
    a = b;
    b = temp;
  }

  return b;
}
