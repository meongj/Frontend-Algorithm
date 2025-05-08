/**
 * 문제 : 거스름돈
 * 최소한의 거스름돈 동전의 개수 구하기
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

function solution(change) {
  const coins = [40, 20, 10, 5, 1];
  let result = 0;

  // 제일 큰 동전부터 찾는다
  for (const coin of coins) {
    // 거스름돈은 동전 보다 항상 크거나 같아야함
    // 거스름돈이 동전보다 작아지기 위해서 계속 같은 동전 크기로 빼준다
    // 동전보다 작다면 다음 동전으로 넘어감
    while (change >= coin) {
      change -= coin;
      result++;
    }
  }
  return result;
}
