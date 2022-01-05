// Refactor to use generics
class PriorityQueue {
  values: PQNode[];

  constructor() {
    this.values = [];
  }

  enqueue(value: number, priority: number) {
    let newNode = new PQNode(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentElement = this.values[parentIndex];

      if (element.priority <= parentElement.priority) {
        break;
      }

      this.values[parentIndex] = element;
      this.values[index] = parentElement;
      index = parentIndex;
    }
  }

  dequeue() {
    const maxElement = this.values[0];

    // lastElement becomes the new parent then
    // it sink down to it proper location
    if (this.values.length > 0) {
      const lastElement = this.values.pop() as PQNode;
      this.values[0] = lastElement;
      this.sinkDown();
    }

    return maxElement;
  }

  sinkDown() {
    let index = 0;

    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];

        if (leftChild.priority > element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];

        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null &&
            leftChild &&
            rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

class PQNode {
  value: number;
  priority: number;

  constructor(value: number, priority: number) {
    this.value = value;
    this.priority = priority;
  }
}
