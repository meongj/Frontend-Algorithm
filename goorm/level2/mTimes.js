/**
 * 문제 : M배 배열
 * M배 배열이 된 정수 배열 A를 순서대로 출력하기
 */
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n, m;
let arr = [];
let lineCount = 0;

rl.on("line", (line) => {
    lineCount++;
    if (lineCount === 1) {
        [n, m] = line.split(" ").map(Number);
    } else if (lineCount === 2) {
        arr = line.split(" ").map((el) => el.trim());
        console.log(solution());
        rl.close();
    }
});

function solution() {
    const result = arr.map((value) => {
        const num = Number(value);
        return num % m !== 0 ? num * m : num;
    });

    return result.join(" ");
}