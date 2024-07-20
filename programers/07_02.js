//https://school.programmers.co.kr/learn/courses/30/lessons/86491
// 항상 Width 가 큰값으로 두고 w, h의 max 값을 구하기

// 초원
// O(n) + O(n)
function solution(sizes) {
    let width = 0;
    let height = 0;
    
    // w, h swap
    sizes.forEach((item, idx)=>{
        if(item[0] < item[1]){
            let temp = item[0];
            sizes[idx][0] = item[1];
            sizes[idx][1] = temp;
        }
    })
    // max calc
    sizes.forEach((item)=>{
        if(item[0] > width){
            width = item[0];
        }
        if(item[1] > height){
            height = item[1];
        }
    })
    return width * height;
}

// 요셉
// O(n) * O(logN)
function solution(sizes) {
    const minSizes = Math.max(...sizes.map((item) => item.sort((a,b) => a - b)[0]))
    const maxSizes = Math.max(...sizes.map((item) => item.sort((a,b) => a - b)[1]))
    
    return minSizes * maxSizes;
}







function solution(sizes) {
    let maxW = 0;
    let maxH = 0;
    for(let size of sizes) {
        let [w, h] = size;
        if(w < h) {
            w ^= h;
            h ^= w;
            w ^= h;
        }

        maxW = Math.max(maxW, w);
        maxH = Math.max(maxH, h);
    }
    return maxW * maxH;
}

/**
 *          | 8421
 * a = 5    | 0101
 * b = 10   | 1010
 * 
 * a ^= b   | 0000 (a)
 * b ^= a   | 0101 (b)
 * a ^= b   | 1010 (a)
 * 
 * 
 * a = 10   | 1010
 * b = 3    | 0011
 * 
 * a ^= b   | 0110 (a)
 * b ^= a   | 1010 (b)
 * a ^= b   | 0011 (a)
 */
