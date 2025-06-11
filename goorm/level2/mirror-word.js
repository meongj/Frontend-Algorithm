/**
 * 문제 : 거울 단어
 * https://level.goorm.io/exam/49066/%EA%B1%B0%EC%9A%B8-%EB%8B%A8%EC%96%B4/quiz/1
 *
 * 결과 : solved
 *  처음엔 Map에 알파벳 표를 저장해서 구현했는데
 *  key, value를 역으로 꺼내서 비교하는 구문이 추가되어 오히려 번거로웠음..
 * 해결책:
 * 객체에 알파벳 표 담기
 * 포인터를 사용해서 왼쪽, 오른쪽 단어 비교하기
 * 사용하기 쉬운 자료 구조 적용하기
 */
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n;
let words = [];
let lineCount = 0;

rl.on("line", (line) => {
    lineCount++;
    if (lineCount === 1) {
        n = parseInt(line);
    } else {
        words.push(line);

        if (words.length === n) {
            solution();
            rl.close();
        }
    }
});

// 일반 객체 {} 를 사용한 방식
const mirrorMap = {
    b: "d",
    d: "b",
    i: "i",
    l: "l",
    m: "m",
    n: "n",
    o: "o",
    p: "q",
    q: "p",
    s: "z",
    z: "s",
    u: "u",
    v: "v",
    w: "w",
    x: "x",
};

// 포인터 사용하기
function solution() {
    for (const word of words) {
        let result = true;
        let left = 0;
        let right = word.length - 1;

        while (left <= right) {
            let leftChar = word[left];
            let rightChar = word[right];
            const mirroredLeftChar = mirrorMap[leftChar];

            //없는 경우
            if (mirroredLeftChar === undefined) {
                result = false;
                break;
            }
            // 왼쪽 오른쪽 글자 일치하지 않으면
            if (mirroredLeftChar !== rightChar) {
                result = false;
                break;
            }
            left++;
            right--;
        }
        console.log(result ? "Mirror" : "Normal");
    }
}