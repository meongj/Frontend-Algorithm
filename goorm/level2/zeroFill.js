/**
 * 문제 : 0 채우기
 * n * n 정사각형 격자판의 숫자 0을 찾아 근접한 수들의 합계 구하기
 */

const { log } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
const grid = []; // 2차원 배열 데이터 저장
let lineCount = 0;
let zeroRow = -1, zeroCol = -1;

rl.on("line", (line) => {
  lineCount++;
  if (lineCount === 1) {
    n = parseInt(line);
  } else {
    const row = line.split(" ").map(Number);
    grid.push(row);

    // 현재 행에서 0의 위치 찾기
    const zeroIndex = row.indexOf(0);
    if (zeroIndex !== -1) {
      // 0을 찾았다면 0의 위치 저장
      zeroRow = lineCount - 2;
      zeroCol = zeroIndex;
    }

    if (grid.length === n) {
      console.log(solution());
      rl.close();
    }
  }
});

function solution() {
  let sum = 0;
  // 0부터 위, 아래, 왼쪽, 오른쪽 합계 누적
  // 0이 있던 행의 모든 원소 합
  for (let i = 0; i < n; i++) {
    sum += grid[zeroRow][i];
  }

  // 0근접 열의 원소 합은 열은 모두 같고, 행만 바뀐다
  for (let i = 0; i < n; i++) {
    sum += grid[i][zeroCol];
  }

  return sum;
}
