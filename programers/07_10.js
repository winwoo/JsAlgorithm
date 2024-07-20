//https://school.programmers.co.kr/learn/courses/30/lessons/142086

//하얀
function solution(s) {
    var answer = [];
    const obj = {}
    for (let i = 0; i < s.length; i++) {
        if (obj.hasOwnProperty(s[i])) { // 이전에 요소 만남
            answer.push(i - obj[s[i]]) // 현재 요소 인덱스 - 이전 요소 인덱스
        } else {
            answer.push(-1) // 처음만나면 -1
        }
        obj[s[i]] = i // 현재 요소 인덱스 갱신
    }
    return answer;
}

//현진
function solution(s) {
    let answer = [...s].map((cur, idx) => {
        let index = [...s].slice(0, idx).reverse().indexOf(cur);
        return index === -1 ? -1 : index + 1;
    });
    return answer;
}


function solution(s) {
    const map = new Map();
    return s.split("").map((m, i) => {
        const index = map.get(m);
        map.set(m, i);
        if (index === undefined) {
            return -1;
        }
        return i - index;
    })
}

console.log(solution("bananab"))