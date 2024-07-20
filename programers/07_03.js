//https://school.programmers.co.kr/learn/courses/30/lessons/12950
// 행열 덧샘

/**
 * 1 2  3 4  4 6
 * 2 3  5 6  7 9
 */

// 형빈
function solution(arr1, arr2) {
    let answer = arr1;
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr1[0].length; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return answer;
}
// 민영	
const solution = (arr1, arr2) => {
    const answer = [];
    arr1.forEach((arr, i) => answer.push(arr.map((val, j) => val + arr2[i][j])))
    return answer;
}

function solution(arr1, arr2) {
    const result = [];
    for(let i = 0; i < arr1.length; ++i) {
        result[i] = [];
        for(let j = 0; j < arr1[i].length; ++j) {
            result[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    return result;
}

solution([[1,2],[2,3]], [[3,4],[5,6]])