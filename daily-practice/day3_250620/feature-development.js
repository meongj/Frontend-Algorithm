function solution(progresses, speeds) {
    // 남은 일수 계산
    let leftDays = [];
    for (let i = 0; i < progresses.length; i++) {
        let progress = progresses[i];
        let speed = speeds[i];

        // 몇일 걸리는 지 계산
        let day = 1; // 걸리는 일수
        while (progress + speed * day < 100) {
            day++;
        }
        leftDays.push(day); // 남은 일수 저장
    }

    // 앞에 일수와 나의 일수 비교
    let map = new Map();
    let before = 0; // 앞의 일수
    for (let day of leftDays) {
        if (before === 0) {
            // 처음인 경우 바로 map에 저장
            map.set(day, 1);
            // 앞의 일수 저장
            before = day;
        } else {
            // 앞의 일수와 일수 비교
            // 앞이 더 크면 앞을 따라감
            if (before >= day) {
                map.set(before, map.has(before) ? map.get(before) + 1 : 1);
            }
            // 앞보다 작으면 나를 따라감
            else {
                map.set(day, 1);
                before = day;
            }
        }
    }
    // map의 values 반환
    return [...map.values()];
}

// let progresses = [93, 30, 55];
// let speeds = [1, 30, 5];
let progresses = [95, 90, 99, 99, 80, 99];
let speeds = [1, 1, 1, 1, 1, 1];

console.log(solution2(progresses, speeds));

function solution2(progresses, speeds) {
    let answer = [];
    // 남은 일수 계산
    const completionDays = progresses.map((progress, index) => {
        const remainingProgress = 100 - progress;
        const speed = speeds[index];
        return Math.ceil(remainingProgress / speed);
    });

    //max 일 수보다 크면 max가 바뀌고
    // 작으면 count 유지된다
    let count = 0;
    let maxDay = completionDays[0];

    for (let i = 0; i < completionDays.length; i++) {
        if (maxDay >= completionDays[i]) {
            count++;
        } else {
            // 제일 큰 일수 보다 크다면 이전 count 업데이트 시키고
            answer.push(count);

            // 자신을 max로 업데이트
            maxDay = completionDays[i];
            // count 초기화
            count = 1;
        }
    }
    // count 남아있다면 나머지 추가해주기
    if (count > 0) {
        answer.push(count);
    }
    return answer;
}