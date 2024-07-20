//https://school.programmers.co.kr/learn/courses/30/lessons/12973

// 승회
function solution(s)
{
    const arr = [];
    
    for(const c of s){
        arr[arr.length-1] === c ? arr.pop() : arr.push(c)
    }
    
    return arr[0] ? 0 : 1;
}

// 하얀
function solution(s){
    const st = []
    
    for(let i=0; i<s.length; i++){
        if(!st.length || st[st.length-1] != s[i]) st.push(s[i])
        else st.pop()
    }

    return st.length ? 0 : 1
}













function solution(s) {
    if(s.length % 2) return 0;

    const stack = [];
    for (let i = 0; i < s.length; ++i) {
        if(stack.length > 0 && stack[stack.length - 1] === s[i]) {
            stack.pop();
            continue;
        }

        stack.push(s[i]);
    }
    return stack.length === 0 ? 1 : 0;
}

console.log(solution('baabaa'));