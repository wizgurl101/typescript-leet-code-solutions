class LRUNode {
  key: number;
  val: number;
  next: LRUNode | null;
  previous: LRUNode | null;

  constructor(key: number, val: number) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class LRUCache {
  capacity: number;
  cache: any;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = {};
  }

  get(key: number): number {}

  put(key: number, value: number): void {}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
