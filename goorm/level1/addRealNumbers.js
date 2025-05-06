/**
 * A와 B 두 실수 더하기
 * 소수점 6째자리수까지 출력
 */
// Node.js 환경에서 실행
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const [A, B] = line.trim().split(" ").map(Number);

  // 두 수의 합 계산
  let sum = A + B;

  // 방법1)
  //   const factor = Math.pow(10, 6);
  //   sum = Math.floor(sum * factor) / factor;

  //   // 합계 출력
  //   console.log(sum);

  // 방법 2)
  const formattedSum = sum.toFixed(6);
  console.log(formattedSum);
  rl.close();
});

rl.on("close", function () {
  process.exit();
});

// 1.123123 0.123123
// 1.246246
