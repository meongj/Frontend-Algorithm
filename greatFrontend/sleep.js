/**
 * 비동기로 함수 실행
 * @param {number} duration
 * @return {Promise<void>}
 */
export default async function sleep(duration) {
  setTimeout(() => {
    console.log("sleep 실행완료");
  }, duration);
}
// 1. async 사용
async function greeting() {
  console.log("Hello!");
  await sleep(2000);
  console.log("Bye."); // Only logs after 2000 milliseconds (2 seconds)
}

greeting(2000);
// t = 0: Hello!
// t = 2000: Bye.

// 2. Promise 사용

function sleep(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}



console.log('Hello!');
sleep(2000).then(() => {
  console.log('Bye.'); // Only logs after 2000 milliseconds (2 seconds)
});