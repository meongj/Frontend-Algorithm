let i = 1;

function incrementBy(value) {
    i += value;
    return i;
}

/**
 * 한번만 실행하는 함수 구현하기
 * - this 바인딩 여부에 따라 this가 달라진다..
 * @template {Function} T
 * @param {T} func
 * @return {T}
 */
export default function once(func) {
    let ranOnce = false; // 한 번만 실행했을때 구분자
    let value;

    return function(...args) {
        // 처음 한번만 실행할 경우
        if (!ranOnce) {
            // value = func(...args);
            value = func.apply(this, args);
            ranOnce = true;
        }
        return value;
    };
}

const incrementByOnce = once(incrementBy);
console.log(incrementByOnce(2)); // i is now 3; The function returns 3.
console.log(incrementByOnce(3)); // i is still 3; The function returns the result of the first invocation, which is 3.

i = 4;
incrementByOnce(2); // i is still 4 as it is not modified. However, the function returns the result of the first invocation, which is 3.\