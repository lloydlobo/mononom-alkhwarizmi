// region:      --- imports ---

import { twoSum } from './app';

// import { nearestValidPoint } from './app';

// endregion:   --- imports ---

// region:      --- main ---

function main() {
  // findNearestValidPoint();
  console.log('twoSum', twoSum([2, 7, 11, 15], 9)); // [0, 1]
  console.log('twoSum', twoSum([3, 2, 4], 6)); // [1, 2]
  console.log('twoSum', twoSum([3, 3], 6)); // [0, 1]
  console.log('twoSum', twoSum([3, 2, 4, 8, 12, 32], 20)); // [3, 4]
  console.log('twoSum', twoSum([3, 2, 4, 8, 12, 32], 34)); // [1, 5]

  console.log('twoSumRecursive', twoSumRecursive([2, 7, 11, 15], 9)); // [0, 1]
}
main();

// endregion:   --- main ---

// cspell:ignore twoSumRecursive nums
function twoSumRecursive(nums: number[], target: number): number[] {
  const result = [];
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      result.push(map.get(diff));
      result.push(i);
    }
    map.set(nums[i], i);
  }
  return result;
}

// function findNearestValidPoint() {
//   let currentLocation = [3, 4], points = [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4],]; // prettier-ignore
//   console.log('2', nearestValidPoint(currentLocation[0], currentLocation[1], points)); // prettier-ignore
//   (currentLocation = [3, 4]), (points = [[2, 3]]); // prettier-ignore
//   console.log('-1', nearestValidPoint(currentLocation[0], currentLocation[1], points)); // prettier-ignore
//   currentLocation = [5, 1], points = [[1, 1], [6, 2], [1, 5], [3, 1]]; // prettier-ignore
//   console.log('3', nearestValidPoint(currentLocation[0], currentLocation[1], points)); // prettier-ignore
//   (currentLocation = [3, 4]), (points = [[3, 4]]); // prettier-ignore
//   console.log('0', nearestValidPoint(currentLocation[0], currentLocation[1], points)); // prettier-ignore
//   currentLocation = [1, 1], points = [[1, 1], [1, 1]]; // prettier-ignore
//   console.log( '0', nearestValidPoint(currentLocation[0], currentLocation[1], points)); // prettier-ignore
// }
