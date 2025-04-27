/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  let target = image[sr][sc];
  // 1. 첫번째 자리가 color 같으면 바꿀 필요가 없다
  if (target === color) return image;
  console.log("target", target);

  // 2. 상하좌우로 이동해서 값 비교!
  const dx = [-1, 1, 0, 0]; // 상, 하
  const dy = [0, 0, -1, 1]; // 좌, 우

  // 재귀 함수로 flood fill 수행
  function dfs(x, y) {
    if (x < 0 || y < 0 || x >= image.length || y >= image[0].length) {
      return;
    }
    // 현재 색상이 원래 색상과 다르면 종료
    if (image[x][y] !== target) {
      return;
    }

    // 색 변경
    image[x][y] = color;

    // 상하좌우 방향으로 이동
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      dfs(nx, ny); // 재귀로 상하좌우 채우기
    }
  }

  dfs(sr, sc);

  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
