//https://school.programmers.co.kr/learn/courses/30/lessons/12951
// 이하얀
function solution(s) {
    let answer = s.split(' ').map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(' ')
    return answer;
}

// 박유영
function solution(s) {
    let answer = '';
    
    for (let i = 0; i < s.length; i++){
            if (i === 0 || s[i-1] === ' ')  answer += s[i].toUpperCase();
            
            else if (s[i] === ' ')  answer += ' ';
            else    answer += s[i].toLowerCase();
        }
    
    return answer;
}


function solution(s) {
    const arr = s.split(" ")
    for(let i = 0; i<arr.length; ++i) {
        if(!arr[i])
            continue;
        let str = arr[i].toLowerCase();
        arr[i] = str[0].toUpperCase() + str.slice(1);
    }
    return arr.join(" ")
}

function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}

function solution(s) {
    let result = [];
    let capitalizeNext = true;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === ' ') {
            result.push(char);
            capitalizeNext = true;
        } else {
            if (capitalizeNext && char >= 'a' && char <= 'z') {
                result.push(String.fromCharCode(char.charCodeAt(0) - 32));
                capitalizeNext = false;
            } else if (!capitalizeNext && char >= 'A' && char <= 'Z') {
                result.push(String.fromCharCode(char.charCodeAt(0) + 32));
            } else {
                result.push(char);
                capitalizeNext = false;
            }
        }
    }

    return result.join('');
}

console.log(solution("3people unFollowed me"))