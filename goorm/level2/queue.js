/**
 * 문제 : Queue
 * Queue 자료구조 구현하기
 */
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n, m;
const arr = [];
let lineCount = 0;

rl.on("line", (line) => {
    lineCount++;
    if (lineCount === 1) {
        [n, m] = line.split(" ").map(Number);
    } else {
        const [command, value] = line.split(" ").map((el) => el.trim());

        const output = solution(command, value);
        if (output !== undefined) {
            console.log(output);
        }

        if (lineCount === n + 1) {
            rl.close();
        }
    }
});

function solution(command, value) {
    if (command === "push") {
        if (arr.length >= m) {
            return "Overflow";
        } else {
            arr.push(value);
            return undefined;
        }
    } else if (command === "pop") {
        return arr.length === 0 ? "Underflow" : arr.shift();
    }
    return undefined;
}