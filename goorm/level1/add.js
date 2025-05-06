/**
 * A와 B 두 수 더하기
 */
// Node.js 환경에서 실행
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.on("line", function (line) {
  const [A, B] = line.trim().split(' ').map(Number);

  // 두 수의 합 계산
  const sum = A + B;

  // 합계 출력
  console.log(sum);
  rl.close();
});

rl.on("close", function () {
  process.exit();
});