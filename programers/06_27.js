// https://school.programmers.co.kr/learn/courses/30/lessons/12948
// 뒤 4개빼고 앞에숫자 가리기

//김승회
function solution(phone_number) {
    return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

// 문열 -> 문자열할당
function solution(phone_number) {
    let answer = "";
    for (let i = 0; i < phone_number.length; i++) {
        i < phone_number.length - 4
            ? (answer += phone_number[i] = "*")
            : (answer += phone_number[i]);
    }
    return answer;
}


function solution(phone_number) {
    const arr = [];
    for (let i = 0; i < phone_number.length; i++) {
        if (i < phone_number.length - 4) {
            arr.push('*')
            continue;
        }

        arr.push(phone_number[i]);
    }
    return arr.join('')
}