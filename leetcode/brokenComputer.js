/**
 * 문제 : 고장난 컴퓨터
 * 난이도 : lv1
 * https://level.goorm.io/exam/49095/%EA%B3%A0%EC%9E%A5%EB%82%9C-%EC%BB%B4%ED%93%A8%ED%84%B0/quiz/1
 */
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n, c;
let times = []; // 지난 시간
let lineCount = 0;

rl.on("line", (line) => {
    lineCount++;
    if (lineCount === 1) {
        [n, c] = line.split(" ").map(Number);
    } else {
        times = line.split(" ").map(Number);
        if (times.length === n) {
            console.log(solution());
            rl.close();
        }
    }
});

function solution() {
    let characterCount = 1;

    for (let i = 1; i < n; i++) {
        // 현재 입력과 이전 입력 시간의 차이 계산
        const timeDifference = times[i] - times[i - 1];

        // 시간 차이가 유지 시간(c)을 초과했는지 확인
        if (timeDifference > c) {
            // 초과하면 이전 코드 모두 지워짐 1로 초기화
            characterCount = 1;
        } else {
            // 초과하지 않았다면, 글자 수를 1 증가
            characterCount++;
        }
    }

    return characterCount;
}