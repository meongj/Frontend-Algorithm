/**
 * 문제 : 큰 수식 찾기
 * 연산자 (*, +, -)가 포함된 문자열 두 개중 더 큰 값 출력
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const [A, B] = line.trim().split(" ");

  const result1 = eval(A);
  const result2 = eval(B);

  console.log(Math.max(result1, result2));
  rl.close();
});
rl.on("close", function () {
  // 프로세스를 종료합니다.
  process.exit();
});
