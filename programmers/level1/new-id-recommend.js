/**
 * 문제  : 카카오 신규 아이디 추천
 * 처음에 푼 방식
 * @param {*} new_id
 * @returns
 */
function solution(new_id) {
    let answer = String(new_id);
    // 1단계 : 대문자 -> 소문자
    answer = answer.toLowerCase();

    // 2단계 : 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
    let secondAnswer = "";
    for (let char of answer) {
        if (
            (char >= "a" && char <= "z") || // 소문자이면
            !isNaN(Number(char)) ||
            char === "-" ||
            char === "_" ||
            char === "."
        ) {
            secondAnswer += char;
        }
    }

    // 3단계 : 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
    let thirdAnswer = "";
    let before = "";
    for (let char of secondAnswer) {
        // . 연속이면 . 으로 바꾸기
        if (before === "." && char === ".") {
            // 제일 마지막 글자가 . 이면 넣지 않기
            if (!thirdAnswer.endsWith(".")) {
                thirdAnswer += ".";
            }
        } else {
            thirdAnswer += char;
            before = char;
        }
    }

    // 4단계 : 마침표(.)가 처음이나 끝에 위치한다면 제거
    let fourthAnswser = thirdAnswer;
    if (thirdAnswer.startsWith(".")) {
        fourthAnswser = fourthAnswser.slice(1);
    }
    if (fourthAnswser.endsWith(".")) {
        fourthAnswser = fourthAnswser.substring(0, fourthAnswser.length - 1);
    }

    // 5단계 : 빈 문자열이라면, new_id에 "a"를 대입
    let fitthAnswer = fourthAnswser;
    if (fitthAnswer === "") {
        fitthAnswer += "a";
    }

    // 6단계 :
    // 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
    // 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거
    let sixthAnwer = fitthAnswer;
    if (sixthAnwer.length >= 16) {
        sixthAnwer = sixthAnwer.substring(0, 15);
        if (sixthAnwer.endsWith(".")) {
            sixthAnwer = sixthAnwer.substring(0, sixthAnwer.length - 1);
        }
    }

    // 7단계 : 길이가 2자 이하라면,
    // new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙임
    let seventhAnwer = sixthAnwer;

    if (seventhAnwer.length <= 2) {
        let lastChar = seventhAnwer.substring(seventhAnwer.length - 1);

        while (seventhAnwer.length < 3) {
            seventhAnwer += lastChar;
        }
    }

    return answer;
}

// solution("...!@BaT#*..y.abcdefghijklm");
// solution("z-+.^.");
// solution("=.=");
// solution("123_.def");
// solution("abcdefghijklmn.p");

/**
 * 좀 더 효율적인 방식
 * @param {*} new_id
 * @returns
 */
function solution(new_id) {
    let answer = new_id
        .toLowerCase() // 1
        .replace(/[^a-z0-9_.-]/g, "") // 2
        .replace(/\.{2,}/g, ".") // 3
        .replace(/^\.|\.$/g, "") // 4
        .replace(/^$/, "a") // 5
        .substring(0, 15)
        .replace(/\.$/, ""); // 6

    //7
    return answer.padEnd(3, answer[answer.length - 1]);
}