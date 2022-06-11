import { removeElements, ListNode } from './remove-link-list-elem';

describe('removeLinkListElem', () => {
  it('should return null', () => {
    expect(removeElements(null, 1)).toBeNull();
  });
});
