class CustomArray {
    #arrayLength;
    #array;
    // 필요한변수 추가 가능

    // #arrayLength와 #array를 알맞게 초기화
    // 생성자 파라미터에는 CustomArray의 고정된 길이를 받아야됨.
    // #array초기화 시 각요소의 값은 undefined
    constructor() { }

    // 배열 맨뒤에 요소 추가
    // 배열의 길이가 #arrayLength를 초과할 경우 요소를 추가되면 안됨.
    push(element) { }

    // 배열의 각 요소에 대해 callback 결과가 true인 요소를 모아 새로운 배열 반환
    filter(predicate) { }

    // 배열의 각 요소에 대해 callback 함수를 호출한 결과를 모아 새로운 배열로 반환
    map(callback) { }

    // 배열의 각 요소에 대해 제공된 함수를 호출하여 누산기에 값을 축적
    reduce(callback, initValue) { }

    // 배열의 각 요소에 대해 predicate 결과가 true인 요소중 제일 첫번째 요소 1개만 반환
    // true 가 없으면 null 반환
    find(predicate) { }

    // 배열의 각 요소에 대해 predicate 결과가 true인 요소중 제일 첫번째 요소의 index반환
    // true 가 없으면 -1 반환
    findIndex(predicate) { }
}
