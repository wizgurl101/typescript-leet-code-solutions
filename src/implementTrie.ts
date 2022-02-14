/* 
Trie Data Structure

What is it: https://www.youtube.com/watch?v=zIjfhVPRZCg

Leetcode: https://leetcode.com/problems/implement-trie-prefix-tree/
*/
class TireNode {
  children: any;
  endOfWord: boolean;

  constructor() {
    this.children = {}
    this.endOfWord = false
  }
}

class Trie {
  root: TireNode;

  constructor() {
    this.root = new TireNode();
  }

  insert(word: string): void {
    let currentNode = this.root

    for (let character of word) {
      if (!currentNode.children[character]) {
        currentNode.children[character] = new TireNode()
      }

      currentNode = currentNode.children[character]
    }

    currentNode.endOfWord = true
  }

  search(word: string): boolean {
    let currentNode = this.root

    for (let character of word) {
      if(!currentNode.children[character]) {
        return false
      }

      currentNode = currentNode.children[character]
    }

    return currentNode.endOfWord
  }

  startsWith(prefix: string): boolean {
    let currentNode = this.root

    for (let character of prefix) {
      if(!currentNode.children[character])
      return false

      currentNode = currentNode.children[character]
    } 

    return true
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
