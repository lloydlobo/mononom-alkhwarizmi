/** 1779. Find Nearest Point That Has the Same X or Y Coordinate
 *
 * You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y).
 * You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi).
 * A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.
 * Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location.
 * If there are multiple, return the valid point with the smallest index. If there are no valid points, return -1.
 * The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2).
 * @title - 1779. Find Nearest Point That Has the Same X or Y Coordinate
 * @source - https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/
 * @difficulty - easy
 * # Example
 * - Input: x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]]
 * - Output: 2
 * - Explanation:
 *    - Of all the points, only [3,1], [2,4] and [4,4] are valid.
 *    - Of the valid points, [2,4] and [4,4] have the smallest Manhattan distance from your current location, with a distance of 1. [2,4] has the smallest index, so return 2.
 */

/** nearestValidPoint
 *
 * @param x
 * @param y
 * @param points
 * @returns
 */
/* Constraints: 1 <= points.length <= 104 | points[i].length == 2 | 1 <= x, y, ai, bi <= 104 */
export function nearestValidPoint(
  x: number,
  y: number,
  points: number[][]
): number {
  const shortestDistance = getManhattanDistance(x, y, points);
  return shortestDistance;
}

export function constraintsPoints(points: number[][], i: number) {
  const pLesserEquals104 = points[i][0] <= 104 && points[i][1] <= 104;
  const pGreaterEquals1 = points[i][0] >= 1 && points[i][1] >= 1;
  return { pGreaterEquals1, pLesserEquals104 };
}

export function constraintsX1Y1(x1: number, y1: number, points: number[][]) {
  const greaterEquals1 = x1 >= 1 && y1 >= 1 && points.length >= 1;
  const lesserEquals104 = x1 <= 104 && y1 <= 104 && points.length <= 104;
  return { greaterEquals1, lesserEquals104 };
}

export function getManhattanDistance(
  x1: number,
  y1: number,
  points: number[][]
) {
  const distanceArray = [];
  const { greaterEquals1, lesserEquals104 } = constraintsX1Y1(x1, y1, points);

  if (greaterEquals1 && lesserEquals104) {
    for (let i = 0; i < points.length; i += 1) {
      const { pGreaterEquals1, pLesserEquals104 } = constraintsPoints( points, i); // prettier-ignore
      if (points[i].length === 2 && pGreaterEquals1 && pLesserEquals104) {
        const manhattanDistance =
          Math.abs(x1 - points[i][0]) + Math.abs(y1 - points[i][1]);
        distanceArray.push(manhattanDistance);
      }
    }
  }
  return nearestValidPointPlusIndex(distanceArray);
}

export function nearestValidPointPlusIndex(arrayDistance: number[]) {
  const pointsIndexes = [];
  const distanceCloneArray = [];
  arrayDistance.forEach((val, index): number => {
    pointsIndexes.push(index);
    distanceCloneArray.push(val);
    return val;
  });

  const concatPointIndexArray = distanceCloneArray.map((item, i) => [
    item,
    pointsIndexes[i],
  ]);
  const sortConcatArray = concatPointIndexArray.sort();

  return sortConcatArray[0][1];
}
