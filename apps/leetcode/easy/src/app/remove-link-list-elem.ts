// 203. Remove Linked List Elements
// https://leetcode.com/problems/remove-linked-list-elements/
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * @description * Given a linked list and a value, remove all instances of that value in the linked list.
 * @description * Remove all elements from a linked list of integers that have value val.
 * @param head * ListNode
 * @param val * number
 * @returns * ListNode
 * @example
 * Input: 1->2->6->3->4->5->6, val = 6
 * Output: 1->2->3->4->5
 * @example
 * Input: head = [], val = 1
 * Output: []
 * @example
 * Input: head = [7,7,7,7], val = 7
 * Output: []
 * @constraints
 * - The number of nodes in the list is in the range [0, 104].
 * - 1 <= Node.val <= 50
 * - 0 <= val <= 50
 * - Time: O(n)
 * - Space: O(1)
 */

// export function removeLinkListElem() {
// }
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
export function removeElements(
  head: ListNode | null,
  val: number
): ListNode | null {
  let next: ListNode | null;
  ({ val, next } = head);

  console.log('\nremove-link-list-element.ts\n........\n\n', { val, next });
  if (next === null) {
    return null;
  } else {
    for (let i = 0; i < val; i += 1) {
      console.log({ i, val });
    }
    return head;
  }
}

/*
[1,2,6,3,4,5,6]
6
*/

/*
{
  val: 1,
  next: ListNode { val: 2, next: ListNode { val: 6, next: [ListNode] } }
}
object
{ i: 0, val: 1 }
{ i: 1, val: 1 }
{ i: 2, val: 1 }
{ i: 3, val: 1 }
{ i: 4, val: 1 }
{ i: 5, val: 1 }
{ i: 6, val: 1 }

const nextJSON = {
  val: 2,
  next: ListNode {
    val: 6, next: ListNode { val: 3, next: [ListNode] } }
}
object
{ i: 0, val: 1 }
{ i: 1, val: 1 }
{ i: 2, val: 1 }
{ i: 3, val: 1 }
{ i: 4, val: 1 }
{ i: 5, val: 1 }
{ i: 6, val: 1 }


*/
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * @description: head is an object of class ListNode
 * @description: val is a number
 * @description: return an object of class ListNode
 * @description: remove the node with value val
 * @description: if the node is the first node, return the next node
 * @description: if the node is the last node, return null
 * @description: if the node is in the middle, return the next node
 * */
