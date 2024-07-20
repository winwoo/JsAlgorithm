const ROW = 5;
/////////////// 직각삼각형///////////////////////////
let result = ""
for(let i = 0; i < ROW; i++) {
    for(let j = 0; j < i + 1; j++) {
        result += "*";
    }
    result += "\n"
}
console.log(result);

/////////////// 역직각삼각형///////////////////////////
result = "";
for(let i = 0; i < ROW; i++) {
    for(let j = 0; j < ROW - i; j++) {
        result += "*";
    }
    result += "\n"
}
console.log(result);

/////////////// 플립 역직각삼각형///////////////////////////
result = "";
for(let i = 0; i < ROW; i++) {
    for(let j = 0; j < ROW; j++) {
        if(j < i) {
            result += " ";
        } else {
            result += "*";
        }
    }
    result += "\n"
}
console.log(result);

/////////////// 플립 직각삼각형///////////////////////////
result = "";
for(let i = 0; i < ROW; i++) {
    for(let j = 0; j < ROW; j++) {
        if(ROW - j - 1 > i) {
            result += " ";
        } else {
            result += "*";
        }
    }
    result += "\n"
}
console.log(result);

/////////////// 이등변 삼각형///////////////////////////
result = "";
for(let i = 0; i < ROW; i++) {
    for(let j = 0; j < ROW; j++) {
        if(ROW - j - 1 > i) {
            result += " ";
        } else {
            result += "*";
        }
    }
    for(let j = 0; j < i; j++) {
        result += "*";
    }
    result += "\n"
}
console.log(result);

/////////////// 역이등변 삼각형///////////////////////////
result = "";
for(let i = 0; i < ROW; i++) {
    for(let j = 0; j < ROW; j++) {
        if(j < i) {
            result += " ";
        } else {
            result += "*";
        }
    }
    for(let j = 0; j < ROW - i - 1; j++) {
        result += "*";
    }
    result += "\n"
}
console.log(result);