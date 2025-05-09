/**
 * 문제 : 숫자 배열
 * n의 2차원 배열 출력하기
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;

rl.on("line", (line) => {
  n = line;
  solution();
  rl.close();
});

function solution() {
  let num = 1;
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      str += num + (j === n-1 ? "" : " ");
      num++;
    }
    console.log(str);
    str = '';
  }
}
