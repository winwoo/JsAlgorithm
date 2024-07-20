class FixedArray {
    #arrayLength;
    #array;
    // 필요한변수 추가 가능

    // #arrayLength와 #array를 알맞게 초기화
    // 생성자 파라미터에는 CustomArray의 고정된 길이를 받아야됨.
    // #array초기화 시 각요소의 값은 undefined
    constructor() { }

    //////////////////////////////
    //////      LEVEL 2      /////
    //////////////////////////////
    // 배열에서 특정 요소의 첫 번째 인덱스를 반환합니다. 요소가 없으면 -1을 반환합니다.
    indexOf() { }

    // 배열의 각 요소에 대해 predicate 결과가 true인 요소중 제일 첫번째 요소 1개만 반환
    // true 가 없으면 null 반환
    find(predicate) { }

    // 배열의 각 요소에 대해 predicate 결과가 true인 요소중 제일 첫번째 요소의 index반환
    // true 가 없으면 -1 반환
    findIndex(predicate) { }

    // 배열에 특정 요소가 포함되어 있는지 여부를 확인합니다. (true or false)
    includes() { }
}
