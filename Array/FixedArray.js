export class FixedArray {
    #arrayLength;
    #array;
    #index;

    // #arrayLength와 #array를 알맞게 초기화
    // 생성자 파라미터에는 CustomArray의 고정된 길이를 받아야됨.
    // #array초기화 시 각요소의 값은 undefined
    constructor(arrayLength) {
        this.#arrayLength = arrayLength;
        this.#array = [];
        this.#index = 0;
        for(let i = 0 ; i < arrayLength; i++) {
            this.#array[i] = undefined;
        }
    }

    //////////////////////////////
    //////      LEVEL 1      /////
    /////////////////////////////

    // 배열 맨뒤에 요소 추가
    // 배열의 길이가 #arrayLength를 초과할 경우 요소를 추가되면 안됨.
    push(element) { 
        if(this.#index === this.#arrayLength) {
            console.error("push array over flow");
            return;
        }

        this.#array[this.#index] = element;
        this.#index++;
    }

    // 배열의 맨 마지막 요소를 제거하고 그 요소를 반환
    // 배열의 길이가 0인 경우 예외처리 필요
    pop() {
        const length = this.getLength();
        if(length === 0) {
            console.error("array length is zero");
            return;
        }

        const lastElement = this.#array[this.#index - 1];
        this.#index--;
        return lastElement;
    }

    // 현재 배열의 사용되고 있는 크기를 반환
    getLength() {
        return this.#index;
    }

     // 현재 배열의 상태를 string으로 반환
    stringify() {
        const length = this.getLength();
        let toString = "[";
        for(let i = 0; i < length; i++) {
            toString += JSON.stringify(this.#array[i]);
            if(i != length -1) {
                toString += ","
            }
        }
        toString += "]"
        return toString;
    }

    //////////////////////////////
    //////      LEVEL 2      /////
    /////////////////////////////

    // 배열에서 특정 요소의 첫 번째 인덱스를 반환합니다. 요소가 없으면 -1을 반환합니다.
    indexOf(searchElement) { 
        const length = this.getLength();
        if(length === 0)
            return -1;

        for(let i = 0; i < length; i++) {
            if(this.#array[i] === searchElement) {
                return i;
            }
        }
        return -1;
    }

    // 배열의 각 요소에 대해 predicate 결과가 true인 요소중 제일 첫번째 요소의 index반환
    // true 가 없으면 -1 반환
    findIndex(predicate) { 
        const length = this.getLength();
        if(length === 0)
            return -1;

        for(let i = 0; i < length; i++) {
            if(predicate(this.#array[i]) == true) {
                return i;
            }
        }
        return -1;
    }

    // 배열의 각 요소에 대해 predicate 결과가 true인 요소중 제일 첫번째 요소 1개만 반환
    // true 가 없으면 null 반환
    find(predicate) {
        const findIndex = this.findIndex(predicate);
        if(findIndex === -1)
            return null;

        return this.#array[findIndex];
    }

    // 배열에 특정 요소가 포함되어 있는지 여부를 확인합니다. (true or false)
    includes(searchElement) {
        return this.indexOf(searchElement) !== -1;
    }

    //////////////////////////////
    //////      LEVEL 3      /////
    /////////////////////////////
    // 배열의 각 요소에 대해 제공된 함수를 한 번씩 실행합니다.
    forEach(callback) { 
        const length = this.getLength();
        for(let i = 0; i < length; i++) {
            callback(this.#array[i]);
        }
    }

    // 배열의 각 요소에 대해 callback 결과가 true인 요소를 모아 새로운 배열 반환
    filter(predicate) {
        const length = this.getLength();
        const newArray = new FixedArray(length);
        for(let i = 0; i < length; i++) {
            if(predicate(this.#array[i]) == true) {
                newArray.push(this.#array[i]);
            }
        }
        return newArray;
    }

    // 배열의 각 요소에 대해 callback 함수를 호출한 결과를 모아 새로운 배열로 반환
    map(callback) {
        const length = this.getLength();
        const newArray = new FixedArray(length);
        for(let i = 0; i < length; i++) {
            newArray.push(callback(this.#array[i]));
        }
        return newArray;
    }

    // 배열의 각 요소에 대해 제공된 함수를 호출하여 누산기에 값을 축적
    reduce(callback, initValue) {
        const length = this.getLength();
        if(length === 0)
            return initValue;

        let startIndex = 0;
        if(!initValue) {
            initValue = this.#array[0];
            startIndex++;
        }

        let acc = initValue;
        for(let i = startIndex; i < length; i++) {
            acc = callback(acc, this.#array[i]);
        }
        return acc;
    }
}

const arr = new FixedArray(5);
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);

console.log("getLegnth : ", arr.getLength());
console.log("toString : ", arr.stringify());

console.log("pop1 : ", arr.pop());
console.log("pop2 : ", arr.pop());

console.log("getLegnth : ", arr.getLength());
console.log("toString : ", arr.stringify());

console.log("indexOf : ", arr.indexOf(2));
console.log("find : ", arr.find(f => f === 3)); // 3
console.log("findIndex : ", arr.findIndex(f => f === 3)); // 2
console.log("includes : ", arr.includes(2));

arr.forEach(item => {
    console.log("foreach : ", item);
})
console.log("filter : ", arr.filter(f => f > 2).stringify()); //[3,4,5]
console.log("map : ", arr.map(m => m * 10).stringify()); // [10,20,30,40,50]
console.log("reduce : ", arr.reduce((acc, cur) => acc + cur, 0)); // 15