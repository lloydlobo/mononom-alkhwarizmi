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

/** removeElements(head, val)
 * Remove all elements from a linked list of integers that have value val.
 * @param head * ListNode
 * @param val * number
 * @returns ListNode | null
 * @description * Given a linked list and a value, remove all instances of that value in the linked list.
 * Remove all elements from a linked list of integers that have value val.
 * @performance Runtime: 92 ms, faster than 87.27% of TypeScript online submissions for Remove Linked List Elements.
 * @Memory Memory Usage: 47.4 MB, less than 76.03% of TypeScript online submissions for Remove Linked List Elements.
 * @example * Input: 1->2->6->3->4->5->6, val = 6 => Output: 1->2->3->4->5
 */
export function removeElements(
  head: ListNode | null,
  val: number
): ListNode | null {
  while (head && head.val == val) head = head.next;
  let curr = head;
  while (curr && curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}
