//https://school.programmers.co.kr/learn/courses/30/lessons/134240
//1. 0은 제외
//2. 2로 나눠서 갯수 계산
//3. reverse해서 추가 연산

//효현
function solution(food) {
    let answer = '';
    for(let i=1; i < food.length ; i ++){
        const count = food[i];
        if (count === 1) {
            continue;
        }
        
        answer += i.toString().repeat(count/2);
    }
    
    return answer + '0' + [...answer].reverse().join('');
}

//희진
function solution(food) {
    let result = [0];
    for (let i = food.length - 1; i >= 1; i--) {
      for (let j = 0; j < Math.floor(food[i] / 2); j++) {
        result.unshift(i);
        result.push(i);
      }
    }
    return result.join('');
  }

function solution(food) {
    const arr = [];
    for (let i = 1; i < food.length; ++i) {
        let batch = parseInt(food[i] / 2);
        arr.push(batch);
    }
    const result = [];
    for(let i = 0; i < arr.length; ++i) {
        for(let j = 0; j < arr[i]; ++j) {
            result.push(i + 1);
        }
    }
    result.push(0);
    let count = result.length;
    for(let i = result.length - 2; i >= 0; --i) {
        result[count] = result[i];
        count++;
    }
    console.log(result);
}

solution([1, 3, 4, 6])