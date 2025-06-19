function solution(s) {
    let length = s.length;
    let smallestLength = length;

    for (let i = 1; i < length; i++) {
        let startIdx = 0;
        let endIdx = startIdx + i;
        let str = "";

        let beforeStr = "";
        let count = 1;

        while (endIdx <= length) {
            let currentStr = s.substring(startIdx, endIdx);

            // 값이 들어간적 있다면
            if (beforeStr) {
                // 이전 값과 같은 지 확인
                if (beforeStr === currentStr) {
                    count++;
                } else {
                    // 같지 않으면 누적하기
                    if (count === 1) {
                        str += currentStr;
                    } else {
                        str += count + currentStr;
                        // 초기화시키기
                        count = 1;
                    }
                }
            }
            // 이전값 현재값 바꾸기
            beforeStr = currentStr;

            // 인덱스 위치 바꾸기
            startIdx = endIdx;
            endIdx = Number(startIdx) + i;
        } //////////
        // i번 만큼 자르기가 모두 끝난것
        if (smallestLength > str.length) {
            smallestLength = str.length;
        }
        str = "";
    }

    return smallestLength;
} // 실패...ㅠㅜ

let s = "aabbaccc";
console.log(solution2(s));

// 더 좋은 방법
function solution2(s) {
    // 미래 단어와 비교하기 -> count 횟수 세기
    const n = s.length;
    if (n === 1) {
        return 1;
    }

    let minLength = n;

    // 길이 절반 까지만 시도 (그 이상은 압축할 수 없다)
    for (let unitSize = 1; unitSize <= Math.floor(n / 2); unitSize++) {
        // unit크기만큼 문자열 압축하기
        let str = "";
        for (let i = 0; i < n;) {
            let unit = s.substring(i, i + unitSize);
            let count = 1;
            // 미래 예측 : 다음 단어가 같은 단어인지 확인후 횟수 세기
            let nextPos = i + unitSize;
            while (s.substring(nextPos, nextPos + unitSize) === unit) {
                count++;
                nextPos += unitSize;
            }

            // count에 맞게 문자열 추가
            if (count > 1) {
                str += count.toString();
            }
            str += unit;
            // 처리한 개수만큼 인덱스 위치 이동
            i += unitSize * count;
        }
        // 최단길이 비교
        minLength = Math.min(str.length, minLength);
    }
    return minLength;
}