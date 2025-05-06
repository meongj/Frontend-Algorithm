/**
 * 문제 : 대소문자 바꾸기
 *  대문자는 소문자로, 소문자는 대문자로 변경한다
 */

// Run by Node.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 1;
let info = null;
let count = 0;
const data = [];

rl.on("line", function (line) {
  if (!N) {
    // N이 null이면
    N = +line;
  } else if (!info) {
    info = line.split(" ").map((el) => +el);
  } else {
    data.push(line);

    count += 1;
  }
  if (count === N) {
    rl.close();
  }
}).on("close", function () {
  console.log(solution(data)); // solution 호출
  process.exit(); // 프로세스 종료
});

const solution = (data) => {
  // 입력 저장
  const str = data[0];

  // 유효한지 확인
  if (!str) {
    return "";
  }

  return str
    .split("")
    .map((char) => {
      // 문자가 소문자거나 알파벳이 아니면 -> 대문자로 변환
      // 대문자로 변환하면 알파벳이 아닌 문자는 그대로 유지됨
      if (char === char.toLowerCase()) {
        return char.toUpperCase();
      } else {
        // 대문자면 -> 소문자로 변환
        return char.toLowerCase();
      }
    })
    .join("");
};

// 10
// goormLevel
