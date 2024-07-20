
class Stack {
    constructor() {
        this.items = [];
    }

    // 요소를 스택에 추가
    push(element) {
        this.items.push(element);
    }

    // 스택에서 요소를 제거
    // [1,2,3] -> [1,2] return 3
    // O(1)시간복잡도
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }
    
    // 스택의 최상단 요소를 확인
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // 스택이 비어있는지 확인
    isEmpty() {
        return this.items.length === 0;
    }

    // 스택의 요소 수를 확인
    size() {
        return this.items.length;
    }

    // 스택을 비움
    clear() {
        this.items = [];
    }

    // 스택의 모든 요소를 출력
    print() {
        console.log(this.items.toString());
    }
}

// 사용 예시
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); // 1,2,3
console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
stack.print(); // 1,2

class Queue {
    constructor() {
        this.items = [];
    }

    // 큐에 요소를 추가
    enqueue(element) {
        this.items.push(element);
    }

    // 큐에서 요소를 제거
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // 큐의 첫 번째 요소를 확인
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // 큐가 비어있는지 확인
    isEmpty() {
        return this.items.length === 0;
    }

    // 큐의 요소 수를 확인
    size() {
        return this.items.length;
    }

    // 큐를 비움
    clear() {
        this.items = [];
    }

    // 큐의 모든 요소를 출력
    print() {
        console.log(this.items.toString());
    }
}

// 사용 예시
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // 1,2,3
console.log(queue.dequeue()); // 1
console.log(queue.front()); // 2
queue.print(); // 2,3
