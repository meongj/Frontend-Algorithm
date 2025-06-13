function solution(dartResult) {
    let scores = []; // 3번의 턴에 대한 점수 저장
    let currentIdx = 0;

    // 3번의 턴 돌기
    for (let turn = 0; turn < 3; turn++) {
        let scoreStr = 0;
        // 정수
        // 10인 경우
        if (dartResult[currentIdx] === "1" && dartResult[currentIdx + 1] === "0") {
            scoreStr = "10";
            currentIdx += 2;
        } else {
            scoreStr = dartResult[currentIdx];
            currentIdx += 1;
        }

        let score = parseInt(scoreStr);
        // 보너스
        let bonus = dartResult[currentIdx];
        switch (bonus) {
            case "D":
                score = Math.pow(score, 2);
                break;
            case "T":
                score = Math.pow(score, 3);
                break;
        }
        currentIdx += 1;

        // 옵션
        // 없을 수도 있어서 있는지 먼저 체크
        // 끝이 아닌 경우 *, # 체크
        let option = dartResult[currentIdx];
        if (currentIdx < dartResult.length && (option === "*" || option === "#")) {
            if (option === "*") {
                // 현재 점수 두배
                score *= 2;
                // 이전 점수 있다면 2배 만들기
                if (scores.length > 0) {
                    scores[scores.length - 1] *= 2;
                }
            } else {
                score *= -1;
            }
            currentIdx++;
        }

        // 점수 scores 넣기
        scores.push(score);
    }
    // 점수 합계산
    return scores.reduce((sum, current) => sum + current, 0);
}

console.log(solution("1S2D*3T"));