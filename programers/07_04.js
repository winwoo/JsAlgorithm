//https://school.programmers.co.kr/learn/courses/30/lessons/12926
// 아스키코드 사용하여 n만큼 더하여 계산

// 하얀
function solution(s, n) {
    let answer = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 'A' && s[i] <= 'Z') { // 대문자
            answer += String.fromCharCode((s.charCodeAt(i) - 'A'.charCodeAt(0) + n) % 26 + 'A'.charCodeAt(0));
        } else if (s[i] >= 'a' && s[i] <= 'z') { // 소문자
            answer += String.fromCharCode((s.charCodeAt(i) - 'a'.charCodeAt(0) + n) % 26 + 'a'.charCodeAt(0));
        } else { // 알파벳이 아닌 경우
            answer += s[i];
        }
    }
    return answer;
}

// 진욱
const shiftCharacter = (function () {
    const CHAR_A_CODE_POINT = 'A'.codePointAt(0);
    const CHAR_a_CODE_POINT = 'a'.codePointAt(0);

    function shiftCharacter(char, offset) {
        const baseCodePoint = isUpperCase(char)
            ? CHAR_A_CODE_POINT
            : CHAR_a_CODE_POINT;

        const normalized = char.codePointAt(0) - baseCodePoint;

        const offsetApplied = (normalized + offset) % 26;

        return String.fromCodePoint(offsetApplied + baseCodePoint);
    }

    function isUpperCase(char) {
        return char === char.toUpperCase();
    }

    return shiftCharacter;
})();

function solution(s, n) {
    const caesarEncodedChars = [...s].map(c =>
        c === ' ' ? c : shiftCharacter(c, n)
    );

    return caesarEncodedChars.join('');
}