/**
 * 문제 : 카드 모으기
 * M개의 카드를 받았을때 N개의 카드 모을 때 최소한 몇장이 필요한지 반환
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
const cards = [];
let lineCount = 0;

rl.on("line", (line) => {
  lineCount++;
  if (lineCount === 1) {
    [n, m] = line.split(" ").map(Number);
  } else {
    cards.push(parseInt(line));
    if (cards.length === m) {
      console.log(solution());
      rl.close();
    }
  }
});

const solution = () => {
  // 가지고 있는 카드 Set 저장 (중복 없이)
  const set = new Set();

  // 받은 카드를 순회하면서 횟수 세기
  for (let i = 0; i < m; i++) {
    set.add(cards[i]);

    // 모든 N종의 카드를 다 모았다면 카드 개수 반환

    if (set.size === n) {
      return i + 1;
    }
  }
  return -1;
};
