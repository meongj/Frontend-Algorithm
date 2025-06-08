const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n;
let scores = [];
let lineCount = 0;

rl.on("line", (line) => {
    lineCount++;
    if (lineCount === 1) {
        n = parseInt(line);
    } else {
        scores = line.split(" ").map((el) => parseInt(el));

        if (scores.length === n) {
            console.log(solution());
            rl.close();
        }
    }
});

function solution() {
    if (n === 0) {
        return 0;
    }

    // 1) 제일 큰 수 구하기
    let max1 = Math.max(...scores);

    // 2) 연속적인 합계 점수 구하기 -> Max
    let max2 = 0;

    if (n >= 2) {
        let currentSum = scores[0]; // 연속 합계
        let currentLength = 1; // 연속 구간 길이

        for (let i = 1; i < n; i++) {
            // 이전값보다 1씩크면 sum에 연속 합계저장
            if (scores[i] === scores[i - 1] + 1) {
                currentSum += scores[i];
                currentLength++;
            } else {
                // 연속이 아니라면, 초기화
                currentSum = scores[i];
                currentLength = 1;
            }

            // 연속 구간이 있었다면 max 업데이트
            if (currentLength > 1) {
                max2 = Math.max(max2, currentSum);
            }
        }
    }

    return Math.max(max1, max2);
}