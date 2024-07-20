//https://school.programmers.co.kr/learn/courses/30/lessons/12906

//진욱
function solution_step3(arr) {
  const resultArr = [];

  for (const cur of arr) {
    if (cur !== resultArr[resultArr.length - 1]) {
      resultArr.push(cur);
    }
  }

  return resultArr;
}


//요셉
function solution(arr) {
  var answer = arr.filter((item, idx) => item !== arr[idx + 1])

  return answer;
}


function solution(arr) {
  var answer = [];

  for (let i = 0; i < arr.length; ++i) {
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

function solution(arr) {
  return arr.filter((f, i) => f !== arr[i + 1]);
}

// 코드 설명 듣는건 도움이 된다.