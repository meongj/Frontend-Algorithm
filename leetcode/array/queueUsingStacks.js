var MyQueue = function () {
  this.inputStack = [];
  this.outputStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inputStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  //outputStack 이 비어있을때만 모두 옮긴다
  // input -> output 옮긴다
  if (this.outputStack.length === 0) {
    while (this.inputStack.length > 0) {
      this.outputStack.push(this.inputStack.pop());
    }
  }
    return this.outputStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  //outputStack 이 비어있을때만 모두 옮긴다
  // input -> output 옮긴다
  if (this.outputStack.length === 0) {
    while (this.inputStack.length > 0) {
      this.outputStack.push(this.inputStack.pop());
    }
  }

    return this.outputStack[this.outputStack.length - 1];
};

/**
 * 큐가 비어 있는 지 확인
 * - 두개의 스택 모두 비어 있다면 큐도 비어있는 것임
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.inputStack.length === 0 && this.outputStack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]

// Explanation
let myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
console.log(myQueue);
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue);

console.log(myQueue.peek()); // return 1
console.log(myQueue.pop()); // return 1, queue is [2]
console.log(myQueue.empty()); // return false
