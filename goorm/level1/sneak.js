/**
 * 문제: 뱀이 지나간 자리
 *
 * 회고)
 * 규칙찾기!가 중요했던 문제
 * 반복문으로만 구현하고자 했던 고정관념이 있었는데
 * 규칙성을 먼저 찾고 바로 그리는게 핵심인 문제인듯ㅠ
 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n, m;

rl.on("line", (line) => {
    [n, m] = line.split(" ").map(Number);
    solution();
    rl.close();
});

function solution() {
    // n개 행 만들기
    for (let i = 0; i < n; i++) {
        let rowString = "";

        // 짝수행이면
        if (i % 2 === 0) {
            // 모두 #으로 채우기
            rowString = "#".repeat(m);
        }
        // 홀수행이면
        else {
            // 1. 오른쪽에 뱀이 있을때
            if (i % 4 === 1) {
                rowString = ".".repeat(m - 1) + "#";
            }
            // 2. 왼쪽에 뱀이 있을때
            else {
                rowString = "#" + ".".repeat(m - 1);
            }
        }
        console.log(rowString);
    }
}