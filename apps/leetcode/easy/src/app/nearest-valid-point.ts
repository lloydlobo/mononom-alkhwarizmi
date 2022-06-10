/** 1779. Find Nearest Point That Has the Same X or Y Coordinate
 *
 * You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y).  * You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi).  * A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.  * Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location.  * If there are multiple, return the valid point with the smallest index. If there are no valid points, return -1.
 * The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2).
 * @title - 1779. Find Nearest Point That Has the Same X or Y Coordinate
 * @source - https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/
 * @difficulty - easy
 * # Example
 * - Input: x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]] * - Output: 2
 * - Explanation:
 *    - Of all the points, only [3,1], [2,4] and [4,4] are valid.
 *    - Of the valid points, [2,4] and [4,4] have the smallest Manhattan distance from your current location, with a distance of 1. [2,4] has the smallest index, so return 2.
 */

/** Details of the solution:
 * Runtime: 111 ms, faster than 74.65% of TypeScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
 * Memory Usage: 51.2 MB, less than 59.15% of TypeScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
 */
/** nearestValidPoint
 *
 * Memory Usage: 51.2 MB, less than 59.15% of TypeScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
 * Runtime: 111 ms, faster than 74.65% of TypeScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
 * Constraints: 1 <= points.length <= 104 | points[i].length == 2 | 1 <= x, y, ai, bi <= 104
 * @param x
 * @param y
 * @param points
 * @returns number
 * @timeComplexity - O(n)
 * @spaceComplexity - O(n)
 * @applicable - to all
 * D - Distance = Number.MAX_VALUE = 2147483647
 * index - Index = -1
 * n - Number of points = points.length
 * manD - Manhattan distance = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1])
 */
export function nearestValidPoint(
  x: number,
  y: number,
  points: number[][]
): number {
  const n = points.length;
  let index = -1;
  let D = Number.MAX_VALUE;
  for (let i = 0; i < n; i += 1) {
    if (points[i][0] === x || points[i][1] === y) {
      const manD = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
      if (manD < D) {
        index = i;
        D = manD;
      }
    }
  }
  return index;
}

/* ARCHIVE
....###....########...######..##.....##.####.##.....##.########
...##.##...##.....##.##....##.##.....##..##..##.....##.##......
..##...##..##.....##.##.......##.....##..##..##.....##.##......
.##.....##.########..##.......#########..##..##.....##.######..
.#########.##...##...##.......##.....##..##...##...##..##......
.##.....##.##....##..##....##.##.....##..##....##.##...##......
.##.....##.##.....##..######..##.....##.####....###....########
 */

// region:     --- efficient solution ---

/* Runtime: 1073 ms
Memory Usage: 81.6 MB */
// export function nearestValidPoint(
//   x: number,
//   y: number,
//   points: number[][]
// ): number {
//   const n = points.length;
//   let index = -1;
//   let maxDistance = Number.MAX_VALUE;

//   for (let i = 0; i < n; i += 1) {
//     if (points[i][0] === x || points[i][1] === y) {
//       const manhattanDistance =
//         Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
//       if (manhattanDistance < maxDistance) {
//         index = i;
//         maxDistance = manhattanDistance;
//       }
//     }
//   }
//   return index;
// }

// endregion:  --- efficient solution ---

// region:      --- inefficient ---

// export function nearestValidPoint(
//   x: number,
//   y: number,
//   points: number[][]
// ): number {
//   // console.clear();
//   const validityChecker = invalidPointChecker(x, y, points);

//   if (!validityChecker) return -1;
//   // if (validCheckerSamePoints(x, y, points)) return 0;
//   return getManhattanDistance(x, y, points);
// }

// export function constraintsPoints(points: number[][], i: number) {
//   const pLesserEquals104 = points[i][0] <= 104 && points[i][1] <= 104;
//   const pGreaterEquals1 = points[i][0] >= 1 && points[i][1] >= 1;
//   return { pGreaterEquals1, pLesserEquals104 };
// }

// export function constraintsX1Y1(x1: number, y1: number, points: number[][]) {
//   const greaterEquals1 = x1 >= 1 && y1 >= 1 && points.length >= 1;
//   const lesserEquals104 = x1 <= 104 && y1 <= 104 && points.length <= 104;
//   return { greaterEquals1, lesserEquals104 };
// }

// export function getManhattanDistance(
//   x1: number,
//   y1: number,
//   points: number[][]
// ) {
//   const distanceArray = [];
//   const { greaterEquals1, lesserEquals104 } = constraintsX1Y1(x1, y1, points);
//   const pointsCoordsXYArray = [];
//   if (greaterEquals1 && lesserEquals104) {
//     for (let i = 0; i < points.length; i += 1) {
//       const { pGreaterEquals1, pLesserEquals104 } = constraintsPoints(points, i); // prettier-ignore

//       if (points[i].length === 2 && pGreaterEquals1 && pLesserEquals104) {
//         pointsCoordsXYArray.push([points[i][0], points[i][1]]);
//         const manhattanDistance =
//           Math.abs(x1 - points[i][0]) + Math.abs(y1 - points[i][1]);
//         distanceArray.push(manhattanDistance);
//       }
//     }
//   }
//   console.log({ distanceArray });
//   const sortDistanceArray = distanceArray.sort();
//   const sortDistanceArray0 = sortDistanceArray[0];
//   console.log({ sortDistanceArray });
//   console.log('🚀 ~ sortDistanceArray0', sortDistanceArray0);
//   if (sortDistanceArray0 === 0) {
//     return 0;
//   } else {
//     return nearestValidPointPlusIndex(distanceArray, pointsCoordsXYArray);
//   }
// }

// //  A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.
// export function nearestValidPointPlusIndex(
//   distanceArray: number[],
//   pointsCoordsXYArray: number[]
// ) {
//   const pointsIndexes = [];
//   const distanceCloneArray = [];

//   distanceArray.forEach((val, index): number => {
//     pointsIndexes.push(index);
//     distanceCloneArray.push(val);
//     return val;
//   });

//   // now compare it with x from currentLocation, x = 5
//   const arrayItemIndexXAxis = [];
//   for (let i = 0; i < distanceCloneArray.length; i += 1) {
//     const item = distanceCloneArray[i];
//     const index = pointsCoordsXYArray[i];
//     arrayItemIndexXAxis.push([item, index]);
//   }

//   pointsCoordsXYArray = arrayItemIndexXAxis;
//   console.log('🚀 ~ arrayItemIndexXAxis', arrayItemIndexXAxis);

//   const sortConcatArray = arrayItemIndexXAxis.sort();
//   const nearestPoint = sortConcatArray[0][1];
//   console.log({ nearestPoint });
//   // if its a negative distance the return the higher index of duplicate values
//   // return sortConcatArray[0][1];
//   return nearestPoint[0];
// }

// /*
// Input: x = 3, y = 4, points = [[2,3]]
// Output: -1
// Explanation: There are no valid points.
// */
// export function invalidPointChecker(x: number, y: number, points: number[][]) {
//   const invalidPoints = filterPointsIfItIncludesX1OrY1(x, y, points);
//   if (invalidPoints === true) {
//     return false;
//   } else {
//     return true;
//   }
// }

// export function filterPointsIfItIncludesX1OrY1(
//   x1: number,
//   y1: number,
//   points: number[][]
// ) {
//   const filterPoints = [...points].filter(
//     (point) => point[0] === x1 || point[1] === y1
//   );
//   if (filterPoints.length === 0) {
//     return true;
//   } else {
//     return filterPoints;
//   }
// }

// endregion:      --- inefficient ---
