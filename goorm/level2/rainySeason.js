/**
 * 문제 : 장마
 * https://level.goorm.io/exam/194982/%EC%9E%A5%EB%A7%88/quiz/1
 *
 * 처음엔 문제 이해를 잘못함, 비내린 곳의 위치를 저장하는 코드가 누락됨;;
 * 비를 내리곳의 땅 위치를 따로 누적하고, 비가 내린후 원래 땅 위치와 더함
 * 비내린 장소를 Set을 사용해 중복없게 저장함 -> 배수시스템 작동위함
 * - 문제 이해부터 잘하자!
 * - 자료 구조 활용 적재적소에 하기
 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n, m;
let lineCount = 0;
let grands = [];
let rainyDays = [];

rl.on("line", (line) => {
    lineCount++;
    if (lineCount === 1) {
        [n, m] = line.split(" ").map(Number);
    } else if (lineCount === 2) {
        grands = line.split(" ").map(Number);
    } else {
        let [startDt, endDt] = line.split(" ").map(Number);

        rainyDays.push({ startDt, endDt });

        if (rainyDays.length === m) {
            console.log(solution());
            rl.close();
        }
    }
});

function solution() {
    // 물높이 저장 -> 나중에 땅높이와 더해주기
    let waterLevels = new Array(n).fill(0);
    //비내린곳 저장  (인덱스)
    let rainedHouseInPeried = new Set();

    // 1일차 부터 M일차 까지 장마 돌기
    for (let day = 1; day <= m; day++) {
        let startDt = rainyDays[day - 1].startDt - 1;
        let endDt = rainyDays[day - 1].endDt - 1;

        // 비 내린 곳 저장, 물높이 증가
        for (let i = startDt; i <= endDt; i++) {
            waterLevels[i]++;
            rainedHouseInPeried.add(i);
        }

        // 배수시스템 작동
        // 장마일자가 3의 배수면 (일자-2) ~ (일자)까지 집 1씩 감소
        if (day % 3 === 0) {
            // 비가 왔던 곳 배수
            for (const rainedHouseIdx of rainedHouseInPeried) {
                // 물이 있을 때만 1감소
                if (waterLevels[rainedHouseIdx] > 0) {
                    waterLevels[rainedHouseIdx]--;
                }
            }
            // 비왔던 곳 초기화
            rainedHouseInPeried.clear();
        }
    }

    // 땅 높이 계산
    for (let i = 0; i < n; i++) {
        grands[i] += waterLevels[i];
    }

    return grands.join(" ");
}