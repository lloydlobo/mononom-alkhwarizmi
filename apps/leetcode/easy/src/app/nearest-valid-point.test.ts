import {
  nearestValidPoint,
  nearestValidPointPlusIndex,
  getManhattanDistance,
  constraintsX1Y1,
  constraintsPoints,
} from './nearest-valid-point';

describe('nearestValidPoint', () => {
  it('should return 2', () => {
    const x = 3;
    const y = 4;
    const points = [ [1, 2], [3, 1], [2, 4], [2, 3], [4, 4], ]; // prettier-ignore
    const result = nearestValidPoint(x, y, points);
    expect(result).toBe(2);
  });

  it('should return 1', () => {
    const x = 1;
    const y = 1;
    const points = [ [1, 2], [3, 1], [2, 4], [2, 3], [4, 4], ]; // prettier-ignore
    const result = nearestValidPoint(x, y, points);
    expect(result).toBe(0);
  });
});

describe('getManhattanDistance', () => {
  it('should return 2', () => {
    const x1 = 3;
    const y1 = 4;
    const points = [ [1, 2], [3, 1], [2, 4], [2, 3], [4, 4], ]; // prettier-ignore
    const result = getManhattanDistance(x1, y1, points);
    expect(result).toBe(2);
  });

  it('should return 1', () => {
    const x1 = 1;
    const y1 = 1;
    const points = [ [1, 2], [3, 1], [2, 4], [2, 3], [4, 4], ]; // prettier-ignore
    const result = getManhattanDistance(x1, y1, points);
    expect(result).toBe(0);
  });
});

describe('nearestValidPointPlusIndex', () => {
  it('should return 2', () => {
    const arrayDistance = [2, 1, 3, 4];
    const result = nearestValidPointPlusIndex(arrayDistance);
    expect(result).toBe(1);
  });

  it('should return 1', () => {
    const arrayDistance = [1, 2, 3, 4];
    const result = nearestValidPointPlusIndex(arrayDistance);
    expect(result).toBe(0);
  });
});

describe('constraintsX1Y1', () => {
  it('should return true', () => {
    const x1 = 1;
    const y1 = 1;
    const points = [ [1, 2], [3, 1], [2, 4], [2, 3], [4, 4], ]; // prettier-ignore
    const result = constraintsX1Y1(x1, y1, points);
    expect(result).toEqual({ greaterEquals1: true, lesserEquals104: true });
  });

  it('should return false', () => {
    const x1 = 0;
    const y1 = 1;
    // create an array of length greater than 104
    const points = new Array(105).fill(0).map((_, i) => [i, i]);
    const result = constraintsX1Y1(x1, y1, points);
    expect(result).toEqual({ greaterEquals1: false, lesserEquals104: false });
  });
});

describe('constraintsPoints', () => {
  it('should return true', () => {
    const points = [ [1, 2], [3, 1], [2, 4], [2, 3], [4, 4], ]; // prettier-ignore
    for (let i = 0; i < points.length; i++) {
      const result = constraintsPoints(points, i);
      expect(result).toEqual({ pGreaterEquals1: true, pLesserEquals104: true });
    }
  });

  it('should return false', () => {
    const points = new Array(105).fill(0).map((_, i) => [-i - 105, i + 105]);
    for (let i = 0; i < points.length; i++) {
      const result = constraintsPoints(points, i);
      expect(result).toEqual({
        pGreaterEquals1: false,
        pLesserEquals104: false,
      });
    }
  });
});
