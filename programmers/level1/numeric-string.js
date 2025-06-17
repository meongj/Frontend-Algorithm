/**
 * 문제 : 숫자 문자열과 영단어
 *  */
function solution(s) {
    let answer = s;
    let numericStrings = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    for (let i = 0; i < numericStrings.length; i++) {
        answer = answer.replaceAll(numericStrings[i], i);
    }
    return parseInt(answer);
}

// let s = "one4seveneight";
let s = "23four5six7";
console.log(solution(s));