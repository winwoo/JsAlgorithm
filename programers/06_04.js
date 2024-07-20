/**
https://school.programmers.co.kr/learn/courses/30/lessons/12939
 */

function solution(s) {
    var answer = '';
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    let arr = s.split(' ');
    for(let n of arr) {
        const num = Number(n);
        if(min > num) {
            min = num;
        }
        if(max < num) {
            max = num;
        }
    }
    answer = `${min} ${max}`;
    return answer;
}