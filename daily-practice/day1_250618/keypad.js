function solution(numbers, hand) {
    let answer = "";
    // 키패드 숫자
    let leftHand = [1, 4, 7];
    let rightHand = [3, 6, 9];
    let middle = [2, 5, 8, 0];

    // 왼손, 오른손 위치
    let leftHandIdx = 4;
    let rightHandIdx = 4;
    let isLeftHandMiddle = false;
    let isRightHandMiddle = false;

    for (let num of numbers) {
        // 1, 4, 7 이면 무조건 L
        if (leftHand.includes(num)) {
            answer += "L";
            // 현재 위치 저장
            leftHandIdx = leftHand.indexOf(num) + 1;
            isLeftHandMiddle = false;
        } else if (rightHand.includes(num)) {
            // 3, 6, 9 이면 무조건 R
            answer += "R";
            rightHandIdx = rightHand.indexOf(num) + 1;
            isRightHandMiddle = false;
        } else {
            // 2,5,8,0 이면 거리 측정
            // 가운데로 가기 위해 1부터 시작
            // 왼쪽 이나 오른쪽이 가운데 있다면 0부터 시작

            let leftHandDistance = isLeftHandMiddle ? 0 : 1;
            let rightHandDistance = isRightHandMiddle ? 0 : 1;
            let middleIdx = middle.indexOf(num) + 1;

            // 왼쪽 부터 가운데로 가기위한 거리 계산
            leftHandDistance += Math.abs(leftHandIdx - middleIdx);
            // 오른쪽부터 가운데로 가기위한 거리 계산
            rightHandDistance += Math.abs(rightHandIdx - middleIdx);

            if (leftHandDistance < rightHandDistance) {
                // 오른쪽이 더 크다면 왼쪽 출력
                answer += "L";
                // 가운데 위치 저장
                leftHandIdx = middleIdx;
                isLeftHandMiddle = true;
            } else if (leftHandDistance > rightHandDistance) {
                // 왼쪽이 더 크다면 오른쪽 출력
                answer += "R";
                // 가운데 위치 저장
                rightHandIdx = middleIdx;
                isRightHandMiddle = true;
            } else {
                // 같다면 hand 비교
                if (hand === "left") {
                    // 왼쪽으로 감
                    answer += "L";
                    // 가운데 위치 저장
                    leftHandIdx = middleIdx;
                    isLeftHandMiddle = true;
                } else {
                    // 오른쪽으로 감
                    answer += "R";
                    // 가운데 위치 저장
                    rightHandIdx = middleIdx;
                    isRightHandMiddle = true;
                }
            }
        }
    }

    return answer;
}

let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let hand = "right";
console.log(solution(numbers, hand));

function solution2(numbers, hand) {
    let answer = "";

    // 키패드 좌표를 객체로 관리
    // key: 키패드 넘버 , value : [x좌표, y좌표]
    const keypadCoords = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2],
        "*": [3, 0],
        0: [3, 1],
        "#": [3, 2],
    };

    // 손 위치를 키 값으로 저장
    let leftHandPos = "*";
    let rightHandPos = "#";

    // 거리 계산 함수 (x, y좌표 거리계산)
    const getDistance = (pos1, pos2) => {
        // x, y 좌표 각각 가져옴
        const coords1 = keypadCoords[pos1];
        const coords2 = keypadCoords[pos2];
        return Math(coords1[0] - coords2[0]) + Math(coords1[1] - coords2[1]);
    };

    for (const num of numbers) {
        if ([1, 4, 7].includes(num)) {
            // 왼쪽 열 처리
            answer += "L";
            leftHandPos = num;
        } else if ([3, 6, 9].includes(num)) {
            answer += "R";
            rightHandPos = num;
        } else {
            // 가운데
            const distL = getDistance(leftHandPos, num);
            const distR = getDistance(rightHandPos, num);

            let handToUse = "";

            if (distL < distR) {
                handToUse = "L";
            } else if (distR < distL) {
                handToUse = "R";
            } else {
                // 거리가 같을 때
                handToUse = hand === "left" ? "L" : "R";
            }

            answer += handToUse;
            // 왼/오 키패드 문자 갱신
            if (handToUse === "L") {
                leftHandPos = num;
            } else {
                rightHandPos = num;
            }
        }
    }
}