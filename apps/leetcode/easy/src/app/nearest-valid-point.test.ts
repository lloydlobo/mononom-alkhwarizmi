import { nearestValidPoint } from './nearest-valid-point';

describe('nearestValidPoint', () => {
  it('should return 2', () => {
    const x = 3;
    const y = 4;
    const points = [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4],]; // prettier-ignore
    const result = nearestValidPoint(x, y, points);
    expect(result).toBe(2);
  });

  it('should return 1', () => {
    const x = 1;
    const y = 1;
    const points = [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4],]; // prettier-ignore
    const result = nearestValidPoint(x, y, points);
    expect(result).toBe(0);
  });

  //  A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.
  it('should return -1 when there are no valid points', () => {
    // const currentLocation = [3, 4];
    const points = [[2, 3]];
    const result = nearestValidPoint(3, 4, points);
    expect(result).toBe(-1);
  });

  it('should return 0 when the result is the same location as currentLocation ', () => {
    let currentLocation = [3, 4];
    let points = [[3, 4]];
    let result = nearestValidPoint(
      currentLocation[0],
      currentLocation[1],
      points
    );
    expect(result).toBe(0);

    currentLocation = [6, 19];
    points = [[6, 19]];
    result = nearestValidPoint(currentLocation[0], currentLocation[1], points);
    expect(result).toBe(0);

    currentLocation = [5, 1];
    points = [ [1, 1], [6, 2], [1, 5], [3, 1] ]; // prettier-ignore
    result = nearestValidPoint(currentLocation[0], currentLocation[1], points);
    expect(result).toBe(3);
  });
});
