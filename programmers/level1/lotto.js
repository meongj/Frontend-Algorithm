/**
 * 문제 : 로또의 최고 순위와 최저 순위
 *
 * 최저 : 로또 일치개수
 * 최고 : 로또 일치개수 + 0의 개수
 *
 * 시간 복잡도 : O(1)
 * 공간 복잡도 : O(1)
 * @param {*} lottos
 * @param {*} win_nums
 */
function solution(lottos, win_nums) {
    // 순위 (idx: 맞은개수, value : 순위)
    const rank = [6, 6, 5, 4, 3, 2, 1];

    // 0의 개수 세기
    let zeroCount = lottos.filter((num) => num === 0).length;

    // 일치 개수 세기
    let winSet = new Set(win_nums);
    let matchCount = lottos.filter((num) => winSet.has(num)).length;

    // 최고, 최저 당첨개수
    let minMatches = matchCount;
    let maxMatches = matchCount + zeroCount;

    // 순위로 변환
    return [rank[maxMatches], rank[minMatches]];
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]);
solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]);