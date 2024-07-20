//https://school.programmers.co.kr/learn/courses/30/lessons/12945
// 승회 (재활용)
function solution(n) {
    const arr = [0,1];
    
    for(let i=1; i<n; i++){
        const tmp = (arr[0] + arr[1])%1234567;
        arr[0] = arr[1];
        arr[1] = tmp;
    }
    
    return arr[1];
}

 
 	
// 하얀 (재활용X)
function solution(n) {
    return fibo(n) % 1234567;
}

function fibo(n){
    let arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
    }
    return arr[n];
}
