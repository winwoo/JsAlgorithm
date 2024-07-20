//https://school.programmers.co.kr/learn/courses/30/lessons/42748
// 룰대로
 
// 효현
function solution(array, commands) {    
    return commands.map(command => {
        const start = command[0]-1, end = command[1], n = command[2]-1,
              results = array.slice(start, end).sort((a, b) => a-b);
        return results[n];
    });
}




function solution(array, commands) {
    return commands.map(([i, j, k]) => array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
}

function execute(array, command) {
    const [i, j, k] = command;
    return array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
}

solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])