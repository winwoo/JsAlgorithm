class CustomArray {
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

    // 배열의 각 요소에 대해 callback 결과가 true인 요소를 모아 새로운 배열 반환
    filter(predicate) {
        const length = this.getLength();
        const newArray = new CustomArray(length);
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
        const newArray = new CustomArray(length);
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

    // 배열의 각 요소에 대해 predicate 결과가 true인 요소중 제일 첫번째 요소 1개만 반환
    // true 가 없으면 null 반환
    find(predicate) {
        const length = this.getLength();
        if(length === 0)
            return null;

        for(let i = 0; i < length; i++) {
            if(predicate(this.#array[i]) == true) {
                return this.#array[i];
            }
        }
        return null;
     }

    // 배열의 각 요소에 대해 predicate 결과가 true인 요소중 제일 첫번째 요소의 index반환
    // true 가 없으면 -1 반환
    findIndex(predicate) { 
        const length = this.getLength();
        for(let i = 0; i < length; i++) {
            if(predicate(this.#array[i]) == true) {
                return i;
            }
        }
        return -1;
    }

    getLength() {
        return this.#index;
    }

    print() {
        const length = this.getLength();
        let print = "[";
        for(let i = 0; i < length; i++) {
            print += this.#array[i];
            if(i != length -1) {
                print += ","
            }
        }
        print += "]"
        console.log(print);
    }
}

const arr = new CustomArray(5);
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);

arr.filter(f => f > 2).print(); //[3,4,5]
arr.map(m => m * 10).print(); // [10,20,30,40,50]
console.log(arr.reduce((acc, cur) => acc + cur, 0)); // 15
console.log(arr.find(f => f === 3)); // 3
console.log(arr.findIndex(f => f === 3)); // 2