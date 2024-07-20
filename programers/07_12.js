// https://school.programmers.co.kr/learn/courses/30/lessons/12910

// 효현
function solution(arr, divisor) {
    var answer = arr.filter(value => (value % divisor) === 0);
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

function solution(arr, divisor) {
    if(divisor === 1) return arr.sort((a,b) => a-b);
    if(divisor === 0) return [-1];
    let r = arr.filter(m => m % divisor === 0).sort((a,b) => a-b)
    console.log(r);
    return r.length === 0 ? [-1] : r;
}