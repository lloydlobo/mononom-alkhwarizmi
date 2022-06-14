import { climbStairs } from './fib-climbing-stairs';

describe('climbStairs', () => {
  it('should return 1 for n = 1', () => {
    expect(climbStairs(1)).toBe(1);
  });

  it('should return 2 for n = 2', () => {
    expect(climbStairs(2)).toBe(2);
  });

  it('should return 3 for n = 3', () => {
    expect(climbStairs(3)).toBe(3);
  });

  it('should return 5 for n = 4', () => {
    expect(climbStairs(4)).toBe(5);
  });
});

describe('climbStairs', () => {
  // prettier-ignore
  const arr = [{ n: 1, expected: 1 }, { n: 2, expected: 2 }, { n: 3, expected: 3 }, { n: 4, expected: 5 }, { n: 5, expected: 8 }, { n: 6, expected: 13 }, { n: 7, expected: 21 }, { n: 8, expected: 34 }, { n: 9, expected: 55 }, { n: 10, expected: 89 }, { n: 11, expected: 144 }, { n: 12, expected: 233 }, { n: 13, expected: 377 }, { n: 14, expected: 610 }, { n: 15, expected: 987 }, { n: 16, expected: 1597 }, { n: 17, expected: 2584 }, { n: 18, expected: 4181 }, { n: 19, expected: 6765 }, { n: 20, expected: 10946 }, { n: 21, expected: 17711 }, { n: 22, expected: 28657 }, { n: 23, expected: 46368 }, { n: 24, expected: 75025 }, { n: 25, expected: 121393 }, { n: 26, expected: 196418 }, { n: 27, expected: 317811 }, { n: 28, expected: 514229 }, { n: 29, expected: 832040 }, { n: 30, expected: 1346269 }, { n: 31, expected: 2178309 }, { n: 32, expected: 3524578 }, { n: 33, expected: 5702887 }, { n: 34, expected: 9227465 }, { n: 35, expected: 14930352 }, { n: 36, expected: 24157817 }, { n: 37, expected: 39088169 }, { n: 38, expected: 63245986 }, { n: 39, expected: 102334155 }, { n: 40, expected: 165580141 }, { n: 41, expected: 267914296 }, { n: 42, expected: 433494437 }, { n: 43, expected: 701408733 }, { n: 44, expected: 1134903170 }, { n: 45, expected: 1836311903 },];

  arr.forEach(({ n, expected }) => {
    it(`should return ${expected} for n = ${n}`, () => {
      expect(climbStairs(n)).toBe(expected);
    });
  });

  it('should return 1346269 for n = 35', () => {
    expect(climbStairs(35)).toBe(14930352);
  });
});
