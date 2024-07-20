//https://school.programmers.co.kr/learn/courses/30/lessons/12909
function solution(s) {
    const stack = [];
    for (let i = 0; i < s.length; ++i) {
        const char = s[i];
        if (stack.length === 0 && char === ")")
            return false;

        if (stack.length > 0 && stack[stack.length - 1] !== char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}


function solution2(s) {
    let count = 0;

    for (const c of s) {
        if (c === "(") count++;
        else count--;

        if (count < 0) return false
    }

    return !count
}


console.log(solution2("))))(((("));