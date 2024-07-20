//https://school.programmers.co.kr/learn/courses/30/lessons/81301
// 영어와 숫자가 조합된 문자를 숫자로 변환하여 반환

// 이효현
function solution(s) {
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let answer = s;

    for (let i = 0; i < words.length; i++) {
        answer = answer.split(words[i]).join(i);
    }

    return parseInt(answer);
}

// 최진욱
function solution(s) {
    const wordToNumberMap = new Map([
        ['zero', '0'],
        ['one', '1'],
        ['two', '2'],
        ['three', '3'],
        ['four', '4'],
        ['five', '5'],
        ['six', '6'],
        ['seven', '7'],
        ['eight', '8'],
        ['nine', '9'],
    ]);

    //'onetwo230' => ['one', 'two', '2', '3', '0']
    const wordAndNumberTokens = tokenizeByWords(s, [
        ...wordToNumberMap.keys(),
    ]);

    //['one', 'two', '2', '3', '0'] => ['1', '2', '2', '3', '0']
    const numberTokens = wordAndNumberTokens.map(token =>
        canConvertToNum(token) ? token : wordToNumberMap.get(token)
    );

    return Number(numberTokens.join(''));

    function tokenizeByWords(s, words) {
        const tokens = [];

        let curPos = 0;
        while (curPos < s.length) {
            const curChar = s[curPos];
            if (canConvertToNum(curChar)) {
                tokens.push(curChar);
                ++curPos;
            } else {
                for (const word of words) {
                    let fullMatch = true;

                    for (let i = 0; i < word.length; ++i) {
                        if (s[curPos + i] !== word[i]) {
                            fullMatch = false;
                            break;
                        }
                    }

                    if (fullMatch) {
                        tokens.push(word);
                        curPos += word.length;
                        break;
                    }
                }
            }
        }

        return tokens;
    }

    function canConvertToNum(character) {
        return !Number.isNaN(Number(character));
    }
}

function solution(s) {
    let map = new Map([
        ['zero', 0],
        ['one', 1],
        ['two', 2],
        ['three', 3],
        ['four', 4],
        ['five', 5],
        ['six', 6],
        ['seven', 7],
        ['eight', 8],
        ['nine', 9],
    ]);

    const num = [];
    let buffer = [];
    for (let c of s) {
        if (isDigit(c)) {
            num.push(c);
            continue;
        }

        buffer.push(c);
        if (buffer.length < 3) {
            continue;
        }

        const str = buffer.join('');
        if (!map.has(str)) {
            continue;
        }

        num.push(map.get(str));
        buffer = [];
    }
    return Number(num.join(''));
}

// char가 숫자인지 체크
function isDigit(char) {
    const code = char.charCodeAt(0);
    return code >= 48 && code <= 57;
}

console.log(solution("one4seveneight"));