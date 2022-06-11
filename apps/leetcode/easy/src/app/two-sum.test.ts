import { twoSum } from './two-sum';

describe('twoSum', () => {
  it('should return [0, 1]', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('should return [1, 2]', () => {
    expect(twoSum([2, 7, 11, 15], 18)).toEqual([1, 2]);
  });

  it('should return [1, 3]', () => {
    expect(twoSum([2, 7, 11, 15], 22)).toEqual([1, 3]);
  });
}); // end describe
