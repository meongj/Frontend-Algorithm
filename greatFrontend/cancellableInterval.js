/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
export default function setCancellableInterval(callback, delay, ...args) {
  // settimeout 을 하고 ,
  const timeoutId = setTimeout(callback, delay, ...args);
  // cancel 을 날리면 취소가 된다
  return () => {
    clearTimeout(timeoutId);
  };
}

// 실행
const callback = () => {
  console.log("setTimeout 호출");
};
setCancellableInterval(callback);
setCancellableInterval(callback, 5000);
// setCancellableInterval(callback, delay, param1);
// setCancellableInterval(callback, delay, param1, param2);
// setCancellableInterval(callback, delay, param1, param2, /* … ,*/ paramN);
