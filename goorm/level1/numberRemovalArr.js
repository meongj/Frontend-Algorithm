/**
 * 숫자 제거 배열
 * 한 배열의 k의 숫자가 없는 개수를 반환
 * - String include() 사용
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 1;
let info = null;
let count = 0;
let data = null;

rl.on("line", function (line) {
  if (!info) {
    info = line.split(" ").map((el) => +el);
  } else {
    data = line.split(" ").map((el) => +el);
    count += 1;
  }
  if (count === N) {
    rl.close();
  }
}).on("close", function () {
  console.log(solution(N, info, data));
  process.exit();
});

const solution = (N, input, data) => {
  const [n, k] = input;
  let count = 0;

  // 배열 하나씩 돌면서 k가 contain 되어 있는지 체크
  data.map((value) => {
    if (!String(value).includes(k)) {
      // 있다면 count 증가
      count++;
    }
  });

  return count;
};
