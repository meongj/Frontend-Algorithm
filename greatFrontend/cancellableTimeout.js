/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */

export default function setCancellableTimeout(callback, delay, ...args) {
  const timerId = setTimeout(callback, delay, ...args);

  return () => {
    clearTimeout(timerId);
  };
}
const callback = () => {
  console.log("setTimeout 호출");
};
setCancellableTimeout(callback);
setCancellableTimeout(callback, 1000);
// setCancellableTimeout(callback, delay, param1);
// setCancellableTimeout(callback, delay, param1, param2);
// setCancellableTimeout(callback, delay, param1, param2, /* … ,*/ paramN);
