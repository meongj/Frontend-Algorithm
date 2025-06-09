/**
 * 문제 : 2024 카카오 윈터 인턴십 - 가장 많이 받은 선물
 * 처음 풀었을 때는 자료구조 Map 을 사용함
 * { 이름: { give: Map, receive: Map } } 형태는 너무 복잡 => 오류 발생 잦음
 * +) 잘못된 map 구문도 씀;;;
 * 어느 부분에서 잘못됐는지 트래킹이 어려워지고, 코드도 더 복잡하고 길어졌다..
 *
 * 해결책 : 더 간단한 자료구조 사용하기
 * 2차원 배열 [준사람 인덱스][받은 사람 인덱스] 에 count 저장해서 사용
 */
function solution(friends, gifts) {
    const n = friends.length;
    const nextMonthGifts = new Array(n).fill(0); // 다음달 받을 선물

    // 친구 이름 <-> 인덱스 매핑
    const nameMap = new Map();
    friends.forEach((name, index) => nameMap.set(name, index));

    // 선물 지수, 선물 교환 기록 초기화
    let giftScore = new Array(n).fill(0);
    let giftGraph = Array.from({ length: n }, () => new Array(n).fill(0)); // 이차원 배열 0 초기화

    // 선물 기록 저장
    for (const gift of gifts) {
        const [giver, receiver] = gift.split(" ");
        const giverIndex = nameMap.get(giver);
        const receiverIndex = nameMap.get(receiver);

        giftGraph[giverIndex][receiverIndex]++; // i -> j 선물 준 횟수 증가

        giftScore[giverIndex]++; // 선물 준사람 지수 +1
        giftScore[receiverIndex]--; // 선물 받은 사람 지수 -1
    }

    // 모든 친구 쌍끼리 선물 비교
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const iGaveToj = giftGraph[i][j];
            const jGaveToi = giftGraph[j][i];

            // 주고 받은 선물 수 비교
            if (iGaveToj > jGaveToi) {
                nextMonthGifts[i]++;
            } else if (iGaveToj < jGaveToi) {
                nextMonthGifts[j]++;
            } else {
                // 주고 받은 횟수가 같은 경우 선물 지수 비교
                if (giftScore[i] > giftScore[j]) {
                    nextMonthGifts[i]++;
                } else if (giftScore[i] < giftScore[j]) {
                    nextMonthGifts[j]++;
                }
            }
        }
    }

    return Math.max(...nextMonthGifts);
}

const friends = ["muzi", "ryan", "frodo", "neo"];
const gifts = [
    "muzi frodo",
    "muzi frodo",
    "ryan muzi",
    "ryan muzi",
    "ryan muzi",
    "frodo muzi",
    "frodo ryan",
    "neo muzi",
];

console.log(solution(friends, gifts));