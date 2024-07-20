//https://school.programmers.co.kr/learn/courses/30/lessons/70129

// 김형빈
function solution(s) {
    var answer = [];
    let changeCount = 0;
    let zeroCount = 0;
    
    while(s.length > 1){
        const nums = s.split('');
        let oneCount = 0;
        for(let num of nums){
            if(num === "0") zeroCount++;
            else oneCount++;
        }
        changeCount++;
        s = makeBinaryStr(oneCount);
    }
    answer = [changeCount, zeroCount];
    return answer;
}

function makeBinaryStr(num){
    let binaryStr = "";
    while(num > 0){
        let rest = num % 2;
        binaryStr = rest + binaryStr;
        
        num = parseInt(num / 2);
    }
    return binaryStr;
}

// 백현명
function solution(s) {
    const answer = [0, 0];
  
    while (s.length > 1) {
      answer[0]++;
      answer[1] += (s.match(/0/g) || []).length;
      s = s.replace(/0/g, '').length.toString(2);
    }
  
      return answer;
  }

// 김승회
const binary = (s, cnt = 0, total = 0) => {
    const zero = s.split("0").length - 1
    s = (s.length - zero).toString(2);
    
    console.log(typeof s)
    if(s != 1) return binary(s, cnt+1, total+zero)
    return [cnt+1, total+zero]
    
}

function solution(s) {
    return binary(s);
}


///


function solution(s) {
    const result = [0, 0];
    while (s !== "1") {
        let count = 0;
        for (let c of s) {
            if (c !== '1') {
                result[1]++;
                continue;
            }
            count++;
        }
    
        result[0]++;
        s = `${count.toString(2)}`;
    }
    return result;
}

console.log(solution("110010101001"));


// 6
// 8421
// 0111