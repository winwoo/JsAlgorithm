class FixedArray {
    #arrayLength;
    #array;
    // 필요한변수 추가 가능

    // #arrayLength와 #array를 알맞게 초기화
    // 생성자 파라미터에는 CustomArray의 고정된 길이를 받아야됨.
    // #array초기화 시 각요소의 값은 undefined
    constructor() { }

    //////////////////////////////
    //////      LEVEL 1      /////
    //////////////////////////////
    // 배열 맨 뒤에 요소 추가
    // 배열의 길이가 #arrayLength를 초과할 경우 요소를 추가되면 안됨.
    push(element) { }

    // 배열의 맨 마지막 요소를 제거하고 그 요소를 반환
    pop() { }

    // 현재 배열의 사용되고 있는 크기를 반환
    getLength() { }

    // 현재 배열의 상태를 string으로 반환
    toString() { }

    //////////////////////////////
    //////      LEVEL 2      /////
    //////////////////////////////
    // 배열에서 특정 요소의 첫 번째 인덱스를 반환합니다. 요소가 없으면 -1을 반환합니다.
    indexOf(searchElement) { }

    // 배열의 각 요소에 대해 predicate 결과가 true인 요소중 제일 첫번째 요소 1개만 반환
    // true 가 없으면 null 반환
    find(predicate) { }

    // 배열의 각 요소에 대해 predicate 결과가 true인 요소중 제일 첫번째 요소의 index반환
    // true 가 없으면 -1 반환
    findIndex(predicate) { }

    // 배열에 특정 요소가 포함되어 있는지 여부를 확인합니다. (true or false)
    includes(searchElement) { }

    //////////////////////////////
    //////      LEVEL 3      /////
    //////////////////////////////
    // 배열의 각 요소에 대해 제공된 함수를 한 번씩 실행합니다.
    forEach(callback) { }

    // 배열의 각 요소에 대해 predicate 결과가 true인 요소를 모아 새로운 배열 반환
    filter(predicate) { }

    // 배열의 각 요소에 대해 callback 함수를 호출한 결과를 모아 새로운 배열로 반환
    map(callback) { }

    // 배열의 각 요소에 대해 제공된 함수를 호출하여 누산기에 값을 축적
    reduce(callback, initValue) { }
}
