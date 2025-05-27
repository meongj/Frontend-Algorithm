/**
 * 문제 : Add Binary
 * 2개의 2진수 더한 값 반환
 * 시간 복잡도 O(N), 공간 복잡도 O(N)
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // 2진수 -> 10진수 (문자열 크기로 인한 BigInt 사용)
    // 10진수의 합 계산
    const sum = BigInt("0b" + a) + BigInt("0b" + b);
    // 10진수 -> 2진수
    return sum.toString(2);
};

// let a = "11";
// let b = "1";
// let a = "1010";
// let b = "1011";

let a =
    "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
let b =
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";

console.log(addBinary(a, b));