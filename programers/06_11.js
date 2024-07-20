// https://school.programmers.co.kr/learn/courses/30/lessons/12941

// 박요셉
function solution(A,B){
    const sortedA = A.sort((a,b) => a-b)
    const sortedB = B.sort((a,b) => b-a)
    
    return sortedA.reduce((acc, curr, idx) => {
        return acc + curr * sortedB[idx] 
    },0);
}

// 이준혁
function solution(A,B){
    var answer = 0;
    A.sort((a,b) => a - b);
    B.sort((a,b) => b - a);
    for(i=0; i<A.length; i++){
        answer+=(A[i] * B[i]);
    }
    return answer;
}