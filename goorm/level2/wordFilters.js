/**
 * 문제 : 단어 필터
 * 문자열 e에 s 단어가 포함되지 않도록 앞에서 부터 비교하면서 출력
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sLeng, eLeng;
const data = [];
let lineCount = 0;
let dataCount = 0;

rl.on("line", (line) => {
  lineCount++;
  if (lineCount === 1) {
    [sLeng, eLeng] = line.split(" ").map(Number);
  } else {
    data.push(line);
    dataCount++;
    if (data.length === 2) {
      console.log(solution());
      rl.close();
    }
  }
});

// 1. replace() 함수 사용한 경우
// function solution() {
//   let s = data[0];
//   let e = data[1];

//   while (e.includes(s)) {
//     e = e.replace(s, "");
//   }

//   return e === "" ? "EMPTY" : e;
// }

// 2. substring()함수 사용한 경우
function solution() {
  let s = data[0];
  let e = data[1];

  let str = e;
  while (true) {
    // s를 가지고 있는 index를 찾는다
    // 반복
    const index = str.indexOf(s);
    if (index !== -1) {
      // 그 0부터 인덱스전까지 자르고 + 인덱스 이후부터 끝까지 이어붙인다
      str = str.substring(0, index) + str.substring(index + sLeng);
    } else {
      break;
    }
  }

  return str.length === 0 ? "EMPTY" : str;
}
