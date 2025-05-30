/**
 * 문제 : Object Map
 * @param {Object} obj
 * @param {Function} fn
 * @returns Object
 */
export default function objectMap(obj, fn) {
    if (obj === null || typeof obj != "object" || Array.isArray(obj)) {
        return {};
    }

    const result = {};
    for (const key in obj) {
        // 객체 자신의 프로퍼티인지 확인
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // fn 함수 첫번째인자로 obj[key] 설정
            // fn 함수 내부에서 this 컨텍스트를 원본객체 obj로 설정
            result[key] = fn.call(obj, obj[key]);
        }
    }
    return result;
}

const double = (x) => x * 2;
objectMap({ foo: 1, bar: 2 }, double); // => { foo: 2, bar: 4}
objectMap({ foo: 4 }, double); // => { foo: 2}