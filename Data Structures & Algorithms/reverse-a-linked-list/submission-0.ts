/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     
@param {ListNode} head
@return {ListNode}*/
reverseList(head: ListNode | null): ListNode {
    let previousHead:ListNode|null = null;
    let currentHead:ListNode|null = head;

        while(currentHead != null){
            let nextHead:ListNode|null = currentHead.next;

            currentHead.next = previousHead;
            previousHead = currentHead;
            currentHead = nextHead;
        }

        return previousHead;
    }
}
