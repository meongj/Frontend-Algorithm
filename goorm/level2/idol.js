/**
 * 문제 : 구름 아이돌
 * 성적이 우수한 3명의 index 출력
 * - 자료구조 Map과 Array 사용
 * - 내림차순 정렬
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
    info = line;
  } else {
    data = line.split(" ").map((el) => +el);
    count += 1;
  }
  if (count === N) {
    rl.close();
  }
}).on("close", function () {
  console.log(solution(data));
  process.exit();
});

const solution = (scores) => {
  // 1.Map <점수, 인덱스> 저장
  const map = new Map();
  scores.forEach((value, index) => {
    map.set(value, index + 1);
  });

  // 2.Map 키를 내림차순 정렬해서 array 저장
  const sortedScores = Array.from(map.keys()).sort((score1, score2) => {
    return score2 - score1;
  });

  // 3. array를 3만큼 잘라서 띄어쓰기 포함한 문자열로 반환
  let result = [];
  for (let i = 0; i < 3; i++) {
    result.push(map.get(sortedScores[i]));
  }

  return result.join(" ");
};
