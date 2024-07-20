// 김현진
function solution(n) {
    let targetNum = n;
    let binaryStr = "";
    while (n >= 1) {
      binaryStr += String(n % 2);
      n = parseInt(n / 2);
    }
    const oneCount = binaryStr.match(new RegExp("1", "g")).length;
  
    while (true) {
      let num = ++targetNum;
      binaryStr = "";
      while (num >= 1) {
        binaryStr += String(num % 2);
        num = parseInt(num / 2);
      }
      if (binaryStr.match(new RegExp("1", "g"))?.length === oneCount) break;
    }
    return targetNum;
  }

  //국민영
  const solution = (n) => {
    const cntOne = (num) => num.toString(2).split("").filter((val) => val === "1").length
    const cntOneN = cntOne(n)
    let nextNum = n + 1
    
    while (nextNum) {
        if( cntOne(nextNum) === cntOneN ) {
            return nextNum
        }
        nextNum++
    }
    
    return nextNum
}


function solution(n) {
    var pivot = n & -n;
    var before = ((n ^ (n + pivot)) / pivot) >> 2;
    return (n + pivot) | before;
}

console.log(solution(78));