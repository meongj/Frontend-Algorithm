/**
 * 문제 : 의좋은 형제
 * 바람이와 구름이는 서로 자신의 식량의 반씩 주고 받는다.
 * 만약 나누어떨어지지 않으면 모두 준다
 * day의 날짜를 출력
 * @param {*} N 
 * @param {*} input 
 * @param {*} data 
 */
const solution = (N, input, data) => {
  const [X, Y] = input; // input의 값은 2개 받을 수 있다.

  // 입력받기
  let n1 = input[0];
  let n2 = input[1];
  let day = data[0];

  for (let i = 1; i <= day; i++) {
    // 홀수 날짜면 n1 -> n2
    if (i % 2 === 1) {
      [n1, n2] = giveAtoB(n1, n2);
    }
    // 짝수 날짜면 n2 -> n1
    else {
      [n2, n1] = giveAtoB(n2, n1);
    }
  }

  console.log(n1, n2);
};

// Run by Node.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 1;
let info = null; // 배열
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
  solution(N, info, data); // solution 호출
  process.exit(); // 프로세스 종료
});

function giveAtoB(a, b) {
  let num = Math.ceil(a / 2);

  a -= num;
  b += num;
  return [a, b];
}
