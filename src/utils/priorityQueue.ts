/**
 * https://itnext.io/priority-queue-in-typescript-6ef23116901
 *
 * Using heap implementation
 */

interface PriorityQueue<T> {
  insert(item: T, priority: number): void;
  peek(): T;
  pop(): T;
  size(): number;
  isEmpty(): boolean;
}

interface NodePQ<T> {
  key: number;
  value: T;
}

// as a pure function
export const priorityQueue = <T>(): PriorityQueue<T> => {
  let heap: NodePQ<T>[] = [];

  const parent = (index: number) => Math.floor((index - 1) / 2);
  const left = (index: number) => 2 * index + 1;
  const right = (index: number) => 2 * index + 2;
  const hasLeft = (index: number) => left(index) < heap.length;
  const hasRight = (index: number) => right(index) < heap.length;

  const insertInHeap = (item: T, priority: number) => {
    heap.push({ key: priority, value: item });

    let i = heap.length - 1;
    while (i > 0) {
      const p = parent(i);
      if (heap[p].key < heap[i].key) break;
      const tmp = heap[i];
      heap[i] = heap[p];
      heap[p] = tmp;
      i = p;
    }
  };

  const swap = (a: number, b: number) => {
    const tmp = heap[a];
    heap[a] = heap[b];
    heap[b] = tmp;
  };

  const popFromHeap = (): T => {
    if (heap.length == 0) throw new Error("heap is empty");

    swap(0, heap.length - 1);
    const item = heap.pop();

    let current = 0;

    while (hasLeft(current)) {
      let smallerChild = left(current);
      if (
        hasRight(current) &&
        heap[right(current)].key < heap[left(current)].key
      )
        smallerChild = right(current);

      if (heap[smallerChild].key > heap[current].key) break;

      swap(current, smallerChild);
      current = smallerChild;
    }

    // error: TS complain that item.value maybe undefined
    // https://stackoverflow.com/questions/55068390/typescript-object-is-possibly-undefined/55068662
    // https://linguinecode.com/post/how-to-solve-typescript-possibly-undefined-value
    return item!.value;
  };

  return {
    insert: insertInHeap,
    isEmpty: () => heap.length == 0,
    peek: () => heap[0].value,
    pop: popFromHeap,
    size: () => heap.length,
  };
};
