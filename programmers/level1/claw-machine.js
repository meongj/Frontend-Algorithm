/**
 * 문제 : 크레인 인형뽑기 게임
 * 시간 복잡도 : O(N*M)
 * 공간 복잡도 : O(M)
 * @param {*} board
 * @param {*} moves
 * @returns
 */
function solution(board, moves) {
    let bucket = [];
    let count = 0;

    for (let move of moves) {
        let col = move - 1;
        let doll = 0;

        for (let row = 0; row < board.length; row++) {
            // 인형이 있다면 꺼내기
            // 인형 찾고 뽑기( 0으로 바꾸기)
            if (board[row][col] !== 0) {
                doll = board[row][col];
                board[row][col] = 0;
                break;
            }
        }

        // 인형 있을때만 바구니 처리
        // 바구니 제일 위에 있는 값과 같은지 비교
        if (doll !== 0) {
            let peek = bucket[bucket.length - 1];
            // 같은 값이면 없애기
            if (bucket.length > 0 && peek === doll) {
                bucket.pop();
                count += 2;
            } else {
                // 같은 값이 없다면 넣기
                bucket.push(doll);
            }
        }
    }

    return count;
}

let board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));