import { findNumbers, findNumOneLiner } from './find-num-even-digit';

describe('findNumbers', () => {
  it('should return 2', () => {
    expect(findNumbers([12, 345, 2, 6, 7896])).toBe(2);
  });

  it('should return 3', () => {
    expect(findNumbers([12, 345, 2, 6, 7896, 1234])).toBe(3);
  });

  it('should return 4', () => {
    expect(findNumbers([12, 345, 2, 6, 7896, 1234, 1234])).toBe(4);
  });
});

describe('findNumOneLiner', () => {
  it('should return 2', () => {
    expect(findNumOneLiner([12, 345, 2, 6, 7896])).toBe(2);
  });

  it('should return 3', () => {
    expect(findNumOneLiner([12, 345, 2, 6, 7896, 1234])).toBe(3);
  });

  it('should return 4', () => {
    expect(findNumOneLiner([12, 345, 2, 6, 7896, 1234, 1234])).toBe(4);
  });
});
