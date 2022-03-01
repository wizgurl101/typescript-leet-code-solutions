/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// https://leetcode.com/problems/linked-list-cycle/
// Neetcode: https://www.youtube.com/watch?v=gBTe7lFR3vc

// Floyd Cycle Detection
 class ListNode {
     val: number
     next: ListNode | null

     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

function hasCycle(head: ListNode | null): boolean {
    let slow = head, fast = head

    while(fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow!.next

        if(slow === fast) {
            return true
        }

    }

    return false
};