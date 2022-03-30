/**
 * https://leetcode.com/problems/clone-graph/
 *
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

class Node {
      val: number
      neighbors: Node[]
      constructor(val?: number, neighbors?: Node[]) {
          this.val = (val===undefined ? 0 : val)
          this.neighbors = (neighbors===undefined ? [] : neighbors)
      }

function cloneGraph(node: Node | null): Node | null {
  function clone(node: Node | null, map: any): Node | null {
    if (!node) return null;

    if (map.has(node.val)) return map.get(node.val);

    let clone = new Node(node.val);

    map.set(node.val, clone);

    node.neighbors.forEach((n) => {
      clone.neighbors.push(clone(n));
    });

    return clone;
  }

  const map = new Map();
  return clone(node, map);
}

function cloneGraph1(node: Node | null) {
  const map = new Map();
  return clone(node);

  function clone(node: Node | null) {
    if (!node) return null;

    if (map.has(node.val)) return map.get(node.val);

    const newNode = { val: node.val, neighbors: [] };

    map.set(node.val, newNode);
    for (let n of node.neighbors) {
      newNode.neighbors.push(clone(n));
    }
    return newNode;
  }
}

// breath first search
function cloneGraph2(node: Node | null): Node | null {
  if (!node) return null;
  const hash: { [key: string]: Node } = {};

  let queue: Node[] = [node];
  const visited = new Set<number>();

  // Iteration to create all Nodes
  while (queue.length) {
    const { val, neighbors } = queue.shift()!;
    if (!visited.has(val)) {
      hash[val] = new Node(val);
      visited.add(val);
      queue.push(...neighbors);
    }
  }

  // Iteration to add all neighbors
  queue = [node];
  visited.clear();
  while (queue.length) {
    const { val, neighbors } = queue.shift()!;
    if (!visited.has(val)) {
      neighbors.forEach((neighbor) => {
        hash[val].neighbors.push(hash[neighbor.val]);
      });
      visited.add(val);
      queue.push(...neighbors);
    }
  }

  return hash[node.val];
}
